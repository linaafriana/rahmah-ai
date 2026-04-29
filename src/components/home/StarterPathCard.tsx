"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Sparkles, X } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { findLearnTopic } from "@/data/seed-belajar";

type Focus = "sholat" | "quran" | "tahsin" | "hati" | "belum";

const recommendations: Record<Focus, string[]> = {
  sholat: ["sholat-fardhu", "khusyu-sholat", "sholat-jamaah"],
  quran: ["adab-al-quran", "ulumul-quran", "doa-harian"],
  tahsin: ["hijaiyah", "makharij", "tajwid"],
  hati: ["niat-ikhlas", "akhlak-harian", "tobat-nasuha"],
  belum: ["pengantar-islam", "rukun-iman", "doa-harian"],
};

const labels: Record<Focus, string> = {
  sholat: "rajin sholat",
  quran: "belajar Al-Qur'an",
  tahsin: "tahsin & tajwid",
  hati: "akhlak & hati",
  belum: "memulai pelan-pelan",
};

const FOCUS_KEY = "sakinah:focus";
const STARTED_KEY = "sakinah:starterStarted";
const DISMISS_KEY = "sakinah:starterDismissed";

export function StarterPathCard() {
  const [focus, setFocus] = useState<Focus | null>(null);
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const f = window.localStorage.getItem(FOCUS_KEY);
    if (f && f in recommendations) setFocus(f as Focus);
    const startedRaw = window.localStorage.getItem(STARTED_KEY);
    if (startedRaw) {
      try {
        const arr: string[] = JSON.parse(startedRaw);
        setCompleted(new Set(arr));
      } catch {}
    }
    setDismissed(window.localStorage.getItem(DISMISS_KEY) === "1");
  }, []);

  function dismiss() {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(DISMISS_KEY, "1");
    }
    setDismissed(true);
  }

  function markVisited(slug: string) {
    const next = new Set(completed);
    next.add(slug);
    setCompleted(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        STARTED_KEY,
        JSON.stringify(Array.from(next)),
      );
    }
  }

  if (!focus || dismissed) return null;
  const slugs = recommendations[focus];
  const topics = slugs
    .map((s) => findLearnTopic(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  if (topics.length === 0) return null;

  const allDone = topics.every((t) => completed.has(t.slug));
  // Auto-dismiss when all 3 are visited
  if (allDone && !dismissed) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(DISMISS_KEY, "1");
    }
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
      >
        <Card tone="cream" className="overflow-hidden border border-primary/20">
          <button
            type="button"
            onClick={dismiss}
            aria-label="Tutup"
            className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/60 text-ink-muted hover:text-ink"
          >
            <X size={12} />
          </button>
          <div className="flex items-center gap-2 pr-6">
            <Sparkles size={14} className="text-primary" />
            <h3 className="text-sm font-bold text-ink">Jalur untukmu</h3>
          </div>
          <p className="mt-0.5 text-[11px] text-ink-soft">
            Berdasarkan fokusmu — {labels[focus]}.
          </p>
          <ol className="mt-3 space-y-1.5">
            {topics.map((topic, i) => {
              const done = completed.has(topic.slug);
              return (
                <li key={topic.id}>
                  <Link
                    href={`/belajar/${topic.slug}`}
                    onClick={() => markVisited(topic.slug)}
                    className="flex items-center gap-2 rounded-card bg-white px-3 py-2 text-sm text-ink hover:bg-primary-tint"
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                        done
                          ? "bg-primary text-white"
                          : "bg-primary-tint text-primary"
                      }`}
                    >
                      {done ? "✓" : i + 1}
                    </span>
                    <span
                      className={`flex-1 truncate ${
                        done ? "text-ink-soft line-through decoration-ink-muted/40" : ""
                      }`}
                    >
                      {topic.title}
                    </span>
                    <span className="text-base">{topic.emoji}</span>
                    <ChevronRight size={14} className="text-ink-muted" />
                  </Link>
                </li>
              );
            })}
          </ol>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
