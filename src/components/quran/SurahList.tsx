"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight, Search, X } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Chapter } from "@/lib/quran";

export function SurahList({ chapters }: { chapters: Chapter[] }) {
  const [query, setQuery] = useState("");

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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
        {filtered.map((c) => (
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
      </div>
    </div>
  );
}
