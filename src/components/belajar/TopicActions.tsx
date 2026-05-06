"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bookmark, BookmarkCheck, Check, RotateCcw } from "lucide-react";
import {
  PROGRESS_EVENT,
  clearChecked,
  isBookmarked,
  isComplete,
  markAllChecked,
  progressRatio,
  toggleBookmark,
} from "@/lib/belajarProgress";

type Props = {
  slug: string;
  total: number;
};

/**
 * Top toolbar for /belajar/[slug] — progress bar, bookmark toggle,
 * "tandai semua" + "reset" actions. Hides when topic has no items
 * (e.g. Hijaiyah grid uses its own checks).
 */
export function TopicActions({ slug, total }: Props) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    function refresh() {
      setProgress(progressRatio(slug, total));
      setDone(isComplete(slug, total));
      setBookmarked(isBookmarked(slug));
    }
    refresh();
    window.addEventListener(PROGRESS_EVENT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(PROGRESS_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [slug, total]);

  if (total <= 0) return null;

  const ratioPct = Math.round(progress * 100);
  const checked = Math.round(progress * total);

  return (
    <div className="rounded-card-lg bg-white p-4 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-ink">
              {checked}/{total}
            </span>
            <span className="text-[11px] font-medium text-ink-muted">
              · {ratioPct}% selesai
            </span>
            {done && (
              <span className="ml-1 inline-flex items-center gap-0.5 rounded-pill bg-primary-tint px-2 py-0.5 text-[10px] font-bold text-primary">
                <Check size={10} strokeWidth={3} /> Tuntas
              </span>
            )}
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-pill bg-ink/5">
            <motion.div
              animate={{ width: `${ratioPct}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full rounded-pill bg-primary"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            const next = toggleBookmark(slug);
            setBookmarked(next);
          }}
          aria-label={bookmarked ? "Hapus bookmark" : "Bookmark"}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background text-ink-soft hover:bg-accent-tint hover:text-ink"
        >
          {bookmarked ? (
            <BookmarkCheck size={16} className="text-accent" />
          ) : (
            <Bookmark size={16} />
          )}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {!done ? (
          <button
            type="button"
            onClick={() => markAllChecked(slug, total)}
            className="inline-flex items-center gap-1.5 rounded-pill bg-primary px-3 py-1.5 text-[11px] font-semibold text-white shadow-soft hover:bg-primary/90"
          >
            <Check size={12} strokeWidth={3} />
            Tandai semua selesai
          </button>
        ) : (
          <button
            type="button"
            onClick={() => clearChecked(slug)}
            className="inline-flex items-center gap-1.5 rounded-pill bg-background px-3 py-1.5 text-[11px] font-semibold text-ink-soft hover:bg-ink/10"
          >
            <RotateCcw size={12} />
            Ulang dari awal
          </button>
        )}
      </div>
    </div>
  );
}
