const BASE =
  process.env.NEXT_PUBLIC_QURAN_API_BASE ?? "https://api.quran.com/api/v4";

export type Chapter = {
  id: number;
  name_simple: string;
  name_arabic: string;
  verses_count: number;
  revelation_place: "makkah" | "madinah";
};

export type Verse = {
  id: number;
  verse_number: number;
  verse_key: string;
  text_uthmani: string;
  translations?: Array<{ id: number; text: string }>;
};

export async function getChapters(): Promise<Chapter[]> {
  const res = await fetch(`${BASE}/chapters?language=id`, {
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!res.ok) throw new Error("Failed to load chapters");
  const data = (await res.json()) as { chapters: Chapter[] };
  return data.chapters;
}

export async function getVerse(
  chapter: number,
  verse: number,
  translationId = 33,
): Promise<Verse | null> {
  const res = await fetch(
    `${BASE}/verses/by_key/${chapter}:${verse}?translations=${translationId}&fields=text_uthmani,verse_number,verse_key`,
    { next: { revalidate: 60 * 60 * 12 } },
  );
  if (!res.ok) return null;
  const data = (await res.json()) as { verse: Verse };
  return data.verse;
}

export async function getChapter(chapter: number): Promise<Chapter | null> {
  const res = await fetch(`${BASE}/chapters/${chapter}?language=id`, {
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { chapter: Chapter };
  return data.chapter;
}

export type VersesPage = {
  verses: Verse[];
  total: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
};

export type Reciter = {
  id: number;
  name: string;
  arabicLabel: string;
};

export const RECITERS: Reciter[] = [
  { id: 7, name: "Mishary Alafasy", arabicLabel: "مشاري العفاسي" },
  { id: 1, name: "AbdulBaset (Mujawwad)", arabicLabel: "عبد الباسط" },
  { id: 3, name: "Abdurrahman As-Sudais", arabicLabel: "السديس" },
  { id: 4, name: "Abu Bakr Ash-Shaatree", arabicLabel: "الشاطري" },
  { id: 5, name: "Hani ar-Rifai", arabicLabel: "هاني الرفاعي" },
  { id: 6, name: "Mahmoud Khalil Al-Husary", arabicLabel: "الحصري" },
];

export const DEFAULT_RECITER_ID = 7;

export async function getVerseAudios(
  chapter: number,
  recitationId = DEFAULT_RECITER_ID,
): Promise<Map<string, string>> {
  const url = `${BASE}/recitations/${recitationId}/by_chapter/${chapter}?per_page=300`;
  const res = await fetch(url, { next: { revalidate: 60 * 60 * 24 } });
  if (!res.ok) return new Map();
  const data = (await res.json()) as {
    audio_files: Array<{ verse_key: string; url: string }>;
  };
  const map = new Map<string, string>();
  for (const file of data.audio_files ?? []) {
    if (!file.url) continue;
    const fullUrl = file.url.startsWith("http")
      ? file.url
      : `https://verses.quran.com/${file.url}`;
    map.set(file.verse_key, fullUrl);
  }
  return map;
}

export async function getVersesByChapter(
  chapter: number,
  page = 1,
  perPage = 50,
  translationId = 33,
): Promise<VersesPage | null> {
  const url = `${BASE}/verses/by_chapter/${chapter}?translations=${translationId}&fields=text_uthmani,verse_number,verse_key&page=${page}&per_page=${perPage}`;
  const res = await fetch(url, { next: { revalidate: 60 * 60 * 12 } });
  if (!res.ok) return null;
  const data = (await res.json()) as {
    verses: Verse[];
    pagination: {
      total_records: number;
      per_page: number;
      current_page: number;
      total_pages: number;
    };
  };
  return {
    verses: data.verses,
    total: data.pagination.total_records,
    perPage: data.pagination.per_page,
    currentPage: data.pagination.current_page,
    totalPages: data.pagination.total_pages,
  };
}
