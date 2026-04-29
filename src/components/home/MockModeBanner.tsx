"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { useAuth } from "@/providers/AuthProvider";

const DISMISS_KEY = "sakinah:mockBannerDismissed";

export function MockModeBanner() {
  const { configured, user } = useAuth();
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(DISMISS_KEY) === "1";
  });

  const isMock = !configured || (user?.isMock ?? false);
  if (!isMock || dismissed) return null;

  function dismiss() {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(DISMISS_KEY, "1");
    }
    setDismissed(true);
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
      >
        <Card tone="cream" className="overflow-hidden border border-accent/30">
          <button
            type="button"
            onClick={dismiss}
            className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/60 text-ink-muted hover:text-ink"
            aria-label="Tutup"
          >
            <X size={12} />
          </button>
          <div className="flex items-start gap-3 pr-6">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-card bg-accent-tint text-ink">
              <Info size={16} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-ink">Mode lokal</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-ink-soft">
                Datamu disimpan di perangkat ini saja. Jika kamu ganti
                perangkat atau hapus cache, progresmu tidak akan ikut.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
