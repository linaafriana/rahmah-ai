import type { LearnCategory, LearnLevel, LearnTopic } from "@/types";
import { dasarTopics } from "@/data/seed-belajar-dasar";
import { tahsinTopics } from "@/data/seed-belajar-tahsin";
import { fiqihTopics } from "@/data/seed-belajar-fiqih";
import { aqidahTopics } from "@/data/seed-belajar-aqidah";
import { akhlakTopics } from "@/data/seed-belajar-akhlak";
import { doaTopics } from "@/data/seed-belajar-doa";
import { sirahTopics } from "@/data/seed-belajar-sirah";
import { haditsTopics } from "@/data/seed-belajar-hadits";

export const seedBelajar: LearnTopic[] = [
  ...dasarTopics,
  ...aqidahTopics,
  ...tahsinTopics,
  ...fiqihTopics,
  ...akhlakTopics,
  ...doaTopics,
  ...sirahTopics,
  ...haditsTopics,
];

export function findLearnTopic(slug: string): LearnTopic | undefined {
  return seedBelajar.find((t) => t.slug === slug);
}

const levelOrder: LearnLevel[] = ["pemula", "menengah", "lanjutan"];

export function nextTopicInCategory(
  current: LearnTopic,
): LearnTopic | undefined {
  const sameCategory = seedBelajar.filter(
    (t) => t.category === current.category,
  );
  // Sort by level order, then by original index in seed
  const sorted = [...sameCategory].sort((a, b) => {
    const la = levelOrder.indexOf(a.level);
    const lb = levelOrder.indexOf(b.level);
    if (la !== lb) return la - lb;
    return seedBelajar.indexOf(a) - seedBelajar.indexOf(b);
  });
  const idx = sorted.findIndex((t) => t.slug === current.slug);
  return idx >= 0 && idx < sorted.length - 1 ? sorted[idx + 1] : undefined;
}

export function doaOfToday(date = new Date()): {
  topic: LearnTopic;
  itemIndex: number;
} | null {
  const doa = seedBelajar.find((t) => t.slug === "doa-harian");
  if (!doa) return null;
  const dayIndex = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /
      86_400_000,
  );
  const itemIndex = dayIndex % doa.items.length;
  return { topic: doa, itemIndex };
}

// Recommended starter path for true beginners
export const starterPath: string[] = [
  "pengantar-islam",
  "rukun-iman",
  "rukun-islam",
  "wudhu",
  "sholat-fardhu",
  "hijaiyah",
  "doa-harian",
];

export function topicsByCategory(category: LearnCategory): LearnTopic[] {
  return seedBelajar.filter((t) => t.category === category);
}
