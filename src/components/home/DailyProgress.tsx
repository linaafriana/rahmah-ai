"use client";

import { Card } from "@/components/ui/Card";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { id as t } from "@/lib/i18n/id";

export function DailyProgress({ value }: { value: number }) {
  const pct = Math.round(value * 100);
  return (
    <Card tone="white" className="flex items-center gap-5">
      <ProgressRing
        value={value}
        size={108}
        stroke={10}
        label={
          <div>
            <div className="text-2xl font-bold text-ink">{pct}%</div>
            <div className="text-[10px] uppercase tracking-widest text-ink-muted">
              hari ini
            </div>
          </div>
        }
      />
      <div className="flex-1">
        <p className="text-sm font-semibold text-ink">
          {t.home.progressLabel}
        </p>
        <p className="mt-1 text-xs text-ink-soft">
          Setiap langkah yang kamu ambil dicatat oleh Allah 🤍
        </p>
      </div>
    </Card>
  );
}
