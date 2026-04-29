"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Pencil, Check } from "lucide-react";
import clsx from "clsx";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { localDateKey, tomorrowKey } from "@/lib/date";
import { id as t } from "@/lib/i18n/id";

const STORAGE_KEY = (date: string) => `sakinah:niat:${date}`;

const todayKey = localDateKey;

function getCurrentHour() {
  return new Date().getHours();
}

export function NiatBesokCard() {
  // Before 8pm: niat for today (carry-over from last night, or set today)
  // After 8pm: niat for tomorrow
  const targetDate = getCurrentHour() < 20 ? todayKey() : tomorrowKey();
  const isForTomorrow = targetDate !== todayKey();

  const [niat, setNiat] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY(targetDate));
    if (stored) setNiat(stored);
  }, [targetDate]);

  function save(value: string) {
    if (!value.trim()) return;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY(targetDate), value.trim());
    }
    setNiat(value.trim());
    setEditing(false);
    setDraft("");
  }

  if (!niat && !editing) {
    return (
      <Card tone="primary" className="overflow-hidden">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-primary" />
          <h3 className="text-sm font-bold text-ink">
            {isForTomorrow
              ? "Niatkan satu hal kecil untuk besok"
              : "Niatkan satu hal kecil hari ini"}
          </h3>
        </div>
        <p className="mt-1 text-xs text-ink-soft">{t.niat.subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {t.niat.presets.slice(0, 5).map((preset) => (
            <motion.button
              key={preset}
              whileTap={{ scale: 0.95 }}
              onClick={() => save(preset)}
              className="rounded-pill bg-white px-3 py-1.5 text-xs font-medium text-ink shadow-soft hover:bg-primary-tint"
            >
              {preset}
            </motion.button>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setEditing(true)}
            className="inline-flex items-center gap-1 rounded-pill bg-white px-3 py-1.5 text-xs font-medium text-ink-soft shadow-soft hover:text-primary"
          >
            <Pencil size={12} />
            Tulis sendiri
          </motion.button>
        </div>
      </Card>
    );
  }

  if (editing) {
    return (
      <Card tone="primary">
        <h3 className="text-sm font-bold text-ink">{t.niat.titleSet}</h3>
        <textarea
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={t.niat.placeholder}
          rows={2}
          className="mt-3 w-full resize-none rounded-card bg-white px-3 py-2.5 text-sm text-ink outline-none focus:ring-2 focus:ring-primary/40"
        />
        <div className="mt-3 flex gap-2">
          <Button size="md" onClick={() => save(draft)}>
            {t.niat.save}
          </Button>
          <Button
            size="md"
            variant="soft"
            onClick={() => {
              setEditing(false);
              setDraft("");
            }}
          >
            Batal
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={niat}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Card tone="primary" className="overflow-hidden">
          <div className="flex items-center gap-2">
            <span
              className={clsx(
                "flex h-6 w-6 items-center justify-center rounded-full",
                "bg-primary text-white",
              )}
            >
              <Check size={14} strokeWidth={3} />
            </span>
            <h3 className="text-sm font-bold text-ink">
              {isForTomorrow ? "Niatmu untuk besok" : t.niat.titleToday}
            </h3>
          </div>
          <p className="mt-2 text-base font-semibold text-ink">
            &ldquo;{niat}&rdquo;
          </p>
          <button
            type="button"
            onClick={() => {
              setEditing(true);
              setDraft(niat ?? "");
            }}
            className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-ink-soft hover:text-primary"
          >
            <Pencil size={11} />
            {t.niat.edit}
          </button>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
