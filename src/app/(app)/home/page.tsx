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
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
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
      const [p, q] = await Promise.all([
        loadPrayers(user.uid),
        loadQuranPosition(user.uid),
      ]);
      if (!alive) return;
      if (p) setProgress(p);
      if (q) setPosition(q);
      setHydrated(true);
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
      {/* PWA install — appears once when browser is ready */}
      <motion.div variants={item}>
        <InstallPrompt />
      </motion.div>

      {/* Comeback banner — only shows if absent >3 days */}
      <motion.div variants={item}>
        <KembaliBanner />
      </motion.div>

      {/* Special day awareness — Jumat / Senin-Kamis / Ramadhan / Ayyamul Bidh */}
      <motion.div variants={item}>
        <SpecialDayBanner />
      </motion.div>

      {/* 1. Greeting — anchor */}
      <motion.div variants={item}>
        <GreetingHeader name={name} />
      </motion.div>

      {/* 2. Quick actions — 1-tap to Sholawat / Taubat / Doa / Jadwal */}
      <motion.div variants={item}>
        <QuickActionsRow />
      </motion.div>

      {/* 3. Time-of-day spotlight — contextual nudge by hour */}
      <motion.div variants={item}>
        <TimeSpotlightCard />
      </motion.div>

      {/* 4. Niat — commit small now, anti-taswif */}
      <motion.div variants={item}>
        <NiatBesokCard />
      </motion.div>

      {/* 5. Next prayer — daily anchor */}
      <motion.div variants={item}>
        <NextPrayerCard />
      </motion.div>

      {/* 5b. Bulan Hijriah ini — keutamaan + amalan */}
      <motion.div variants={item}>
        <BulanHijriahCard />
      </motion.div>

      {/* 6. Continue learning — last belajar topic */}
      <motion.div variants={item}>
        <ContinueLearningCard />
      </motion.div>

      {/* 5. Micro-habits — 5 tiny ibadah suggestions */}
      <motion.div variants={item}>
        <MicroHabitsCard />
      </motion.div>

      {/* 6. What you feel — fast access to mood-based help */}
      <motion.div variants={item}>
        <PerasaanCard />
      </motion.div>

      {/* 7. Today's reflection — Allah's word */}
      <motion.div variants={item}>
        <ReflectionCard reflection={reflection} />
      </motion.div>

      {/* 8. Asmaul Husna of the day — knowing Allah */}
      <motion.div variants={item}>
        <AsmaulHusnaCard />
      </motion.div>

      {/* 9. Today's doa — small daily seed */}
      <motion.div variants={item}>
        <DoaTodayCard />
      </motion.div>

      {/* 10. Sholat — combined ring + checklist */}
      <motion.div variants={item}>
        <PrayerCard value={progress} onChange={onPrayerChange} />
      </motion.div>

      {/* 10. Streak-free habit tracker */}
      <motion.div variants={item}>
        <HabitTracker />
      </motion.div>

      {/* 11. Continue Quran */}
      <motion.div variants={item}>
        <QuranContinueCard position={position} />
      </motion.div>

      {/* 12. Today's dzikir count */}
      <motion.div variants={item}>
        <DzikirTotalCard />
      </motion.div>

      {/* 13. Journal — quiet last */}
      <motion.div variants={item}>
        <JournalEntryCard />
      </motion.div>
    </motion.div>
  );
}
