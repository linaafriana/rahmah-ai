import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookHeart, Stars, Sun } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Blob } from "@/components/illustrations/Blob";
import { StepCheck } from "@/components/parenting/StepCheck";
import { findParentingTopic, seedParenting } from "@/data/seed-parenting";

export function generateStaticParams() {
  return seedParenting.map((t) => ({ slug: t.slug }));
}

const iconMap = {
  doa: BookHeart,
  sholat: Sun,
  habits: Stars,
} as const;

const toneMap = {
  doa: { card: "secondary", blob: "#FFE9A8" },
  sholat: { card: "accent", blob: "#A8D8D0" },
  habits: { card: "primary", blob: "#FADADD" },
} as const;

export default function ParentingDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const topic = findParentingTopic(params.slug);
  if (!topic) notFound();

  const Icon = iconMap[topic.illustration];
  const tone = toneMap[topic.illustration];

  return (
    <div className="space-y-5">
      <Link
        href="/parenting"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={16} />
        Parenting
      </Link>

      <Card tone={tone.card} className="overflow-hidden">
        <Blob
          color={tone.blob}
          size={180}
          className="absolute -right-10 -top-10 opacity-70"
        />
        <div className="relative">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-card bg-white text-ink">
            <Icon size={22} />
          </div>
          <h1 className="text-2xl font-bold text-ink">{topic.title}</h1>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {topic.intro}
          </p>
        </div>
      </Card>

      <div className="space-y-3">
        {topic.steps.map((step, idx) => (
          <Card key={idx} tone="white">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-tint text-xs font-bold text-primary">
                {idx + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-ink">{step.title}</h3>
                {step.arabic && (
                  <p
                    className="mt-2 text-right font-arabic text-xl leading-loose text-ink"
                    dir="rtl"
                  >
                    {step.arabic}
                  </p>
                )}
                {step.transliteration && (
                  <p className="mt-1 text-xs italic text-ink-soft">
                    {step.transliteration}
                  </p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  {step.body}
                </p>
                <div className="mt-3">
                  <StepCheck slug={topic.slug} index={idx} />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {topic.closing && (
        <Card tone="cream" className="border border-ink/5">
          <p className="text-center text-sm italic text-ink-soft">
            {topic.closing} 🤍
          </p>
        </Card>
      )}
    </div>
  );
}
