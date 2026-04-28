"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { readVisits, type VisitedTopic } from "@/components/belajar/BelajarVisitTracker";

export function ContinueLearningCard() {
  const [recent, setRecent] = useState<VisitedTopic[]>([]);

  useEffect(() => {
    setRecent(readVisits().slice(0, 2));
  }, []);

  if (recent.length === 0) {
    // First-time view — point to starter path
    return (
      <Link href="/belajar" className="block">
        <Card tone="white" className="border border-ink/5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-primary-tint text-primary">
              <GraduationCap size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-ink">Mulai belajar</p>
              <p className="mt-0.5 text-[11px] text-ink-soft">
                57 topik, dari pemula sampai lanjutan
              </p>
            </div>
            <ChevronRight size={18} className="text-ink-muted" />
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card tone="white">
        <div className="mb-2 flex items-center gap-2">
          <GraduationCap size={14} className="text-primary" />
          <h3 className="text-sm font-bold text-ink">
            Lanjutkan belajarmu
          </h3>
        </div>
        <div className="space-y-2">
          {recent.map((t) => (
            <Link
              key={t.slug}
              href={`/belajar/${t.slug}`}
              className="flex items-center gap-3 rounded-card bg-background px-3 py-2 hover:bg-primary-tint"
            >
              <span className="text-xl">{t.emoji}</span>
              <span className="flex-1 text-sm font-medium text-ink">
                {t.title}
              </span>
              <ChevronRight size={14} className="text-ink-muted" />
            </Link>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
