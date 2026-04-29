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
  Sparkles,
  Compass,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { useAuth } from "@/providers/AuthProvider";
import { id as t } from "@/lib/i18n/id";

const items = [
  {
    href: "/butuhkan",
    title: "Bantuan untuk Hatimu",
    desc: "Topik & doa sesuai apa yang kamu rasakan",
    Icon: HeartHandshake,
    tone: "secondary" as const,
  },
  {
    href: "/muhasabah",
    title: "Muhasabah Malam",
    desc: "4 pertanyaan singkat sebelum tidur",
    Icon: Moon,
    tone: "primary" as const,
  },
  {
    href: "/kembali",
    title: "Aku ingin kembali",
    desc: "Mulai lagi pelan-pelan dari istighfar",
    Icon: Sparkles,
    tone: "accent" as const,
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

      <section className="space-y-3">
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
