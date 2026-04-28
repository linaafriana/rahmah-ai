"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { id as t } from "@/lib/i18n/id";

const LAST_VISIT_KEY = "sakinah:lastVisit";
const DISMISS_KEY = "sakinah:kembaliDismissed";
const ABSENCE_THRESHOLD_DAYS = 3;

function dayOfYear(d: Date) {
  return Math.floor(
    (d.getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / 86_400_000,
  );
}

export function KembaliBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const today = dayOfYear(new Date());

    const lastVisit = window.localStorage.getItem(LAST_VISIT_KEY);
    const dismissedAt = window.localStorage.getItem(DISMISS_KEY);

    let absent = false;
    if (lastVisit) {
      const last = parseInt(lastVisit, 10);
      if (!Number.isNaN(last) && today - last >= ABSENCE_THRESHOLD_DAYS) {
        absent = true;
      }
    }

    // Hide if dismissed within last 24h
    if (dismissedAt) {
      const dismissed = parseInt(dismissedAt, 10);
      if (!Number.isNaN(dismissed) && today - dismissed < 1) {
        absent = false;
      }
    }

    setShow(absent);

    // Update last visit to today
    window.localStorage.setItem(LAST_VISIT_KEY, String(today));
  }, []);

  function dismiss() {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(DISMISS_KEY, String(dayOfYear(new Date())));
    setShow(false);
  }

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link href="/kembali" className="block">
        <Card tone="secondary" className="overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-white text-primary">
              <Sparkles size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-ink">
                {t.kembali.bannerHome}
              </p>
              <p className="mt-0.5 text-[11px] text-ink-soft">
                {t.kembali.bannerCta}
              </p>
            </div>
            <ChevronRight size={18} className="text-ink-muted" />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              dismiss();
            }}
            className="absolute right-2 top-2 text-[10px] text-ink-muted hover:text-ink"
          >
            tutup
          </button>
        </Card>
      </Link>
    </motion.div>
  );
}
