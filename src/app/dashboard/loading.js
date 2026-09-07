import Skeleton from "@/components/ui/Skeleton";

export default function DashboardLoading() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 bg-navy-950">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Top Welcome & Summary Banner Skeleton */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-3 w-full sm:w-1/2">
            <Skeleton className="h-4 w-28 rounded-full" />
            <Skeleton className="h-8 w-64 rounded-xl" />
            <Skeleton className="h-4 w-48 rounded-lg" />
          </div>
          <Skeleton className="h-12 w-44 rounded-2xl" />
        </div>

        {/* Metric Cards Skeleton Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-5 rounded-2xl glass-card border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <Skeleton className="h-3 w-24 rounded" />
                <Skeleton className="w-8 h-8 rounded-xl" />
              </div>
              <Skeleton className="h-7 w-16 rounded-lg" />
            </div>
          ))}
        </div>

        {/* Listing Cards Skeleton */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-36 rounded-lg" />
            <Skeleton className="h-4 w-20 rounded" />
          </div>

          {[1, 2].map((i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
            >
              <div className="flex items-center gap-4 w-full sm:w-2/3">
                <Skeleton className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex-shrink-0" />
                <div className="space-y-2.5 w-full">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-20 rounded-full" />
                    <Skeleton className="h-4 w-16 rounded-full" />
                  </div>
                  <Skeleton className="h-5 w-48 rounded-lg" />
                  <Skeleton className="h-3 w-32 rounded" />
                </div>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <Skeleton className="h-10 w-24 rounded-xl" />
                <Skeleton className="h-10 w-10 rounded-xl" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
