"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";

type Slot = "subuh" | "pagi" | "dhuha" | "siang" | "sore" | "petang" | "malam" | "tahajud";

type Spotlight = {
  emoji: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
};

function slotForHour(h: number): Slot {
  if (h >= 3 && h < 5) return "tahajud";
  if (h >= 5 && h < 7) return "subuh";
  if (h >= 7 && h < 10) return "pagi";
  if (h >= 10 && h < 11) return "dhuha";
  if (h >= 11 && h < 15) return "siang";
  if (h >= 15 && h < 18) return "sore";
  if (h >= 18 && h < 21) return "petang";
  return "malam"; // 21–02
}

function pickSpotlight(slot: Slot): Spotlight {
  switch (slot) {
    case "tahajud":
      return {
        emoji: "🌙",
        title: "Sepertiga malam terakhir",
        desc:
          "Waktu doa paling mustajab. 2 rakaat tahajud, lalu pinta apa pun.",
        href: "/belajar/sholat-sunnah",
        cta: "Pelajari Tahajud",
      };
    case "subuh":
      return {
        emoji: "🌅",
        title: "Waktu Subuh",
        desc:
          "Tegakkan dulu sholat subuh. Setelahnya, jangan tidur — perbanyak dzikir pagi.",
        href: "/belajar/dzikir-pagi-petang",
        cta: "Mulai dzikir pagi",
      };
    case "pagi":
      return {
        emoji: "☀️",
        title: "Sudah dzikir pagi?",
        desc: "Cukup 5–10 menit. Perisai harimu dimulai dari sini.",
        href: "/belajar/dzikir-pagi-petang",
        cta: "Buka dzikir pagi",
      };
    case "dhuha":
      return {
        emoji: "✨",
        title: "Waktu Dhuha",
        desc:
          "2 hingga 8 rakaat — pintu rezeki dan sedekah seluruh persendian.",
        href: "/belajar/sholat-sunnah",
        cta: "Pelajari Dhuha",
      };
    case "siang":
      return {
        emoji: "🤲",
        title: "Tengah hari",
        desc:
          "Sebentar lagi Dzuhur. Niatkan sholat tepat waktu, lalu kembali ke aktivitas.",
        href: "/jadwal",
        cta: "Cek jadwal sholat",
      };
    case "sore":
      return {
        emoji: "🌤️",
        title: "Menjelang Maghrib",
        desc:
          "Saat-saat yang dicintai untuk berdoa. Perbanyak istighfar.",
        href: "/taubat",
        cta: "Mulai istighfar",
      };
    case "petang":
      return {
        emoji: "🌇",
        title: "Sudah dzikir petang?",
        desc:
          "Waktunya menjaga diri menjelang malam. 5–10 menit, hati tenang sampai pagi.",
        href: "/belajar/dzikir-pagi-petang",
        cta: "Buka dzikir petang",
      };
    case "malam":
      return {
        emoji: "🌌",
        title: "Sebelum tidur",
        desc:
          "Bacalah Surah Al-Mulk + Ayat Kursi + 3 surah qul. Wudhu, lalu tidur miring kanan.",
        href: "/quran/67",
        cta: "Buka Surah Al-Mulk",
      };
  }
}

export function TimeSpotlightCard() {
  const [slot, setSlot] = useState<Slot | null>(null);

  useEffect(() => {
    setSlot(slotForHour(new Date().getHours()));
  }, []);

  if (!slot) return null;
  const sp = pickSpotlight(slot);

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link href={sp.href} className="block">
        <Card tone="primary" className="overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-white text-xl">
              {sp.emoji}
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-ink">{sp.title}</p>
              <p className="mt-0.5 text-[11px] text-ink-soft">{sp.desc}</p>
              <p className="mt-1 text-[11px] font-semibold text-primary">
                {sp.cta} →
              </p>
            </div>
            <ChevronRight size={18} className="text-ink-muted" />
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
