import {
  saveJournal,
  saveBookmark,
  saveQuranPosition,
  savePrayers,
} from "@/lib/firebase/firestore";
import type {
  JournalEntry,
  PrayerProgress,
  QuranPosition,
  VerseBookmark,
} from "@/types";

const MIGRATED_KEY = (uid: string) => `sakinah:migratedFor:${uid}`;
const JOURNAL_PREFIX = "sakinah:journal:";
const PRAYER_PREFIX = "sakinah:prayers:";
const BOOKMARKS_KEY = "sakinah:bookmarks";
const QURAN_POSITION_KEY = "sakinah:quranPosition";

/**
 * One-time migration of local-only data to Firestore on first sign-in.
 * Idempotent — guarded by sakinah:migratedFor:{uid} flag in localStorage.
 *
 * Migrates:
 *   - Journal entries (sakinah:journal:YYYY-MM-DD)
 *   - Verse bookmarks (sakinah:bookmarks)
 *   - Quran position (sakinah:quranPosition)
 *   - Prayer progress (sakinah:prayers:YYYY-MM-DD) — if any
 *
 * Failures are logged silently — best-effort, never blocks sign-in flow.
 */
export async function migrateLocalDataToFirestore(uid: string): Promise<void> {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem(MIGRATED_KEY(uid)) === "1") return;

  const tasks: Promise<unknown>[] = [];

  try {
    // Journal entries
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (!key) continue;
      if (key.startsWith(JOURNAL_PREFIX)) {
        const date = key.slice(JOURNAL_PREFIX.length);
        const raw = window.localStorage.getItem(key);
        if (!raw) continue;
        try {
          const parsed = JSON.parse(raw);
          const entry: JournalEntry = {
            date,
            text: typeof parsed === "string" ? parsed : (parsed.text ?? ""),
            mood: typeof parsed === "object" ? parsed.mood : undefined,
            updatedAt: Date.now(),
          };
          if (entry.text) {
            tasks.push(saveJournal(uid, entry));
          }
        } catch {
          // skip malformed entry
        }
      } else if (key.startsWith(PRAYER_PREFIX)) {
        const date = key.slice(PRAYER_PREFIX.length);
        const raw = window.localStorage.getItem(key);
        if (!raw) continue;
        try {
          const parsed = JSON.parse(raw) as PrayerProgress;
          tasks.push(savePrayers(uid, parsed, date));
        } catch {
          // skip
        }
      }
    }

    // Bookmarks
    const bmRaw = window.localStorage.getItem(BOOKMARKS_KEY);
    if (bmRaw) {
      try {
        const list = JSON.parse(bmRaw) as VerseBookmark[];
        for (const bm of list) {
          tasks.push(saveBookmark(uid, bm));
        }
      } catch {}
    }

    // Quran position
    const posRaw = window.localStorage.getItem(QURAN_POSITION_KEY);
    if (posRaw) {
      try {
        const pos = JSON.parse(posRaw) as QuranPosition;
        tasks.push(saveQuranPosition(uid, pos));
      } catch {}
    }

    await Promise.allSettled(tasks);
    window.localStorage.setItem(MIGRATED_KEY(uid), "1");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn("Local→Firestore migration failed (non-fatal):", err);
  }
}
