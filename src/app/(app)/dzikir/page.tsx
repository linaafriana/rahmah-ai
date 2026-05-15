"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs } from "@/components/ui/Tabs";
import { Card } from "@/components/ui/Card";
import { SmartGuideCard } from "@/components/ui/SmartGuideCard";
import { DzikirCard } from "@/components/dzikir/DzikirCard";
import { seedDzikir } from "@/data/seed-dzikir";
import { id as t } from "@/lib/i18n/id";
import type { DzikirCategory } from "@/types";

const tabItems = [
  { value: "morning" as const, label: t.dzikir.tabs.morning },
  { value: "evening" as const, label: t.dzikir.tabs.evening },
  { value: "afterPrayer" as const, label: t.dzikir.tabs.afterPrayer },
];

export default function DzikirPage() {
  const [tab, setTab] = useState<DzikirCategory>("morning");
  const [showAll, setShowAll] = useState(false);
  const items = useMemo(
    () => seedDzikir.filter((d) => d.category === tab),
    [tab],
  );
  const visibleItems = showAll ? items : items.slice(0, 3);
  const hiddenCount = Math.max(0, items.length - visibleItems.length);

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-3xl font-bold text-ink">{t.dzikir.title}</h1>
        <p className="mt-1 text-sm text-ink-soft">{t.dzikir.subtitle}</p>
      </header>
      <SmartGuideCard
        eyebrow="Dzikir ringan"
        title="Mulai dari tiga bacaan dulu"
        body="Rahmah menampilkan sebagian dulu agar dzikir terasa mudah dimulai. Kamu bisa membuka semua ketika sudah siap."
      />
      <Tabs
        items={tabItems}
        value={tab}
        onChange={(next) => {
          setTab(next);
          setShowAll(false);
        }}
      />
      <p className="sr-only" aria-live="polite">
        {items.length} dzikir tersedia pada kategori ini.
      </p>
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="space-y-4"
        >
          {visibleItems.map((item) => (
            <DzikirCard key={item.id} item={item} />
          ))}
          {hiddenCount > 0 && (
            <Card tone="white" className="border border-primary/10 text-center">
              <p className="text-sm font-semibold text-ink">
                {hiddenCount} dzikir lain disimpan dulu.
              </p>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                Lanjutkan yang terlihat dulu, atau tampilkan semua jika ingin
                menyelesaikan daftar lengkap.
              </p>
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="mt-3 rounded-pill bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Tampilkan semua dzikir
              </button>
            </Card>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
