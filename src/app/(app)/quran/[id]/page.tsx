import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { PositionTracker } from "@/components/quran/PositionTracker";
import { VerseAudioButton } from "@/components/quran/VerseAudioButton";
import { ReciterPicker } from "@/components/quran/ReciterPicker";
import { BookmarkButton } from "@/components/quran/BookmarkButton";
import {
  DEFAULT_RECITER_ID,
  getChapter,
  getVerseAudios,
  getVersesByChapter,
} from "@/lib/quran";

type Params = { id: string };
type SearchParams = { page?: string; reciter?: string };

const PER_PAGE = 50;

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

function buildHref(chapterId: number, page: number, reciter: number): string {
  const params = new URLSearchParams();
  if (page > 1) params.set("page", String(page));
  if (reciter !== DEFAULT_RECITER_ID) params.set("reciter", String(reciter));
  const qs = params.toString();
  return qs ? `/quran/${chapterId}?${qs}` : `/quran/${chapterId}`;
}

export default async function SurahPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const chapterId = Number(params.id);
  if (!Number.isInteger(chapterId) || chapterId < 1 || chapterId > 114) {
    notFound();
  }
  const page = Math.max(1, Number(searchParams.page) || 1);
  const reciter = Number(searchParams.reciter) || DEFAULT_RECITER_ID;

  const [chapter, versesPage, audios] = await Promise.all([
    getChapter(chapterId),
    getVersesByChapter(chapterId, page, PER_PAGE),
    getVerseAudios(chapterId, reciter).catch(
      () => new Map<string, string>(),
    ),
  ]);

  if (!chapter || !versesPage) {
    notFound();
  }

  const startVerse = (page - 1) * PER_PAGE + 1;
  const endVerse = Math.min(versesPage.total, page * PER_PAGE);

  const trackedPosition = {
    surahNumber: chapter.id,
    surahName: chapter.name_simple,
    ayahNumber: startVerse,
    totalAyahs: chapter.verses_count,
  };

  return (
    <div className="space-y-5">
      <PositionTracker position={trackedPosition} />
      <Link
        href="/quran"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={16} />
        Daftar Surah
      </Link>

      <Card tone="primary" className="overflow-hidden">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/80">
              QS. {chapter.id}
            </p>
            <h1 className="mt-1 text-2xl font-bold text-ink">
              {chapter.name_simple}
            </h1>
            <p className="mt-1 text-xs text-ink-soft">
              {chapter.verses_count} ayat ·{" "}
              {chapter.revelation_place === "makkah" ? "Makkiyah" : "Madaniyah"}
            </p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/80 text-primary">
            <BookOpen size={20} />
          </div>
        </div>
        <p
          className="mt-4 text-right font-arabic text-3xl text-ink"
          dir="rtl"
        >
          {chapter.name_arabic}
        </p>
      </Card>

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-ink-muted">
          Ayat {startVerse}–{endVerse} dari {versesPage.total}
        </p>
        <ReciterPicker />
      </div>

      <div className="space-y-3">
        {versesPage.verses.map((v) => {
          const translation = v.translations?.[0]?.text
            ? stripHtml(v.translations[0].text)
            : "";
          const audioUrl = audios.get(v.verse_key);
          return (
            <Card key={v.id} tone="white">
              <div className="flex items-center justify-between text-xs text-ink-muted">
                <span className="rounded-pill bg-primary-tint px-2 py-0.5 font-semibold text-primary">
                  Ayat {v.verse_number}
                </span>
                <div className="flex items-center gap-1">
                  <span className="mr-1">{v.verse_key}</span>
                  <VerseAudioButton url={audioUrl} />
                  <BookmarkButton
                    verseKey={v.verse_key}
                    surahNumber={chapter.id}
                    surahName={chapter.name_simple}
                    ayahNumber={v.verse_number}
                    arabic={v.text_uthmani}
                    translation={translation || undefined}
                  />
                </div>
              </div>
              <p
                className="mt-3 text-right font-arabic text-2xl leading-loose text-ink"
                dir="rtl"
              >
                {v.text_uthmani}
              </p>
              {translation && (
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {translation}
                </p>
              )}
            </Card>
          );
        })}
      </div>

      {versesPage.totalPages > 1 && (
        <nav className="flex items-center justify-between gap-3">
          {page > 1 ? (
            <Link
              href={buildHref(chapterId, page - 1, reciter)}
              className="inline-flex items-center gap-1.5 rounded-pill bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft"
            >
              <ArrowLeft size={14} />
              Sebelumnya
            </Link>
          ) : (
            <span />
          )}
          <span className="text-xs text-ink-muted">
            Halaman {page} dari {versesPage.totalPages}
          </span>
          {page < versesPage.totalPages ? (
            <Link
              href={buildHref(chapterId, page + 1, reciter)}
              className="inline-flex items-center gap-1.5 rounded-pill bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft"
            >
              Selanjutnya
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </div>
  );
}
