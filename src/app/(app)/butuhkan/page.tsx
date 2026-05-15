"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Search, Sparkles, X } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { featuredSituationIds, situations } from "@/data/seed-butuhkan";
import { id as t } from "@/lib/i18n/id";
import type { SituationGroup } from "@/data/seed-butuhkan";

const groupOrder: SituationGroup[] = ["hati", "hidup"];

const groupLabel: Record<SituationGroup, string> = {
  hati: t.butuhkan.groupHati,
  hidup: t.butuhkan.groupHidup,
};

export default function ButuhkanHub() {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const normalizedQuery = query.trim().toLowerCase();

  const filteredSituations = useMemo(() => {
    if (!normalizedQuery) return situations;
    return situations.filter((s) =>
      [s.label, s.short, s.intro]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [normalizedQuery]);

  const featured = featuredSituationIds
    .map((id) => situations.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const visibleGroups = normalizedQuery
    ? groupOrder
    : showAll
      ? groupOrder
      : ([] as SituationGroup[]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <header>
        <h1 className="text-3xl font-bold text-ink">{t.butuhkan.title}</h1>
        <p className="mt-1 text-sm text-ink-soft">{t.butuhkan.subtitle}</p>
      </header>

      <Card tone="cream" className="border border-primary/15">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-primary-tint text-primary">
            <Sparkles size={17} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
              Rahmah pilihkan yang sering dibutuhkan
            </p>
            <h2 className="mt-0.5 text-base font-bold text-ink">
              Mulai dari keadaan yang paling dekat
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">
              Kamu tidak perlu membaca semua pilihan. Cari satu kata, atau pilih
              salah satu kondisi umum di bawah.
            </p>
          </div>
        </div>
      </Card>

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
          placeholder="Cari kondisi — sedih, cemas, marah..."
          className="w-full rounded-pill border border-ink/5 bg-white py-2.5 pl-10 pr-10 text-sm text-ink shadow-soft outline-none placeholder:text-ink-muted focus:ring-2 focus:ring-primary/30"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Hapus pencarian kondisi"
            className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-ink-muted hover:bg-ink/5 hover:text-ink"
          >
            <X size={12} />
          </button>
        )}
      </label>

      <p className="sr-only" aria-live="polite">
        {filteredSituations.length} kondisi ditemukan.
      </p>

      {!normalizedQuery && !showAll && (
        <section className="space-y-3">
          <h2 className="px-1 text-sm font-bold text-ink">
            Paling sering dibutuhkan
          </h2>
          <div className="space-y-2.5">
            {featured.map((s) => (
              <SituationLink key={s.id} situation={s} tone="white" />
            ))}
          </div>
          <Card tone="white" className="border border-primary/10 text-center">
            <p className="text-sm font-semibold text-ink">
              Pilihan lain disimpan dulu supaya halaman ini tidak terasa berat.
            </p>
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="mt-3 rounded-pill bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Tampilkan semua kondisi
            </button>
          </Card>
        </section>
      )}

      {normalizedQuery && filteredSituations.length === 0 && (
        <Card tone="cream" className="border border-ink/5 text-center">
          <p className="text-sm text-ink-soft">
            Belum ditemukan. Coba kata yang lebih umum seperti sedih, cemas,
            dosa, sakit, atau rezeki.
          </p>
        </Card>
      )}

      {visibleGroups.map((group) => {
        const list = filteredSituations.filter((s) => s.group === group);
        if (list.length === 0) return null;
        return (
          <section key={group} className="space-y-3">
            <h2 className="px-1 text-sm font-bold text-ink">
              {groupLabel[group]}
            </h2>
            <div className="space-y-2.5">
              {list.map((s) => (
                <SituationLink
                  key={s.id}
                  situation={s}
                  tone={group === "hati" ? "white" : "cream"}
                />
              ))}
            </div>
          </section>
        );
      })}
    </motion.div>
  );
}

function SituationLink({
  situation,
  tone,
}: {
  situation: (typeof situations)[number];
  tone: "white" | "cream";
}) {
  return (
    <Link href={`/butuhkan/${situation.id}`} className="block">
      <Card tone={tone} padded={false} className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-primary-tint text-xl">
            {situation.emoji}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-ink">{situation.label}</p>
            <p className="mt-0.5 truncate text-[11px] text-ink-soft">
              {situation.short}
            </p>
          </div>
          <ChevronRight size={16} className="text-ink-muted" />
        </div>
      </Card>
    </Link>
  );
}
