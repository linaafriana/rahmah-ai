// Date helpers for daily-keyed features (prayer progress, journal,
// muhasabah, habit tracker, etc).
//
// CRITICAL: never use `Date.prototype.toISOString().slice(0, 10)` for
// these keys. ISO strings are always UTC, so for any timezone east of
// UTC the user's local "today" is one day behind UTC for several hours
// past midnight. In Jakarta (WIB / UTC+7), from 00:00 to 07:00 local,
// `toISOString().slice(0,10)` returns *yesterday's* date — which means
// reads/writes land on the wrong document and the user sees yesterday's
// state at sunrise.

/** YYYY-MM-DD for the given date, in the user's local timezone. */
export function localDateKey(d: Date = new Date()): string {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

/** Local-date key offset by `days` (positive = future, negative = past). */
export function dateKeyOffset(days: number, from: Date = new Date()): string {
  const d = new Date(from);
  d.setDate(d.getDate() + days);
  return localDateKey(d);
}

export const tomorrowKey = (from?: Date) => dateKeyOffset(1, from);
export const yesterdayKey = (from?: Date) => dateKeyOffset(-1, from);
