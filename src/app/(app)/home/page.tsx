"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GreetingHeader } from "@/components/home/GreetingHeader";
import { PrayerCard } from "@/components/home/PrayerCard";
import { ReflectionCard } from "@/components/home/ReflectionCard";
import { QuranContinueCard } from "@/components/home/QuranContinueCard";
import { JournalEntryCard } from "@/components/home/JournalEntryCard";
import { DzikirTotalCard } from "@/components/home/DzikirTotalCard";
import { DoaTodayCard } from "@/components/home/DoaTodayCard";
import { PerasaanCard } from "@/components/home/PerasaanCard";
import { NextPrayerCard } from "@/components/home/NextPrayerCard";
import { QuickActionsRow } from "@/components/home/QuickActionsRow";
import { NiatBesokCard } from "@/components/home/NiatBesokCard";
import { MicroHabitsCard } from "@/components/home/MicroHabitsCard";
import { HabitTracker } from "@/components/home/HabitTracker";
import { KembaliBanner } from "@/components/home/KembaliBanner";
import { TimeSpotlightCard } from "@/components/home/TimeSpotlightCard";
import { SpecialDayBanner } from "@/components/home/SpecialDayBanner";
import { ContinueLearningCard } from "@/components/home/ContinueLearningCard";
import { AsmaulHusnaCard } from "@/components/home/AsmaulHusnaCard";
import { BulanHijriahCard } from "@/components/home/BulanHijriahCard";
import { InstallPrompt } from "@/components/home/InstallPrompt";
import { MockModeBanner } from "@/components/home/MockModeBanner";
import { StarterPathCard } from "@/components/home/StarterPathCard";
import { HomeSkeleton } from "@/components/home/HomeSkeleton";
import { reflectionForToday } from "@/data/seed-reflections";
import { useAuth } from "@/providers/AuthProvider";
import {
  loadPrayers,
  loadQuranPosition,
  savePrayers,
} from "@/lib/firebase/firestore";
import type { PrayerProgress, QuranPosition } from "@/types";

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
  const [position, setPosition] = useState<QuranPosition>(fallbackPosition);
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
        // Silently fall back to local state — user keeps offline progress
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

  const reflection = reflectionForToday();
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
      {/* ── ANNOUNCEMENT LAYER (only when relevant) ───────── */}
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

      {/* ── 1. ANCHOR — who you are, what's available now ───── */}
      <motion.div variants={item}>
        <GreetingHeader name={name} />
      </motion.div>
      <motion.div variants={item}>
        <QuickActionsRow />
      </motion.div>

      {/* Starter path — 3 topics from onboarding focus, dismissible */}
      <motion.div variants={item}>
        <StarterPathCard />
      </motion.div>

      {/* ── 2. PRIMARY DAILY ACTION — the prayers ─────────── */}
      <motion.div variants={item}>
        <NextPrayerCard />
      </motion.div>
      <motion.div variants={item}>
        <PrayerCard value={progress} onChange={onPrayerChange} />
      </motion.div>

      {/* ── 3. TIME-AWARE NUDGE + COMMITMENT ──────────────── */}
      <motion.div variants={item}>
        <TimeSpotlightCard />
      </motion.div>
      <motion.div variants={item}>
        <NiatBesokCard />
      </motion.div>
      <motion.div variants={item}>
        <MicroHabitsCard />
      </motion.div>

      {/* ── 4. CONTINUE WHERE YOU WERE ────────────────────── */}
      <motion.div variants={item}>
        <QuranContinueCard position={position} />
      </motion.div>
      <motion.div variants={item}>
        <ContinueLearningCard />
      </motion.div>
      <motion.div variants={item}>
        <DzikirTotalCard />
      </motion.div>

      {/* ── 5. DAILY SPIRITUAL CONTENT ────────────────────── */}
      <motion.div variants={item}>
        <ReflectionCard reflection={reflection} />
      </motion.div>
      <motion.div variants={item}>
        <AsmaulHusnaCard />
      </motion.div>
      <motion.div variants={item}>
        <DoaTodayCard />
      </motion.div>
      <motion.div variants={item}>
        <BulanHijriahCard />
      </motion.div>

      {/* ── 6. WHEN YOU NEED SUPPORT ──────────────────────── */}
      <motion.div variants={item}>
        <PerasaanCard />
      </motion.div>

      {/* ── 7. PROGRESS REVIEW (collapsible at the bottom) ── */}
      <motion.div variants={item}>
        <HabitTracker />
      </motion.div>
      <motion.div variants={item}>
        <JournalEntryCard />
      </motion.div>
    </motion.div>
  );
}
