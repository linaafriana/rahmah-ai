// Aladhan API client — https://aladhan.com/prayer-times-api
// All endpoints are public and require no key.

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

export type TimingsResponse = {
  date: { readable: string; gregorian: { date: string }; hijri: { date: string; month: { en: string; ar: string }; year: string; day: string } };
  timings: PrayerTimings;
  meta: { latitude: number; longitude: number; timezone: string; method: { id: number; name: string } };
};

const METHOD_KEMENAG = 20; // Kemenag (Indonesia)

export async function getTimings(
  lat: number,
  lon: number,
  date = new Date(),
  method = METHOD_KEMENAG,
): Promise<TimingsResponse | null> {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  const url = `${BASE}/timings/${dd}-${mm}-${yyyy}?latitude=${lat}&longitude=${lon}&method=${method}`;
  const res = await fetch(url, { next: { revalidate: 60 * 30 } });
  if (!res.ok) return null;
  const data = (await res.json()) as { data: TimingsResponse };
  return data.data;
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

// --- Prayer-name labels (Indonesian) ---

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
