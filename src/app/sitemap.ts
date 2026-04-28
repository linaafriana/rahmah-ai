import type { MetadataRoute } from "next";
import { seedBelajar } from "@/data/seed-belajar";
import { seedParenting } from "@/data/seed-parenting";
import { situations } from "@/data/seed-butuhkan";
import { hijriMonths } from "@/data/seed-bulan-hijriah";

const STATIC_PATHS = [
  "",
  "/home",
  "/belajar",
  "/quran",
  "/quran/bookmarks",
  "/dzikir",
  "/sholawat",
  "/jadwal",
  "/journal",
  "/muhasabah",
  "/butuhkan",
  "/parenting",
  "/hati",
  "/taubat",
  "/pengaturan",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://sakinah.example.com";
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "/home" ? 1 : 0.7,
  }));

  const belajarEntries: MetadataRoute.Sitemap = seedBelajar.map((t) => ({
    url: `${base}/belajar/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const butuhkanEntries: MetadataRoute.Sitemap = situations.map((s) => ({
    url: `${base}/butuhkan/${s.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const parentingEntries: MetadataRoute.Sitemap = seedParenting.map((p) => ({
    url: `${base}/parenting/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const bulanEntries: MetadataRoute.Sitemap = hijriMonths.map((m) => ({
    url: `${base}/bulan/${m.number}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticEntries,
    ...belajarEntries,
    ...butuhkanEntries,
    ...parentingEntries,
    ...bulanEntries,
  ];
}
