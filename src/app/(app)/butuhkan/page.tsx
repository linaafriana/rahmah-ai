"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { situations } from "@/data/seed-butuhkan";
import { id as t } from "@/lib/i18n/id";
import type { SituationGroup } from "@/data/seed-butuhkan";

const groupOrder: SituationGroup[] = ["hati", "hidup"];

const groupLabel: Record<SituationGroup, string> = {
  hati: t.butuhkan.groupHati,
  hidup: t.butuhkan.groupHidup,
};

export default function ButuhkanHub() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <header>
        <h1 className="text-3xl font-bold text-ink">{t.butuhkan.title}</h1>
        <p className="mt-1 text-sm text-ink-soft">{t.butuhkan.subtitle}</p>
      </header>

      {groupOrder.map((group) => {
        const list = situations.filter((s) => s.group === group);
        return (
          <section key={group} className="space-y-3">
            <h2 className="px-1 text-sm font-bold text-ink">
              {groupLabel[group]}
            </h2>
            <div className="space-y-2.5">
              {list.map((s) => (
                <Link key={s.id} href={`/butuhkan/${s.id}`} className="block">
                  <Card
                    tone={group === "hati" ? "white" : "cream"}
                    padded={false}
                    className="px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-primary-tint text-xl">
                        {s.emoji}
                      </div>
                      <p className="flex-1 text-sm font-semibold text-ink">
                        {s.label}
                      </p>
                      <ChevronRight size={16} className="text-ink-muted" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </motion.div>
  );
}
