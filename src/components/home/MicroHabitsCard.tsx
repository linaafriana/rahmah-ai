"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";
import { Card } from "@/components/ui/Card";
import { localDateKey } from "@/lib/date";
import { id as t } from "@/lib/i18n/id";

const STORAGE_KEY = (date: string) => `sakinah:micro:${date}`;
const SHOWN = 5;

const isoDate = localDateKey;

// Deterministic 5-of-pool selection per day (so it stays stable across the day)
function pickToday(pool: typeof t.microHabits.pool, dateKey: string) {
  const seed = Array.from(dateKey).reduce(
    (acc, ch) => acc + ch.charCodeAt(0),
    0,
  );
  const indices: number[] = [];
  let cursor = seed;
  while (indices.length < SHOWN) {
    cursor = (cursor * 9301 + 49297) % 233280;
    const idx = cursor % pool.length;
    if (!indices.includes(idx)) indices.push(idx);
  }
  return indices.map((i) => pool[i]);
}

export function MicroHabitsCard() {
  const dateKey = isoDate();
  const items = useMemo(
    () => pickToday(t.microHabits.pool, dateKey),
    [dateKey],
  );
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY(dateKey));
    if (raw) {
      try {
        setDone(JSON.parse(raw));
      } catch {}
    }
    setLoaded(true);
  }, [dateKey]);

  function toggle(text: string) {
    setDone((prev) => {
      const next = { ...prev, [text]: !prev[text] };
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY(dateKey), JSON.stringify(next));
      }
      return next;
    });
  }

  if (!loaded) return null;

  const completed = items.filter((it) => done[it.text]).length;

  return (
    <Card tone="cream" className="overflow-hidden border border-ink/5">
      <div className="flex items-baseline justify-between">
        <h3 className="text-sm font-bold text-ink">{t.microHabits.title}</h3>
        <span className="text-[11px] text-ink-muted">
          {completed}/{items.length}
        </span>
      </div>
      <p className="text-xs text-ink-soft">{t.microHabits.subtitle}</p>
      <div className="mt-3 space-y-2">
        <AnimatePresence>
          {items.map((it) => {
            const isDone = !!done[it.text];
            return (
              <motion.button
                key={it.text}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggle(it.text)}
                className={clsx(
                  "flex w-full items-center gap-2.5 rounded-card px-3 py-2 text-left transition-colors",
                  isDone
                    ? "bg-primary-tint text-ink"
                    : "bg-white text-ink hover:bg-primary-tint/40",
                )}
              >
                <motion.span
                  animate={isDone ? { scale: [1, 1.25, 1] } : { scale: 1 }}
                  transition={{ duration: 0.22, times: [0, 0.5, 1] }}
                  className={clsx(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors",
                    isDone
                      ? "bg-primary text-white"
                      : "bg-background text-ink-muted",
                  )}
                >
                  {isDone ? <Check size={12} strokeWidth={3} /> : (
                    <span className="text-base leading-none">{it.emoji}</span>
                  )}
                </motion.span>
                <span
                  className={clsx(
                    "flex-1 text-xs",
                    isDone && "text-ink-soft line-through decoration-ink-soft/40",
                  )}
                >
                  {it.text}
                </span>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </Card>
  );
}
