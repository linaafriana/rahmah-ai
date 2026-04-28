"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Heart, Sparkles, Hand } from "lucide-react";
import clsx from "clsx";
import { id as t } from "@/lib/i18n/id";

type Action = {
  href: string;
  label: string;
  Icon: typeof Sparkles;
  bg: string;
  fg: string;
};

const actions: Action[] = [
  {
    href: "/sholawat",
    label: t.quickActions.sholawat,
    Icon: Sparkles,
    bg: "bg-primary-tint",
    fg: "text-primary",
  },
  {
    href: "/taubat",
    label: t.quickActions.taubat,
    Icon: Heart,
    bg: "bg-secondary",
    fg: "text-ink",
  },
  {
    href: "/belajar/doa-harian",
    label: t.quickActions.doa,
    Icon: Hand,
    bg: "bg-accent-tint",
    fg: "text-ink",
  },
  {
    href: "/jadwal",
    label: t.quickActions.jadwal,
    Icon: Compass,
    bg: "bg-primary-tint",
    fg: "text-primary",
  },
];

export function QuickActionsRow() {
  return (
    <div className="grid grid-cols-4 gap-2.5">
      {actions.map(({ href, label, Icon, bg, fg }) => (
        <motion.div key={href} whileTap={{ scale: 0.94 }}>
          <Link
            href={href}
            className="flex flex-col items-center gap-1.5 rounded-card bg-white p-3 shadow-soft hover:shadow-soft-lg"
          >
            <span
              className={clsx(
                "flex h-12 w-12 items-center justify-center rounded-card",
                bg,
                fg,
              )}
            >
              <Icon size={22} />
            </span>
            <span className="text-[11px] font-semibold text-ink">
              {label}
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
