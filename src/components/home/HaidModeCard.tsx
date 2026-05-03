"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Heart, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { setHaidActive } from "@/lib/haid";

/**
 * Replaces the PrayerCard on home when haid mode is active.
 *
 * Tone: lembut & meneguhkan. Bukan tracker medis — fokusnya
 * mengingatkan bahwa Allah memberi keringanan, dan amalan lain
 * tetap terbuka lebar.
 */
export function HaidModeCard() {
  function handleEnd() {
    if (typeof window === "undefined") return;
    if (window.confirm("Tandai haid sudah selesai?")) {
      setHaidActive(false);
    }
  }

  return (
    <Card tone="secondary">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/70 text-rose-400">
            <Heart size={14} />
          </span>
          <h2 className="text-sm font-bold text-ink">Mode haid aktif</h2>
        </div>
        <button
          type="button"
          onClick={handleEnd}
          className="rounded-pill bg-white/80 px-3 py-1 text-[11px] font-semibold text-ink-soft hover:text-ink"
        >
          Selesai
        </button>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink">
        Tidak ada kewajiban sholat hari ini, dan{" "}
        <span className="font-semibold">tidak perlu qadha sholat</span>.
        Allah memberi keringanan, bukan beban tambahan 🤍
      </p>
      <p className="mt-2 text-[11px] leading-relaxed text-ink-muted">
        📖 Aisyah RA: &ldquo;Kami pernah haid di zaman Rasulullah ﷺ. Kami
        diperintah mengqadha puasa, dan tidak diperintah mengqadha
        sholat.&rdquo; (HR. Muslim no. 335)
      </p>

      <p className="mt-4 px-1 text-[10px] font-bold uppercase tracking-widest text-ink-soft">
        Yang tetap bisa dilakukan
      </p>
      <div className="mt-2 space-y-2">
        <motion.div whileTap={{ scale: 0.98 }}>
          <Link
            href="/dzikir"
            className="flex items-center gap-3 rounded-card bg-white px-3 py-2.5 shadow-soft hover:bg-primary-tint/40"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-card bg-primary-tint text-primary">
              <Sparkles size={16} />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink">Dzikir & doa</p>
              <p className="text-[11px] text-ink-soft">
                Tasbih, sholawat, istighfar — semua boleh
              </p>
            </div>
          </Link>
        </motion.div>
        <motion.div whileTap={{ scale: 0.98 }}>
          <Link
            href="/belajar"
            className="flex items-center gap-3 rounded-card bg-white px-3 py-2.5 shadow-soft hover:bg-primary-tint/40"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-card bg-accent-tint text-ink">
              <BookOpen size={16} />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink">Belajar agama</p>
              <p className="text-[11px] text-ink-soft">
                Tambah ilmu, hatimu tetap dekat
              </p>
            </div>
          </Link>
        </motion.div>
        <motion.div whileTap={{ scale: 0.98 }}>
          <Link
            href="/belajar/hukum-darah-wanita"
            className="flex items-center gap-3 rounded-card bg-white px-3 py-2.5 shadow-soft hover:bg-primary-tint/40"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-card bg-secondary text-rose-400">
              <Heart size={16} />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink">
                Panduan lengkap haid
              </p>
              <p className="text-[11px] text-ink-soft">
                Yang boleh & tidak — dengan dalil
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </Card>
  );
}
