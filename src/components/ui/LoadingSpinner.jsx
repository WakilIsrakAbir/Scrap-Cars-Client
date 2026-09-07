import React from "react";

export default function LoadingSpinner({
  size = "md",
  message = "",
  className = "",
}) {
  const sizeMap = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-[3px]",
    xl: "w-16 h-16 border-4",
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* Outer subtle glow */}
        <div className="absolute inset-0 rounded-full bg-accent/20 blur-md animate-pulse" />
        
        {/* Rotating gradient ring */}
        <div
          className={`${sizeMap[size] || sizeMap.md} rounded-full border-slate-700/50 border-t-accent border-r-amber-500 animate-spin relative z-10`}
        />
      </div>

      {message && (
        <p className="text-xs sm:text-sm font-medium text-slate-400 animate-pulse tracking-wide">
          {message}
        </p>
      )}
    </div>
  );
}
