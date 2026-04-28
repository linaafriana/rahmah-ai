"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, HeartHandshake } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Blob } from "@/components/illustrations/Blob";
import { featuredSituationIds, situations } from "@/data/seed-butuhkan";
import { id as t } from "@/lib/i18n/id";

export function PerasaanCard() {
  const featured = featuredSituationIds
    .map((id) => situations.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <Card tone="white" className="overflow-hidden border border-ink/5">
      <Blob
        color="#FADADD"
        size={140}
        className="absolute -right-8 -top-6 opacity-50"
      />
      <div className="relative">
        <div className="flex items-center gap-2">
          <HeartHandshake size={16} className="text-primary" />
          <h3 className="text-sm font-bold text-ink">
            {t.butuhkan.homePrompt}
          </h3>
        </div>
        <p className="mt-1 text-xs text-ink-soft">
          Pilih satu yang paling dekat — kami siapkan topik & doa untukmu.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {featured.map((s) => (
            <motion.div key={s.id} whileTap={{ scale: 0.96 }}>
              <Link
                href={`/butuhkan/${s.id}`}
                className="inline-flex items-center gap-1.5 rounded-pill bg-background px-3 py-1.5 text-xs font-medium text-ink shadow-soft hover:bg-primary-tint"
              >
                <span className="text-base leading-none">{s.emoji}</span>
                {s.short}
              </Link>
            </motion.div>
          ))}
        </div>
        <Link
          href="/butuhkan"
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
        >
          {t.butuhkan.homeCta}
          <ChevronRight size={14} />
        </Link>
      </div>
    </Card>
  );
}
