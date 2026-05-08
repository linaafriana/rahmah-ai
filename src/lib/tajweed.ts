// Tahsin (tajwid) coloring for the Qur'an reader.
//
// Source: alquran.cloud `quran-tajweed` edition. Free, public, no key
// (same project as Aladhan). Returns Arabic text with rule markers
// in the format `[CODE[content]` or `[CODE:ID[content]`, where CODE is
// a one-letter rule code and content is the Arabic text the rule
// applies to.
//
// Example: `[h:1[ٱ]للَّهِ` — "ٱ" is hamzatul wasl (rule h, instance 1).
//
// Strategy:
//   - Setting persisted in localStorage (`sakinah:tajwidColors`).
//   - Default: OFF — newcomers don't get suddenly-colored letters.
//   - When ON, surah-level fetch is cached in-memory per session
//     (Map<chapterId, Promise<Map<verseKey, Token[]>>>). Switching
//     surahs only fetches once each.

const ENABLED_KEY = "sakinah:tajwidColors";
const BASE = "https://api.alquran.cloud/v1";

export const TAJWEED_EVENT = "sakinah:tajwid-changed";

export type TajweedToken = {
  /** "" for plain text, otherwise a rule code like "h", "n", "o", … */
  code: string;
  /** Arabic substring this token covers. */
  content: string;
};

// ─── Settings ─────────────────────────────────────────────

export function readTajweedEnabled(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(ENABLED_KEY) === "1";
}

export function writeTajweedEnabled(on: boolean): void {
  if (typeof window === "undefined") return;
  if (on) window.localStorage.setItem(ENABLED_KEY, "1");
  else window.localStorage.removeItem(ENABLED_KEY);
  window.dispatchEvent(new Event(TAJWEED_EVENT));
}

// ─── Parser ───────────────────────────────────────────────

/**
 * Convert raw alquran.cloud tajweed text into tokens.
 *
 * Format spec (observed from the API):
 *   - `[CODE[content]`           — rule applies to `content`
 *   - `[CODE:NUMERIC_ID[content]` — same, with a per-rule occurrence id
 *   - Tags are NOT nested. Plain Arabic appears between tags.
 *
 * The parser is forgiving: malformed input is returned as plain text
 * rather than throwing — the upstream data is generally clean, but
 * we never want to crash the reader.
 */
export function parseTajweed(text: string): TajweedToken[] {
  const tokens: TajweedToken[] = [];
  let i = 0;
  const n = text.length;

  while (i < n) {
    if (text[i] === "[") {
      // Read rule code (single letter) until ':' or '['.
      let p = i + 1;
      while (p < n && text[p] !== ":" && text[p] !== "[") p++;
      const code = text.slice(i + 1, p).toLowerCase();

      // Skip ":id" portion if present — we don't use it.
      if (p < n && text[p] === ":") {
        while (p < n && text[p] !== "[") p++;
      }

      // After the second '[' should be the content.
      if (p >= n || text[p] !== "[") {
        // Malformed: treat the literal '[' as plain text and continue.
        tokens.push({ code: "", content: "[" });
        i++;
        continue;
      }
      p++; // past second '['

      // Find matching ']'.
      const closeAt = text.indexOf("]", p);
      if (closeAt === -1) {
        // Malformed: render rest as plain.
        tokens.push({ code: "", content: text.slice(i) });
        break;
      }
      const content = text.slice(p, closeAt);
      tokens.push({ code, content });
      i = closeAt + 1;
    } else {
      // Plain stretch up to next '['.
      const next = text.indexOf("[", i);
      const end = next === -1 ? n : next;
      tokens.push({ code: "", content: text.slice(i, end) });
      i = end;
    }
  }

  return tokens;
}

// ─── Surah-level fetch + per-session cache ────────────────

type SurahPayload = {
  data?: {
    ayahs?: Array<{ numberInSurah: number; text: string }>;
  };
};

const surahCache = new Map<number, Promise<Map<string, TajweedToken[]>>>();

export function fetchTajweedSurah(
  chapterId: number,
): Promise<Map<string, TajweedToken[]>> {
  const cached = surahCache.get(chapterId);
  if (cached) return cached;

  const promise = (async () => {
    const map = new Map<string, TajweedToken[]>();
    try {
      const res = await fetch(`${BASE}/surah/${chapterId}/quran-tajweed`, {
        // Tahsin data is static — cache aggressively. 30 days.
        next: { revalidate: 60 * 60 * 24 * 30 },
      });
      if (!res.ok) return map;
      const data = (await res.json()) as SurahPayload;
      for (const a of data.data?.ayahs ?? []) {
        const key = `${chapterId}:${a.numberInSurah}`;
        map.set(key, parseTajweed(a.text));
      }
    } catch {
      // Network failure → empty map, caller falls back to plain text.
    }
    return map;
  })();

  surahCache.set(chapterId, promise);
  return promise;
}

// ─── Legend metadata (for /pengaturan + reader info button) ─

export type TajweedRule = {
  code: string;
  className: string;
  name: string;
  /** Cara baca singkat dalam Bahasa Indonesia. */
  hint: string;
};

export const tajweedRules: TajweedRule[] = [
  {
    code: "h",
    className: "tajwid-h",
    name: "Hamzatul Wasl",
    hint: "Hamzah penyambung — kalau di awal kata dibaca, kalau ditengah kalimat hilang.",
  },
  {
    code: "l",
    className: "tajwid-l",
    name: "Lam Syamsiyyah (silent)",
    hint: "Lam yang tidak dibaca — huruf setelahnya di-tasydid.",
  },
  {
    code: "n",
    className: "tajwid-n",
    name: "Madd Thabi'i (2 harakat)",
    hint: "Mad asli — dipanjangkan 2 ketukan.",
  },
  {
    code: "p",
    className: "tajwid-p",
    name: "Madd Munfasil (4-5 harakat)",
    hint: "Mad antara dua kata — 4-5 ketukan.",
  },
  {
    code: "m",
    className: "tajwid-m",
    name: "Madd Muttasil (4-5 harakat)",
    hint: "Mad dalam satu kata — 4-5 ketukan.",
  },
  {
    code: "o",
    className: "tajwid-o",
    name: "Madd Lazim (6 harakat)",
    hint: "Mad paling panjang — 6 ketukan, wajib.",
  },
  {
    code: "a",
    className: "tajwid-a",
    name: "Idgham",
    hint: "Huruf pertama melebur masuk ke huruf berikutnya.",
  },
  {
    code: "f",
    className: "tajwid-f",
    name: "Ikhfa'",
    hint: "Disamarkan dengan dengung, di antara izhhar dan idgham.",
  },
  {
    code: "q",
    className: "tajwid-q",
    name: "Qalqalah",
    hint: "Huruf bersukun yang dipantulkan: ق ط ب ج د.",
  },
  {
    code: "s",
    className: "tajwid-s",
    name: "Huruf yang tidak dibaca",
    hint: "Huruf yang tertulis tapi tidak dilafalkan.",
  },
  {
    code: "u",
    className: "tajwid-u",
    name: "Ikhfa' Syafawi",
    hint: "Mim bersukun bertemu ba — disamarkan dengan dengung.",
  },
];

const ruleByCode = new Map(tajweedRules.map((r) => [r.code, r]));

export function ruleFor(code: string): TajweedRule | undefined {
  return ruleByCode.get(code);
}
