"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Compass,
  MapPin,
  RefreshCw,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";
import { QiblaCompass } from "@/components/jadwal/QiblaCompass";
import { useLocation } from "@/hooks/useLocation";
import {
  cleanTime,
  formatCountdown,
  getQibla,
  getTimings,
  mainPrayers,
  nextPrayer,
  prayerLabels,
  type PrayerTimings,
  type QiblaResponse,
  type TimingsResponse,
} from "@/lib/prayer";

export default function JadwalPage() {
  const { coords, status, request, reset } = useLocation();
  const [data, setData] = useState<TimingsResponse | null>(null);
  const [qibla, setQibla] = useState<QiblaResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!coords) return;
    let alive = true;
    setLoading(true);
    setError(null);
    Promise.all([
      getTimings(coords.latitude, coords.longitude),
      getQibla(coords.latitude, coords.longitude),
    ])
      .then(([t, q]) => {
        if (!alive) return;
        if (!t) {
          setError("Tidak dapat memuat jadwal sholat. Coba lagi nanti.");
        } else {
          setData(t);
        }
        if (q) setQibla(q);
      })
      .catch(() => {
        if (alive) setError("Tidak dapat memuat jadwal sholat. Coba lagi nanti.");
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, [coords]);

  return (
    <div className="space-y-5">
      <Link
        href="/hati"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={16} />
        Hati
      </Link>

      <header>
        <h1 className="text-3xl font-bold text-ink">Jadwal & Kiblat</h1>
        <p className="mt-1 text-sm text-ink-soft">
          Waktu sholat dan arah kiblat untuk lokasimu
        </p>
      </header>

      {!coords && (
        <Card tone="cream" className="border border-ink/5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-primary-tint text-primary">
              <MapPin size={20} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-ink">
                Bagikan lokasimu
              </h3>
              <p className="mt-1 text-xs text-ink-soft">
                Kami butuh izin lokasi untuk menghitung jadwal sholat dan arah
                kiblat. Tidak disimpan ke server.
              </p>
              {status === "denied" && (
                <p className="mt-2 text-xs text-rose-500">
                  Izin lokasi ditolak. Aktifkan dari pengaturan browser.
                </p>
              )}
              {status === "unsupported" && (
                <p className="mt-2 text-xs text-rose-500">
                  Perangkat tidak mendukung lokasi.
                </p>
              )}
              <Button
                size="md"
                className="mt-3"
                onClick={request}
                disabled={status === "requesting"}
              >
                {status === "requesting"
                  ? "Mendeteksi…"
                  : "Aktifkan lokasi"}
              </Button>
            </div>
          </div>
        </Card>
      )}

      {coords && loading && (
        <div className="space-y-3">
          <Skeleton className="h-32 w-full" rounded="card-lg" />
          <Skeleton className="h-44 w-full" rounded="card-lg" />
        </div>
      )}

      {error && !loading && (
        <Card tone="cream">
          <p className="text-sm text-rose-500">{error}</p>
        </Card>
      )}

      {coords && data && !loading && (
        <>
          <NextPrayerHero timings={data.timings} />

          <Card tone="white">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-bold text-ink">Hari ini</h2>
              <span className="text-[11px] text-ink-muted">
                {data.date.readable}
              </span>
            </div>
            <ul className="divide-y divide-ink/5">
              {mainPrayers.map((key) => (
                <PrayerRow
                  key={key}
                  label={prayerLabels[key]}
                  time={cleanTime(data.timings[key])}
                  isNext={
                    nextPrayer(data.timings).key === key &&
                    !nextPrayer(data.timings).nextDay
                  }
                />
              ))}
            </ul>
            <p className="mt-3 text-[11px] text-ink-muted">
              Hijriah: {data.date.hijri.day} {data.date.hijri.month.en}{" "}
              {data.date.hijri.year} · {data.meta.method.name} ·{" "}
              {data.meta.timezone}
            </p>
          </Card>

          {qibla && (
            <Card tone="primary">
              <div className="mb-3 flex items-center gap-2 text-ink">
                <Compass size={18} />
                <h2 className="text-sm font-bold">Arah Kiblat</h2>
              </div>
              <QiblaCompass direction={qibla.direction} />
            </Card>
          )}

          <button
            type="button"
            onClick={() => {
              reset();
              setData(null);
              setQibla(null);
            }}
            className="mt-2 inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink"
          >
            <RefreshCw size={12} />
            Ganti lokasi
          </button>
        </>
      )}
    </div>
  );
}

function PrayerRow({
  label,
  time,
  isNext,
}: {
  label: string;
  time: string;
  isNext: boolean;
}) {
  return (
    <li
      className={clsx(
        "flex items-center justify-between py-2.5 text-sm",
        isNext ? "font-bold text-primary" : "text-ink",
      )}
    >
      <span>{label}</span>
      <span className="font-mono">{time}</span>
    </li>
  );
}

function NextPrayerHero({ timings }: { timings: PrayerTimings }) {
  const next = nextPrayer(timings);
  return (
    <Card tone="accent">
      <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">
        Sholat berikutnya
      </p>
      <div className="mt-1 flex items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-ink">
            {prayerLabels[next.key]}
          </h2>
          <p className="text-xs text-ink-soft">
            {formatCountdown(next.minutesUntil)} lagi
            {next.nextDay ? " (besok)" : ""}
          </p>
        </div>
        <motion.span
          key={next.time}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-3xl font-bold text-ink"
        >
          {next.time}
        </motion.span>
      </div>
    </Card>
  );
}
