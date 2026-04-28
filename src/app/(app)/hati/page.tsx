"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Heart,
  HeartHandshake,
  Baby,
  NotebookPen,
  Moon,
  Settings,
  Compass,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Blob } from "@/components/illustrations/Blob";
import { useAuth } from "@/providers/AuthProvider";
import { featuredSituationIds, situations } from "@/data/seed-butuhkan";
import { id as t } from "@/lib/i18n/id";

const items = [
  {
    href: "/muhasabah",
    title: "Muhasabah Malam",
    desc: "4 pertanyaan singkat sebelum tidur",
    Icon: Moon,
    tone: "primary" as const,
  },
  {
    href: "/journal",
    title: "Jurnal",
    desc: "Tulis apa yang ada di hatimu",
    Icon: NotebookPen,
    tone: "white" as const,
  },
  {
    href: "/taubat",
    title: "Taubat Mode",
    desc: "Ruang tenang untuk istighfar",
    Icon: Heart,
    tone: "secondary" as const,
  },
  {
    href: "/jadwal",
    title: "Jadwal & Kiblat",
    desc: "Waktu sholat dan arah kiblat",
    Icon: Compass,
    tone: "accent" as const,
  },
  {
    href: "/parenting",
    title: "Parenting",
    desc: "Tumbuh bersama si kecil",
    Icon: Baby,
    tone: "primary" as const,
  },
  {
    href: "/pengaturan",
    title: "Pengaturan",
    desc: "Profil, qari favorit, lokasi",
    Icon: Settings,
    tone: "white" as const,
  },
];

export default function HatiPage() {
  const router = useRouter();
  const { signOut } = useAuth();

  async function handleSignOut() {
    await signOut();
    router.replace("/sign-in");
  }

  const featured = featuredSituationIds
    .map((id) => situations.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-5"
    >
      <header>
        <h1 className="text-3xl font-bold text-ink">{t.hati.title}</h1>
        <p className="mt-1 text-sm text-ink-soft">{t.hati.subtitle}</p>
      </header>

      {/* Hero — Bantuan untuk Hatimu */}
      <Card tone="secondary" className="overflow-hidden">
        <Blob
          color="#FFE9A8"
          size={160}
          className="absolute -right-10 -top-10 opacity-50"
        />
        <div className="relative">
          <div className="flex items-center gap-2">
            <HeartHandshake size={18} className="text-primary" />
            <h2 className="text-base font-bold text-ink">
              {t.butuhkan.homePrompt}
            </h2>
          </div>
          <p className="mt-1 text-xs text-ink-soft">
            Pilih satu yang paling dekat dengan kondisimu sekarang.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {featured.map((s) => (
              <motion.div key={s.id} whileTap={{ scale: 0.96 }}>
                <Link
                  href={`/butuhkan/${s.id}`}
                  className="inline-flex items-center gap-1.5 rounded-pill bg-white px-3 py-1.5 text-xs font-medium text-ink shadow-soft hover:bg-primary-tint"
                >
                  <span className="text-base leading-none">{s.emoji}</span>
                  {s.short}
                </Link>
              </motion.div>
            ))}
          </div>
          <Link
            href="/butuhkan"
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
          >
            {t.butuhkan.seeAll}
            <ChevronRight size={14} />
          </Link>
        </div>
      </Card>

      {/* Other tools */}
      <section className="space-y-3">
        <h2 className="px-1 text-sm font-bold text-ink">Lainnya</h2>
        <div className="space-y-3">
          {items.map(({ href, title, desc, Icon, tone }) => (
            <Link key={href} href={href} className="block">
              <Card tone={tone}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-white text-ink">
                    <Icon size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-ink">{title}</h3>
                    <p className="mt-0.5 text-xs text-ink-soft">{desc}</p>
                  </div>
                  <ChevronRight size={20} className="text-ink-muted" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <button
        type="button"
        onClick={handleSignOut}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-white py-3 text-sm font-medium text-ink-soft shadow-soft hover:text-ink"
      >
        <LogOut size={16} />
        Keluar
      </button>
    </motion.div>
  );
}
