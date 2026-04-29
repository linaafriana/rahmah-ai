"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ChevronRight, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { useAuth } from "@/providers/AuthProvider";
import { loadQuranPosition } from "@/lib/firebase/firestore";
import {
  readVisits,
  type VisitedTopic,
} from "@/components/belajar/BelajarVisitTracker";
import type { QuranPosition } from "@/types";

const PER_PAGE = 50;

const fallbackPosition: QuranPosition = {
  surahNumber: 18,
  surahName: "Al-Kahf",
  ayahNumber: 32,
  totalAyahs: 110,
};

export function LanjutkanCard() {
  const { user } = useAuth();
  const [position, setPosition] = useState<QuranPosition | null>(null);
  const [recent, setRecent] = useState<VisitedTopic | null>(null);
  const [hasQuranHistory, setHasQuranHistory] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const local = window.localStorage.getItem("sakinah:quranPosition");
      if (local) {
        try {
          setPosition(JSON.parse(local) as QuranPosition);
          setHasQuranHistory(true);
        } catch {}
      }
      const visits = readVisits();
      if (visits.length > 0) setRecent(visits[0]);
    }
    if (!user) return;
    void loadQuranPosition(user.uid).then((q) => {
      if (q) {
        setPosition(q);
        setHasQuranHistory(true);
      }
    });
  }, [user]);

  const quranPos = position ?? fallbackPosition;
  const pct = Math.round(
    (quranPos.ayahNumber / quranPos.totalAyahs) * 100,
  );
  const page = Math.max(1, Math.ceil(quranPos.ayahNumber / PER_PAGE));
  const quranHref =
    page > 1
      ? `/quran/${quranPos.surahNumber}?page=${page}`
      : `/quran/${quranPos.surahNumber}`;

  return (
    <Card tone="white">
      <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">
        Lanjutkan
      </p>

      <div className="mt-2 space-y-2">
        {/* Quran row */}
        <Link href={quranHref} className="block">
          <motion.div
            whileTap={{ scale: 0.99 }}
            className="flex items-center gap-3 rounded-card bg-primary-tint p-3 hover:bg-primary-tint/70"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-white text-primary">
              <BookOpen size={18} />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-bold uppercase tracking-widest text-primary/80">
                Al-Qur&rsquo;an
              </p>
              <p className="text-sm font-bold text-ink">
                {hasQuranHistory
                  ? `QS. ${quranPos.surahName}`
                  : "Mulai membaca"}
              </p>
              {hasQuranHistory ? (
                <>
                  <p className="text-[11px] text-ink-soft">
                    Ayat {quranPos.ayahNumber} · {pct}%
                  </p>
                  <div className="mt-1.5 h-1 w-full overflow-hidden rounded-pill bg-white/60">
                    <div
                      className="h-full rounded-pill bg-primary transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </>
              ) : (
                <p className="text-[11px] text-ink-soft">
                  Mulai dari Al-Fatihah
                </p>
              )}
            </div>
            <ChevronRight size={16} className="text-ink-muted" />
          </motion.div>
        </Link>

        {/* Belajar row */}
        <Link
          href={recent ? `/belajar/${recent.slug}` : "/belajar"}
          className="block"
        >
          <motion.div
            whileTap={{ scale: 0.99 }}
            className="flex items-center gap-3 rounded-card bg-background p-3 hover:bg-primary-tint/40"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-white text-primary">
              {recent ? (
                <span className="text-xl">{recent.emoji}</span>
              ) : (
                <GraduationCap size={18} />
              )}
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-bold uppercase tracking-widest text-ink-soft">
                Belajar
              </p>
              <p className="text-sm font-bold text-ink">
                {recent ? recent.title : "Mulai belajar"}
              </p>
              <p className="text-[11px] text-ink-soft">
                {recent
                  ? "Lanjutkan topik terakhir"
                  : "59 topik dari pemula sampai lanjutan"}
              </p>
            </div>
            <ChevronRight size={16} className="text-ink-muted" />
          </motion.div>
        </Link>
      </div>
    </Card>
  );
}
