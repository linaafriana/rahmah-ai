"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import {
  Compass,
  Loader2,
  MapPin,
  RefreshCw,
  Search,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";
import { QiblaCompass } from "@/components/jadwal/QiblaCompass";
import { PageHeader } from "@/components/ui/PageHeader";
import { useLocation } from "@/hooks/useLocation";
import {
  reverseGeocode,
  searchPlaces,
  type PlaceSearchResult,
  type ReverseGeoResult,
} from "@/lib/geo";
import {
  cleanTime,
  formatCountdown,
  getQibla,
  getTimings,
  mainPrayers,
  nextPrayer,
  prayerLabels,
  readUserMethod,
  readUserTune,
  type PrayerTimings,
  type QiblaResponse,
  type TimingsResponse,
} from "@/lib/prayer";

export default function JadwalPage() {
  const { coords, status, request, reset, setManual } = useLocation();
  const [data, setData] = useState<TimingsResponse | null>(null);
  const [qibla, setQibla] = useState<QiblaResponse | null>(null);
  const [geo, setGeo] = useState<ReverseGeoResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cityQuery, setCityQuery] = useState("");
  const [cityResults, setCityResults] = useState<PlaceSearchResult[]>([]);
  const [citySearching, setCitySearching] = useState(false);
  const [cityError, setCityError] = useState<string | null>(null);

  useEffect(() => {
    if (!coords) return;
    let alive = true;
    setLoading(true);
    setError(null);
    Promise.all([
      getTimings(coords.latitude, coords.longitude, {
        method: readUserMethod(),
        tune: readUserTune(),
      }),
      getQibla(coords.latitude, coords.longitude),
      reverseGeocode(coords.latitude, coords.longitude),
    ])
      .then(([t, q, g]) => {
        if (!alive) return;
        if (!t) {
          setError("Tidak dapat memuat jadwal sholat. Coba lagi nanti.");
        } else {
          setData(t);
        }
        if (q) setQibla(q);
        if (g) setGeo(g);
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

  async function findCity(e: React.FormEvent) {
    e.preventDefault();
    const q = cityQuery.trim();
    if (q.length < 3) {
      setCityError("Tulis minimal 3 huruf nama kota.");
      return;
    }
    setCitySearching(true);
    setCityError(null);
    try {
      const results = await searchPlaces(q);
      setCityResults(results);
      if (results.length === 0) {
        setCityError("Kota belum ditemukan. Coba tulis nama yang lebih lengkap.");
      }
    } finally {
      setCitySearching(false);
    }
  }

  function chooseCity(place: PlaceSearchResult) {
    setManual({ latitude: place.latitude, longitude: place.longitude });
    setGeo(place);
    setCityResults([]);
    setCityQuery(place.display);
  }

  return (
    <div className="space-y-5">
      <PageHeader
        backHref="/hati"
        backLabel="Hati"
        title="Jadwal & Kiblat"
        subtitle={
          data?.meta.source?.kind === "equran"
            ? `Berdasarkan jadwal Kemenag untuk ${data.meta.source.kabkota}`
            : geo
              ? `Berdasarkan lokasimu di ${geo.display}`
              : "Waktu sholat dan arah kiblat untuk lokasimu"
        }
      />

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
                <div className="mt-2 rounded-card bg-white px-3 py-2 text-xs leading-relaxed text-rose-500">
                  Izin lokasi ditolak. Buka pengaturan browser, izinkan lokasi
                  untuk Rahmah, lalu kembali ke halaman ini dan coba lagi.
                  Kamu juga bisa menghapus lokasi tersimpan dari Pengaturan.
                </div>
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
              <div className="mt-4 rounded-card bg-white/70 p-3">
                <p className="text-xs font-semibold text-ink">
                  Atau pilih kota secara manual
                </p>
                <form onSubmit={findCity} className="mt-2 flex gap-2">
                  <label className="relative min-w-0 flex-1">
                    <Search
                      size={14}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted"
                    />
                    <input
                      type="search"
                      value={cityQuery}
                      onChange={(e) => setCityQuery(e.target.value)}
                      placeholder="Contoh: Bandung"
                      className="w-full rounded-pill border border-ink/10 bg-background py-2 pl-9 pr-3 text-sm text-ink outline-none focus:border-primary"
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={citySearching}
                    className="inline-flex h-10 min-w-10 items-center justify-center rounded-pill bg-primary px-4 text-sm font-semibold text-white shadow-soft disabled:opacity-50"
                  >
                    {citySearching ? (
                      <Loader2 size={15} className="animate-spin" />
                    ) : (
                      "Cari"
                    )}
                  </button>
                </form>
                {cityError && (
                  <p className="mt-2 text-xs text-rose-500">{cityError}</p>
                )}
                {cityResults.length > 0 && (
                  <div className="mt-2 space-y-1.5">
                    {cityResults.map((place) => (
                      <button
                        key={`${place.latitude},${place.longitude}`}
                        type="button"
                        onClick={() => chooseCity(place)}
                        className="block w-full rounded-card bg-background px-3 py-2 text-left text-xs text-ink hover:bg-primary-tint"
                      >
                        {place.display}
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {data.meta.source?.kind === "equran" ? (
                <span className="inline-flex items-center gap-1 rounded-pill bg-primary-tint px-2 py-0.5 text-[10px] font-semibold text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Kemenag · Resmi
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-pill bg-ink/5 px-2 py-0.5 text-[10px] font-semibold text-ink-soft">
                  {data.meta.source?.label ?? data.meta.method.name}
                </span>
              )}
              <span className="text-[11px] text-ink-muted">
                · {data.meta.timezone}
              </span>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-ink-muted">
              Hijriah: {data.date.hijri.day} {data.date.hijri.month.en}{" "}
              {data.date.hijri.year}
              {data.meta.source?.kind === "equran" && (
                <>
                  <br />
                  📍 {data.meta.source.kabkota}, {data.meta.source.provinsi}
                </>
              )}
              {data.meta.source?.kind !== "equran" && geo && (
                <>
                  <br />
                  📍 {geo.display}
                </>
              )}
            </p>
          </Card>

          <Card tone="cream" className="border border-ink/5">
            <p className="text-xs leading-relaxed text-ink-soft">
              Jadwal ini dihitung secara otomatis. Selisih 1–3 menit dari
              jadwal masjid setempat adalah hal yang wajar.{" "}
              <Link
                href="/pengaturan"
                className="font-semibold text-primary hover:underline"
              >
                Sesuaikan di Pengaturan
              </Link>{" "}
              jika perlu.
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
