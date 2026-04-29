// equran.id API client — official Bimas Islam Kemenag RI prayer schedule.
// More accurate than Aladhan for users in Indonesia (matches schedules
// printed by mosques exactly). Falls through to caller's Aladhan fallback
// for users outside Indonesia or when the city can't be matched.
//
// API characteristics:
//   - 3 endpoints, all public, no key
//   - Returns a full month at once → cache one fetch per month per city
//   - No lat/lon support — needs province + city name. We map via Nominatim.
//   - No Hijri, no Qibla. Caller composes those from Aladhan separately.

import { reverseGeocode } from "./geo";

const BASE = "https://equran.id/api/v2";

// ─── Response shapes ──────────────────────────────────────

export type EquranDay = {
  tanggal: number;
  tanggal_lengkap: string; // "YYYY-MM-DD"
  hari: string;
  imsak: string;
  subuh: string;
  terbit: string;
  dhuha: string;
  dzuhur: string;
  ashar: string;
  maghrib: string;
  isya: string;
};

export type EquranSchedule = {
  provinsi: string;
  kabkota: string;
  bulan: number;
  tahun: number;
  bulan_nama: string;
  jadwal: EquranDay[];
};

/** Subset of Aladhan PrayerTimings shape, in the same key casing. */
export type EquranTimings = {
  Imsak: string;
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};

export type EquranTimingsResult = {
  timings: EquranTimings;
  provinsi: string;
  kabkota: string;
  date: EquranDay;
};

// ─── Cache keys ───────────────────────────────────────────
const KABKOTA_CACHE_KEY = (prov: string) => `sakinah:eqr:kab:${prov}`;
const SCHEDULE_CACHE_KEY = (kab: string, ym: string) =>
  `sakinah:eqr:sched:${kab}:${ym}`;

// ─── Province name normalisation ──────────────────────────
// Nominatim returns the province in `state`, but the value can be
// Indonesian, English, or sometimes prefixed with "Provinsi …".
// equran.id expects exactly one of 34 fixed strings.

const PROVINSI_MAP: Record<string, string> = {
  aceh: "Aceh",
  bali: "Bali",
  banten: "Banten",
  bengkulu: "Bengkulu",
  "daerah istimewa yogyakarta": "D.I. Yogyakarta",
  "di yogyakarta": "D.I. Yogyakarta",
  "diy": "D.I. Yogyakarta",
  yogyakarta: "D.I. Yogyakarta",
  "special region of yogyakarta": "D.I. Yogyakarta",
  "daerah khusus ibukota jakarta": "DKI Jakarta",
  "daerah khusus jakarta": "DKI Jakarta",
  "dki jakarta": "DKI Jakarta",
  jakarta: "DKI Jakarta",
  "jakarta raya": "DKI Jakarta",
  gorontalo: "Gorontalo",
  jambi: "Jambi",
  "jawa barat": "Jawa Barat",
  "west java": "Jawa Barat",
  "jawa tengah": "Jawa Tengah",
  "central java": "Jawa Tengah",
  "jawa timur": "Jawa Timur",
  "east java": "Jawa Timur",
  "kalimantan barat": "Kalimantan Barat",
  "west kalimantan": "Kalimantan Barat",
  "kalimantan selatan": "Kalimantan Selatan",
  "south kalimantan": "Kalimantan Selatan",
  "kalimantan tengah": "Kalimantan Tengah",
  "central kalimantan": "Kalimantan Tengah",
  "kalimantan timur": "Kalimantan Timur",
  "east kalimantan": "Kalimantan Timur",
  "kalimantan utara": "Kalimantan Utara",
  "north kalimantan": "Kalimantan Utara",
  "kepulauan bangka belitung": "Kepulauan Bangka Belitung",
  "bangka belitung islands": "Kepulauan Bangka Belitung",
  "bangka belitung": "Kepulauan Bangka Belitung",
  "kepulauan riau": "Kepulauan Riau",
  "riau islands": "Kepulauan Riau",
  lampung: "Lampung",
  maluku: "Maluku",
  "maluku utara": "Maluku Utara",
  "north maluku": "Maluku Utara",
  "nusa tenggara barat": "Nusa Tenggara Barat",
  "west nusa tenggara": "Nusa Tenggara Barat",
  ntb: "Nusa Tenggara Barat",
  "nusa tenggara timur": "Nusa Tenggara Timur",
  "east nusa tenggara": "Nusa Tenggara Timur",
  ntt: "Nusa Tenggara Timur",
  papua: "Papua",
  "papua barat": "Papua Barat",
  "west papua": "Papua Barat",
  riau: "Riau",
  "sulawesi barat": "Sulawesi Barat",
  "west sulawesi": "Sulawesi Barat",
  "sulawesi selatan": "Sulawesi Selatan",
  "south sulawesi": "Sulawesi Selatan",
  "sulawesi tengah": "Sulawesi Tengah",
  "central sulawesi": "Sulawesi Tengah",
  "sulawesi tenggara": "Sulawesi Tenggara",
  "southeast sulawesi": "Sulawesi Tenggara",
  "sulawesi utara": "Sulawesi Utara",
  "north sulawesi": "Sulawesi Utara",
  "sumatera barat": "Sumatera Barat",
  "west sumatra": "Sumatera Barat",
  "sumatera selatan": "Sumatera Selatan",
  "south sumatra": "Sumatera Selatan",
  "sumatera utara": "Sumatera Utara",
  "north sumatra": "Sumatera Utara",
};

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/\bprovinsi\b/g, "")
    .replace(/\bkab(\.|upaten)?\b/g, "")
    .replace(/\bkota\b/g, "")
    .replace(/\bcity\b/g, "")
    .replace(/\bregency\b/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchProvinsi(state: string | undefined): string | null {
  if (!state) return null;
  return PROVINSI_MAP[normalize(state)] ?? null;
}

// ─── kabkota lookup ──────────────────────────────────────

async function getKabkotaList(provinsi: string): Promise<string[] | null> {
  if (typeof window !== "undefined") {
    const cached = window.localStorage.getItem(KABKOTA_CACHE_KEY(provinsi));
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed)) return parsed;
      } catch {
        // refetch
      }
    }
  }
  try {
    const res = await fetch(`${BASE}/shalat/kabkota`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ provinsi }),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { data?: string[] };
    if (!Array.isArray(data.data)) return null;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        KABKOTA_CACHE_KEY(provinsi),
        JSON.stringify(data.data),
      );
    }
    return data.data;
  } catch {
    return null;
  }
}

/**
 * Resolve a free-text city name (from Nominatim) to one of the official
 * kabkota strings used by equran.id. Prefers `Kota X` over `Kab. X` since
 * urban geocodes most often refer to the city, then falls back to fuzzy
 * containment.
 */
function findBestKabkota(
  city: string | undefined,
  list: string[],
): string | null {
  if (!city) return null;
  const cityNorm = normalize(city);
  if (!cityNorm) return null;

  // 1. Exact match preferring Kota over Kab.
  for (const prefix of ["Kota ", "Kab. "]) {
    for (const k of list) {
      if (k.startsWith(prefix) && normalize(k) === cityNorm) return k;
    }
  }
  // 2. Containment, again Kota first.
  for (const prefix of ["Kota ", "Kab. "]) {
    for (const k of list) {
      if (!k.startsWith(prefix)) continue;
      const kNorm = normalize(k);
      if (kNorm === cityNorm) return k;
      if (kNorm.includes(cityNorm) || cityNorm.includes(kNorm)) return k;
    }
  }
  return null;
}

// ─── Monthly schedule fetch + cache ───────────────────────

async function fetchMonthSchedule(
  provinsi: string,
  kabkota: string,
  bulan: number,
  tahun: number,
): Promise<EquranSchedule | null> {
  const ym = `${tahun}-${String(bulan).padStart(2, "0")}`;
  if (typeof window !== "undefined") {
    const cached = window.localStorage.getItem(
      SCHEDULE_CACHE_KEY(kabkota, ym),
    );
    if (cached) {
      try {
        return JSON.parse(cached) as EquranSchedule;
      } catch {
        // refetch
      }
    }
  }
  try {
    const res = await fetch(`${BASE}/shalat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ provinsi, kabkota, bulan, tahun }),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { data?: EquranSchedule };
    if (!json.data?.jadwal?.length) return null;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        SCHEDULE_CACHE_KEY(kabkota, ym),
        JSON.stringify(json.data),
      );
    }
    return json.data;
  } catch {
    return null;
  }
}

function dayToTimings(day: EquranDay): EquranTimings {
  return {
    Imsak: day.imsak,
    Fajr: day.subuh,
    Sunrise: day.terbit,
    Dhuhr: day.dzuhur,
    Asr: day.ashar,
    Maghrib: day.maghrib,
    Isha: day.isya,
  };
}

// ─── Public entry point ───────────────────────────────────

/**
 * Returns prayer times from equran.id for the given coords + date, or
 * `null` if any step in the chain (geocode → province match → kabkota
 * match → API) doesn't succeed. The caller is responsible for falling
 * back to a global source like Aladhan.
 */
export async function getEquranTimings(
  lat: number,
  lon: number,
  date: Date = new Date(),
): Promise<EquranTimingsResult | null> {
  const geo = await reverseGeocode(lat, lon);
  if (!geo) return null;

  // Country gate — equran.id only covers Indonesia.
  const country = geo.country?.toLowerCase() ?? "";
  if (country && !country.includes("indonesia")) return null;

  const provinsi = matchProvinsi(geo.state);
  if (!provinsi) return null;

  const list = await getKabkotaList(provinsi);
  if (!list) return null;

  const kabkota = findBestKabkota(geo.city, list);
  if (!kabkota) return null;

  const bulan = date.getMonth() + 1;
  const tahun = date.getFullYear();
  const sched = await fetchMonthSchedule(provinsi, kabkota, bulan, tahun);
  if (!sched) return null;

  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(bulan).padStart(2, "0");
  const target = `${tahun}-${mm}-${dd}`;
  const day = sched.jadwal.find((d) => d.tanggal_lengkap === target);
  if (!day) return null;

  return {
    timings: dayToTimings(day),
    provinsi,
    kabkota,
    date: day,
  };
}
