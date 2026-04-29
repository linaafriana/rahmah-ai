// Lightweight Hijri date helpers.
// Primary source: Aladhan API (/v1/gToH/DD-MM-YYYY), cached daily in localStorage.
// Fallback: Umm Al-Qura algorithmic conversion (approximation, ±1 day).

import { localDateKey } from "./date";

export type HijriDate = {
  day: number; // 1–30
  month: number; // 1–12
  monthName: string;
  year: number;
};

const HIJRI_MONTHS_ID = [
  "Muharram",
  "Safar",
  "Rabi'ul Awwal",
  "Rabi'uts Tsani",
  "Jumadil Awwal",
  "Jumadits Tsani",
  "Rajab",
  "Sya'ban",
  "Ramadhan",
  "Syawwal",
  "Dzulqa'dah",
  "Dzulhijjah",
];

const CACHE_KEY = (gKey: string) => `sakinah:hijri:${gKey}`;

const gKey = localDateKey;

/** Algorithmic Tabular Islamic conversion — close approximation, no network. */
function approximateHijri(d: Date): HijriDate {
  const jd =
    Math.floor(
      (1461 * (d.getFullYear() + 4800 + Math.floor((d.getMonth() - 2) / 12))) /
        4,
    ) +
    Math.floor(
      (367 * (d.getMonth() + 1 - 2 - 12 * Math.floor((d.getMonth() - 2) / 12))) /
        12,
    ) -
    Math.floor(
      (3 * Math.floor((d.getFullYear() + 4900 + Math.floor((d.getMonth() - 2) / 12)) / 100)) /
        4,
    ) +
    d.getDate() -
    32075;

  const l1 = jd - 1948440 + 10632;
  const n = Math.floor((l1 - 1) / 10631);
  const l2 = l1 - 10631 * n + 354;
  const j =
    Math.floor((10985 - l2) / 5316) * Math.floor((50 * l2) / 17719) +
    Math.floor(l2 / 5670) * Math.floor((43 * l2) / 15238);
  const l3 =
    l2 -
    Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
    Math.floor(j / 16) * Math.floor((15238 * j) / 43) +
    29;
  const month = Math.floor((24 * l3) / 709);
  const day = l3 - Math.floor((709 * month) / 24);
  const year = 30 * n + j - 30;

  const m = Math.max(1, Math.min(12, month));
  return {
    day,
    month: m,
    monthName: HIJRI_MONTHS_ID[m - 1],
    year,
  };
}

export async function getHijriDate(d = new Date()): Promise<HijriDate> {
  const key = gKey(d);
  if (typeof window !== "undefined") {
    const cached = window.localStorage.getItem(CACHE_KEY(key));
    if (cached) {
      try {
        return JSON.parse(cached) as HijriDate;
      } catch {}
    }
  }

  // Try Aladhan
  try {
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    const res = await fetch(
      `https://api.aladhan.com/v1/gToH/${dd}-${mm}-${yyyy}`,
      { cache: "force-cache" },
    );
    if (res.ok) {
      const json = (await res.json()) as {
        data: {
          hijri: {
            day: string;
            month: { number: number; en: string };
            year: string;
          };
        };
      };
      const h = json.data.hijri;
      const monthNum = h.month.number;
      const result: HijriDate = {
        day: Number(h.day),
        month: monthNum,
        monthName: HIJRI_MONTHS_ID[monthNum - 1] ?? h.month.en,
        year: Number(h.year),
      };
      if (typeof window !== "undefined") {
        window.localStorage.setItem(CACHE_KEY(key), JSON.stringify(result));
      }
      return result;
    }
  } catch {
    // fall through to local approximation
  }

  return approximateHijri(d);
}

// Special day detection helpers
export function isJumat(d = new Date()) {
  return d.getDay() === 5;
}
export function isMalamJumat(d = new Date()) {
  // Thursday after Maghrib counts as malam Jumat (we approximate: Thursday evening)
  return d.getDay() === 4;
}
export function isSenin(d = new Date()) {
  return d.getDay() === 1;
}
export function isKamis(d = new Date()) {
  return d.getDay() === 4;
}

export function isAyyamulBidh(h: HijriDate) {
  return h.day >= 13 && h.day <= 15;
}

export function isRamadhan(h: HijriDate) {
  return h.month === 9;
}

export function isDzulhijjahFirst10(h: HijriDate) {
  return h.month === 12 && h.day >= 1 && h.day <= 10;
}

export function daysToRamadhan(h: HijriDate): number | null {
  if (h.month === 9) return 0;
  // Approximate: month 9 is Ramadan. 30 days per month.
  let months = 9 - h.month;
  if (months < 0) months += 12;
  return months * 30 - h.day;
}
