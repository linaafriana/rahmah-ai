// Single source for belajar progress + bookmarks.
//
// Storage keys:
//   sakinah:belajar:{slug}     → number[] of checked item indices (existing)
//   sakinah:belajar:bookmarks  → string[] of bookmarked topic slugs (new)
//
// Both are localStorage-only — nothing flows to server. Components that
// need to react to changes can listen to PROGRESS_EVENT (same-tab) and
// the standard "storage" event (cross-tab).

const ITEM_KEY = (slug: string) => `sakinah:belajar:${slug}`;
const BOOKMARK_KEY = "sakinah:belajar:bookmarks";

export const PROGRESS_EVENT = "sakinah:belajar-progress-changed";

function emit() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(PROGRESS_EVENT));
  }
}

// ─── Per-topic step checks ────────────────────────────────

export function readChecked(slug: string): Set<number> {
  if (typeof window === "undefined") return new Set();
  const raw = window.localStorage.getItem(ITEM_KEY(slug));
  if (!raw) return new Set();
  try {
    const arr = JSON.parse(raw);
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

export function writeChecked(slug: string, set: Set<number>): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ITEM_KEY(slug), JSON.stringify(Array.from(set)));
  emit();
}

export function toggleChecked(slug: string, index: number): boolean {
  const set = readChecked(slug);
  if (set.has(index)) set.delete(index);
  else set.add(index);
  writeChecked(slug, set);
  return set.has(index);
}

/** Mark every index 0..total-1 as checked. */
export function markAllChecked(slug: string, total: number): void {
  const set = new Set<number>();
  for (let i = 0; i < total; i++) set.add(i);
  writeChecked(slug, set);
}

/** Clear all checks for a topic. */
export function clearChecked(slug: string): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ITEM_KEY(slug));
  emit();
}

/** Returns ratio 0–1 of items checked. */
export function progressRatio(slug: string, total: number): number {
  if (total <= 0) return 0;
  return Math.min(readChecked(slug).size, total) / total;
}

export function isComplete(slug: string, total: number): boolean {
  if (total <= 0) return false;
  return readChecked(slug).size >= total;
}

// ─── Topic bookmarks ──────────────────────────────────────

export function readBookmarks(): Set<string> {
  if (typeof window === "undefined") return new Set();
  const raw = window.localStorage.getItem(BOOKMARK_KEY);
  if (!raw) return new Set();
  try {
    const arr = JSON.parse(raw);
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

function writeBookmarks(set: Set<string>): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(BOOKMARK_KEY, JSON.stringify(Array.from(set)));
  emit();
}

export function isBookmarked(slug: string): boolean {
  return readBookmarks().has(slug);
}

export function toggleBookmark(slug: string): boolean {
  const set = readBookmarks();
  if (set.has(slug)) set.delete(slug);
  else set.add(slug);
  writeBookmarks(set);
  return set.has(slug);
}
