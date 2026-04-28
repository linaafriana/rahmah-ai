"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Blob } from "@/components/illustrations/Blob";

const STORAGE_KEY = (date: string) => `sakinah:muhasabah:${date}`;

type Answers = {
  syukur: string;
  perbaiki: string;
  istighfar: boolean;
  niatBesok: string;
};

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

const presetSyukur = [
  "Sholat 5 waktu",
  "Bisa makan & minum",
  "Keluarga sehat",
  "Pekerjaan / studi lancar",
  "Diberi waktu beristighfar",
];

const presetPerbaiki = [
  "Sholat lebih awal waktu",
  "Lebih sabar pada keluarga",
  "Kurangi medsos",
  "Jaga lisan",
  "Lebih banyak istighfar",
];

const presetNiat = [
  "Sholat subuh tepat waktu",
  "Baca 5 ayat Al-Qur'an",
  "Dzikir pagi",
  "Sholawat 33x",
  "Sedekah berapa pun",
];

export default function MuhasabahPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [answers, setAnswers] = useState<Answers>({
    syukur: "",
    perbaiki: "",
    istighfar: false,
    niatBesok: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY(todayKey()));
    if (raw) {
      try {
        setAnswers(JSON.parse(raw));
      } catch {}
    }
  }, []);

  function persist(next: Answers) {
    setAnswers(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY(todayKey()), JSON.stringify(next));
    }
    // Also save niat for tomorrow
    if (next.niatBesok.trim()) {
      const t = new Date();
      t.setDate(t.getDate() + 1);
      const tomorrowKey = t.toISOString().slice(0, 10);
      window.localStorage.setItem(`sakinah:niat:${tomorrowKey}`, next.niatBesok.trim());
    }
  }

  function next() {
    setStep((s) => (s < 5 ? ((s + 1) as typeof s) : s));
  }

  return (
    <main className="relative min-h-dvh overflow-hidden bg-gradient-to-b from-background via-background to-secondary-soft/40">
      <Blob
        color="#FADADD"
        size={280}
        className="absolute -left-16 -top-16 opacity-40"
      />
      <Blob
        color="#FFE9A8"
        size={220}
        className="absolute -right-12 top-32 opacity-50"
        delay={1.0}
      />

      <div className="relative z-10 mx-auto max-w-md px-5 py-8 pb-12">
        <Link
          href="/home"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
        >
          <ArrowLeft size={16} />
          Beranda
        </Link>

        <header className="mt-4 mb-6">
          <h1 className="text-3xl font-bold text-ink">Muhasabah Malam</h1>
          <p className="mt-1 text-sm text-ink-soft">
            &lsquo;Hisablah dirimu sebelum kau dihisab.&rsquo; — Umar bin Khattab RA
          </p>
        </header>

        {/* Progress indicator */}
        <div className="mb-6 flex gap-1.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className={`h-1.5 flex-1 rounded-pill transition-colors ${
                n <= step ? "bg-primary" : "bg-ink/10"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="s1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <Card tone="white">
                <h2 className="text-base font-bold text-ink">
                  Apa yang paling kau syukuri hari ini?
                </h2>
                <p className="mt-1 text-xs text-ink-soft">
                  Sekecil apa pun. Allah berkata: &lsquo;Jika kalian bersyukur, Aku tambahkan.&rsquo;
                </p>
                <textarea
                  autoFocus
                  value={answers.syukur}
                  onChange={(e) =>
                    persist({ ...answers, syukur: e.target.value })
                  }
                  placeholder="Tulis di sini…"
                  rows={3}
                  className="mt-3 w-full resize-none rounded-card bg-background px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-primary/40"
                />
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {presetSyukur.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => persist({ ...answers, syukur: p })}
                      className="rounded-pill bg-background px-2.5 py-1 text-[11px] font-medium text-ink-soft hover:bg-primary-tint"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </Card>
              <Button fullWidth size="lg" onClick={next}>
                Lanjut
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="s2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <Card tone="white">
                <h2 className="text-base font-bold text-ink">
                  Apa yang ingin kau perbaiki?
                </h2>
                <p className="mt-1 text-xs text-ink-soft">
                  Bukan untuk menyalahkan diri — untuk mengarahkan langkah besok.
                </p>
                <textarea
                  autoFocus
                  value={answers.perbaiki}
                  onChange={(e) =>
                    persist({ ...answers, perbaiki: e.target.value })
                  }
                  placeholder="Tulis di sini…"
                  rows={3}
                  className="mt-3 w-full resize-none rounded-card bg-background px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-primary/40"
                />
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {presetPerbaiki.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => persist({ ...answers, perbaiki: p })}
                      className="rounded-pill bg-background px-2.5 py-1 text-[11px] font-medium text-ink-soft hover:bg-primary-tint"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </Card>
              <Button fullWidth size="lg" onClick={next}>
                Lanjut
              </Button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="s3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <Card tone="white">
                <h2 className="text-base font-bold text-ink">
                  Sudah istighfar hari ini?
                </h2>
                <p className="mt-1 text-xs text-ink-soft">
                  Rasulullah ﷺ — yang ma&rsquo;shum — beristighfar 100x sehari.
                </p>
                <p
                  className="mt-4 text-right font-arabic text-2xl leading-loose text-ink"
                  dir="rtl"
                >
                  أَسْتَغْفِرُ ٱللَّٰهَ
                </p>
                <p className="mt-1 text-center text-xs italic text-ink-soft">
                  Astaghfirullāh
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      persist({ ...answers, istighfar: true });
                      next();
                    }}
                    className="flex flex-1 items-center justify-center gap-2 rounded-pill bg-primary px-4 py-3 text-sm font-semibold text-white shadow-soft"
                  >
                    <Check size={16} strokeWidth={3} />
                    Sudah
                  </button>
                  <Link
                    href="/taubat"
                    className="flex flex-1 items-center justify-center rounded-pill bg-secondary px-4 py-3 text-sm font-semibold text-ink shadow-soft"
                  >
                    Mulai sekarang
                  </Link>
                </div>
              </Card>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="s4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <Card tone="white">
                <h2 className="text-base font-bold text-ink">
                  Niatkan satu hal kecil untuk besok
                </h2>
                <p className="mt-1 text-xs text-ink-soft">
                  Allah membalas niat. Walau kau belum sempat melakukannya.
                </p>
                <textarea
                  autoFocus
                  value={answers.niatBesok}
                  onChange={(e) =>
                    persist({ ...answers, niatBesok: e.target.value })
                  }
                  placeholder="Sholat subuh tepat waktu, atau apa pun…"
                  rows={2}
                  className="mt-3 w-full resize-none rounded-card bg-background px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-primary/40"
                />
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {presetNiat.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() =>
                        persist({ ...answers, niatBesok: p })
                      }
                      className="rounded-pill bg-background px-2.5 py-1 text-[11px] font-medium text-ink-soft hover:bg-primary-tint"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </Card>
              <Button fullWidth size="lg" onClick={next}>
                Selesai
              </Button>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="s5"
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
                  Muhasabah selesai 🌱
                </h2>
                <p className="mt-2 text-sm text-ink-soft">
                  Selamat istirahat. Bacalah Al-Mulk dan Ayat Kursi sebelum
                  tidur, miring ke kanan.
                </p>
              </Card>

              <div className="space-y-2">
                <Link
                  href="/quran/67"
                  className="flex items-center gap-3 rounded-card bg-white px-4 py-3 text-sm text-ink shadow-soft"
                >
                  <span className="text-xl">📖</span>
                  <span className="flex-1 font-medium">Buka Surah Al-Mulk</span>
                  <ChevronRight size={16} className="text-ink-muted" />
                </Link>
                <Link
                  href="/belajar/dzikir-pagi-petang"
                  className="flex items-center gap-3 rounded-card bg-white px-4 py-3 text-sm text-ink shadow-soft"
                >
                  <span className="text-xl">🌙</span>
                  <span className="flex-1 font-medium">Dzikir sebelum tidur</span>
                  <ChevronRight size={16} className="text-ink-muted" />
                </Link>
              </div>

              <Button
                fullWidth
                size="lg"
                variant="soft"
                onClick={() => router.replace("/home")}
              >
                Kembali ke Beranda
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
