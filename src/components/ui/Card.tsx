"use client";

import clsx from "clsx";
import { forwardRef, type HTMLAttributes } from "react";

type Tone = "cream" | "primary" | "accent" | "secondary" | "white";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: Tone;
  padded?: boolean;
};

const tones: Record<Tone, string> = {
  cream: "bg-background",
  primary: "bg-primary-tint",
  accent: "bg-accent-tint",
  secondary: "bg-secondary-soft",
  white: "bg-white",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, tone = "white", padded = true, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={clsx(
        "relative overflow-hidden rounded-card-lg shadow-soft",
        tones[tone],
        padded && "p-5",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
