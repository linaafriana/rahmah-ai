"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Blob } from "@/components/illustrations/Blob";
import { DzikirCounter } from "@/components/dzikir/DzikirCounter";
import { useAuth } from "@/providers/AuthProvider";
import { bumpDzikirCount } from "@/lib/firebase/firestore";
import { id as t } from "@/lib/i18n/id";

const NIAT_KEY = (date: string) => `sakinah:niat:${date}`;

function tomorrowKey() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

export default function KembaliPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [niat, setNiat] = useState("");
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

  function saveNiat(value: string) {
    if (!value.trim()) return;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(NIAT_KEY(tomorrowKey()), value.trim());
    }
    setNiat(value.trim());
    setStep(4);
  }

  return (
    <main className="relative min-h-dvh overflow-hidden bg-gradient-to-b from-background via-secondary-soft/40 to-secondary-soft">
      <Blob
        color="#FADADD"
        size={320}
        className="absolute -left-20 -top-20 opacity-50"
      />
      <Blob
        color="#FFE9A8"
        size={260}
        className="absolute -right-16 top-32 opacity-50"
        delay={1.2}
      />
      <Blob
        color="#A8D8D0"
        size={280}
        className="absolute -bottom-24 left-10 opacity-50"
        delay={0.6}
      />

      <div className="relative z-10 mx-auto max-w-md px-5 py-8 pb-12">
        <header className="mb-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-balance text-3xl font-bold text-ink"
          >
            {t.kembali.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-sm text-ink-soft"
          >
            {t.kembali.subtitle}
          </motion.p>
        </header>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="s1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <Card tone="white">
                <h2 className="text-lg font-bold text-ink">
                  {t.kembali.step1Title}
                </h2>
                <p className="mt-1 text-sm text-ink-soft">
                  {t.kembali.step1Body}
                </p>
                <p
                  className="mt-4 text-right font-arabic text-2xl leading-loose text-ink"
                  dir="rtl"
                >
                  أَسْتَغْفِرُ ٱللَّٰهَ ٱلْعَظِيمَ
                </p>
                <p className="mt-1 text-center text-xs italic text-ink-soft">
                  Astaghfirullāhal-&rsquo;azhīm
                </p>
                <div className="mt-5 flex justify-center">
                  <DzikirCounter onIncrement={onIstighfar} />
                </div>
              </Card>
              <Button fullWidth size="lg" onClick={() => setStep(2)}>
                Selanjutnya
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="s2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <Card tone="white">
                <h2 className="text-lg font-bold text-ink">
                  {t.kembali.step2Title}
                </h2>
                <p className="mt-1 text-sm text-ink-soft">
                  {t.kembali.step2Body}
                </p>
                <textarea
                  autoFocus
                  value={niat}
                  onChange={(e) => setNiat(e.target.value)}
                  placeholder="Sholat subuh tepat waktu, atau dzikir 10x, atau apa pun…"
                  rows={2}
                  className="mt-4 w-full resize-none rounded-card bg-background px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-primary/40"
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.niat.presets.slice(0, 5).map((preset) => (
                    <motion.button
                      key={preset}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setNiat(preset)}
                      className="rounded-pill bg-background px-3 py-1.5 text-xs font-medium text-ink shadow-soft hover:bg-primary-tint"
                    >
                      {preset}
                    </motion.button>
                  ))}
                </div>
              </Card>
              <Button
                fullWidth
                size="lg"
                disabled={!niat.trim()}
                onClick={() => saveNiat(niat)}
              >
                Simpan & Lanjut
              </Button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="s3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <Card tone="white">
                <h2 className="text-lg font-bold text-ink">
                  {t.kembali.step3Title}
                </h2>
                <p className="mt-1 text-sm text-ink-soft">
                  {t.kembali.step3Body}
                </p>
              </Card>
              <Button fullWidth size="lg" onClick={() => setStep(4)}>
                Selanjutnya
              </Button>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="s4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-5"
            >
              <Card tone="primary" className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5, times: [0, 0.6, 1] }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary"
                >
                  <Check size={28} strokeWidth={3} />
                </motion.div>
                <h2 className="mt-4 text-xl font-bold text-ink">
                  {t.kembali.finishTitle}
                </h2>
                <p className="mt-2 text-sm text-ink-soft">
                  {t.kembali.finishBody}
                </p>
                {niat && (
                  <p className="mt-4 rounded-card bg-white px-4 py-3 text-sm font-semibold text-ink">
                    Niatmu: &ldquo;{niat}&rdquo;
                  </p>
                )}
              </Card>
              <Button
                fullWidth
                size="lg"
                onClick={() => router.replace("/home")}
              >
                Lanjutkan ke Beranda
              </Button>
              <Link
                href="/butuhkan/kembali-pada-allah"
                className="block text-center text-xs text-ink-soft hover:text-primary"
              >
                Atau pelajari lebih dalam →
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
