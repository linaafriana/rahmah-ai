"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";
import {
  PROGRESS_EVENT,
  readChecked,
  toggleChecked,
} from "@/lib/belajarProgress";

type Props = {
  slug: string;
  index: number;
};

export function BelajarStepCheck({ slug, index }: Props) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    function refresh() {
      setChecked(readChecked(slug).has(index));
    }
    refresh();
    window.addEventListener(PROGRESS_EVENT, refresh);
    return () => window.removeEventListener(PROGRESS_EVENT, refresh);
  }, [slug, index]);

  function onClick() {
    setChecked(toggleChecked(slug, index));
  }

  return (
    <button
      type="button"
      onClick={onClick}
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
      {checked ? "Sudah dipahami" : "Tandai jika sudah"}
    </button>
  );
}
