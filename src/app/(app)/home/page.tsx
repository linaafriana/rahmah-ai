"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { GreetingHeader } from "@/components/home/GreetingHeader";
import { PrayerCard } from "@/components/home/PrayerCard";
import { QuickActionsRow } from "@/components/home/QuickActionsRow";
import { TimeSpotlightCard } from "@/components/home/TimeSpotlightCard";
import { NiatBesokCard } from "@/components/home/NiatBesokCard";
import { MicroHabitsCard } from "@/components/home/MicroHabitsCard";
import { LanjutkanCard } from "@/components/home/LanjutkanCard";
import { PerasaanCard } from "@/components/home/PerasaanCard";
import { KembaliBanner } from "@/components/home/KembaliBanner";
import { SpecialDayBanner } from "@/components/home/SpecialDayBanner";
import { InstallPrompt } from "@/components/home/InstallPrompt";
import { MockModeBanner } from "@/components/home/MockModeBanner";
import { StarterPathCard } from "@/components/home/StarterPathCard";
import { HomeSkeleton } from "@/components/home/HomeSkeleton";
import { useAuth } from "@/providers/AuthProvider";
import {
  loadPrayers,
  loadQuranPosition,
  savePrayers,
} from "@/lib/firebase/firestore";
import type { PrayerProgress, QuranPosition } from "@/types";

// Below-the-fold cards — code-split to keep initial bundle lean.
const DailyContentCard = dynamic(
  () =>
    import("@/components/home/DailyContentCard").then(
      (m) => m.DailyContentCard,
    ),
  { ssr: false },
);
const BulanHijriahCard = dynamic(
  () =>
    import("@/components/home/BulanHijriahCard").then(
      (m) => m.BulanHijriahCard,
    ),
  { ssr: false },
);
const DzikirTotalCard = dynamic(
  () =>
    import("@/components/home/DzikirTotalCard").then(
      (m) => m.DzikirTotalCard,
    ),
  { ssr: false },
);
const HabitTracker = dynamic(
  () => import("@/components/home/HabitTracker").then((m) => m.HabitTracker),
  { ssr: false },
);

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

const emptyProgress: PrayerProgress = {
  fajr: false,
  dhuhr: false,
  asr: false,
  maghrib: false,
  isha: false,
};

const fallbackPosition: QuranPosition = {
  surahNumber: 18,
  surahName: "Al-Kahf",
  ayahNumber: 32,
  totalAyahs: 110,
};

export default function HomePage() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<PrayerProgress>(emptyProgress);
  const [, setPosition] = useState<QuranPosition>(fallbackPosition);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const local = window.localStorage.getItem("sakinah:quranPosition");
      if (local) {
        try {
          setPosition(JSON.parse(local) as QuranPosition);
        } catch {}
      }
      const savedName = window.localStorage.getItem("sakinah:displayName");
      if (savedName) setDisplayName(savedName);
    }
    if (!user) {
      setHydrated(true);
      return;
    }
    let alive = true;
    (async () => {
      try {
        const [p, q] = await Promise.all([
          loadPrayers(user.uid),
          loadQuranPosition(user.uid),
        ]);
        if (!alive) return;
        if (p) setProgress(p);
        if (q) setPosition(q);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn("Home data load failed, using local state:", err);
      } finally {
        if (alive) setHydrated(true);
      }
    })();
    return () => {
      alive = false;
    };
  }, [user]);

  const name = displayName ?? user?.name ?? "Sahabat";

  function onPrayerChange(next: PrayerProgress) {
    setProgress(next);
    if (user) void savePrayers(user.uid, next);
  }

  if (!hydrated) return <HomeSkeleton />;

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {/* ── BANNERS — only when relevant, dismissible ───────── */}
      <motion.div variants={item}>
        <InstallPrompt />
      </motion.div>
      <motion.div variants={item}>
        <KembaliBanner />
      </motion.div>
      <motion.div variants={item}>
        <SpecialDayBanner />
      </motion.div>
      <motion.div variants={item}>
        <MockModeBanner />
      </motion.div>
      <motion.div variants={item}>
        <StarterPathCard />
      </motion.div>

      {/* ── ANCHOR ───────────────────────────────────────────── */}
      <motion.div variants={item}>
        <GreetingHeader name={name} />
      </motion.div>
      <motion.div variants={item}>
        <QuickActionsRow />
      </motion.div>

      {/* ── PRIMARY DAILY ACTION — combined prayer card ────── */}
      <motion.div variants={item}>
        <PrayerCard value={progress} onChange={onPrayerChange} />
      </motion.div>

      {/* ── CONTEXT — time-of-day + niat + micro-habits ────── */}
      <motion.div variants={item}>
        <TimeSpotlightCard />
      </motion.div>
      <motion.div variants={item}>
        <NiatBesokCard />
      </motion.div>
      <motion.div variants={item}>
        <MicroHabitsCard />
      </motion.div>

      {/* ── CONTINUE — Quran + Belajar in one card ─────────── */}
      <motion.div variants={item}>
        <LanjutkanCard />
      </motion.div>

      {/* ── DAILY CONTENT — tabbed: Ayah · Nama Allah · Doa ── */}
      <motion.div variants={item}>
        <DailyContentCard />
      </motion.div>

      {/* ── SUPPORT — when you need help ───────────────────── */}
      <motion.div variants={item}>
        <PerasaanCard />
      </motion.div>

      {/* ── BELOW THE FOLD — informational + tracking ──────── */}
      <motion.div variants={item}>
        <BulanHijriahCard />
      </motion.div>
      <motion.div variants={item}>
        <DzikirTotalCard />
      </motion.div>
      <motion.div variants={item}>
        <HabitTracker />
      </motion.div>
    </motion.div>
  );
}
