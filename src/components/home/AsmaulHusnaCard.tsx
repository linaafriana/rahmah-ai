"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Blob } from "@/components/illustrations/Blob";
import { asmaulHusnaOfDay } from "@/data/seed-asmaul-husna";

export function AsmaulHusnaCard() {
  const name = asmaulHusnaOfDay();

  return (
    <Link href="/belajar/asmaul-husna" className="block">
      <Card tone="primary" className="overflow-hidden">
        <Blob
          color="#FFFFFF"
          size={140}
          className="absolute -right-8 -top-8 opacity-50"
        />
        <div className="relative">
          <div className="flex items-center gap-2">
            <Star size={14} className="text-primary" fill="currentColor" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/80">
              Nama Allah hari ini
            </p>
          </div>
          <motion.p
            key={name.transliteration}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-right font-arabic text-3xl text-ink"
            dir="rtl"
          >
            {name.arabic}
          </motion.p>
          <p className="mt-1 text-right text-xs italic text-ink-soft">
            {name.transliteration} — {name.meaning}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            {name.reflection}
          </p>
          <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
            Lihat 99 nama Allah
            <ChevronRight size={12} />
          </div>
        </div>
      </Card>
    </Link>
  );
}
