import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

const barHeights = ["h-12", "h-20", "h-16", "h-24", "h-14", "h-20", "h-28"];

export function JournalSkeleton() {
  return (
    <div className="space-y-5">
      <div>
        <Skeleton className="h-9 w-32" />
        <Skeleton className="mt-2 h-3 w-56" rounded="pill" />
      </div>
      <Card tone="white">
        <Skeleton className="h-3 w-44" rounded="pill" />
        <div className="mt-4 flex items-end justify-between gap-2">
          {barHeights.map((h, i) => (
            <Skeleton key={i} className={`w-full ${h}`} rounded="pill" />
          ))}
        </div>
      </Card>
      <Card tone="white">
        <Skeleton className="h-3 w-40" rounded="pill" />
        <div className="mt-3 flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-14 w-16" />
          ))}
        </div>
      </Card>
      <Card tone="cream">
        <Skeleton className="h-3 w-48" rounded="pill" />
        <Skeleton className="mt-3 h-32 w-full" />
      </Card>
    </div>
  );
}
