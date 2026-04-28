"use client";

import clsx from "clsx";
import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { id as t } from "@/lib/i18n/id";
import type { PrayerKey, PrayerProgress } from "@/types";

const order: PrayerKey[] = ["fajr", "dhuhr", "asr", "maghrib", "isha"];

type Props = {
  value: PrayerProgress;
  onChange: (next: PrayerProgress) => void;
};

export function PrayerCard({ value, onChange }: Props) {
  const done = order.filter((k) => value[k]).length;
  const ratio = done / order.length;
  const pct = Math.round(ratio * 100);

  function toggle(key: PrayerKey) {
    onChange({ ...value, [key]: !value[key] });
  }

  return (
    <Card tone="white">
      <div className="flex items-center gap-4">
        <ProgressRing
          value={ratio}
          size={84}
          stroke={8}
          label={
            <div>
              <div className="text-lg font-bold text-ink leading-none">
                {done}/5
              </div>
              <div className="mt-0.5 text-[9px] uppercase tracking-widest text-ink-muted">
                {pct}%
              </div>
            </div>
          }
        />
        <div className="flex-1">
          <h2 className="text-sm font-bold text-ink">
            {t.home.prayerTitle}
          </h2>
          <p className="mt-0.5 text-xs text-ink-soft">
            {done === 5
              ? "Alhamdulillah — sudah lengkap 🤍"
              : done === 0
                ? "Belum ada yang ditandai hari ini"
                : `${5 - done} sholat lagi`}
          </p>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {order.map((key) => (
          <li
            key={key}
            className={clsx(
              "flex items-center justify-between rounded-card px-3 py-2 transition-colors",
              value[key] ? "bg-primary-tint" : "bg-background",
            )}
          >
            <Checkbox
              checked={value[key]}
              onCheckedChange={() => toggle(key)}
              label={t.prayers[key]}
            />
            <span className="text-xs text-ink-muted">
              {value[key] ? "✓ Alhamdulillah" : ""}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
