"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Card } from "@/components/ui/Card";
import { useAuth } from "@/providers/AuthProvider";
import { loadJournalsInRange } from "@/lib/firebase/firestore";
import { localDateKey } from "@/lib/date";
import { id as t } from "@/lib/i18n/id";
import type { Mood } from "@/types";

const moodEmoji: Record<Mood, string> = {
  joyful: "😊",
  calm: "😌",
  sad: "😔",
  tearful: "😢",
  angry: "😤",
  tired: "😴",
  loved: "🥰",
};

const moodColor: Record<Mood, string> = {
  joyful: "#FFD66B",
  calm: "#A8D8D0",
  sad: "#B6CCE6",
  tearful: "#C5BFE6",
  angry: "#F2A6A0",
  tired: "#E2D6C9",
  loved: "#FADADD",
};

const moodHeight: Record<Mood, number> = {
  joyful: 0.95,
  loved: 0.85,
  calm: 0.7,
  tired: 0.55,
  sad: 0.4,
  tearful: 0.35,
  angry: 0.5,
};

const dayLabels = ["Sn", "Sl", "Rb", "Km", "Jm", "Sb", "Mg"];

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

function dayLabel(d: Date) {
  // JS getDay: 0=Sun..6=Sat; we want Sn..Mg
  const map = [6, 0, 1, 2, 3, 4, 5];
  return dayLabels[map[d.getDay()]];
}

export function MoodTracker() {
  const { user } = useAuth();
  const [entries, setEntries] = useState<Record<string, Mood | undefined>>({});

  useEffect(() => {
    const days = buildLastSevenDays();
    const collected: Record<string, Mood | undefined> = {};

    if (typeof window !== "undefined") {
      for (const d of days) {
        const key = `sakinah:journal:${isoDate(d)}`;
        const raw = window.localStorage.getItem(key);
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            if (parsed?.mood) collected[isoDate(d)] = parsed.mood as Mood;
          } catch {}
        }
      }
      setEntries((e) => ({ ...e, ...collected }));
    }

    if (user) {
      const from = isoDate(days[0]);
      const to = isoDate(days[days.length - 1]);
      void loadJournalsInRange(user.uid, from, to).then((items) => {
        const map: Record<string, Mood | undefined> = {};
        for (const entry of items) {
          if (entry.mood) map[entry.date] = entry.mood;
        }
        setEntries((e) => ({ ...e, ...map }));
      });
    }
  }, [user]);

  const days = useMemo(() => buildLastSevenDays(), []);
  const hasAny = Object.values(entries).some(Boolean);

  return (
    <Card tone="white">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-ink">{t.journal.moodTitle}</h3>
        {!hasAny && (
          <span className="text-[11px] text-ink-muted">
            Belum ada catatan minggu ini
          </span>
        )}
      </div>
      <div className="mt-4 flex h-32 items-end justify-between gap-2">
        {days.map((d, i) => {
          const key = isoDate(d);
          const mood = entries[key];
          const height = mood ? moodHeight[mood] : 0.12;
          const color = mood ? moodColor[mood] : "#EEE5DC";
          return (
            <div
              key={key}
              className="flex flex-1 flex-col items-center gap-2"
            >
              <span className="text-base">
                {mood ? moodEmoji[mood] : "·"}
              </span>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${height * 100}%` }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                  delay: i * 0.05,
                }}
                className={clsx("w-full rounded-pill")}
                style={{ backgroundColor: color }}
              />
              <span className="text-[10px] font-medium text-ink-muted">
                {dayLabel(d)}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
