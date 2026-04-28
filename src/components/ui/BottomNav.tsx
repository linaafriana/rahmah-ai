"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  Home as HomeIcon,
  GraduationCap,
  Sparkles,
  BookOpen,
  Heart,
} from "lucide-react";
import { id as t } from "@/lib/i18n/id";

type NavItem = {
  href: string;
  label: string;
  Icon: typeof HomeIcon;
};

const items: NavItem[] = [
  { href: "/home", label: t.nav.home, Icon: HomeIcon },
  { href: "/belajar", label: t.nav.belajar, Icon: GraduationCap },
  { href: "/quran", label: t.nav.quran, Icon: BookOpen },
  { href: "/dzikir", label: t.nav.dzikir, Icon: Sparkles },
  { href: "/hati", label: t.nav.hati, Icon: Heart },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center">
      <div className="pointer-events-auto mb-3 mx-3 flex w-full max-w-md justify-around rounded-pill bg-white/90 px-2 py-2 shadow-soft-lg backdrop-blur safe-bottom">
        {items.map(({ href, label, Icon }) => {
          const active =
            pathname === href || pathname?.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "relative flex flex-1 flex-col items-center gap-0.5 rounded-pill py-1.5 text-[11px] font-medium transition-colors",
                active ? "text-primary" : "text-ink-muted",
              )}
            >
              {active && (
                <motion.span
                  layoutId="nav-dot"
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className="absolute -top-0.5 h-1.5 w-1.5 rounded-full bg-primary"
                />
              )}
              <Icon size={20} strokeWidth={active ? 2.4 : 1.8} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
