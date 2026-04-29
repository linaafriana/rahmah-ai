// Prayer-times client.
//
// Two backends, dispatched per location:
//   • equran.id — official Bimas Islam Kemenag RI data. Used when the
//     user is in Indonesia and we can map their geocoded city to one
//     of the 517 supported kabkota. Times match printed mosque schedules.
//   • Aladhan   — global fallback (any lat/lon). Also the source of
//     Hijri date + Qibla bearing regardless of which backend serves
//     prayer times, so we always co-call it for that metadata.
//
// Both APIs are public and require no key.

import { getEquranTimings } from "./equran";

const BASE = "https://api.aladhan.com/v1";

export type PrayerTimings = {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
};

export type TimingsSource = {
  /** Backend that produced the prayer times currently in `timings`. */
  kind: "equran" | "aladhan";
  /** Short human label for badges. */
  label: string;
  /** Only set when kind === 'equran'. */
  kabkota?: string;
  /** Only set when kind === 'equran'. */
  provinsi?: string;
};

export type TimingsResponse = {
  date: {
    readable: string;
    gregorian: { date: string };
    hijri: {
      date: string;
      month: { en: string; ar: string };
      year: string;
      day: string;
    };
  };
  timings: PrayerTimings;
  meta: {
    latitude: number;
    longitude: number;
    timezone: string;
    method: { id: number; name: string };
    source?: TimingsSource;
  };
};

// ─── Calculation methods (Aladhan-supported) ──────────────
export const PRAYER_METHODS = [
  { id: 20, name: "Kemenag (Indonesia)" },
  { id: 3, name: "Muslim World League (MWL)" },
  { id: 17, name: "JAKIM (Malaysia)" },
  { id: 11, name: "MUIS (Singapore)" },
  { id: 5, name: "Egyptian General Authority" },
  { id: 4, name: "Umm Al-Qura (Makkah)" },
] as const;

export const DEFAULT_METHOD = 20; // Kemenag

// ─── Per-prayer offset tuning (in minutes) ────────────────
// Aladhan accepts: tune=Imsak,Fajr,Sunrise,Dhuhr,Sunset,Maghrib,Isha,Midnight,Asr
// (yes — the order is unusual; Asr is last)
export type TuneOffsets = {
  Imsak: number;
  Fajr: number;
  Sunrise: number;
  Dhuhr: number;
  Sunset: number;
  Maghrib: number;
  Isha: number;
  Midnight: number;
  Asr: number;
};

export const ZERO_TUNE: TuneOffsets = {
  Imsak: 0,
  Fajr: 0,
  Sunrise: 0,
  Dhuhr: 0,
  Sunset: 0,
  Maghrib: 0,
  Isha: 0,
  Midnight: 0,
  Asr: 0,
};

function tuneToString(t: TuneOffsets): string {
  return `${t.Imsak},${t.Fajr},${t.Sunrise},${t.Dhuhr},${t.Sunset},${t.Maghrib},${t.Isha},${t.Midnight},${t.Asr}`;
}

export type GetTimingsOptions = {
  date?: Date;
  method?: number;
  tune?: TuneOffsets;
};

async function getAladhanTimings(
  lat: number,
  lon: number,
  options: GetTimingsOptions = {},
): Promise<TimingsResponse | null> {
  const date = options.date ?? new Date();
  const method = options.method ?? DEFAULT_METHOD;
  const tune = options.tune ?? ZERO_TUNE;

  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    method: String(method),
  });
  // Only attach tune if any offset is non-zero — keep URL clean
  if (Object.values(tune).some((v) => v !== 0)) {
    params.set("tune", tuneToString(tune));
  }

  const url = `${BASE}/timings/${dd}-${mm}-${yyyy}?${params}`;
  const res = await fetch(url, { next: { revalidate: 60 * 30 } });
  if (!res.ok) return null;
  const data = (await res.json()) as { data: TimingsResponse };
  return data.data;
}

/** Add `delta` minutes to "HH:MM" (or "HH:MM (tz)") and return "HH:MM". */
function shiftTime(time: string, delta: number): string {
  if (!time || delta === 0) return cleanTime(time);
  const [h, m] = cleanTime(time).split(":").map(Number);
  if (!Number.isFinite(h) || !Number.isFinite(m)) return cleanTime(time);
  const wrap = 24 * 60;
  let total = h * 60 + m + delta;
  total = ((total % wrap) + wrap) % wrap;
  const hh = String(Math.floor(total / 60)).padStart(2, "0");
  const mm = String(total % 60).padStart(2, "0");
  return `${hh}:${mm}`;
}

/**
 * Dispatcher: returns the most accurate timings available for the
 * given coords + date.
 *
 * Strategy: fire equran.id and Aladhan in parallel. We always need
 * Aladhan for Hijri date + non-prayer fields (Sunset, Midnight),
 * so the cost of always calling it is negligible. If equran returns
 * a match, we overlay its 7 prayer-time fields onto the Aladhan
 * response and tag the source as 'equran'. Tune offsets are applied
 * client-side in that path (equran has no tune param).
 */
export async function getTimings(
  lat: number,
  lon: number,
  options: GetTimingsOptions = {},
): Promise<TimingsResponse | null> {
  const date = options.date ?? new Date();
  const tune = options.tune ?? ZERO_TUNE;

  const [aladhan, equran] = await Promise.all([
    getAladhanTimings(lat, lon, options),
    getEquranTimings(lat, lon, date).catch(() => null),
  ]);

  if (!aladhan) return null;

  if (equran) {
    return {
      ...aladhan,
      timings: {
        ...aladhan.timings,
        Imsak: shiftTime(equran.timings.Imsak, tune.Imsak),
        Fajr: shiftTime(equran.timings.Fajr, tune.Fajr),
        Sunrise: shiftTime(equran.timings.Sunrise, tune.Sunrise),
        Dhuhr: shiftTime(equran.timings.Dhuhr, tune.Dhuhr),
        Asr: shiftTime(equran.timings.Asr, tune.Asr),
        Maghrib: shiftTime(equran.timings.Maghrib, tune.Maghrib),
        Isha: shiftTime(equran.timings.Isha, tune.Isha),
      },
      meta: {
        ...aladhan.meta,
        source: {
          kind: "equran",
          label: "Kemenag (Resmi)",
          kabkota: equran.kabkota,
          provinsi: equran.provinsi,
        },
      },
    };
  }

  return {
    ...aladhan,
    meta: {
      ...aladhan.meta,
      source: {
        kind: "aladhan",
        label: aladhan.meta.method.name,
      },
    },
  };
}

export type QiblaResponse = {
  latitude: number;
  longitude: number;
  direction: number; // degrees clockwise from North
};

export async function getQibla(
  lat: number,
  lon: number,
): Promise<QiblaResponse | null> {
  const res = await fetch(`${BASE}/qibla/${lat}/${lon}`, {
    next: { revalidate: 60 * 60 * 24 * 7 },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { data: QiblaResponse };
  return data.data;
}

// ─── User settings persistence ────────────────────────────
const METHOD_KEY = "sakinah:prayerMethod";
const TUNE_KEY = "sakinah:prayerTune";

export function readUserMethod(): number {
  if (typeof window === "undefined") return DEFAULT_METHOD;
  const v = window.localStorage.getItem(METHOD_KEY);
  if (!v) return DEFAULT_METHOD;
  const n = Number(v);
  return Number.isFinite(n) ? n : DEFAULT_METHOD;
}

export function writeUserMethod(method: number): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(METHOD_KEY, String(method));
}

export function readUserTune(): TuneOffsets {
  if (typeof window === "undefined") return ZERO_TUNE;
  const raw = window.localStorage.getItem(TUNE_KEY);
  if (!raw) return ZERO_TUNE;
  try {
    const parsed = JSON.parse(raw);
    return { ...ZERO_TUNE, ...parsed };
  } catch {
    return ZERO_TUNE;
  }
}

export function writeUserTune(tune: TuneOffsets): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(TUNE_KEY, JSON.stringify(tune));
}

// ─── Prayer-name labels (Indonesian) ──────────────────────

export const prayerLabels: Record<keyof PrayerTimings, string> = {
  Imsak: "Imsak",
  Fajr: "Subuh",
  Sunrise: "Terbit",
  Dhuhr: "Dzuhur",
  Asr: "Ashar",
  Sunset: "Terbenam",
  Maghrib: "Maghrib",
  Isha: "Isya",
  Midnight: "Tengah Malam",
};

export const mainPrayers: Array<keyof PrayerTimings> = [
  "Fajr",
  "Dhuhr",
  "Asr",
  "Maghrib",
  "Isha",
];

// Aladhan returns times like "05:14 (WIB)" — strip the timezone suffix.
export function cleanTime(s: string): string {
  return s.split(" ")[0];
}

export function timeToMinutes(time: string): number {
  const [h, m] = cleanTime(time).split(":").map(Number);
  return h * 60 + m;
}

export function nextPrayer(timings: PrayerTimings, now = new Date()) {
  const minutes = now.getHours() * 60 + now.getMinutes();
  for (const key of mainPrayers) {
    const m = timeToMinutes(timings[key]);
    if (m > minutes) {
      return { key, time: cleanTime(timings[key]), minutesUntil: m - minutes };
    }
  }
  // Past Isha — point to tomorrow's Fajr.
  const fajr = timeToMinutes(timings.Fajr);
  const minutesUntil = 24 * 60 - minutes + fajr;
  return {
    key: "Fajr" as const,
    time: cleanTime(timings.Fajr),
    minutesUntil,
    nextDay: true as const,
  };
}

export function formatCountdown(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} menit`;
  if (m === 0) return `${h} jam`;
  return `${h} jam ${m} menit`;
}
