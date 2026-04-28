"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Blob } from "@/components/illustrations/Blob";
import { id as t } from "@/lib/i18n/id";

export function DzikirCTA() {
  return (
    <Link href="/dzikir" className="block">
      <Card tone="secondary" className="overflow-hidden">
        <Blob
          color="#FFD66B"
          size={150}
          className="absolute -right-6 -top-8 opacity-70"
        />
        <Blob
          color="#FFFFFF"
          size={100}
          className="absolute -bottom-6 -left-4 opacity-70"
          delay={0.4}
        />
        <div className="relative flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
              Aksi cepat
            </p>
            <h3 className="mt-1 text-xl font-bold text-ink">
              {t.home.dzikirCta}
            </h3>
            <p className="mt-1 text-xs text-ink-soft">
              Tenangkan hati dengan mengingat Allah
            </p>
          </div>
          <motion.div
            whileHover={{ rotate: 8 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-soft"
          >
            <Sparkles size={26} />
          </motion.div>
        </div>
      </Card>
    </Link>
  );
}
