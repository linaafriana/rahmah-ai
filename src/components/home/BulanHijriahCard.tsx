"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { getHijriDate, type HijriDate } from "@/lib/hijri";
import { getMonthInfo } from "@/data/seed-bulan-hijriah";

export function BulanHijriahCard() {
  const [hijri, setHijri] = useState<HijriDate | null>(null);

  useEffect(() => {
    let alive = true;
    void getHijriDate().then((h) => {
      if (alive) setHijri(h);
    });
    return () => {
      alive = false;
    };
  }, []);

  if (!hijri) return null;
  const info = getMonthInfo(hijri.month);
  if (!info) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/bulan/${info.number}`} className="block">
        <Card
          tone={info.isHaram ? "secondary" : "white"}
          className="overflow-hidden border border-ink/5"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-primary-tint text-xl">
              {info.emoji}
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">
                Hari ke-{hijri.day}
                {info.isHaram && " · Bulan Haram"}
              </p>
              <p className="text-sm font-bold text-ink">
                {info.name} {hijri.year}H
              </p>
              <p className="mt-0.5 text-[11px] text-ink-soft line-clamp-1">
                {info.intro.split(".")[0]}.
              </p>
            </div>
            <ChevronRight size={18} className="text-ink-muted" />
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
