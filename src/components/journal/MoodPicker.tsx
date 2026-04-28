"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";
import { Card } from "@/components/ui/Card";
import { moodToSituation } from "@/data/seed-butuhkan";
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

const order: Mood[] = [
  "joyful",
  "calm",
  "loved",
  "tired",
  "sad",
  "tearful",
  "angry",
];

type Props = {
  value: Mood | undefined;
  onChange: (mood: Mood) => void;
};

export function MoodPicker({ value, onChange }: Props) {
  const linkedSituation = value ? moodToSituation[value] : undefined;

  return (
    <Card tone="white">
      <h3 className="text-sm font-bold text-ink">
        {t.journal.moodPickerTitle}
      </h3>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {order.map((m) => {
          const active = value === m;
          return (
            <motion.button
              key={m}
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={() => onChange(m)}
              className={clsx(
                "flex shrink-0 flex-col items-center gap-1 rounded-card px-3 py-2 transition-colors",
                active
                  ? "bg-primary text-white shadow-soft"
                  : "bg-background text-ink hover:bg-primary-tint",
              )}
              aria-pressed={active}
            >
              <span className="text-2xl leading-none">{moodEmoji[m]}</span>
              <span className="text-[11px] font-medium">{t.moods[m]}</span>
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence>
        {linkedSituation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <Link
              href={`/butuhkan/${linkedSituation}`}
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
            >
              {t.butuhkan.moodPickerLink.replace(" →", "")}
              <ChevronRight size={14} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
