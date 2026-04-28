"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs } from "@/components/ui/Tabs";
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
  const items = useMemo(
    () => seedDzikir.filter((d) => d.category === tab),
    [tab],
  );

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-3xl font-bold text-ink">{t.dzikir.title}</h1>
        <p className="mt-1 text-sm text-ink-soft">{t.dzikir.subtitle}</p>
      </header>
      <Tabs items={tabItems} value={tab} onChange={setTab} />
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="space-y-4"
        >
          {items.map((item) => (
            <DzikirCard key={item.id} item={item} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
