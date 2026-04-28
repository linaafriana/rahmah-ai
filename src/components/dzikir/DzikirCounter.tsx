"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { RotateCcw } from "lucide-react";
import { id as t } from "@/lib/i18n/id";

type Ripple = { id: number; x: number; y: number };

type DzikirCounterProps = {
  target?: number;
  onIncrement?: (count: number) => void;
  className?: string;
  size?: "md" | "lg";
};

export function DzikirCounter({
  target,
  onIncrement,
  className,
  size = "md",
}: DzikirCounterProps) {
  const [count, setCount] = useState(0);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);

  function tap(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = idRef.current++;
    setRipples((r) => [...r, { id, x, y }]);
    setTimeout(
      () => setRipples((r) => r.filter((rp) => rp.id !== id)),
      650,
    );
    const next = count + 1;
    setCount(next);
    onIncrement?.(next);
  }

  function reset() {
    if (window.confirm(t.dzikir.resetConfirm)) {
      setCount(0);
    }
  }

  const dim = size === "lg" ? "h-56 w-56" : "h-44 w-44";

  return (
    <div className={clsx("flex flex-col items-center gap-4", className)}>
      <button
        type="button"
        onClick={tap}
        className={clsx(
          "relative overflow-hidden rounded-full bg-primary text-white shadow-soft-lg transition-transform active:scale-95",
          dim,
        )}
      >
        <AnimatePresence>
          {ripples.map((r) => (
            <motion.span
              key={r.id}
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute h-24 w-24 rounded-full bg-white/40"
              style={{
                left: r.x - 48,
                top: r.y - 48,
              }}
            />
          ))}
        </AnimatePresence>
        <div className="relative flex h-full w-full flex-col items-center justify-center">
          <motion.span
            key={count}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={clsx(
              "font-bold leading-none",
              size === "lg" ? "text-7xl" : "text-6xl",
            )}
          >
            {count}
          </motion.span>
          {target ? (
            <span className="mt-1 text-xs uppercase tracking-widest opacity-80">
              dari {target}
            </span>
          ) : (
            <span className="mt-1 text-xs uppercase tracking-widest opacity-80">
              {t.dzikir.counterLabel}
            </span>
          )}
        </div>
      </button>
      <button
        type="button"
        onClick={reset}
        className="inline-flex items-center gap-1.5 rounded-pill bg-white px-4 py-2 text-xs font-medium text-ink-soft shadow-soft hover:text-ink"
      >
        <RotateCcw size={14} />
        {t.dzikir.reset}
      </button>
    </div>
  );
}
