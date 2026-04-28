import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import clsx from "clsx";
import { Card } from "@/components/ui/Card";
import { Blob } from "@/components/illustrations/Blob";
import { BelajarStepCheck } from "@/components/belajar/StepCheck";
import { HijaiyahLetter } from "@/components/belajar/HijaiyahLetter";
import { BelajarVisitTracker } from "@/components/belajar/BelajarVisitTracker";
import {
  findLearnTopic,
  nextTopicInCategory,
  seedBelajar,
} from "@/data/seed-belajar";
import { id as t } from "@/lib/i18n/id";
import type { LearnCategory, LearnLevel } from "@/types";

export function generateStaticParams() {
  return seedBelajar.map((topic) => ({ slug: topic.slug }));
}

const categoryTone: Record<
  LearnCategory,
  { card: "primary" | "accent" | "secondary"; blob: string }
> = {
  dasar: { card: "primary", blob: "#FFE9A8" },
  aqidah: { card: "secondary", blob: "#FFE9A8" },
  tahsin: { card: "primary", blob: "#FFE9A8" },
  fiqih: { card: "accent", blob: "#A8D8D0" },
  akhlak: { card: "primary", blob: "#FADADD" },
  doa: { card: "accent", blob: "#FADADD" },
  sirah: { card: "secondary", blob: "#A8D8D0" },
  hadits: { card: "primary", blob: "#FFE9A8" },
};

const levelChip: Record<LearnLevel, string> = {
  pemula: "bg-primary-tint text-primary",
  menengah: "bg-accent-tint text-ink",
  lanjutan: "bg-secondary text-ink",
};

export default function BelajarTopicPage({
  params,
}: {
  params: { slug: string };
}) {
  const topic = findLearnTopic(params.slug);
  if (!topic) notFound();

  const tone = categoryTone[topic.category];
  // Hijaiyah is special — render as a soft grid
  const isHijaiyah = topic.slug === "hijaiyah";
  const next = nextTopicInCategory(topic);

  return (
    <div className="space-y-5">
      <BelajarVisitTracker
        slug={topic.slug}
        title={topic.title}
        emoji={topic.emoji}
        category={topic.category}
      />
      <Link
        href="/belajar"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={16} />
        {t.belajar.title}
      </Link>

      <Card tone={tone.card} className="overflow-hidden">
        <Blob
          color={tone.blob}
          size={180}
          className="absolute -right-10 -top-10 opacity-70"
        />
        <div className="relative">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-card bg-white text-2xl">
            {topic.emoji}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">
              {t.belajar.categories[topic.category]}
            </p>
            <span
              className={clsx(
                "rounded-pill px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                levelChip[topic.level],
              )}
            >
              {t.belajar.levels[topic.level]}
            </span>
          </div>
          <h1 className="mt-1 text-2xl font-bold text-ink">{topic.title}</h1>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {topic.intro}
          </p>
        </div>
      </Card>

      {isHijaiyah ? (
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {topic.items.map((item, idx) => (
            <HijaiyahLetter key={idx} item={item} />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {topic.items.map((item, idx) => (
            <Card key={idx} tone="white">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-tint text-xs font-bold text-primary">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                  {item.arabic && (
                    <p
                      className="mt-2 text-right font-arabic text-xl leading-loose text-ink"
                      dir="rtl"
                    >
                      {item.arabic}
                    </p>
                  )}
                  {item.transliteration && (
                    <p className="mt-1 text-xs italic text-ink-soft">
                      {item.transliteration}
                    </p>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-ink">
                    {item.body}
                  </p>
                  <div className="mt-3">
                    <BelajarStepCheck slug={topic.slug} index={idx} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {topic.closing && (
        <Card tone="cream" className="border border-ink/5">
          <p className="text-center text-sm italic text-ink-soft">
            {topic.closing} 🤍
          </p>
        </Card>
      )}

      {next ? (
        <Link href={`/belajar/${next.slug}`} className="block">
          <Card tone="primary" className="overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-white text-xl">
                {next.emoji}
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">
                  {t.belajar.nextTopic} ·{" "}
                  {t.belajar.levels[next.level]}
                </p>
                <h3 className="mt-0.5 text-sm font-bold text-ink">
                  {next.title}
                </h3>
              </div>
              <ArrowRight size={18} className="text-ink-muted" />
            </div>
          </Card>
        </Link>
      ) : (
        <Card tone="cream" className="border border-ink/5">
          <p className="text-center text-sm text-ink-soft">
            {t.belajar.finishedCategory}
          </p>
        </Card>
      )}
    </div>
  );
}
