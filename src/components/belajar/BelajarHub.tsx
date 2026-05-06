"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bookmark,
  BookmarkCheck,
  Check,
  ChevronRight,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import clsx from "clsx";
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import { id as t } from "@/lib/i18n/id";
import { starterPath } from "@/data/seed-belajar";
import {
  PROGRESS_EVENT,
  isBookmarked,
  isComplete,
  progressRatio,
  readBookmarks,
  readChecked,
} from "@/lib/belajarProgress";
import type { LearnCategory, LearnLevel, LearnTopic } from "@/types";

type TabValue = "all" | "saved" | LearnCategory;

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
  { value: "saved", label: "Disimpan" },
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
  const [query, setQuery] = useState("");
  // Tick on every progress/bookmark change so memoized lists recompute.
  const [progressTick, setProgressTick] = useState(0);

  useEffect(() => {
    function bump() {
      setProgressTick((n) => n + 1);
    }
    window.addEventListener(PROGRESS_EVENT, bump);
    window.addEventListener("storage", bump);
    return () => {
      window.removeEventListener(PROGRESS_EVENT, bump);
      window.removeEventListener("storage", bump);
    };
  }, []);

  // Topics in-progress (some checks but not yet complete) — shown
  // prominently as a "Lanjutkan" section so user can resume immediately.
  const inProgress = useMemo(() => {
    return topics
      .filter(
        (top) =>
          top.items.length > 0 &&
          readChecked(top.slug).size > 0 &&
          !isComplete(top.slug, top.items.length),
      )
      .sort(
        (a, b) =>
          progressRatio(b.slug, b.items.length) -
          progressRatio(a.slug, a.items.length),
      )
      .slice(0, 4);
    // progressTick is read implicitly via the global functions; we just
    // depend on it to trigger recomputation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topics, progressTick]);

  const bookmarkedSlugs = useMemo(() => {
    return readBookmarks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressTick]);

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    let filtered: LearnTopic[];
    if (tab === "all") {
      filtered = topics;
    } else if (tab === "saved") {
      filtered = topics.filter((top) => bookmarkedSlugs.has(top.slug));
    } else {
      filtered = topics.filter((top) => top.category === tab);
    }
    if (q) {
      filtered = filtered.filter((topic) => {
        const haystack = [
          topic.title,
          topic.description,
          topic.intro,
          ...topic.items.map((it) => it.title),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      });
    }
    const groups: Record<LearnLevel, LearnTopic[]> = {
      pemula: [],
      menengah: [],
      lanjutan: [],
    };
    for (const topic of filtered) groups[topic.level].push(topic);
    return groups;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, topics, query, bookmarkedSlugs, progressTick]);

  const totalResults =
    grouped.pemula.length + grouped.menengah.length + grouped.lanjutan.length;

  const starterTopics = useMemo(() => {
    const map = new Map(topics.map((t) => [t.slug, t]));
    return starterPath
      .map((slug) => map.get(slug))
      .filter((t): t is LearnTopic => Boolean(t));
  }, [topics]);

  const showStarter = tab === "all" && !query.trim();

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-3xl font-bold text-ink">{t.belajar.title}</h1>
        <p className="mt-1 text-sm text-ink-soft">{t.belajar.subtitle}</p>
      </header>

      <label className="relative block">
        <Search
          size={16}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
        />
        <input
          type="text"
          inputMode="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari topik — wudhu, sabar, hijaiyah…"
          className="w-full rounded-pill border border-ink/5 bg-white py-2.5 pl-10 pr-10 text-sm text-ink shadow-soft outline-none placeholder:text-ink-muted focus:ring-2 focus:ring-primary/30"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Hapus pencarian"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full text-ink-muted hover:bg-ink/5 hover:text-ink"
          >
            <X size={12} />
          </button>
        )}
      </label>

      <div className="-mx-1 overflow-x-auto pb-1 no-scrollbar">
        <div className="min-w-max px-1">
          <Tabs items={tabItems} value={tab} onChange={setTab} />
        </div>
      </div>

      {query.trim() && totalResults === 0 && (
        <Card tone="cream" className="border border-ink/5">
          <p className="text-center text-sm text-ink-soft">
            Tidak ditemukan topik dengan kata &ldquo;{query.trim()}&rdquo;.
            Coba kata lain.
          </p>
        </Card>
      )}

      {tab === "all" && !query.trim() && inProgress.length > 0 && (
        <section className="space-y-2">
          <h2 className="px-1 text-[11px] font-bold uppercase tracking-widest text-ink-soft">
            Lanjutkan
          </h2>
          <div className="space-y-2">
            {inProgress.map((topic) => {
              const ratio = progressRatio(topic.slug, topic.items.length);
              const checked = readChecked(topic.slug).size;
              return (
                <Link
                  key={topic.id}
                  href={`/belajar/${topic.slug}`}
                  className="block"
                >
                  <Card tone="white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-primary-tint text-xl">
                        {topic.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="truncate text-sm font-bold text-ink">
                          {topic.title}
                        </h3>
                        <div className="mt-1 h-1 w-full overflow-hidden rounded-pill bg-ink/5">
                          <div
                            className="h-full rounded-pill bg-primary"
                            style={{ width: `${Math.round(ratio * 100)}%` }}
                          />
                        </div>
                        <p className="mt-1 text-[10px] text-ink-muted">
                          {checked}/{topic.items.length} bagian ·{" "}
                          {Math.round(ratio * 100)}%
                        </p>
                      </div>
                      <ChevronRight size={16} className="text-ink-muted" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {tab === "saved" && grouped.pemula.length === 0 && grouped.menengah.length === 0 && grouped.lanjutan.length === 0 && (
        <Card tone="cream" className="border border-ink/5">
          <div className="flex items-start gap-3">
            <Bookmark size={16} className="mt-0.5 text-ink-muted" />
            <p className="flex-1 text-sm text-ink-soft">
              Belum ada topik yang disimpan. Buka topik mana pun, lalu tekan
              ikon bookmark di atas konten untuk menyimpannya di sini.
            </p>
          </div>
        </Card>
      )}

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
                  {list.map((topic) => {
                    const total = topic.items.length;
                    const checked = readChecked(topic.slug).size;
                    const ratio = total > 0 ? checked / total : 0;
                    const done = total > 0 && checked >= total;
                    const saved = isBookmarked(topic.slug);
                    return (
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
                            <div className="flex-1 min-w-0">
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
                                {done && (
                                  <span className="inline-flex items-center gap-0.5 rounded-pill bg-primary px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                                    <Check size={9} strokeWidth={3} /> Tuntas
                                  </span>
                                )}
                                {saved && (
                                  <BookmarkCheck
                                    size={12}
                                    className="text-accent"
                                  />
                                )}
                              </div>
                              <h3 className="mt-0.5 text-base font-bold text-ink">
                                {topic.title}
                              </h3>
                              <p className="mt-0.5 text-xs text-ink-soft">
                                {topic.description}
                              </p>
                              {checked > 0 && !done && total > 0 ? (
                                <div className="mt-1.5">
                                  <div className="h-1 w-full overflow-hidden rounded-pill bg-white/60">
                                    <div
                                      className="h-full rounded-pill bg-primary"
                                      style={{
                                        width: `${Math.round(ratio * 100)}%`,
                                      }}
                                    />
                                  </div>
                                  <p className="mt-0.5 text-[10px] text-ink-muted">
                                    {checked}/{total} bagian
                                  </p>
                                </div>
                              ) : (
                                <p className="mt-1 text-[11px] text-ink-muted">
                                  {total} bagian
                                </p>
                              )}
                            </div>
                            <ChevronRight
                              size={18}
                              className="mt-1 text-ink-muted"
                            />
                          </div>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
