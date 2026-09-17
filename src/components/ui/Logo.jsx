"use client";

import Link from "next/link";

export default function Logo({ className = "", size = "default", showTagline = true }) {
  const isSmall = size === "small";
  const isLarge = size === "large";

  const badgeSizeClass = isSmall
    ? "w-8 h-8"
    : isLarge
    ? "w-12 h-12"
    : "w-10 h-10";

  const titleSizeClass = isSmall
    ? "text-base"
    : isLarge
    ? "text-2xl"
    : "text-lg sm:text-xl";

  const subtitleSizeClass = isSmall
    ? "text-[7.5px]"
    : isLarge
    ? "text-[10px]"
    : "text-[8.5px]";

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Luxury Metallic Automotive Crest Emblem */}
      <div
        className={`relative ${badgeSizeClass} flex-shrink-0 rounded-xl bg-gradient-to-b from-navy-800 via-navy-900 to-navy-950 p-[1.5px] shadow-lg shadow-black/40 group-hover:shadow-amber-500/20 group-hover:scale-105 transition-all duration-300`}
      >
        {/* Outer Metallic Bevel Gradient */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 opacity-90 group-hover:opacity-100 transition-opacity" />

        {/* Inner Dark Chrome Core */}
        <div className="relative w-full h-full rounded-[10px] bg-gradient-to-b from-navy-950 via-[#0a0f1d] to-[#040711] p-1 flex items-center justify-center overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-radial from-amber-500/20 via-transparent to-transparent opacity-60" />

          {/* Precision Automotive Silhouette SVG */}
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <defs>
              <linearGradient id="chromeGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="45%" stopColor="#F59E0B" />
                <stop offset="75%" stopColor="#EA580C" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
              <linearGradient id="silverSpeed" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.4" />
              </linearGradient>
              <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="0.8" result="glow" />
                <feComposite in="SourceGraphic" in2="glow" operator="over" />
              </filter>
            </defs>

            {/* Aerodynamic Supercar Roofline & Silhouette */}
            <path
              d="M7 29.5C9.5 28 14 27.5 17 25.5L22 17.5C23.8 14.8 26.5 14 31 14.5H35.5C38 15 40 17 41.5 20.5L44 26C45 28.5 44 30.5 41.5 31.5C37 33 26 33.5 7 29.5Z"
              fill="url(#chromeGold)"
              opacity="0.95"
            />

            {/* Tinted Cabin Glass Windshield Cut */}
            <path
              d="M23 18.5L19 25C22 25.2 27 25 31 24.5L34 18.5C32.5 17.5 28 17.2 23 18.5Z"
              fill="#040711"
              opacity="0.92"
            />

            {/* Aggressive LED Headlight Streak */}
            <path
              d="M6 30.5L13.5 28.5L8.5 32L6 30.5Z"
              fill="#FFFFFF"
              filter="url(#laserGlow)"
            />

            {/* Muscular Low-Profile Side Air Intake / Sharp Aero Crease */}
            <path
              d="M17 28L29 27L26.5 29.5L15.5 30.5L17 28Z"
              fill="#0B132B"
              opacity="0.8"
            />

            {/* High-Speed Lower Ground Effect / Aero Splitter Line */}
            <path
              d="M5 33.5C14 34.5 30 35 43 32.5"
              stroke="url(#chromeGold)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Top Speed Streak Accent */}
            <path
              d="M14 13C19 11.5 28 11.5 34 12"
              stroke="url(#silverSpeed)"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Luxury Typographic Identity */}
      <div className="flex flex-col justify-center">
        <div className={`flex items-baseline font-black tracking-wider uppercase leading-none ${titleSizeClass}`}>
          <span className="text-white drop-shadow-sm">SCRAP</span>
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent ml-1 drop-shadow-sm">
            CARS
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1">
            <span
              className={`font-extrabold tracking-[0.22em] uppercase text-slate-400 leading-none ${subtitleSizeClass}`}
            >
              DUBAI
            </span>
            <span className="w-1 h-1 rounded-full bg-accent/70" />
            <span
              className={`font-semibold tracking-[0.16em] uppercase text-accent/90 leading-none ${subtitleSizeClass}`}
            >
              CASH BUYER
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
