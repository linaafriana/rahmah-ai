"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Pencil, Plus, Trash2, Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { localDateKey } from "@/lib/date";
import { id as t } from "@/lib/i18n/id";

// Habit history is intentionally device-local — never synced to Firestore.
// The README's "no streak guilt" principle means losing 7-day history on a
// device switch is acceptable. Promote to a Firestore collection if/when
// habits become a cross-device feature.
const STATE_KEY = "sakinah:habits";
const CUSTOM_KEY = "sakinah:habitsCustom";
const MAX_CUSTOM = 5;
const dayLabels = ["Sn", "Sl", "Rb", "Km", "Jm", "Sb", "Mg"];

type HabitState = Record<string, Record<string, boolean>>; // habitId -> dateKey -> done
type CustomHabit = { id: string; label: string };

const isoDate = localDateKey;

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
  const raw = window.localStorage.getItem(STATE_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as HabitState;
  } catch {
    return {};
  }
}

function writeState(s: HabitState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STATE_KEY, JSON.stringify(s));
}

function readCustom(): CustomHabit[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(CUSTOM_KEY);
  if (!raw) return [];
  try {
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function writeCustom(items: CustomHabit[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CUSTOM_KEY, JSON.stringify(items));
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
  const [custom, setCustom] = useState<CustomHabit[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    setState(readState());
    setCustom(readCustom());
    setLoaded(true);
  }, []);

  const days = useMemo(() => buildLastSevenDays(), []);
  const todayKey = isoDate(new Date());

  const presets = useMemo(
    () =>
      t.habit.presets.map((label) => ({
        id: habitIdFor(label),
        label,
        custom: false,
      })),
    [],
  );

  const habits = useMemo(
    () => [...presets, ...custom.map((c) => ({ ...c, custom: true }))],
    [presets, custom],
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

  function addCustom() {
    const label = draft.trim();
    if (!label) return;
    if (custom.length >= MAX_CUSTOM) return;
    const id = `c-${Date.now()}-${habitIdFor(label).slice(0, 16)}`;
    const next = [...custom, { id, label }];
    setCustom(next);
    writeCustom(next);
    setDraft("");
  }

  function removeCustom(id: string) {
    const next = custom.filter((c) => c.id !== id);
    setCustom(next);
    writeCustom(next);
    // Also clear its tracking history so the same id doesn't pollute later
    setState((prev) => {
      const copy = { ...prev };
      delete copy[id];
      writeState(copy);
      return copy;
    });
  }

  if (!loaded) return null;

  return (
    <Card tone="white">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-bold text-ink">{t.habit.title}</h3>
          {!editing && (
            <p className="mt-0.5 text-[11px] text-ink-muted">
              {t.habit.subtitle}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={() => setEditing((v) => !v)}
          className="inline-flex items-center gap-1 rounded-pill bg-background px-3 py-1.5 text-[11px] font-semibold text-ink-soft hover:bg-primary-tint hover:text-primary"
          aria-label={editing ? t.habit.done : t.habit.edit}
        >
          {editing ? (
            <>
              <Check size={12} strokeWidth={3} />
              {t.habit.done}
            </>
          ) : (
            <>
              <Pencil size={12} />
              {t.habit.edit}
            </>
          )}
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {habits.map((h) => {
          const dayMap = state[h.id] ?? {};
          const touchedThisWeek = days.filter(
            (d) => dayMap[isoDate(d)],
          ).length;
          const todayDone = !!dayMap[todayKey];
          return (
            <div key={h.id} className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => !editing && toggleToday(h.id)}
                  disabled={editing}
                  className={clsx(
                    "flex flex-1 items-center gap-2 text-left",
                    editing && "cursor-default",
                  )}
                >
                  <motion.span
                    animate={
                      todayDone && !editing
                        ? { scale: [1, 1.25, 1] }
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.22, times: [0, 0.5, 1] }}
                    className={clsx(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-colors",
                      todayDone
                        ? "bg-primary text-white"
                        : "bg-background text-ink-muted",
                      editing && "opacity-40",
                    )}
                    aria-pressed={todayDone}
                  >
                    {todayDone ? "✓" : "·"}
                  </motion.span>
                  <span className="text-sm font-medium text-ink">
                    {h.label}
                  </span>
                </button>
                {editing && h.custom ? (
                  <button
                    type="button"
                    onClick={() => removeCustom(h.id)}
                    aria-label={t.habit.removeLabel}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-ink-muted hover:bg-rose-50 hover:text-rose-500"
                  >
                    <Trash2 size={12} />
                  </button>
                ) : (
                  !editing && (
                    <span className="text-[10px] text-ink-muted">
                      {touchedThisWeek}/7 hari
                    </span>
                  )
                )}
              </div>
              {!editing && (
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
                            isToday
                              ? "font-bold text-primary"
                              : "text-ink-muted",
                          )}
                        >
                          {dayLabel(d)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {editing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-4 border-t border-ink/5 pt-4">
              {custom.length < MAX_CUSTOM ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addCustom();
                      }
                    }}
                    placeholder={t.habit.addPlaceholder}
                    maxLength={48}
                    className="flex-1 rounded-card border border-ink/10 bg-background px-3 py-2 text-sm text-ink outline-none focus:border-primary"
                  />
                  <button
                    type="button"
                    onClick={addCustom}
                    disabled={!draft.trim()}
                    className="inline-flex items-center gap-1 rounded-pill bg-primary px-3 py-2 text-xs font-semibold text-white shadow-soft disabled:opacity-50"
                  >
                    <Plus size={12} strokeWidth={3} />
                    {t.habit.addAction}
                  </button>
                </div>
              ) : (
                <p className="text-[11px] text-ink-muted">
                  {t.habit.customLimitHint}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!editing && (
        <p className="mt-4 text-[11px] italic text-ink-soft">
          Tidak ada streak yang putus. Setiap usaha tetap dicatat 🤍
        </p>
      )}
    </Card>
  );
}
