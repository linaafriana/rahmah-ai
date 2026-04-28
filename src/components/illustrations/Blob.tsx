"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type BlobProps = {
  color?: string;
  size?: number;
  className?: string;
  delay?: number;
  drift?: number;
};

export function Blob({
  color = "#FADADD",
  size = 220,
  className,
  delay = 0,
  drift = 8,
}: BlobProps) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={clsx("pointer-events-none select-none", className)}
      animate={{ y: [0, -drift, 0] }}
      transition={{
        duration: 7,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    >
      <path
        fill={color}
        d="M44.5,-58.6C56.4,-49.1,63.6,-33.7,67.1,-17.8C70.7,-1.9,70.6,14.4,63.4,27.4C56.3,40.3,42.2,50,27,56.6C11.7,63.3,-4.7,67,-19.7,63.1C-34.7,59.2,-48.3,47.7,-57.5,33.6C-66.6,19.5,-71.3,2.7,-68.1,-12.7C-64.9,-28.1,-53.7,-42.1,-40.3,-51.8C-26.9,-61.5,-11.4,-66.9,2.7,-70.2C16.8,-73.5,32.6,-68.1,44.5,-58.6Z"
        transform="translate(100 100)"
      />
    </motion.svg>
  );
}
