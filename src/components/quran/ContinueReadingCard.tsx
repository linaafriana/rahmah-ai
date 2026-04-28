"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { useAuth } from "@/providers/AuthProvider";
import { loadQuranPosition } from "@/lib/firebase/firestore";
import { id as t } from "@/lib/i18n/id";
import type { QuranPosition } from "@/types";

const PER_PAGE = 50;

const fallback: QuranPosition = {
  surahNumber: 18,
  surahName: "Al-Kahf",
  ayahNumber: 32,
  totalAyahs: 110,
};

export function ContinueReadingCard() {
  const { user } = useAuth();
  const [position, setPosition] = useState<QuranPosition>(fallback);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const local = window.localStorage.getItem("sakinah:quranPosition");
      if (local) {
        try {
          setPosition(JSON.parse(local) as QuranPosition);
        } catch {}
      }
    }
    if (!user) return;
    void loadQuranPosition(user.uid).then((q) => {
      if (q) setPosition(q);
    });
  }, [user]);

  const pct = Math.round(
    (position.ayahNumber / position.totalAyahs) * 100,
  );
  const page = Math.max(1, Math.ceil(position.ayahNumber / PER_PAGE));
  const href =
    page > 1
      ? `/quran/${position.surahNumber}?page=${page}`
      : `/quran/${position.surahNumber}`;

  return (
    <Link href={href} className="block">
      <Card tone="primary" className="overflow-hidden">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/80">
          {t.quran.continueTitle}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-ink">
              QS. {position.surahName}
            </p>
            <p className="text-xs text-ink-soft">
              Ayat {position.ayahNumber} · {pct}%
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-primary">
            <BookOpen size={20} />
          </div>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-pill bg-white/50">
          <div
            className="h-full rounded-pill bg-primary transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </Card>
    </Link>
  );
}
