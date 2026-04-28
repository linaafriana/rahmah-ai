"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import {
  getHijriDate,
  isJumat,
  isMalamJumat,
  isSenin,
  isKamis,
  isAyyamulBidh,
  isRamadhan,
  isDzulhijjahFirst10,
  type HijriDate,
} from "@/lib/hijri";

type Highlight = {
  emoji: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
};

function pickHighlight(now: Date, h: HijriDate): Highlight | null {
  // Priority order: Ramadhan > Dzulhijjah 1-10 > Jumat > Ayyamul Bidh > Senin/Kamis > Malam Jumat
  if (isRamadhan(h)) {
    return {
      emoji: "🌙",
      title: `Ramadhan hari ke-${h.day}`,
      desc: "Bulan ampunan. Perbanyak Qur'an dan istighfar.",
      href: "/bulan/9",
      cta: "Panduan Ramadhan",
    };
  }
  if (isDzulhijjahFirst10(h)) {
    return {
      emoji: "🕋",
      title: `Dzulhijjah ke-${h.day} — 10 hari paling utama`,
      desc:
        h.day === 9
          ? "Hari Arafah — puasa hari ini menghapus dosa 2 tahun."
          : "Perbanyak takbir, dzikir, dan amal sholeh.",
      href: "/bulan/12",
      cta: "Panduan Dzulhijjah",
    };
  }
  if (isJumat(now)) {
    return {
      emoji: "📖",
      title: "Hari Jumat — penghulu hari",
      desc:
        "Bacalah Surah Al-Kahf, perbanyak sholawat, dan datangi Jumat.",
      href: "/quran/18",
      cta: "Buka Al-Kahf",
    };
  }
  if (isAyyamulBidh(h)) {
    return {
      emoji: "🌕",
      title: `Ayyamul Bidh — ${h.day} ${h.monthName}`,
      desc: "Tiga hari putih. Niatkan puasa sunnah jika mampu.",
      href: "/belajar/puasa-sunnah",
      cta: "Pelajari puasa sunnah",
    };
  }
  if (isSenin(now) || isKamis(now)) {
    return {
      emoji: "🌿",
      title: isSenin(now) ? "Hari Senin" : "Hari Kamis",
      desc:
        "Hari diangkatnya amal. Niat puasa sunnah & perbanyak istighfar.",
      href: "/belajar/puasa-sunnah",
      cta: "Pelajari puasa sunnah",
    };
  }
  if (isMalamJumat(now) && now.getHours() >= 18) {
    return {
      emoji: "🌟",
      title: "Malam Jumat",
      desc: "Perbanyak sholawat. Bacalah Surah Yasin atau Al-Kahf.",
      href: "/sholawat",
      cta: "Mulai sholawat",
    };
  }
  return null;
}

export function SpecialDayBanner() {
  const [highlight, setHighlight] = useState<Highlight | null>(null);

  useEffect(() => {
    let alive = true;
    void getHijriDate().then((h) => {
      if (!alive) return;
      setHighlight(pickHighlight(new Date(), h));
    });
    return () => {
      alive = false;
    };
  }, []);

  if (!highlight) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link href={highlight.href} className="block">
        <Card tone="accent" className="overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-white text-xl">
              {highlight.emoji}
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-ink">{highlight.title}</p>
              <p className="mt-0.5 text-[11px] text-ink-soft">
                {highlight.desc}
              </p>
              <p className="mt-1 text-[11px] font-semibold text-primary">
                {highlight.cta} →
              </p>
            </div>
            <ChevronRight size={18} className="text-ink-muted" />
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
