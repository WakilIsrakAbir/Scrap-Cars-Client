import Skeleton from "@/components/ui/Skeleton";

export default function AdminLoading() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Admin Header Banner Skeleton */}
        <div className="p-4 sm:p-5 rounded-2xl glass-card border border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <Skeleton className="w-12 h-12 rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-40 rounded-lg" />
              <Skeleton className="h-3 w-32 rounded" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-9 w-32 rounded-xl" />
            <Skeleton className="h-9 w-24 rounded-xl" />
          </div>
        </div>

        {/* Content Box Skeleton */}
        <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <Skeleton className="h-6 w-48 rounded-lg" />
              <Skeleton className="h-3.5 w-72 rounded" />
            </div>
            <Skeleton className="h-10 w-64 rounded-xl" />
          </div>

          {/* Table Header */}
          <div className="space-y-3">
            <div className="grid grid-cols-5 gap-4 px-4 py-3 rounded-xl bg-white/[0.02]">
              <Skeleton className="h-3 w-20 rounded" />
              <Skeleton className="h-3 w-24 rounded" />
              <Skeleton className="h-3 w-16 rounded" />
              <Skeleton className="h-3 w-20 rounded" />
              <Skeleton className="h-3 w-16 rounded" />
            </div>

            {/* Table Rows Skeleton */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="grid grid-cols-5 gap-4 px-4 py-4 rounded-xl border border-white/5 items-center">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-12 h-12 rounded-xl flex-shrink-0" />
                  <div className="space-y-1.5 w-full">
                    <Skeleton className="h-4 w-24 rounded" />
                    <Skeleton className="h-3 w-16 rounded" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Skeleton className="h-3.5 w-24 rounded" />
                  <Skeleton className="h-3 w-20 rounded" />
                </div>
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-3.5 w-24 rounded" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-16 rounded-lg" />
                  <Skeleton className="h-8 w-8 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
