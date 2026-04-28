"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { LeafShape } from "@/components/illustrations/LeafShape";
import { id as t } from "@/lib/i18n/id";
import type { Reflection } from "@/types";

export function ReflectionCard({ reflection }: { reflection: Reflection }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card tone="accent" className="overflow-hidden">
        <LeafShape
          color="#FFFFFF"
          size={90}
          rotate={20}
          className="absolute -right-3 -top-3 opacity-60"
        />
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
          {t.home.reflection.header}
        </p>
        <p
          className="mt-3 text-right font-arabic text-2xl leading-loose text-ink"
          dir="rtl"
        >
          {reflection.arabic}
        </p>
        <p className="mt-3 text-sm text-ink">{reflection.translation}</p>
        <p className="mt-1 text-xs text-ink-soft">
          QS. {reflection.surahName} : {reflection.ayahNumber}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="rounded-pill bg-white/70 px-3 py-1 text-xs font-medium text-ink-soft">
            #{t.tones[reflection.tone]}
          </span>
          <Button variant="primary" size="md" onClick={() => setOpen(true)}>
            {t.home.reflection.cta}
          </Button>
        </div>
      </Card>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end bg-ink/50 backdrop-blur-sm sm:items-center sm:justify-center"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-t-card-lg bg-background p-6 sm:rounded-card-lg"
            >
              <h2 className="text-lg font-bold text-ink">
                {t.home.reflection.header}
              </h2>
              <p
                className="mt-4 text-right font-arabic text-3xl leading-loose text-ink"
                dir="rtl"
              >
                {reflection.arabic}
              </p>
              <p className="mt-4 text-base text-ink">
                {reflection.translation}
              </p>
              <p className="mt-2 text-xs text-ink-soft">
                QS. {reflection.surahName} : {reflection.ayahNumber}
              </p>
              <Button
                variant="soft"
                fullWidth
                size="lg"
                className="mt-6"
                onClick={() => setOpen(false)}
              >
                {t.common.close}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
