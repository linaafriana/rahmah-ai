"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Blob } from "@/components/illustrations/Blob";
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

export function GreetingHeader({ name }: { name: string }) {
  // Default to "morning" on the server to keep SSR stable; refine on client.
  const [slot, setSlot] = useState<Slot>("morning");

  useEffect(() => {
    setSlot(slotForHour(new Date().getHours()));
  }, []);

  return (
    <Card tone="primary" className="overflow-hidden">
      <Blob
        color="#FFF6F0"
        size={180}
        className="absolute -right-10 -top-10 opacity-90"
      />
      <Blob
        color="#FFD66B"
        size={90}
        className="absolute -bottom-6 right-10 opacity-50"
        delay={1}
      />
      <div className="relative">
        <p className="text-xs font-medium uppercase tracking-widest text-primary/80">
          {t.home.timeOfDay[slot]} {slotEmoji[slot]} ·{" "}
          {new Date().toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
        </p>
        <h1 className="mt-1 text-2xl font-bold text-ink">
          {t.home.greeting(name)}
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          {t.home.intentionPrompt}
        </p>
      </div>
    </Card>
  );
}
