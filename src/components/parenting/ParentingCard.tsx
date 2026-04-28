"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ChevronRight, BookHeart, Sun, Stars } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { ParentingTopic } from "@/types";

const iconMap = {
  doa: BookHeart,
  sholat: Sun,
  habits: Stars,
} as const;

const toneMap: Record<ParentingTopic["illustration"], "primary" | "accent" | "secondary"> = {
  doa: "secondary",
  sholat: "accent",
  habits: "primary",
};

export function ParentingCard({ topic }: { topic: ParentingTopic }) {
  const Icon = iconMap[topic.illustration];
  return (
    <Link href={`/parenting/${topic.slug}`} className="block">
      <motion.div whileTap={{ scale: 0.98 }}>
        <Card tone={toneMap[topic.illustration]} className="overflow-hidden">
          <div className="flex items-center gap-4">
            <div
              className={clsx(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-white text-ink",
              )}
            >
              <Icon size={22} />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-ink">{topic.title}</h3>
              <p className="mt-0.5 text-xs text-ink-soft">
                {topic.description}
              </p>
            </div>
            <ChevronRight size={20} className="text-ink-muted" />
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
