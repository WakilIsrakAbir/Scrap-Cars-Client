import Image from "next/image";

export default function RootLoading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy-950/95 backdrop-blur-md">
      {/* Ambient background glow */}
      <div className="absolute w-96 h-96 bg-accent/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Pulsing Branded Icon */}
        <div className="relative flex items-center justify-center w-20 h-20 mb-6">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent to-amber-500 blur-xl opacity-50 animate-pulse" />
          <div className="relative w-16 h-16 rounded-2xl bg-navy-900 border border-white/15 p-3 flex items-center justify-center shadow-2xl">
            <Image
              src="/icon.svg"
              alt="ScrapCars Loading"
              width={48}
              height={48}
              priority
              className="w-full h-full object-contain animate-pulse"
            />
          </div>
          {/* Circular spinner track */}
          <div className="absolute -inset-2.5 rounded-[22px] border-2 border-transparent border-t-accent border-r-amber-500 animate-spin" />
        </div>

        {/* Text */}
        <div className="text-center space-y-1.5">
          <h3 className="text-lg font-black text-white tracking-wide uppercase">
            Scrap<span className="text-gradient">Cars</span>
          </h3>
          <p className="text-xs text-slate-400 font-light tracking-wider animate-pulse">
            Loading, please wait...
          </p>
        </div>
      </div>
    </div>
  );
}
