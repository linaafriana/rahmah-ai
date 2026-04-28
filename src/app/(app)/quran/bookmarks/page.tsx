"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, BookmarkCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { useAuth } from "@/providers/AuthProvider";
import { loadBookmarks } from "@/lib/firebase/firestore";
import type { VerseBookmark } from "@/types";

const LOCAL_KEY = "sakinah:bookmarks";
const PER_PAGE = 50;

function readLocal(): VerseBookmark[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(LOCAL_KEY);
  if (!raw) return [];
  try {
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function dedupe(items: VerseBookmark[]): VerseBookmark[] {
  const map = new Map<string, VerseBookmark>();
  for (const item of items) {
    const existing = map.get(item.id);
    if (!existing || item.createdAt > existing.createdAt) {
      map.set(item.id, item);
    }
  }
  return Array.from(map.values()).sort((a, b) => b.createdAt - a.createdAt);
}

export default function BookmarksPage() {
  const { user } = useAuth();
  const [items, setItems] = useState<VerseBookmark[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const local = readLocal();
    setItems(local);
    if (!user) {
      setLoading(false);
      return;
    }
    let alive = true;
    void loadBookmarks(user.uid).then((remote) => {
      if (!alive) return;
      setItems(dedupe([...local, ...remote]));
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, [user]);

  return (
    <div className="space-y-5">
      <Link
        href="/quran"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={16} />
        Quran
      </Link>

      <header>
        <h1 className="text-3xl font-bold text-ink">Penanda Ayat</h1>
        <p className="mt-1 text-sm text-ink-soft">
          Ayat-ayat yang menyentuhmu, simpan untuk dibaca lagi 🤍
        </p>
      </header>

      {loading && (
        <p className="py-6 text-center text-sm text-ink-muted">Memuat…</p>
      )}

      {!loading && items.length === 0 && (
        <Card tone="cream" className="border border-ink/5">
          <div className="text-center text-sm text-ink-soft">
            <BookmarkCheck className="mx-auto mb-2 text-ink-muted" size={28} />
            Belum ada penanda. Buka surah dan ketuk ikon penanda di samping
            nomor ayat.
          </div>
        </Card>
      )}

      <div className="space-y-3">
        {items.map((bm) => {
          const page = Math.max(1, Math.ceil(bm.ayahNumber / PER_PAGE));
          const href =
            page > 1
              ? `/quran/${bm.surahNumber}?page=${page}`
              : `/quran/${bm.surahNumber}`;
          return (
            <Link key={bm.id} href={href} className="block">
              <Card tone="white">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary/80">
                      QS. {bm.surahName} : {bm.ayahNumber}
                    </p>
                    <p
                      className="mt-2 text-right font-arabic text-xl leading-loose text-ink"
                      dir="rtl"
                    >
                      {bm.arabic}
                    </p>
                    {bm.translation && (
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {bm.translation}
                      </p>
                    )}
                  </div>
                  <ChevronRight size={18} className="mt-1 text-ink-muted" />
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
