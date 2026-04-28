"use client";

import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { id as t } from "@/lib/i18n/id";
import type { QuranPosition } from "@/types";

const PER_PAGE = 50;

export function QuranContinueCard({
  position,
}: {
  position: QuranPosition;
}) {
  const pct = Math.min(
    1,
    Math.max(0, position.ayahNumber / position.totalAyahs),
  );
  const page = Math.max(1, Math.ceil(position.ayahNumber / PER_PAGE));
  const href =
    page > 1
      ? `/quran/${position.surahNumber}?page=${page}`
      : `/quran/${position.surahNumber}`;
  return (
    <Link href={href} className="block">
      <Card tone="white" className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-primary-tint text-primary">
          <BookOpen size={22} />
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
            {t.home.quranContinue.title}
          </p>
          <p className="mt-1 text-sm font-bold text-ink">
            QS. {position.surahName} · Ayat {position.ayahNumber}
          </p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-pill bg-background">
            <div
              className="h-full rounded-pill bg-primary transition-all"
              style={{ width: `${pct * 100}%` }}
            />
          </div>
        </div>
        <ChevronRight size={20} className="text-ink-muted" />
      </Card>
    </Link>
  );
}
