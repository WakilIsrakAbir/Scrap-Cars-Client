import Skeleton from "@/components/ui/Skeleton";

export default function DetailsLoading() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-200 pt-36 pb-24 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Back Button Skeleton */}
        <Skeleton className="h-9 w-28 rounded-xl" />

        {/* Hero Category Header Skeleton */}
        <div className="space-y-4 max-w-3xl">
          <Skeleton className="h-4 w-36 rounded-full" />
          <Skeleton className="h-10 sm:h-12 w-3/4 rounded-2xl" />
          <Skeleton className="h-4 w-full rounded-lg" />
          <Skeleton className="h-4 w-5/6 rounded-lg" />
        </div>

        {/* 2-Column Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Image & Details */}
          <div className="lg:col-span-7 space-y-6">
            <Skeleton className="w-full h-80 sm:h-96 rounded-3xl" />
            <div className="grid grid-cols-3 gap-3">
              <Skeleton className="h-24 rounded-2xl" />
              <Skeleton className="h-24 rounded-2xl" />
              <Skeleton className="h-24 rounded-2xl" />
            </div>
            <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-4">
              <Skeleton className="h-6 w-48 rounded-lg" />
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="w-5 h-5 rounded-full flex-shrink-0" />
                  <Skeleton className="h-4 w-5/6 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Valuation Estimator Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6">
              <Skeleton className="h-7 w-44 rounded-xl" />
              <div className="space-y-4">
                <Skeleton className="h-11 w-full rounded-xl" />
                <Skeleton className="h-11 w-full rounded-xl" />
                <Skeleton className="h-11 w-full rounded-xl" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
