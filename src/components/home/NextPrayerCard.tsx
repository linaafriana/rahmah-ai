"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { useLocation } from "@/hooks/useLocation";
import {
  formatCountdown,
  getTimings,
  nextPrayer,
  prayerLabels,
  type TimingsResponse,
} from "@/lib/prayer";

export function NextPrayerCard() {
  const { coords, status, request } = useLocation();
  const [data, setData] = useState<TimingsResponse | null>(null);

  useEffect(() => {
    if (!coords) return;
    let alive = true;
    void getTimings(coords.latitude, coords.longitude).then((t) => {
      if (alive && t) setData(t);
    });
    return () => {
      alive = false;
    };
  }, [coords]);

  if (!coords) {
    return (
      <Card tone="cream" className="border border-ink/5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-primary-tint text-primary">
            <MapPin size={18} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-ink">Jadwal sholat</p>
            <p className="mt-0.5 text-xs text-ink-soft">
              Aktifkan lokasi untuk melihat jadwal harianmu
            </p>
          </div>
          <button
            type="button"
            onClick={request}
            disabled={status === "requesting"}
            className="rounded-pill bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-soft disabled:opacity-50"
          >
            {status === "requesting" ? "..." : "Aktifkan"}
          </button>
        </div>
      </Card>
    );
  }

  if (!data) {
    return (
      <Card tone="white">
        <p className="text-xs text-ink-muted">Memuat jadwal sholat…</p>
      </Card>
    );
  }

  const next = nextPrayer(data.timings);

  return (
    <Link href="/jadwal" className="block">
      <Card tone="accent" className="overflow-hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">
              Sholat berikutnya
            </p>
            <h3 className="mt-1 text-xl font-bold text-ink">
              {prayerLabels[next.key]} · {next.time}
            </h3>
            <p className="mt-0.5 text-xs text-ink-soft">
              {formatCountdown(next.minutesUntil)} lagi
              {next.nextDay ? " (besok)" : ""}
            </p>
          </div>
          <ChevronRight size={20} className="text-ink-muted" />
        </div>
      </Card>
    </Link>
  );
}
