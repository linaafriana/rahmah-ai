"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Blob } from "@/components/illustrations/Blob";
import { LeafShape } from "@/components/illustrations/LeafShape";
import { useAuth } from "@/providers/AuthProvider";
import { id as t } from "@/lib/i18n/id";

type Focus = "sholat" | "quran" | "tahsin" | "hati" | "belum";

const focusOptions: { id: Focus; label: string; emoji: string; desc: string }[] = [
  {
    id: "sholat",
    label: "Rajin sholat",
    emoji: "🕌",
    desc: "Konsisten sholat 5 waktu",
  },
  {
    id: "quran",
    label: "Belajar Al-Qur'an",
    emoji: "📖",
    desc: "Membaca, memahami, mengamalkan",
  },
  {
    id: "tahsin",
    label: "Tahsin & Tajwid",
    emoji: "🔤",
    desc: "Memperbaiki bacaan",
  },
  {
    id: "hati",
    label: "Akhlak & Hati",
    emoji: "💗",
    desc: "Lembutkan hati, perbaiki diri",
  },
  {
    id: "belum",
    label: "Belum tahu",
    emoji: "🌱",
    desc: "Aku ingin mulai pelan-pelan",
  },
];

const recommendations: Record<Focus, { slug: string; title: string; emoji: string }[]> = {
  sholat: [
    { slug: "sholat-fardhu", title: "Tata Cara Sholat", emoji: "🕌" },
    { slug: "khusyu-sholat", title: "Khusyu' dalam Sholat", emoji: "🌿" },
    { slug: "sholat-jamaah", title: "Sholat Berjamaah & Jumat", emoji: "🕌" },
  ],
  quran: [
    { slug: "adab-al-quran", title: "Adab pada Al-Qur'an", emoji: "📖" },
    { slug: "ulumul-quran", title: "Ulumul Qur'an Dasar", emoji: "📚" },
    { slug: "doa-harian", title: "Doa Harian", emoji: "🤲" },
  ],
  tahsin: [
    { slug: "hijaiyah", title: "Belajar Hijaiyah", emoji: "🔤" },
    { slug: "makharij", title: "Makharijul Huruf", emoji: "👄" },
    { slug: "tajwid", title: "Tajwid Dasar", emoji: "📖" },
  ],
  hati: [
    { slug: "niat-ikhlas", title: "Niat & Ikhlas", emoji: "🪷" },
    { slug: "akhlak-harian", title: "Akhlak Harian", emoji: "🌷" },
    { slug: "tobat-nasuha", title: "Tobat Nasuha", emoji: "🌧️" },
  ],
  belum: [
    { slug: "pengantar-islam", title: "Pengantar Islam", emoji: "🌱" },
    { slug: "rukun-iman", title: "Rukun Iman", emoji: "💞" },
    { slug: "doa-harian", title: "Doa Harian", emoji: "🤲" },
  ],
};

export default function OnboardingPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [name, setName] = useState("");
  const [focus, setFocus] = useState<Focus | null>(null);

  useEffect(() => {
    if (!loading && user) router.replace("/home");
  }, [loading, user, router]);

  function finish() {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("sakinah:onboarded", "true");
      if (name.trim())
        window.localStorage.setItem("sakinah:displayName", name.trim());
      // Note: previously also wrote `sakinah:focus` here, but no other
      // surface ever read it back. Removed to keep localStorage clean
      // (and easier to clear on sign-out per the audit-fixes pass).
    }
    router.push("/sign-in");
  }

  function back() {
    setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3 | 4) : s));
  }

  return (
    <main className="relative mx-auto flex min-h-dvh max-w-md flex-col px-6 py-8 overflow-hidden">
      <Blob
        color="#FADADD"
        size={280}
        className="absolute -left-16 -top-10 opacity-60"
      />
      <Blob
        color="#FFE9A8"
        size={220}
        className="absolute -right-12 top-32 opacity-60"
        delay={1.2}
      />
      <Blob
        color="#A8D8D0"
        size={260}
        className="absolute -bottom-20 -right-10 opacity-50"
        delay={0.7}
      />

      {/* Back + progress */}
      <div className="relative z-10 mb-6 mt-auto flex items-center gap-3">
        {step > 1 ? (
          <button
            type="button"
            onClick={back}
            aria-label="Kembali"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/70 text-ink-soft shadow-soft hover:text-ink"
          >
            <ArrowLeft size={16} />
          </button>
        ) : (
          // Reserved 32px slot keeps progress bar position stable across
          // steps so the eye doesn't track left/right when navigating.
          <span className="h-8 w-8 shrink-0" />
        )}
        <div className="flex flex-1 gap-1.5">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className={`h-1.5 flex-1 rounded-pill transition-colors ${
                n <= step ? "bg-primary" : "bg-ink/10"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex-1">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="s1"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.18 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-center">
                <LeafShape size={100} color="#5DB3A6" rotate={-12} />
                <LeafShape
                  size={70}
                  color="#FFD66B"
                  rotate={28}
                  className="-ml-5 -mt-8"
                  delay={0.6}
                />
              </div>
              <div className="text-center">
                <h1 className="text-balance text-3xl font-bold leading-tight text-ink">
                  {t.onboarding.title}
                </h1>
                <p className="mt-2 text-base text-ink-soft">
                  {t.onboarding.subtitle}
                </p>
              </div>
              <Button size="lg" onClick={() => setStep(2)} fullWidth>
                {t.onboarding.cta}
                <ArrowRight size={16} />
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="s2"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.18 }}
              className="space-y-5"
            >
              <div>
                <h2 className="text-2xl font-bold text-ink">
                  Apa nama panggilanmu?
                </h2>
                <p className="mt-1 text-sm text-ink-soft">
                  Untuk menyapamu setiap kali kau membuka aplikasi
                </p>
              </div>
              <Card tone="white">
                <input
                  autoFocus
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sahabat"
                  className="w-full rounded-card border border-ink/10 bg-background px-4 py-3 text-base text-ink outline-none focus:border-primary"
                />
              </Card>
              <div className="flex gap-2">
                <Button
                  variant="soft"
                  size="lg"
                  onClick={() => setStep(3)}
                >
                  Lewati
                </Button>
                <Button size="lg" onClick={() => setStep(3)} fullWidth>
                  Lanjut
                  <ArrowRight size={16} />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="s3"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.18 }}
              className="space-y-5"
            >
              <div>
                <h2 className="text-2xl font-bold text-ink">
                  Apa fokusmu sekarang?
                </h2>
                <p className="mt-1 text-sm text-ink-soft">
                  Kami akan menyiapkan jalur belajar yang sesuai
                </p>
              </div>
              <div className="space-y-2.5">
                {focusOptions.map((opt) => (
                  <motion.button
                    key={opt.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFocus(opt.id)}
                    className={`flex w-full items-center gap-3 rounded-card-lg p-4 text-left shadow-soft transition-colors ${
                      focus === opt.id
                        ? "bg-primary text-white"
                        : "bg-white text-ink hover:bg-primary-tint"
                    }`}
                  >
                    <span className="text-2xl">{opt.emoji}</span>
                    <div className="flex-1">
                      <p className="text-sm font-bold">{opt.label}</p>
                      <p className={`text-[11px] ${
                        focus === opt.id ? "text-white/80" : "text-ink-soft"
                      }`}>
                        {opt.desc}
                      </p>
                    </div>
                    {focus === opt.id && <Check size={18} strokeWidth={3} />}
                  </motion.button>
                ))}
              </div>
              <Button
                size="lg"
                fullWidth
                disabled={!focus}
                onClick={() => setStep(4)}
              >
                Lanjut
                <ArrowRight size={16} />
              </Button>
            </motion.div>
          )}

          {step === 4 && focus && (
            <motion.div
              key="s4"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.18 }}
              className="space-y-5"
            >
              <div>
                <h2 className="text-2xl font-bold text-ink">
                  {name ? `Selamat datang, ${name} 🌷` : "Selamat datang 🌷"}
                </h2>
                <p className="mt-1 text-sm text-ink-soft">
                  Berikut topik yang bisa kau mulai
                </p>
              </div>
              <div className="space-y-2.5">
                {recommendations[focus].map((rec, i) => (
                  <Link
                    key={rec.slug}
                    href={`/belajar/${rec.slug}`}
                    className="block"
                  >
                    <Card tone="white" padded={false} className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-tint text-[11px] font-bold text-primary">
                          {i + 1}
                        </span>
                        <span className="text-xl">{rec.emoji}</span>
                        <p className="flex-1 text-sm font-semibold text-ink">
                          {rec.title}
                        </p>
                        <ChevronRight size={16} className="text-ink-muted" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
              <Button size="lg" fullWidth onClick={finish}>
                Mulai sekarang
                <ArrowRight size={16} />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
