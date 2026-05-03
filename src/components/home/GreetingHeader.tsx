"use client";

import { useEffect, useState } from "react";
import { id as t } from "@/lib/i18n/id";

type Slot = "morning" | "midday" | "afternoon" | "evening";

const slotEmoji: Record<Slot, string> = {
  morning: "🌅",
  midday: "☀️",
  afternoon: "🌤️",
  evening: "🌙",
};

function slotForHour(hour: number): Slot {
  if (hour >= 4 && hour < 11) return "morning";
  if (hour >= 11 && hour < 15) return "midday";
  if (hour >= 15 && hour < 18) return "afternoon";
  return "evening";
}

/**
 * Compact greeting — header text only, no oversized illustrations. The
 * cards beneath this carry visual weight; the header just orients the
 * user with name + day-part + date.
 */
export function GreetingHeader({ name }: { name: string }) {
  // Default to "morning" on the server to keep SSR stable; refine on client.
  const [slot, setSlot] = useState<Slot>("morning");
  const [dateLabel, setDateLabel] = useState("");

  useEffect(() => {
    const now = new Date();
    setSlot(slotForHour(now.getHours()));
    setDateLabel(
      now.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
      }),
    );
  }, []);

  return (
    <header className="px-1">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-primary/80">
        {t.home.timeOfDay[slot]} {slotEmoji[slot]}
        {dateLabel && <span className="text-ink-muted"> · {dateLabel}</span>}
      </p>
      <h1 className="mt-1 text-2xl font-bold leading-tight text-ink">
        {t.home.greeting(name)}
      </h1>
    </header>
  );
}
