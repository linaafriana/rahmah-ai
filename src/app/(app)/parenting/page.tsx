"use client";

import { motion } from "framer-motion";
import { ParentingCard } from "@/components/parenting/ParentingCard";
import { seedParenting } from "@/data/seed-parenting";
import { id as t } from "@/lib/i18n/id";

export default function ParentingPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-5"
    >
      <header>
        <h1 className="text-3xl font-bold text-ink">{t.parenting.title}</h1>
        <p className="mt-1 text-sm text-ink-soft">{t.parenting.subtitle}</p>
      </header>
      <div className="space-y-3">
        {seedParenting.map((topic) => (
          <ParentingCard key={topic.id} topic={topic} />
        ))}
      </div>
    </motion.div>
  );
}
