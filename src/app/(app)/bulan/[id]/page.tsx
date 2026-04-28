import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Sparkles, Calendar } from "lucide-react";
import clsx from "clsx";
import { Card } from "@/components/ui/Card";
import { Blob } from "@/components/illustrations/Blob";
import { getMonthInfo, hijriMonths } from "@/data/seed-bulan-hijriah";

export function generateStaticParams() {
  return hijriMonths.map((m) => ({ id: String(m.number) }));
}

export default function BulanDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const num = Number(params.id);
  const month = getMonthInfo(num);
  if (!month) notFound();

  return (
    <div className="space-y-5">
      <Link
        href="/jadwal"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={16} />
        Jadwal
      </Link>

      <Card tone={month.isHaram ? "secondary" : "primary"} className="overflow-hidden">
        <Blob
          color={month.isHaram ? "#FFE9A8" : "#FADADD"}
          size={180}
          className="absolute -right-10 -top-10 opacity-50"
        />
        <div className="relative">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-card bg-white text-2xl">
            {month.emoji}
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">
            Bulan Hijriah ke-{month.number}
            {month.isHaram && " · Bulan Haram"}
          </p>
          <h1 className="mt-1 text-3xl font-bold text-ink">{month.name}</h1>
          <p
            className="mt-1 text-right font-arabic text-2xl text-ink"
            dir="rtl"
          >
            {month.arabic}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            {month.intro}
          </p>
        </div>
      </Card>

      <section>
        <div className="mb-3 flex items-center gap-2 px-1">
          <Sparkles size={14} className="text-primary" />
          <h2 className="text-sm font-bold text-ink">Keutamaan</h2>
        </div>
        <Card tone="white">
          <ul className="space-y-2">
            {month.keutamaan.map((k, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink">
                <span className="text-primary">·</span>
                <span className="leading-relaxed">{k}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section>
        <h2 className="mb-3 px-1 text-sm font-bold text-ink">Saran Amalan</h2>
        <div className="space-y-2.5">
          {month.saranAmalan.map((amal, i) => (
            <Card key={i} tone="white" padded={false} className="px-4 py-3">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-tint text-[10px] font-bold text-primary">
                  {i + 1}
                </span>
                <p className="flex-1 text-sm leading-relaxed text-ink">
                  {amal}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {month.specialDays.length > 0 && (
        <section>
          <div className="mb-3 flex items-center gap-2 px-1">
            <Calendar size={14} className="text-primary" />
            <h2 className="text-sm font-bold text-ink">Hari Khusus</h2>
          </div>
          <Card tone="cream" className="border border-ink/5">
            <ul className="divide-y divide-ink/5">
              {month.specialDays.map((sd, i) => (
                <li key={i} className="flex items-start gap-3 py-2.5 first:pt-0 last:pb-0">
                  <div
                    className={clsx(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-card text-[11px] font-bold",
                      "bg-white text-ink",
                    )}
                  >
                    {sd.day}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink">{sd.name}</p>
                    {sd.amalan && (
                      <p className="mt-0.5 text-xs text-ink-soft">
                        {sd.amalan}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      )}

      {month.closing && (
        <Card tone="accent" className="border border-ink/5">
          <p className="text-center text-sm italic text-ink">
            {month.closing} 🤍
          </p>
        </Card>
      )}
    </div>
  );
}
