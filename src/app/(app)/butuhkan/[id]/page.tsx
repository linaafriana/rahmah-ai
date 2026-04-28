import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Blob } from "@/components/illustrations/Blob";
import { findSituation, situations } from "@/data/seed-butuhkan";
import { findLearnTopic } from "@/data/seed-belajar";
import { id as t } from "@/lib/i18n/id";

export function generateStaticParams() {
  return situations.map((s) => ({ id: s.id }));
}

export default function ButuhkanDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const situation = findSituation(params.id);
  if (!situation) notFound();

  const topics = situation.recommendedSlugs
    .map((slug) => findLearnTopic(slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <div className="space-y-5">
      <Link
        href="/butuhkan"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={16} />
        {t.butuhkan.title}
      </Link>

      <Card tone="primary" className="overflow-hidden">
        <Blob
          color="#FFE9A8"
          size={180}
          className="absolute -right-10 -top-10 opacity-60"
        />
        <div className="relative">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-card bg-white text-2xl">
            {situation.emoji}
          </div>
          <h1 className="text-xl font-bold text-ink">{situation.label}</h1>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {situation.intro}
          </p>
        </div>
      </Card>

      <section>
        <h2 className="mb-3 px-1 text-sm font-bold text-ink">
          {t.butuhkan.recommendedTitle}
        </h2>
        <div className="space-y-2.5">
          {topics.map((topic) => (
            <Link key={topic.id} href={`/belajar/${topic.slug}`} className="block">
              <Card tone="white">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-primary-tint text-xl">
                    {topic.emoji}
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">
                      {t.belajar.categories[topic.category]} ·{" "}
                      {t.belajar.levels[topic.level]}
                    </p>
                    <h3 className="mt-0.5 text-sm font-bold text-ink">
                      {topic.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-ink-soft">
                      {topic.description}
                    </p>
                  </div>
                  <ChevronRight size={16} className="mt-1 text-ink-muted" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 px-1 text-sm font-bold text-ink">
          {t.butuhkan.doaTitle}
        </h2>
        <Card tone="accent">
          <p
            className="text-right font-arabic text-2xl leading-loose text-ink"
            dir="rtl"
          >
            {situation.doa.arabic}
          </p>
          <p className="mt-3 text-sm italic text-ink-soft">
            {situation.doa.transliteration}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink">
            {situation.doa.meaning}
          </p>
        </Card>
      </section>

      <section>
        <h2 className="mb-2 px-1 text-sm font-bold text-ink">
          {t.butuhkan.ayahTitle}
        </h2>
        <Card tone="secondary">
          <p
            className="text-right font-arabic text-2xl leading-loose text-ink"
            dir="rtl"
          >
            {situation.ayah.arabic}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            {situation.ayah.translation}
          </p>
          <p className="mt-1 text-xs text-ink-soft">
            QS. {situation.ayah.surahName} : {situation.ayah.ayahNumber}
          </p>
        </Card>
      </section>

      <Card tone="cream" className="border border-ink/5">
        <p className="text-center text-sm italic text-ink-soft">
          {situation.closing} 🤍
        </p>
      </Card>
    </div>
  );
}
