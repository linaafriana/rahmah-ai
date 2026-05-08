"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X } from "lucide-react";
import { tajweedRules } from "@/lib/tajweed";

/**
 * Small "ⓘ Legenda warna" button + modal showing every tajwid rule
 * mapped to its color and a one-line cara-baca. Used both on the
 * Quran reader (when tajwid is on) and in /pengaturan (always
 * accessible so users can preview before toggling on).
 */
export function TajweedLegend({
  variant = "button",
}: {
  variant?: "button" | "link";
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          variant === "link"
            ? "inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:underline"
            : "inline-flex items-center gap-1 rounded-pill bg-white px-3 py-1.5 text-[11px] font-medium text-ink-soft shadow-soft hover:text-ink"
        }
      >
        <Info size={12} />
        Legenda warna tajwid
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed inset-x-0 bottom-0 z-50 mx-auto max-h-[80vh] w-full max-w-md overflow-y-auto rounded-t-card-lg bg-background p-5 pb-8 shadow-soft-lg"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-base font-bold text-ink">
                  Legenda warna tajwid
                </h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Tutup"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink-soft shadow-soft hover:text-ink"
                >
                  <X size={14} />
                </button>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                Saat tampilan tahsin diaktifkan, huruf-huruf di Al-Qur&rsquo;an
                diwarnai sesuai aturan tajwid yang berlaku — mempermudah
                pengingat saat membaca.
              </p>

              <ul className="mt-4 space-y-3">
                {tajweedRules.map((r) => (
                  <li
                    key={r.code}
                    className="flex items-start gap-3 rounded-card bg-white p-3 shadow-soft"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-card bg-background font-arabic text-xl ${r.className}`}
                    >
                      ا
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-ink">{r.name}</p>
                      <p className="mt-0.5 text-xs text-ink-soft">{r.hint}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-[11px] italic text-ink-muted">
                Sumber: Mushaf Tajwid KFGQPC + alquran.cloud (edition
                quran-tajweed). Warna mendekati standar mushaf cetak.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
