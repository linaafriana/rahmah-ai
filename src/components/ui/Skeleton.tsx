import clsx from "clsx";

type SkeletonProps = {
  className?: string;
  rounded?: "card" | "card-lg" | "pill" | "full";
};

const radii = {
  card: "rounded-card",
  "card-lg": "rounded-card-lg",
  pill: "rounded-pill",
  full: "rounded-full",
} as const;

export function Skeleton({ className, rounded = "card" }: SkeletonProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden bg-ink/5",
        radii[rounded],
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
    </div>
  );
}
