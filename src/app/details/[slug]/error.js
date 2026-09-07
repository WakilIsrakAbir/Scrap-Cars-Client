"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Car, RefreshCw, ArrowLeft } from "lucide-react";

export default function DetailsError({ error, reset }) {
  useEffect(() => {
    console.error("Vehicle Category Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 bg-navy-950 flex items-center justify-center">
      <div className="max-w-md w-full glass-card p-8 rounded-3xl border border-white/10 text-center space-y-5">
        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto text-accent">
          <Car className="w-7 h-7" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-1.5">
            Unable to Load Vehicle Category
          </h2>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            We couldn't load the specifications for this vehicle category. You can retry or browse all supported car categories.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-accent to-amber-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-105 cursor-pointer shadow-lg shadow-accent/20"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retry</span>
          </button>

          <Link
            href="/#we-buy-cars"
            className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider border border-white/10 flex items-center justify-center gap-2 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Categories</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
