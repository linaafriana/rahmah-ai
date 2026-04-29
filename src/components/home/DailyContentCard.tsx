"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Hand, Quote, Star } from "lucide-react";
import clsx from "clsx";
import { Card } from "@/components/ui/Card";
import { reflectionForToday } from "@/data/seed-reflections";
import { asmaulHusnaOfDay } from "@/data/seed-asmaul-husna";
import { doaOfToday } from "@/data/seed-belajar";
import { id as t } from "@/lib/i18n/id";

type Tab = "ayah" | "asma" | "doa";

const tabs: { key: Tab; label: string; Icon: typeof Quote }[] = [
  { key: "ayah", label: "Ayah", Icon: Quote },
  { key: "asma", label: "Nama Allah", Icon: Star },
  { key: "doa", label: "Doa", Icon: Hand },
];

export function DailyContentCard() {
  const [tab, setTab] = useState<Tab>("ayah");
  const reflection = reflectionForToday();
  const name = asmaulHusnaOfDay();
  const todayDoa = doaOfToday();

  return (
    <Card tone="white" className="overflow-hidden">
      <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">
        Untukmu hari ini
      </p>

      {/* Tab pills */}
      <div className="mt-2 flex gap-1.5">
        {tabs.map(({ key, label, Icon }) => {
          const active = tab === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={clsx(
                "flex flex-1 items-center justify-center gap-1 rounded-pill py-1.5 text-[11px] font-semibold transition-colors",
                active
                  ? "bg-primary text-white shadow-soft"
                  : "bg-background text-ink-soft hover:bg-primary-tint/40",
              )}
              aria-pressed={active}
            >
              <Icon size={11} strokeWidth={active ? 2.5 : 2} />
              {label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {tab === "ayah" && (
          <motion.div
            key="ayah"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="mt-3"
          >
            <p
              className="text-right font-arabic text-2xl leading-loose text-ink"
              dir="rtl"
            >
              {reflection.arabic}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink">
              {reflection.translation}
            </p>
            <div className="mt-2 flex items-center justify-between text-[11px] text-ink-soft">
              <span>
                QS. {reflection.surahName} : {reflection.ayahNumber}
              </span>
              <span className="rounded-pill bg-background px-2 py-0.5 text-[10px] font-medium">
                #{t.tones[reflection.tone]}
              </span>
            </div>
          </motion.div>
        )}

        {tab === "asma" && (
          <motion.div
            key="asma"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="mt-3"
          >
            <p
              className="text-right font-arabic text-3xl text-ink"
              dir="rtl"
            >
              {name.arabic}
            </p>
            <p className="mt-1 text-right text-xs italic text-ink-soft">
              {name.transliteration} — {name.meaning}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              {name.reflection}
            </p>
            <Link
              href="/belajar/asmaul-husna"
              className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline"
            >
              Lihat 99 nama Allah
              <ChevronRight size={12} />
            </Link>
          </motion.div>
        )}

        {tab === "doa" && todayDoa && (
          <motion.div
            key="doa"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="mt-3"
          >
            <p className="text-sm font-bold text-ink">
              {todayDoa.topic.items[todayDoa.itemIndex].title}
            </p>
            {todayDoa.topic.items[todayDoa.itemIndex].arabic && (
              <p
                className="mt-2 text-right font-arabic text-xl leading-loose text-ink"
                dir="rtl"
              >
                {todayDoa.topic.items[todayDoa.itemIndex].arabic}
              </p>
            )}
            {todayDoa.topic.items[todayDoa.itemIndex].transliteration && (
              <p className="mt-1 text-xs italic text-ink-soft">
                {todayDoa.topic.items[todayDoa.itemIndex].transliteration}
              </p>
            )}
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {todayDoa.topic.items[todayDoa.itemIndex].body}
            </p>
            <Link
              href={`/belajar/${todayDoa.topic.slug}`}
              className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline"
            >
              Lihat semua doa harian
              <ChevronRight size={12} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
