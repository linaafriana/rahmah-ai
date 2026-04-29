"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ChevronRight, MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Check } from "lucide-react";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { useLocation } from "@/hooks/useLocation";
import { reverseGeocode, type ReverseGeoResult } from "@/lib/geo";
import {
  formatCountdown,
  getTimings,
  nextPrayer,
  prayerLabels,
  readUserMethod,
  readUserTune,
  type TimingsResponse,
} from "@/lib/prayer";
import { id as t } from "@/lib/i18n/id";
import type { PrayerKey, PrayerProgress } from "@/types";

const order: PrayerKey[] = ["fajr", "dhuhr", "asr", "maghrib", "isha"];

type Props = {
  value: PrayerProgress;
  onChange: (next: PrayerProgress) => void;
};

export function PrayerCard({ value, onChange }: Props) {
  const { coords, status, request } = useLocation();
  const [timings, setTimings] = useState<TimingsResponse | null>(null);
  const [geo, setGeo] = useState<ReverseGeoResult | null>(null);

  useEffect(() => {
    if (!coords) return;
    let alive = true;
    void getTimings(coords.latitude, coords.longitude, {
      method: readUserMethod(),
      tune: readUserTune(),
    }).then((tng) => {
      if (alive && tng) setTimings(tng);
    });
    void reverseGeocode(coords.latitude, coords.longitude).then((g) => {
      if (alive && g) setGeo(g);
    });
    return () => {
      alive = false;
    };
  }, [coords]);

  const done = order.filter((k) => value[k]).length;
  const ratio = done / order.length;

  function toggle(key: PrayerKey) {
    onChange({ ...value, [key]: !value[key] });
  }

  const next = timings ? nextPrayer(timings.timings) : null;

  return (
    <Card tone="white">
      {/* Hero — countdown to next prayer (or location prompt) */}
      {!coords ? (
        <div className="mb-3 flex items-center gap-3 rounded-card bg-cream/50 p-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-card bg-primary-tint text-primary">
            <MapPin size={16} />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-ink">
              Aktifkan lokasi
            </p>
            <p className="text-[11px] text-ink-soft">
              Untuk melihat waktu sholat harian
            </p>
          </div>
          <button
            type="button"
            onClick={request}
            disabled={status === "requesting"}
            className="rounded-pill bg-primary px-3 py-1.5 text-[11px] font-semibold text-white shadow-soft disabled:opacity-50"
          >
            {status === "requesting" ? "…" : "Aktifkan"}
          </button>
        </div>
      ) : next ? (
        <Link
          href="/jadwal"
          className="mb-3 block rounded-card bg-accent-tint px-4 py-3 hover:bg-accent-tint/80"
        >
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">
                Sholat berikutnya
              </p>
              <p className="mt-0.5 text-base font-bold text-ink">
                {prayerLabels[next.key]} · {next.time}
              </p>
              <p className="text-[11px] text-ink-soft">
                {formatCountdown(next.minutesUntil)} lagi
                {next.nextDay ? " (besok)" : ""}
              </p>
              {timings?.meta.source?.kind === "equran" ? (
                <p className="mt-1 inline-flex items-center gap-1 text-[10px] text-ink-muted">
                  <MapPin size={10} className="text-primary" />
                  <span className="truncate">
                    {timings.meta.source.kabkota}
                  </span>
                  <span className="ml-0.5 inline-flex items-center gap-0.5 rounded-pill bg-primary-tint px-1.5 py-px text-[9px] font-bold text-primary">
                    Kemenag
                  </span>
                </p>
              ) : geo ? (
                <p className="mt-1 inline-flex items-center gap-1 text-[10px] text-ink-muted">
                  <MapPin size={10} className="text-primary" />
                  <span className="truncate">{geo.display}</span>
                </p>
              ) : null}
            </div>
            <ChevronRight size={16} className="text-ink-muted" />
          </div>
        </Link>
      ) : (
        <div className="mb-3 rounded-card bg-cream/50 px-4 py-2.5">
          <p className="text-xs text-ink-muted">Memuat jadwal sholat…</p>
        </div>
      )}

      {/* Today's checklist */}
      <div className="flex items-center gap-4">
        <ProgressRing
          value={ratio}
          size={72}
          stroke={7}
          label={
            <div>
              <div className="text-base font-bold leading-none text-ink">
                {done}/5
              </div>
              <div className="mt-0.5 text-[9px] uppercase tracking-widest text-ink-muted">
                {Math.round(ratio * 100)}%
              </div>
            </div>
          }
        />
        <div className="flex-1">
          <h2 className="text-sm font-bold text-ink">{t.home.prayerTitle}</h2>
          <p className="mt-0.5 text-[11px] text-ink-soft">
            {done === 5
              ? "Alhamdulillah — sudah lengkap 🤍"
              : done === 0
                ? "Belum ada yang ditandai hari ini"
                : `${5 - done} sholat lagi`}
          </p>
        </div>
      </div>
      <ul className="mt-3 grid grid-cols-5 gap-1.5">
        {order.map((key) => {
          const isChecked = value[key];
          const upperMap = {
            fajr: "Fajr",
            dhuhr: "Dhuhr",
            asr: "Asr",
            maghrib: "Maghrib",
            isha: "Isha",
          } as const;
          const isNextOne = next && next.key === upperMap[key];
          return (
            <motion.button
              key={key}
              type="button"
              whileTap={{ scale: 0.94 }}
              onClick={() => toggle(key)}
              aria-pressed={isChecked}
              className={clsx(
                "flex flex-col items-center gap-1 rounded-card px-2 py-2 transition-colors",
                isChecked
                  ? "bg-primary text-white"
                  : isNextOne
                    ? "bg-accent-tint text-ink ring-1 ring-accent"
                    : "bg-background text-ink-soft hover:bg-primary-tint/40",
              )}
            >
              <motion.span
                animate={isChecked ? { scale: [1, 1.25, 1] } : { scale: 1 }}
                transition={{ duration: 0.22, times: [0, 0.5, 1] }}
                className={clsx(
                  "flex h-5 w-5 items-center justify-center rounded-full border-2",
                  isChecked
                    ? "border-white bg-white text-primary"
                    : "border-ink-muted/40 bg-white",
                )}
              >
                {isChecked && <Check size={11} strokeWidth={3} />}
              </motion.span>
              <span className="text-[10px] font-semibold leading-none">
                {t.prayers[key]}
              </span>
            </motion.button>
          );
        })}
      </ul>
    </Card>
  );
}
