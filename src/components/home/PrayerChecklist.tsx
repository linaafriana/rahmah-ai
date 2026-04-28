"use client";

import clsx from "clsx";
import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { id as t } from "@/lib/i18n/id";
import type { PrayerKey, PrayerProgress } from "@/types";

const order: PrayerKey[] = ["fajr", "dhuhr", "asr", "maghrib", "isha"];

type PrayerChecklistProps = {
  value: PrayerProgress;
  onChange: (next: PrayerProgress) => void;
};

export function PrayerChecklist({ value, onChange }: PrayerChecklistProps) {
  function toggle(key: PrayerKey) {
    onChange({ ...value, [key]: !value[key] });
  }

  return (
    <Card tone="white">
      <h2 className="mb-3 text-sm font-bold text-ink">{t.home.prayerTitle}</h2>
      <ul className="space-y-2">
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
