"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Blob } from "@/components/illustrations/Blob";
import { DzikirCounter } from "@/components/dzikir/DzikirCounter";
import { useAuth } from "@/providers/AuthProvider";
import { bumpDzikirCount } from "@/lib/firebase/firestore";
import { id as t } from "@/lib/i18n/id";

export default function TaubatPage() {
  const { user } = useAuth();
  const [started, setStarted] = useState(false);
  const pendingRef = useRef(0);
  const flushTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function onIstighfar() {
    if (!user) return;
    pendingRef.current += 1;
    if (flushTimer.current) clearTimeout(flushTimer.current);
    flushTimer.current = setTimeout(() => {
      const delta = pendingRef.current;
      pendingRef.current = 0;
      if (delta > 0) void bumpDzikirCount(user.uid, "istighfar", delta);
    }, 800);
  }
  return (
    <main className="relative min-h-dvh overflow-hidden bg-gradient-to-b from-background via-secondary-soft to-secondary">
      <Blob
        color="#FADADD"
        size={360}
        className="absolute -left-24 -top-20 opacity-70"
      />
      <Blob
        color="#FFE9A8"
        size={280}
        className="absolute -right-20 top-40 opacity-60"
        delay={1.2}
      />
      <Blob
        color="#A8D8D0"
        size={300}
        className="absolute -bottom-24 left-10 opacity-60"
        delay={0.6}
      />

      <Link
        href="/home"
        className="absolute left-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-ink shadow-soft backdrop-blur"
        aria-label={t.taubat.exit}
      >
        <X size={18} />
      </Link>

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 text-center">
        <AnimatePresence>
          {!started ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              {/* Plain h1 — the previous perpetual `motion.h1 animate={{ y:
                  [0,-4,0], repeat: Infinity }}` left the layer in an
                  un-painted state in some browsers; the heading rect was
                  correct and computed styles said visible, but no glyphs
                  rendered. Wobble removed; the entry transition above is
                  the only motion this heading needs. */}
              <h1 className="text-balance text-3xl font-bold leading-snug text-ink">
                {t.taubat.title}
              </h1>
              <p className="mt-4 text-sm text-ink-soft">
                {t.taubat.subtitle}
              </p>
              <Button
                size="lg"
                className="mt-10"
                onClick={() => setStarted(true)}
              >
                {t.taubat.cta}
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="counter"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-6"
            >
              <p
                className="font-arabic text-3xl text-ink"
                dir="rtl"
              >
                أَسْتَغْفِرُ ٱللَّٰهَ ٱلْعَظِيمَ
              </p>
              <p className="text-sm text-ink-soft">{t.taubat.meaning}</p>
              <DzikirCounter size="lg" onIncrement={onIstighfar} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
