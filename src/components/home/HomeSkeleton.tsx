import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

export function HomeSkeleton() {
  return (
    <div className="space-y-4">
      <Card tone="primary">
        <Skeleton className="h-3 w-24" rounded="pill" />
        <Skeleton className="mt-3 h-7 w-3/4" />
        <Skeleton className="mt-2 h-3 w-1/2" rounded="pill" />
      </Card>
      <Card tone="white" className="flex items-center gap-5">
        <Skeleton className="h-[108px] w-[108px]" rounded="full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-full" rounded="pill" />
          <Skeleton className="h-3 w-5/6" rounded="pill" />
        </div>
      </Card>
      <Card tone="white">
        <Skeleton className="h-3 w-32" rounded="pill" />
        <div className="mt-4 space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      </Card>
      <Card tone="secondary">
        <Skeleton className="h-3 w-20" rounded="pill" />
        <Skeleton className="mt-2 h-6 w-2/3" />
      </Card>
    </div>
  );
}
