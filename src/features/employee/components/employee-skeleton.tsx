import { Card } from "@/shared/ui/card";
import { Skeleton } from "@/shared/ui/skeleton";

function EmployeeCardSkeleton() {
  return (
    <Card className="p-3 space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-md" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-5 w-24 rounded-md" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-8" />
        </div>
        <Skeleton className="h-5 w-28" />
      </div>

      <Skeleton className="h-9 w-full rounded-md" />
    </Card>
  );
}

export function EmployeeListLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map(() => (
        <EmployeeCardSkeleton />
      ))}
    </div>
  );
}
