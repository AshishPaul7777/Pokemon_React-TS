import { Skeleton } from "@/components/ui/skeleton"

export const SkeletonCard = () => {
  return (
    <div className="rounded-xl border p-4 space-y-3">
      <Skeleton className="h-32 w-full rounded-lg" />
      <Skeleton className="h-4 w-2/3 mx-auto" />
      <Skeleton className="h-3 w-1/2 mx-auto" />
      <div className="grid grid-cols-3 gap-2 pt-2">
        <Skeleton className="h-3" />
        <Skeleton className="h-3" />
        <Skeleton className="h-3" />
      </div>
    </div>
  )
}