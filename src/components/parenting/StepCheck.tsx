"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";

const storageKey = (slug: string) => `sakinah:parenting:${slug}`;

function readSet(slug: string): Set<number> {
  if (typeof window === "undefined") return new Set();
  const raw = window.localStorage.getItem(storageKey(slug));
  if (!raw) return new Set();
  try {
    const arr = JSON.parse(raw);
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

function writeSet(slug: string, set: Set<number>) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(
    storageKey(slug),
    JSON.stringify(Array.from(set)),
  );
}

type Props = {
  slug: string;
  index: number;
};

export function StepCheck({ slug, index }: Props) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const set = readSet(slug);
    setChecked(set.has(index));
  }, [slug, index]);

  function toggle() {
    const set = readSet(slug);
    if (set.has(index)) set.delete(index);
    else set.add(index);
    writeSet(slug, set);
    setChecked(set.has(index));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={checked}
      className="flex items-center gap-1.5 text-[11px] font-medium text-ink-soft hover:text-ink"
    >
      <motion.span
        animate={checked ? { scale: [1, 1.25, 1] } : { scale: 1 }}
        transition={{ duration: 0.22, times: [0, 0.5, 1] }}
        className={clsx(
          "flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors",
          checked
            ? "border-primary bg-primary text-white"
            : "border-ink-muted/40 bg-white",
        )}
      >
        {checked && <Check size={12} strokeWidth={3} />}
      </motion.span>
      {checked ? "Sudah dipraktikkan" : "Tandai jika sudah"}
    </button>
  );
}
