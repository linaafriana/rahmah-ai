export type PrayerKey = "fajr" | "dhuhr" | "asr" | "maghrib" | "isha";

export type PrayerProgress = Record<PrayerKey, boolean>;

export type Mood =
  | "joyful"
  | "calm"
  | "sad"
  | "tearful"
  | "angry"
  | "tired"
  | "loved";

export type DzikirCategory = "morning" | "evening" | "afterPrayer";

export type Tone = "hope" | "patience" | "trust" | "gratitude" | "love";

export interface DzikirItem {
  id: string;
  category: DzikirCategory;
  arabic: string;
  transliteration: string;
  meaning: string;
  audioPublicId?: string;
  defaultCount: number;
}

export interface Reflection {
  id: string;
  surahName: string;
  surahNumber: number;
  ayahNumber: number;
  arabic: string;
  translation: string;
  tone: Tone;
}

export interface ParentingLessonStep {
  title: string;
  body: string;
  arabic?: string;
  transliteration?: string;
}

export interface ParentingTopic {
  id: string;
  slug: string;
  title: string;
  description: string;
  illustration: "doa" | "sholat" | "habits";
  intro: string;
  steps: ParentingLessonStep[];
  closing?: string;
}

export type LearnCategory =
  | "dasar"
  | "aqidah"
  | "tahsin"
  | "fiqih"
  | "akhlak"
  | "doa"
  | "sirah"
  | "hadits";

export type LearnLevel = "pemula" | "menengah" | "lanjutan";

export interface LearnItem {
  title: string;
  arabic?: string;
  transliteration?: string;
  body: string;
  audioPublicId?: string;
}

export interface LearnTopic {
  id: string;
  slug: string;
  category: LearnCategory;
  level: LearnLevel;
  title: string;
  description: string;
  emoji: string;
  intro: string;
  items: LearnItem[];
  closing?: string;
}

export interface JournalEntry {
  date: string;
  mood?: Mood;
  text: string;
  updatedAt: number;
}

export interface QuranPosition {
  surahNumber: number;
  surahName: string;
  ayahNumber: number;
  totalAyahs: number;
}

export interface VerseBookmark {
  id: string; // verse_key like "18:32"
  verseKey: string;
  surahNumber: number;
  surahName: string;
  ayahNumber: number;
  arabic: string;
  translation?: string;
  createdAt: number;
}
