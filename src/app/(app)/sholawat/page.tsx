"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import { DzikirCounter } from "@/components/dzikir/DzikirCounter";
import { Blob } from "@/components/illustrations/Blob";
import { useAuth } from "@/providers/AuthProvider";
import { bumpDzikirCount } from "@/lib/firebase/firestore";
import { id as t } from "@/lib/i18n/id";

type Variant = "short" | "ibrahimiyah" | "munjiyat";

const tabItems = [
  { value: "short" as const, label: "Singkat" },
  { value: "ibrahimiyah" as const, label: "Ibrahimiyah" },
  { value: "munjiyat" as const, label: "Munjiyat" },
];

export default function SholawatPage() {
  const { user } = useAuth();
  const [variant, setVariant] = useState<Variant>("short");
  const pendingRef = useRef(0);
  const flushTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function onIncrement() {
    if (!user) return;
    pendingRef.current += 1;
    if (flushTimer.current) clearTimeout(flushTimer.current);
    flushTimer.current = setTimeout(() => {
      const delta = pendingRef.current;
      pendingRef.current = 0;
      // Reuse afterPrayer slot for sholawat aggregate (or keep separate field).
      // Here we use category 'afterPrayer' as a generic spiritual count.
      if (delta > 0) void bumpDzikirCount(user.uid, "afterPrayer", delta);
    }, 800);
  }

  const phrase = t.sholawat[variant];

  return (
    <div className="space-y-5">
      <header className="relative overflow-hidden rounded-card-lg bg-secondary p-5 shadow-soft">
        <Blob
          color="#FFE9A8"
          size={160}
          className="absolute -right-10 -top-10 opacity-60"
        />
        <Blob
          color="#FFFFFF"
          size={100}
          className="absolute -bottom-6 -left-4 opacity-70"
          delay={0.5}
        />
        <div className="relative">
          <h1 className="text-xl font-bold text-ink">{t.sholawat.title}</h1>
          <p className="mt-1 text-xs text-ink-soft">{t.sholawat.subtitle}</p>
        </div>
      </header>

      <Tabs items={tabItems} value={variant} onChange={setVariant} />

      <AnimatePresence mode="wait">
        <motion.div
          key={variant}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <Card tone="white">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/80">
              {phrase.label}
            </p>
            <p
              className="mt-3 text-right font-arabic text-2xl leading-loose text-ink"
              dir="rtl"
            >
              {phrase.arabic}
            </p>
            <p className="mt-3 text-sm italic text-ink-soft">
              {phrase.transliteration}
            </p>
            <div className="mt-6 flex justify-center">
              <DzikirCounter onIncrement={onIncrement} />
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      <Link
        href="/belajar/sholawat"
        className="inline-flex items-center gap-1.5 rounded-pill bg-white px-4 py-2 text-xs font-medium text-ink shadow-soft hover:text-primary"
      >
        <BookOpen size={14} />
        {t.sholawat.learnMore}
      </Link>
    </div>
  );
}
