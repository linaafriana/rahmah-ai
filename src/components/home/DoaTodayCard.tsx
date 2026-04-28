"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Blob } from "@/components/illustrations/Blob";
import { doaOfToday } from "@/data/seed-belajar";
import { id as t } from "@/lib/i18n/id";

export function DoaTodayCard() {
  const data = doaOfToday();
  if (!data) return null;
  const { topic, itemIndex } = data;
  const item = topic.items[itemIndex];

  return (
    <Link href={`/belajar/${topic.slug}`} className="block">
      <Card tone="cream" className="overflow-hidden border border-ink/5">
        <Blob
          color="#FFE9A8"
          size={140}
          className="absolute -right-6 -top-6 opacity-50"
        />
        <div className="relative">
          <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">
            🤲 {t.doaToday.title}
          </p>
          <h3 className="mt-1 text-sm font-bold text-ink">{item.title}</h3>
          {item.arabic && (
            <p
              className="mt-3 text-right font-arabic text-xl leading-loose text-ink"
              dir="rtl"
            >
              {item.arabic}
            </p>
          )}
          {item.transliteration && (
            <p className="mt-1 text-xs italic text-ink-soft">
              {item.transliteration}
            </p>
          )}
          <p className="mt-2 text-xs leading-relaxed text-ink-soft">
            {item.body}
          </p>
          <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
            {t.doaToday.cta}
            <ChevronRight size={14} />
          </div>
        </div>
      </Card>
    </Link>
  );
}
