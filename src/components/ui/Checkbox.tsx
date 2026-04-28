"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";

type CheckboxProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  className?: string;
};

export function Checkbox({
  checked,
  onCheckedChange,
  label,
  className,
}: CheckboxProps) {
  return (
    <button
      type="button"
      onClick={() => onCheckedChange(!checked)}
      className={clsx(
        "flex items-center gap-3 select-none focus:outline-none",
        className,
      )}
      aria-pressed={checked}
    >
      <motion.span
        animate={
          checked ? { scale: [1, 1.25, 1] } : { scale: 1 }
        }
        transition={{ duration: 0.22, times: [0, 0.5, 1] }}
        className={clsx(
          "flex h-7 w-7 items-center justify-center rounded-full border-2 transition-colors",
          checked
            ? "bg-primary border-primary text-white"
            : "border-ink-muted/40 bg-white",
        )}
      >
        {checked && <Check size={16} strokeWidth={3} />}
      </motion.span>
      {label && (
        <span
          className={clsx(
            "text-sm font-medium transition-colors",
            checked ? "text-ink" : "text-ink-soft",
          )}
        >
          {label}
        </span>
      )}
    </button>
  );
}
