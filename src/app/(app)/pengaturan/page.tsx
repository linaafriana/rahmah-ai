"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Clock, Heart, LogOut, MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/providers/AuthProvider";
import { RECITERS, DEFAULT_RECITER_ID } from "@/lib/quran";
import { isHaidActive, setHaidActive } from "@/lib/haid";
import {
  DEFAULT_METHOD,
  PRAYER_METHODS,
  ZERO_TUNE,
  readUserMethod,
  readUserTune,
  writeUserMethod,
  writeUserTune,
  type TuneOffsets,
} from "@/lib/prayer";

const RECITER_KEY = "sakinah:reciterPref";
const NAME_KEY = "sakinah:displayName";

const tuneFields: Array<{ key: keyof TuneOffsets; label: string }> = [
  { key: "Fajr", label: "Subuh" },
  { key: "Dhuhr", label: "Dzuhur" },
  { key: "Asr", label: "Ashar" },
  { key: "Maghrib", label: "Maghrib" },
  { key: "Isha", label: "Isya" },
];

export default function PengaturanPage() {
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [name, setName] = useState("");
  const [reciterId, setReciterId] = useState<number>(DEFAULT_RECITER_ID);
  const [method, setMethod] = useState<number>(DEFAULT_METHOD);
  const [tune, setTune] = useState<TuneOffsets>(ZERO_TUNE);
  const [saved, setSaved] = useState(false);
  const [hasLocation, setHasLocation] = useState(false);
  const [haid, setHaid] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setName(window.localStorage.getItem(NAME_KEY) ?? user?.name ?? "");
    const r = window.localStorage.getItem(RECITER_KEY);
    if (r) setReciterId(Number(r) || DEFAULT_RECITER_ID);
    setHasLocation(!!window.localStorage.getItem("sakinah:coords"));
    setMethod(readUserMethod());
    setTune(readUserTune());
    setHaid(isHaidActive());
  }, [user]);

  function toggleHaid() {
    const next = !haid;
    setHaid(next);
    setHaidActive(next);
  }

  function save() {
    if (typeof window !== "undefined") {
      if (name.trim()) window.localStorage.setItem(NAME_KEY, name.trim());
      window.localStorage.setItem(RECITER_KEY, String(reciterId));
      writeUserMethod(method);
      writeUserTune(tune);
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function updateTune(key: keyof TuneOffsets, value: number) {
    const clamped = Math.max(-30, Math.min(30, value));
    setTune({ ...tune, [key]: clamped });
  }

  function resetTune() {
    setTune(ZERO_TUNE);
  }

  function clearLocation() {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("sakinah:coords");
      setHasLocation(false);
    }
  }

  async function handleSignOut() {
    await signOut();
    router.replace("/sign-in");
  }

  function resetData() {
    if (
      typeof window !== "undefined" &&
      window.confirm(
        "Hapus semua data lokal (niat, jurnal, kebiasaan, lokasi)? Tindakan tidak bisa dibatalkan.",
      )
    ) {
      const keys: string[] = [];
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        if (key && key.startsWith("sakinah:")) keys.push(key);
      }
      keys.forEach((k) => window.localStorage.removeItem(k));
      window.location.reload();
    }
  }

  const tuneActive = Object.values(tune).some((v) => v !== 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-5"
    >
      <Link
        href="/hati"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={16} />
        Hati
      </Link>

      <header>
        <h1 className="text-3xl font-bold text-ink">Pengaturan</h1>
        <p className="mt-1 text-sm text-ink-soft">
          Sesuaikan dengan kebutuhanmu
        </p>
      </header>

      <Card tone="white">
        <h2 className="text-sm font-bold text-ink">Profil</h2>
        <label className="mt-3 block">
          <span className="mb-1 block text-xs font-medium text-ink-soft">
            Nama panggilan
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Sahabat"
            className="w-full rounded-card border border-ink/10 bg-background px-4 py-3 text-sm text-ink outline-none focus:border-primary"
          />
        </label>
        {user?.email && (
          <p className="mt-2 text-[11px] text-ink-muted">{user.email}</p>
        )}
      </Card>

      <Card tone="white">
        <h2 className="text-sm font-bold text-ink">Qari favorit</h2>
        <p className="mt-0.5 text-[11px] text-ink-soft">
          Akan digunakan sebagai default di Quran
        </p>
        <select
          value={reciterId}
          onChange={(e) => setReciterId(Number(e.target.value))}
          className="mt-3 w-full appearance-none rounded-card border border-ink/10 bg-background px-4 py-3 text-sm text-ink outline-none focus:border-primary"
        >
          {RECITERS.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>
      </Card>

      <Card tone="white">
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-primary" />
          <h2 className="text-sm font-bold text-ink">Jadwal Sholat</h2>
        </div>
        <p className="mt-1 text-[11px] text-ink-soft">
          Pilih metode perhitungan dan sesuaikan jadwal jika berbeda 1–3
          menit dari masjid setempat.
        </p>

        <div className="mt-3 rounded-card bg-primary-tint/60 px-3 py-2 text-[11px] leading-relaxed text-ink-soft">
          <span className="font-semibold text-primary">Otomatis Kemenag.</span>{" "}
          Untuk lokasi di Indonesia, kami pakai jadwal Bimas Islam Kemenag RI
          langsung — sama dengan jadwal masjid resmi. Pengaturan di bawah
          dipakai sebagai cadangan untuk lokasi luar Indonesia atau jika
          kotamu belum cocok.
        </div>

        <label className="mt-3 block">
          <span className="mb-1 block text-xs font-medium text-ink-soft">
            Metode perhitungan (cadangan)
          </span>
          <select
            value={method}
            onChange={(e) => setMethod(Number(e.target.value))}
            className="w-full appearance-none rounded-card border border-ink/10 bg-background px-4 py-3 text-sm text-ink outline-none focus:border-primary"
          >
            {PRAYER_METHODS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
        </label>

        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-ink-soft">
              Penyesuaian per sholat (menit)
            </span>
            {tuneActive && (
              <button
                type="button"
                onClick={resetTune}
                className="text-[11px] font-medium text-ink-muted hover:text-primary"
              >
                Reset
              </button>
            )}
          </div>
          <div className="space-y-2">
            {tuneFields.map(({ key, label }) => (
              <div
                key={key}
                className="flex items-center justify-between gap-3 rounded-card bg-background px-3 py-2"
              >
                <span className="text-sm text-ink">{label}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateTune(key, tune[key] - 1)}
                    aria-label={`${label} -1 menit`}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm text-ink shadow-soft hover:bg-primary-tint"
                  >
                    −
                  </button>
                  <span className="w-12 text-center text-sm font-mono font-semibold text-ink">
                    {tune[key] > 0 ? `+${tune[key]}` : tune[key]}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateTune(key, tune[key] + 1)}
                    aria-label={`${label} +1 menit`}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm text-ink shadow-soft hover:bg-primary-tint"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[11px] text-ink-muted">
            Nilai negatif memajukan, positif memundurkan. Maksimal ±30
            menit. Banyak yang setel: Subuh −2, Isya −3 untuk cocok dengan
            jadwal Kemenag resmi.
          </p>
        </div>
      </Card>

      <Card tone="white">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Heart size={14} className="text-rose-400" />
              <h2 className="text-sm font-bold text-ink">Mode haid</h2>
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-ink-soft">
              Sembunyikan tracker sholat saat sedang haid. Diganti dengan
              card lembut + amalan yang tetap bisa dilakukan (dzikir, doa,
              belajar). Disimpan hanya di perangkatmu — tidak ke server.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={haid}
            onClick={toggleHaid}
            className={
              "relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-pill transition-colors " +
              (haid ? "bg-rose-300" : "bg-ink/15")
            }
          >
            <span
              className={
                "inline-block h-5 w-5 transform rounded-full bg-white shadow-soft transition-transform " +
                (haid ? "translate-x-6" : "translate-x-1")
              }
            />
          </button>
        </div>
        {haid && (
          <Link
            href="/belajar/hukum-darah-wanita"
            className="mt-3 inline-flex items-center gap-1 rounded-pill bg-rose-50 px-3 py-1.5 text-[11px] font-semibold text-rose-500 hover:bg-rose-100"
          >
            📖 Buka panduan lengkap
          </Link>
        )}
      </Card>

      <Card tone="white">
        <h2 className="text-sm font-bold text-ink">Lokasi (Jadwal sholat)</h2>
        <div className="mt-2 flex items-center gap-2 text-xs">
          <MapPin
            size={14}
            className={hasLocation ? "text-primary" : "text-ink-muted"}
          />
          <span className={hasLocation ? "text-ink" : "text-ink-soft"}>
            {hasLocation ? "Lokasi tersimpan di perangkat" : "Belum diaktifkan"}
          </span>
        </div>
        {hasLocation ? (
          <button
            type="button"
            onClick={clearLocation}
            className="mt-3 inline-flex rounded-pill bg-background px-3 py-1.5 text-xs font-medium text-ink-soft hover:text-ink"
          >
            Hapus lokasi
          </button>
        ) : (
          <Link
            href="/jadwal"
            className="mt-3 inline-flex rounded-pill bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-soft"
          >
            Atur di Jadwal
          </Link>
        )}
      </Card>

      <Button fullWidth size="lg" onClick={save}>
        {saved ? (
          <>
            <Check size={16} /> Tersimpan
          </>
        ) : (
          "Simpan perubahan"
        )}
      </Button>

      <Card tone="cream" className="border border-ink/5">
        <h2 className="text-sm font-bold text-ink">Lainnya</h2>
        <button
          type="button"
          onClick={resetData}
          className="mt-3 block w-full rounded-card bg-white px-4 py-3 text-left text-sm text-rose-500 shadow-soft hover:bg-rose-50"
        >
          Hapus semua data lokal
        </button>
        <button
          type="button"
          onClick={handleSignOut}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-white py-3 text-sm font-medium text-ink-soft shadow-soft hover:text-ink"
        >
          <LogOut size={16} />
          Keluar
        </button>
      </Card>
    </motion.div>
  );
}
