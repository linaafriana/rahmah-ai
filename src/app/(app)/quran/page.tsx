import Link from "next/link";
import { Sparkles, Headphones, Bookmark } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SurahList } from "@/components/quran/SurahList";
import { ContinueReadingCard } from "@/components/quran/ContinueReadingCard";
import { id as t } from "@/lib/i18n/id";
import { getChapters, type Chapter } from "@/lib/quran";

const fallbackChapters: Chapter[] = [
  { id: 1, name_simple: "Al-Fatihah", name_arabic: "ٱلْفَاتِحَة", verses_count: 7, revelation_place: "makkah" },
  { id: 2, name_simple: "Al-Baqarah", name_arabic: "ٱلْبَقَرَة", verses_count: 286, revelation_place: "madinah" },
  { id: 18, name_simple: "Al-Kahf", name_arabic: "ٱلْكَهْف", verses_count: 110, revelation_place: "makkah" },
  { id: 36, name_simple: "Yasin", name_arabic: "يس", verses_count: 83, revelation_place: "makkah" },
  { id: 67, name_simple: "Al-Mulk", name_arabic: "ٱلْمُلْك", verses_count: 30, revelation_place: "makkah" },
  { id: 112, name_simple: "Al-Ikhlas", name_arabic: "ٱلْإِخْلَاص", verses_count: 4, revelation_place: "makkah" },
];

async function loadChapters(): Promise<Chapter[]> {
  try {
    return await getChapters();
  } catch {
    return fallbackChapters;
  }
}

export default async function QuranPage() {
  const chapters = await loadChapters();
  return (
    <div className="space-y-5">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-ink">{t.quran.title}</h1>
        <Link
          href="/quran/bookmarks"
          className="inline-flex items-center gap-1.5 rounded-pill bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-soft hover:text-primary"
        >
          <Bookmark size={14} />
          Penanda
        </Link>
      </header>

      <ContinueReadingCard />

      <section>
        <h2 className="mb-3 text-sm font-bold text-ink">
          {t.quran.beginnerTitle}
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <BeginnerTile
            href="/belajar/hijaiyah"
            title={t.quran.hijaiyah}
            desc={t.quran.hijaiyahDesc}
            tone="accent"
          />
          <BeginnerTile
            href="/belajar/tajwid"
            title={t.quran.tajwid}
            desc={t.quran.tajwidDesc}
            tone="secondary"
          />
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold text-ink">Daftar Surah</h2>
          <Headphones size={16} className="text-ink-muted" />
        </div>
        <SurahList chapters={chapters} />
      </section>
    </div>
  );
}

function BeginnerTile({
  href,
  title,
  desc,
  tone,
}: {
  href: string;
  title: string;
  desc: string;
  tone: "accent" | "secondary";
}) {
  return (
    <Link href={href} className="block">
      <Card tone={tone} className="overflow-hidden">
        <Sparkles size={18} className="mb-3 text-ink-soft" />
        <h3 className="text-sm font-bold text-ink">{title}</h3>
        <p className="mt-1 text-[11px] text-ink-soft">{desc}</p>
      </Card>
    </Link>
  );
}
