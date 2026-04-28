"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import clsx from "clsx";
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import { id as t } from "@/lib/i18n/id";
import { starterPath } from "@/data/seed-belajar";
import type { LearnCategory, LearnLevel, LearnTopic } from "@/types";

type TabValue = "all" | LearnCategory;

const categoryTone: Record<
  LearnCategory,
  "primary" | "accent" | "secondary" | "white" | "cream"
> = {
  dasar: "primary",
  aqidah: "secondary",
  tahsin: "primary",
  fiqih: "accent",
  akhlak: "primary",
  doa: "accent",
  sirah: "secondary",
  hadits: "primary",
};

const levelOrder: LearnLevel[] = ["pemula", "menengah", "lanjutan"];

const levelChip: Record<LearnLevel, string> = {
  pemula: "bg-primary-tint text-primary",
  menengah: "bg-accent-tint text-ink",
  lanjutan: "bg-secondary text-ink",
};

const tabItems: { value: TabValue; label: string }[] = [
  { value: "all", label: t.belajar.categories.all },
  { value: "dasar", label: t.belajar.categories.dasar },
  { value: "aqidah", label: t.belajar.categories.aqidah },
  { value: "tahsin", label: t.belajar.categories.tahsin },
  { value: "fiqih", label: t.belajar.categories.fiqih },
  { value: "akhlak", label: t.belajar.categories.akhlak },
  { value: "doa", label: t.belajar.categories.doa },
  { value: "sirah", label: t.belajar.categories.sirah },
  { value: "hadits", label: t.belajar.categories.hadits },
];

export function BelajarHub({ topics }: { topics: LearnTopic[] }) {
  const [tab, setTab] = useState<TabValue>("all");

  const grouped = useMemo(() => {
    const filtered =
      tab === "all" ? topics : topics.filter((t) => t.category === tab);
    const groups: Record<LearnLevel, LearnTopic[]> = {
      pemula: [],
      menengah: [],
      lanjutan: [],
    };
    for (const topic of filtered) groups[topic.level].push(topic);
    return groups;
  }, [tab, topics]);

  const starterTopics = useMemo(() => {
    const map = new Map(topics.map((t) => [t.slug, t]));
    return starterPath
      .map((slug) => map.get(slug))
      .filter((t): t is LearnTopic => Boolean(t));
  }, [topics]);

  const showStarter = tab === "all";

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-3xl font-bold text-ink">{t.belajar.title}</h1>
        <p className="mt-1 text-sm text-ink-soft">{t.belajar.subtitle}</p>
      </header>

      <div className="-mx-1 overflow-x-auto pb-1 no-scrollbar">
        <div className="min-w-max px-1">
          <Tabs items={tabItems} value={tab} onChange={setTab} />
        </div>
      </div>

      {showStarter && (
        <Card tone="cream" className="overflow-hidden border border-ink/5">
          <div className="flex items-center gap-2 text-ink">
            <Sparkles size={16} className="text-primary" />
            <h2 className="text-sm font-bold">Jalur Pemula</h2>
          </div>
          <p className="mt-1 text-xs text-ink-soft">
            Tujuh topik untuk memulai dari nol. Tidak terburu-buru.
          </p>
          <ol className="mt-3 space-y-1.5">
            {starterTopics.map((topic, i) => (
              <li key={topic.id}>
                <Link
                  href={`/belajar/${topic.slug}`}
                  className="flex items-center gap-2 rounded-card bg-white px-3 py-2 text-sm text-ink hover:bg-primary-tint"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-tint text-[11px] font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="flex-1 truncate">{topic.title}</span>
                  <span className="text-base">{topic.emoji}</span>
                  <ChevronRight size={14} className="text-ink-muted" />
                </Link>
              </li>
            ))}
          </ol>
        </Card>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="space-y-6"
        >
          {levelOrder.map((level) => {
            const list = grouped[level];
            if (list.length === 0) return null;
            return (
              <section key={level} className="space-y-3">
                <div className="flex items-baseline justify-between px-1">
                  <h2 className="text-sm font-bold text-ink">
                    {t.belajar.levels[level]}
                  </h2>
                  <span className="text-[11px] text-ink-muted">
                    {t.belajar.levelHints[level]}
                  </span>
                </div>
                <div className="space-y-3">
                  {list.map((topic) => (
                    <Link
                      key={topic.id}
                      href={`/belajar/${topic.slug}`}
                      className="block"
                    >
                      <Card
                        tone={categoryTone[topic.category]}
                        className="overflow-hidden"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-white text-2xl">
                            {topic.emoji}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">
                                {t.belajar.categories[topic.category]}
                              </p>
                              <span
                                className={clsx(
                                  "rounded-pill px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider",
                                  levelChip[topic.level],
                                )}
                              >
                                {t.belajar.levels[topic.level]}
                              </span>
                            </div>
                            <h3 className="mt-0.5 text-base font-bold text-ink">
                              {topic.title}
                            </h3>
                            <p className="mt-0.5 text-xs text-ink-soft">
                              {topic.description}
                            </p>
                            <p className="mt-1 text-[11px] text-ink-muted">
                              {topic.items.length} bagian
                            </p>
                          </div>
                          <ChevronRight
                            size={18}
                            className="mt-1 text-ink-muted"
                          />
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
