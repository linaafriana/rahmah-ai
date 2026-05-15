"use client";

import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";

type SmartGuideCardProps = {
  eyebrow?: string;
  title: string;
  body: string;
  href?: string;
  actionLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function SmartGuideCard({
  eyebrow = "Saran Rahmah",
  title,
  body,
  href,
  actionLabel = "Mulai",
  secondaryHref,
  secondaryLabel,
}: SmartGuideCardProps) {
  return (
    <Card tone="cream" className="border border-primary/15">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-primary-tint text-primary">
          <Sparkles size={17} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-0.5 text-base font-bold text-ink">{title}</h2>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{body}</p>
          {(href || secondaryHref) && (
            <div className="mt-3 flex flex-wrap gap-2">
              {href && (
                <Link
                  href={href}
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-pill bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {actionLabel}
                  <ChevronRight size={14} />
                </Link>
              )}
              {secondaryHref && secondaryLabel && (
                <Link
                  href={secondaryHref}
                  className="inline-flex min-h-10 items-center rounded-pill bg-white px-4 py-2 text-sm font-semibold text-ink shadow-soft hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
