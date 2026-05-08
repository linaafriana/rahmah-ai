"use client";

import { useEffect, useState } from "react";
import {
  TAJWEED_EVENT,
  fetchTajweedSurah,
  readTajweedEnabled,
  ruleFor,
  type TajweedToken,
} from "@/lib/tajweed";

type Props = {
  chapterId: number;
  /** "S:A" — used to lookup parsed tokens in the cached surah map. */
  verseKey: string;
  /** Plain Uthmani text — used as fallback while loading or when toggle off. */
  uthmani: string;
};

/**
 * Renders an ayah's Arabic text. When the user has tajwid coloring
 * enabled (`sakinah:tajwidColors` in localStorage), fetches the
 * surah-level tajweed map once and renders each rule-tagged
 * substring with a colored span. Falls back to plain Uthmani text
 * silently in every other case (toggle off, fetch failed, lookup miss).
 */
export function TajweedText({ chapterId, verseKey, uthmani }: Props) {
  const [enabled, setEnabled] = useState(false);
  const [tokens, setTokens] = useState<TajweedToken[] | null>(null);

  // Watch the setting (cross-tab via storage, same-tab via custom event).
  useEffect(() => {
    function refresh() {
      setEnabled(readTajweedEnabled());
    }
    refresh();
    window.addEventListener(TAJWEED_EVENT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(TAJWEED_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  // Fetch the surah-level map only when the toggle is on.
  useEffect(() => {
    if (!enabled) {
      setTokens(null);
      return;
    }
    let alive = true;
    void fetchTajweedSurah(chapterId).then((map) => {
      if (!alive) return;
      setTokens(map.get(verseKey) ?? null);
    });
    return () => {
      alive = false;
    };
  }, [enabled, chapterId, verseKey]);

  if (!enabled || !tokens || tokens.length === 0) {
    return <>{uthmani}</>;
  }

  return (
    <>
      {tokens.map((tk, i) => {
        if (!tk.code) return <span key={i}>{tk.content}</span>;
        const rule = ruleFor(tk.code);
        if (!rule) return <span key={i}>{tk.content}</span>;
        return (
          <span
            key={i}
            className={rule.className}
            // Hover + tap (mobile) tooltip — keep it short to fit a touch.
            title={`${rule.name} — ${rule.hint}`}
          >
            {tk.content}
          </span>
        );
      })}
    </>
  );
}
