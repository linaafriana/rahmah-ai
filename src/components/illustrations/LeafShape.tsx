"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type LeafShapeProps = {
  color?: string;
  size?: number;
  className?: string;
  rotate?: number;
  delay?: number;
};

export function LeafShape({
  color = "#5DB3A6",
  size = 80,
  className,
  rotate = 0,
  delay = 0,
}: LeafShapeProps) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={clsx("pointer-events-none select-none", className)}
      style={{ rotate }}
      animate={{ rotate: [rotate, rotate + 4, rotate - 2, rotate] }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    >
      <path
        fill={color}
        d="M50 8 C 22 22 14 56 30 82 C 56 78 84 56 88 24 C 70 14 56 8 50 8 Z"
      />
      <path
        d="M48 14 C 36 36 32 60 32 80"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </motion.svg>
  );
}
