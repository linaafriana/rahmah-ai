"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Check, LogOut, MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/providers/AuthProvider";
import { RECITERS, DEFAULT_RECITER_ID } from "@/lib/quran";

const RECITER_KEY = "sakinah:reciterPref";
const NAME_KEY = "sakinah:displayName";

export default function PengaturanPage() {
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [name, setName] = useState("");
  const [reciterId, setReciterId] = useState<number>(DEFAULT_RECITER_ID);
  const [saved, setSaved] = useState(false);
  const [hasLocation, setHasLocation] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setName(window.localStorage.getItem(NAME_KEY) ?? user?.name ?? "");
    const r = window.localStorage.getItem(RECITER_KEY);
    if (r) setReciterId(Number(r) || DEFAULT_RECITER_ID);
    setHasLocation(!!window.localStorage.getItem("sakinah:coords"));
  }, [user]);

  function save() {
    if (typeof window !== "undefined") {
      if (name.trim()) window.localStorage.setItem(NAME_KEY, name.trim());
      window.localStorage.setItem(RECITER_KEY, String(reciterId));
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
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
