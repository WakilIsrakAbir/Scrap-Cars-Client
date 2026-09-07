"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home, PlusCircle } from "lucide-react";

export default function DashboardError({ error, reset }) {
  useEffect(() => {
    console.error("Dashboard Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-navy-950 flex items-center justify-center">
      <div className="max-w-md w-full glass-card p-8 rounded-3xl border border-white/10 text-center space-y-5">
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
          <AlertCircle className="w-7 h-7" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-1.5">
            Unable to Load Dashboard
          </h2>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            We couldn't retrieve your vehicle submissions. This may be due to a temporary network blip or an expired session.
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
            href="/dashboard/new-post"
            className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider border border-white/10 flex items-center justify-center gap-2 transition-all"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Sell Car</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
