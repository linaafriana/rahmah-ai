"use client";

import { motion } from "framer-motion";

type ProgressRingProps = {
  value: number;
  size?: number;
  stroke?: number;
  trackColor?: string;
  fillColor?: string;
  label?: React.ReactNode;
};

export function ProgressRing({
  value,
  size = 140,
  stroke = 12,
  trackColor = "#FCE8EA",
  fillColor = "#5DB3A6",
  label,
}: ProgressRingProps) {
  const clamped = Math.max(0, Math.min(1, value));
  const radius = (size - stroke) / 2;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={stroke}
        />
        <motion.circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke={fillColor}
          strokeWidth={stroke}
          strokeLinecap="round"
          pathLength={1}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: clamped }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
      </svg>
      {label && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {label}
        </div>
      )}
    </div>
  );
}
