"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { BookOpen, ChevronRight, HeartHandshake, Sparkles } from "lucide-react";
import clsx from "clsx";
import { Card } from "@/components/ui/Card";
import { localDateKey, tomorrowKey } from "@/lib/date";
import type { PrayerProgress, QuranPosition } from "@/types";

type Focus = "sholat" | "quran" | "tahsin" | "hati" | "belum";

type Guidance = {
  title: string;
  body: string;
  href: string;
  actionLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  reason: string;
};

const focusCopy: Record<Focus, Guidance> = {
  sholat: {
    title: "Jaga satu sholat berikutnya",
    body: "Rahmah memusatkan harimu pada ibadah terdekat, bukan daftar panjang yang melelahkan.",
    href: "/jadwal",
    actionLabel: "Lihat waktu sholat",
    secondaryHref: "/belajar/sholat-fardhu",
    secondaryLabel: "Pelajari ringkas",
    reason: "Fokus onboardingmu adalah konsisten sholat.",
  },
  quran: {
    title: "Buka bacaan ringan dulu",
    body: "Lanjutkan satu ayat atau mulai dari surah pendek. Cukup kecil agar mudah dimulai.",
    href: "/quran",
    actionLabel: "Buka Quran",
    secondaryHref: "/belajar/adab-al-quran",
    secondaryLabel: "Lihat adab",
    reason: "Fokus onboardingmu adalah belajar Al-Quran.",
  },
  tahsin: {
    title: "Latih bacaan 3 menit",
    body: "Mulai dari hijaiyah atau makharij. Rahmah menjaga langkahnya pendek dan terukur.",
    href: "/belajar/hijaiyah",
    actionLabel: "Mulai latihan",
    secondaryHref: "/belajar/tajwid",
    secondaryLabel: "Tajwid dasar",
    reason: "Fokus onboardingmu adalah tahsin dan tajwid.",
  },
  hati: {
    title: "Rawat hati sebelum tugas lain",
    body: "Pilih doa sesuai kondisi, lalu tutup dengan satu niat kecil agar tidak terasa berat.",
    href: "/butuhkan",
    actionLabel: "Pilih kondisi",
    secondaryHref: "/journal",
    secondaryLabel: "Tulis jurnal",
    reason: "Fokus onboardingmu adalah akhlak dan hati.",
  },
  belum: {
    title: "Mulai dari dasar yang paling aman",
    body: "Rahmah pilihkan jalur pemula supaya kamu tidak perlu menebak harus mulai dari mana.",
    href: "/belajar/pengantar-islam",
    actionLabel: "Mulai dari dasar",
    secondaryHref: "/tanya",
    secondaryLabel: "Tanya dulu",
    reason: "Kamu memilih mulai pelan-pelan.",
  },
};

function currentNiat() {
  if (typeof window === "undefined") return null;
  const today = localDateKey();
  const tomorrow = tomorrowKey();
  return (
    window.localStorage.getItem(`sakinah:niat:${today}`) ??
    window.localStorage.getItem(`sakinah:niat:${tomorrow}`)
  );
}

function prayerCount(progress: PrayerProgress) {
  return Object.values(progress).filter(Boolean).length;
}

export function DailyGuidanceHub({
  progress,
  focus,
  haid,
  quranPosition,
}: {
  progress: PrayerProgress;
  focus: string | null;
  haid: boolean;
  quranPosition: QuranPosition;
}) {
  const [niat, setNiat] = useState<string | null>(null);
  const [hour, setHour] = useState(8);

  useEffect(() => {
    setNiat(currentNiat());
    setHour(new Date().getHours());
  }, []);

  const completed = prayerCount(progress);
  const guidance = useMemo<Guidance>(() => {
    if (haid) {
      return {
        title: "Hari ini tetap bisa dekat",
        body: "Mode haid aktif. Rahmah mengutamakan dzikir, doa, jurnal, atau belajar ringan.",
        href: "/hati",
        actionLabel: "Lihat amalan",
        secondaryHref: "/journal",
        secondaryLabel: "Tulis refleksi",
        reason: "Mode haid sedang aktif, jadi saran ibadah disesuaikan.",
      };
    }

    if (hour >= 20 && !niat) {
      return {
        title: "Tutup hari dengan satu niat",
        body: "Sebelum tidur, pilih satu langkah kecil untuk besok. Ini membantu Rahmah menuntunmu besok pagi.",
        href: "/muhasabah",
        actionLabel: "Mulai muhasabah",
        secondaryHref: "/journal",
        secondaryLabel: "Tulis dulu",
        reason: "Malam hari cocok untuk refleksi ringan dan rencana kecil.",
      };
    }

    if (completed > 0) {
      return {
        title: "Lanjutkan yang sudah dimulai",
        body: "Kamu sudah bergerak hari ini. Rahmah menyarankan satu bacaan ringan sebelum membuka fitur lain.",
        href: `/quran/${quranPosition.surahNumber}`,
        actionLabel: "Lanjut Quran",
        secondaryHref: "/dzikir",
        secondaryLabel: "Dzikir pendek",
        reason: `${completed}/5 sholat sudah tercatat hari ini.`,
      };
    }

    if (focus && focus in focusCopy) return focusCopy[focus as Focus];

    return {
      title: "Mulai dari satu hal kecil",
      body: "Tidak perlu memilih dari semua fitur. Rahmah bisa membantumu menentukan langkah paling ringan.",
      href: "/tanya",
      actionLabel: "Tanya Rahmah",
      secondaryHref: "/belajar",
      secondaryLabel: "Lihat pilihan",
      reason: "Belum ada aktivitas hari ini, jadi Rahmah memberi langkah pembuka.",
    };
  }, [completed, focus, haid, hour, niat, quranPosition.surahNumber]);

  const progressLabel = haid
    ? "Mode haid aktif. Target hari ini disesuaikan."
    : completed === 0
      ? "Belum ada aktivitas tercatat hari ini. Mulai dari satu saja."
      : `${completed}/5 sholat tercatat. Pertahankan ritme kecil ini.`;

  return (
    <Card tone="cream" className="border border-primary/15 p-0">
      <div className="p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-card bg-primary text-white shadow-soft">
            <Sparkles size={18} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
              Langkah terbaik sekarang
            </p>
            <h2 className="mt-1 text-lg font-bold leading-tight text-ink">
              {guidance.title}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
              {guidance.body}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-card bg-white/75 px-3 py-2">
          <p className="text-[11px] font-semibold text-ink">{progressLabel}</p>
          <p className="mt-0.5 text-[11px] leading-relaxed text-ink-soft">
            {guidance.reason}
          </p>
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-[1fr_auto]">
          <Link
            href={guidance.href}
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-pill bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {guidance.actionLabel}
            <ChevronRight size={14} />
          </Link>
          <Link
            href={guidance.secondaryHref}
            className="inline-flex min-h-11 items-center justify-center rounded-pill bg-white px-4 py-2 text-sm font-semibold text-ink shadow-soft hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {guidance.secondaryLabel}
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 border-t border-primary/10">
        <Link
          href="/journal"
          className={clsx(
            "flex items-center gap-2 px-4 py-3 text-xs font-semibold text-ink-soft hover:bg-white/50 hover:text-primary",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary",
          )}
        >
          <HeartHandshake size={15} />
          Ceritakan kondisi
        </Link>
        <Link
          href={`/quran/${quranPosition.surahNumber}`}
          className={clsx(
            "flex items-center justify-end gap-2 px-4 py-3 text-xs font-semibold text-ink-soft hover:bg-white/50 hover:text-primary",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary",
          )}
        >
          <BookOpen size={15} />
          QS. {quranPosition.surahName}
        </Link>
      </div>
    </Card>
  );
}
