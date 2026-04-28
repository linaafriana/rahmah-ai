import {
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  orderBy,
  setDoc,
  deleteDoc,
  serverTimestamp,
  increment,
  type Firestore,
} from "firebase/firestore";
import { firestore } from "@/lib/firebase/client";
import type {
  PrayerProgress,
  JournalEntry,
  QuranPosition,
  DzikirCategory,
  VerseBookmark,
} from "@/types";

export function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function requireDb(): Firestore | null {
  return firestore;
}

// --- Prayers ---

export async function loadPrayers(
  uid: string,
  date = todayKey(),
): Promise<PrayerProgress | null> {
  const db = requireDb();
  if (!db) return null;
  const snap = await getDoc(
    doc(db, "userProgress", uid, "prayers", date),
  );
  return snap.exists() ? (snap.data() as PrayerProgress) : null;
}

export async function savePrayers(
  uid: string,
  progress: PrayerProgress,
  date = todayKey(),
) {
  const db = requireDb();
  if (!db) return;
  await setDoc(
    doc(db, "userProgress", uid, "prayers", date),
    { ...progress, updatedAt: serverTimestamp() },
    { merge: true },
  );
}

// --- Journal ---

export async function loadJournal(
  uid: string,
  date = todayKey(),
): Promise<JournalEntry | null> {
  const db = requireDb();
  if (!db) return null;
  const snap = await getDoc(doc(db, "journals", uid, "entries", date));
  return snap.exists() ? (snap.data() as JournalEntry) : null;
}

export async function loadJournalsInRange(
  uid: string,
  fromDate: string,
  toDate: string,
): Promise<JournalEntry[]> {
  const db = requireDb();
  if (!db) return [];
  const q = query(
    collection(db, "journals", uid, "entries"),
    where("date", ">=", fromDate),
    where("date", "<=", toDate),
    orderBy("date", "asc"),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data() as JournalEntry);
}

export async function saveJournal(uid: string, entry: JournalEntry) {
  const db = requireDb();
  if (!db) return;
  const payload: Record<string, unknown> = {
    date: entry.date,
    text: entry.text,
    updatedAt: serverTimestamp(),
  };
  if (entry.mood) payload.mood = entry.mood;
  await setDoc(doc(db, "journals", uid, "entries", entry.date), payload, {
    merge: true,
  });
}

// --- Dzikir logs ---

type DzikirLog = Partial<Record<DzikirCategory | "istighfar", number>>;

export async function loadDzikirLog(
  uid: string,
  date = todayKey(),
): Promise<DzikirLog | null> {
  const db = requireDb();
  if (!db) return null;
  const snap = await getDoc(doc(db, "dzikirLogs", uid, "daily", date));
  return snap.exists() ? (snap.data() as DzikirLog) : null;
}

export async function saveDzikirLog(
  uid: string,
  log: DzikirLog,
  date = todayKey(),
) {
  const db = requireDb();
  if (!db) return;
  await setDoc(
    doc(db, "dzikirLogs", uid, "daily", date),
    { ...log, updatedAt: serverTimestamp() },
    { merge: true },
  );
}

// --- Bookmarks ---

export async function loadBookmarks(uid: string): Promise<VerseBookmark[]> {
  const db = requireDb();
  if (!db) return [];
  const snap = await getDocs(
    query(
      collection(db, "bookmarks", uid, "verses"),
      orderBy("createdAt", "desc"),
    ),
  );
  return snap.docs.map((d) => d.data() as VerseBookmark);
}

export async function saveBookmark(uid: string, bm: VerseBookmark) {
  const db = requireDb();
  if (!db) return;
  await setDoc(doc(db, "bookmarks", uid, "verses", bm.id), bm);
}

export async function deleteBookmark(uid: string, id: string) {
  const db = requireDb();
  if (!db) return;
  await deleteDoc(doc(db, "bookmarks", uid, "verses", id));
}

export async function bumpDzikirCount(
  uid: string,
  field: DzikirCategory | "istighfar",
  by = 1,
  date = todayKey(),
) {
  const db = requireDb();
  if (!db) return;
  await setDoc(
    doc(db, "dzikirLogs", uid, "daily", date),
    { [field]: increment(by), updatedAt: serverTimestamp() },
    { merge: true },
  );
}

// --- Quran position ---

export async function loadQuranPosition(
  uid: string,
): Promise<QuranPosition | null> {
  const db = requireDb();
  if (!db) return null;
  const snap = await getDoc(
    doc(db, "userProgress", uid, "meta", "quranPosition"),
  );
  return snap.exists() ? (snap.data() as QuranPosition) : null;
}

export async function saveQuranPosition(uid: string, pos: QuranPosition) {
  const db = requireDb();
  if (!db) return;
  await setDoc(
    doc(db, "userProgress", uid, "meta", "quranPosition"),
    { ...pos, updatedAt: serverTimestamp() },
    { merge: true },
  );
}
