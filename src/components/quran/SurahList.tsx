"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight, Search, X } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Chapter } from "@/lib/quran";

export function SurahList({ chapters }: { chapters: Chapter[] }) {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return chapters;
    return chapters.filter(
      (c) =>
        c.name_simple.toLowerCase().includes(q) ||
        c.name_arabic.includes(q) ||
        String(c.id) === q,
    );
  }, [chapters, query]);
  const hasQuery = query.trim().length > 0;
  const visible = hasQuery || showAll ? filtered : filtered.slice(0, 12);
  const hiddenCount = hasQuery || showAll ? 0 : Math.max(0, filtered.length - 12);

  return (
    <div className="space-y-3">
      <label className="relative block">
        <Search
          size={16}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
        />
        <input
          type="search"
          inputMode="search"
          enterKeyHint="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value.trim()) setShowAll(true);
          }}
          placeholder="Cari surah…"
          className="w-full rounded-pill border border-ink/5 bg-white py-2.5 pl-10 pr-10 text-sm text-ink shadow-soft outline-none placeholder:text-ink-muted focus:ring-2 focus:ring-primary/30"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Hapus pencarian surah"
            className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-ink-muted hover:bg-ink/5 hover:text-ink"
          >
            <X size={12} />
          </button>
        )}
      </label>

      <p className="sr-only" aria-live="polite">
        {filtered.length} surah ditemukan.
      </p>

      {filtered.length === 0 && (
        <Card tone="cream" className="border border-ink/5 text-center">
          <p className="text-sm text-ink-soft">
            Tidak ditemukan. Coba nomor surah, nama latin, atau mulai dari
            pilihan yang sering dibaca.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {[
              ["1", "Al-Fatihah"],
              ["18", "Al-Kahf"],
              ["67", "Al-Mulk"],
              ["112", "Al-Ikhlas"],
            ].map(([id, label]) => (
              <Link
                key={id}
                href={`/quran/${id}`}
                className="rounded-pill bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-soft hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </div>
        </Card>
      )}

      <div className="space-y-2">
        {visible.map((c) => (
          <Link key={c.id} href={`/quran/${c.id}`} className="block">
            <Card tone="white" padded={false} className="px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-tint text-xs font-bold text-primary">
                  {c.id}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-ink">
                    {c.name_simple}
                  </p>
                  <p className="text-[11px] text-ink-muted">
                    {c.verses_count} ayat ·{" "}
                    {c.revelation_place === "makkah"
                      ? "Makkiyah"
                      : "Madaniyah"}
                  </p>
                </div>
                <span
                  className="font-arabic text-base text-ink-soft"
                  dir="rtl"
                >
                  {c.name_arabic}
                </span>
                <ChevronRight size={18} className="text-ink-muted" />
              </div>
            </Card>
          </Link>
        ))}
        {hiddenCount > 0 && (
          <Card tone="white" className="border border-primary/10 text-center">
            <p className="text-sm font-semibold text-ink">
              {hiddenCount} surah lain disembunyikan dulu.
            </p>
            <p className="mt-1 text-xs leading-relaxed text-ink-soft">
              Cari nama/nomor surah, atau tampilkan semua kalau kamu sudah tahu
              tujuan bacaanmu.
            </p>
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="mt-3 rounded-pill bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Tampilkan semua surah
            </button>
          </Card>
        )}
      </div>
    </div>
  );
}
