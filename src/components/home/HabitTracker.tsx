"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Card } from "@/components/ui/Card";
import { id as t } from "@/lib/i18n/id";

const STORAGE_KEY = "sakinah:habits";
const dayLabels = ["Sn", "Sl", "Rb", "Km", "Jm", "Sb", "Mg"];

type HabitState = Record<string, Record<string, boolean>>; // habitId -> dateKey -> done

function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

function buildLastSevenDays(): Date[] {
  const days: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    days.push(d);
  }
  return days;
}

function readState(): HabitState {
  if (typeof window === "undefined") return {};
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as HabitState;
  } catch {
    return {};
  }
}

function writeState(s: HabitState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

function dayLabel(d: Date) {
  // JS getDay: 0=Sun..6=Sat; we want Sn..Mg
  const map = [6, 0, 1, 2, 3, 4, 5];
  return dayLabels[map[d.getDay()]];
}

function habitIdFor(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function HabitTracker() {
  const [state, setState] = useState<HabitState>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setState(readState());
    setLoaded(true);
  }, []);

  const days = useMemo(() => buildLastSevenDays(), []);
  const todayKey = isoDate(new Date());

  const habits = useMemo(
    () => t.habit.presets.map((label) => ({ id: habitIdFor(label), label })),
    [],
  );

  function toggleToday(habitId: string) {
    setState((prev) => {
      const next: HabitState = { ...prev };
      next[habitId] = { ...(next[habitId] ?? {}) };
      next[habitId][todayKey] = !next[habitId][todayKey];
      writeState(next);
      return next;
    });
  }

  if (!loaded) return null;

  return (
    <Card tone="white">
      <div className="flex items-baseline justify-between">
        <h3 className="text-sm font-bold text-ink">{t.habit.title}</h3>
        <span className="text-[11px] text-ink-muted">
          {t.habit.subtitle}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {habits.map((h) => {
          const dayMap = state[h.id] ?? {};
          const touchedThisWeek = days.filter((d) => dayMap[isoDate(d)]).length;
          const todayDone = !!dayMap[todayKey];
          return (
            <div key={h.id} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => toggleToday(h.id)}
                  className="flex items-center gap-2 text-left"
                >
                  <motion.span
                    animate={
                      todayDone ? { scale: [1, 1.25, 1] } : { scale: 1 }
                    }
                    transition={{ duration: 0.22, times: [0, 0.5, 1] }}
                    className={clsx(
                      "flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold transition-colors",
                      todayDone
                        ? "bg-primary text-white"
                        : "bg-background text-ink-muted",
                    )}
                    aria-pressed={todayDone}
                  >
                    {todayDone ? "✓" : "·"}
                  </motion.span>
                  <span className="text-sm font-medium text-ink">
                    {h.label}
                  </span>
                </button>
                <span className="text-[10px] text-ink-muted">
                  {touchedThisWeek}/7 hari
                </span>
              </div>
              <div className="ml-7 flex gap-1">
                {days.map((d) => {
                  const key = isoDate(d);
                  const done = !!dayMap[key];
                  const isToday = key === todayKey;
                  return (
                    <div
                      key={key}
                      className="flex flex-1 flex-col items-center gap-1"
                    >
                      <span
                        className={clsx(
                          "h-1.5 w-full rounded-pill transition-colors",
                          done
                            ? "bg-primary"
                            : isToday
                              ? "bg-primary/30"
                              : "bg-ink/10",
                        )}
                      />
                      <span
                        className={clsx(
                          "text-[9px]",
                          isToday ? "font-bold text-primary" : "text-ink-muted",
                        )}
                      >
                        {dayLabel(d)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-[11px] italic text-ink-soft">
        Tidak ada streak yang putus. Setiap usaha tetap dicatat 🤍
      </p>
    </Card>
  );
}
