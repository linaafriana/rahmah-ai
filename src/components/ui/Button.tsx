"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import clsx from "clsx";
import { forwardRef } from "react";

type Variant = "primary" | "soft" | "ghost" | "accent";
type Size = "md" | "lg";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold tracking-tight transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white shadow-soft hover:bg-primary/90",
  soft: "bg-primary-tint text-primary hover:bg-primary-soft/40",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
  accent: "bg-accent text-ink shadow-soft hover:bg-accent/90",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className={clsx(
          base,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className,
        )}
        {...rest}
      >
        {children}
      </motion.button>
    );
  },
);
