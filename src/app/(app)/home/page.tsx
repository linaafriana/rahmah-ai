"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { GreetingHeader } from "@/components/home/GreetingHeader";
import { PrayerCard } from "@/components/home/PrayerCard";
import { HaidModeCard } from "@/components/home/HaidModeCard";
import { QuickActionsRow } from "@/components/home/QuickActionsRow";
import { NiatBesokCard } from "@/components/home/NiatBesokCard";
import { LanjutkanCard } from "@/components/home/LanjutkanCard";
import { HAID_EVENT, isHaidActive } from "@/lib/haid";
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
import { localDateKey } from "@/lib/date";
import type { PrayerProgress, QuranPosition } from "@/types";

// HabitTracker is the second task widget — keep code-split to keep
// initial bundle lean, but render it directly under PrayerCard so the
// user lands on their tasks immediately.
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
  const [haid, setHaid] = useState(false);

  // Track haid mode state (cross-tab via storage event, same-tab via custom)
  useEffect(() => {
    setHaid(isHaidActive());
    function refresh() {
      setHaid(isHaidActive());
    }
    window.addEventListener(HAID_EVENT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(HAID_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);
  // `dateKey` triggers a reload of daily-keyed state when the local date
  // rolls over (midnight while the tab is open, or returning to a tab
  // whose state was saved before midnight).
  const [dateKey, setDateKey] = useState(() => localDateKey());

  // Watch for date rollover: timer that fires at next local midnight,
  // and also refresh when the tab regains focus (most common case for
  // PWAs/mobile — user reopens in the morning).
  useEffect(() => {
    function refreshDate() {
      const k = localDateKey();
      setDateKey((prev) => (prev === k ? prev : k));
    }
    function scheduleMidnight() {
      const now = new Date();
      const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0,
        0,
        5, // 5s buffer so getDate() definitely reads the new day
      );
      return window.setTimeout(refreshDate, nextMidnight.getTime() - now.getTime());
    }
    let timer = scheduleMidnight();
    function onVisible() {
      if (document.visibilityState === "visible") {
        refreshDate();
        clearTimeout(timer);
        timer = scheduleMidnight();
      }
    }
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", refreshDate);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", refreshDate);
    };
  }, []);

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
    // Reset to empty when the local date changes — guarantees the
    // checklist renders blank before the new day's data arrives.
    setProgress(emptyProgress);
    if (!user) {
      setHydrated(true);
      return;
    }
    let alive = true;
    (async () => {
      try {
        const [p, q] = await Promise.all([
          loadPrayers(user.uid, dateKey),
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
  }, [user, dateKey]);

  const name = displayName ?? user?.name ?? "Sahabat";

  function onPrayerChange(next: PrayerProgress) {
    setProgress(next);
    if (user) void savePrayers(user.uid, next, dateKey);
  }

  if (!hydrated) return <HomeSkeleton />;

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {/* ── Banners — only render when relevant; each is conditional ─ */}
      <motion.div variants={item}>
        <InstallPrompt />
      </motion.div>
      <motion.div variants={item}>
        <MockModeBanner />
      </motion.div>
      <motion.div variants={item}>
        <SpecialDayBanner />
      </motion.div>
      <motion.div variants={item}>
        <KembaliBanner />
      </motion.div>
      <motion.div variants={item}>
        <StarterPathCard />
      </motion.div>

      {/* ── Greeting (compact) ──────────────────────────────────── */}
      <motion.div variants={item}>
        <GreetingHeader name={name} />
      </motion.div>

      {/* ── Task hub: sholat + habits stacked at the top ─────────── */}
      <motion.div variants={item}>
        {haid ? (
          <HaidModeCard />
        ) : (
          <PrayerCard value={progress} onChange={onPrayerChange} />
        )}
      </motion.div>
      <motion.div variants={item}>
        <HabitTracker />
      </motion.div>

      {/* ── Niat hari ini (1 line setter) ────────────────────────── */}
      <motion.div variants={item}>
        <NiatBesokCard />
      </motion.div>

      {/* ── Shortcuts to other ibadah ───────────────────────────── */}
      <motion.div variants={item}>
        <QuickActionsRow />
      </motion.div>

      {/* ── Resume reading ──────────────────────────────────────── */}
      <motion.div variants={item}>
        <LanjutkanCard />
      </motion.div>
    </motion.div>
  );
}
