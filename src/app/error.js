"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home, MessageCircle } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";

export default function RootError({ error, reset }) {
  useEffect(() => {
    // Log error to client console for diagnostics
    console.error("ScrapCars App Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background ambient red/orange glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-lg w-full glass-card p-8 sm:p-10 rounded-3xl border border-white/10 text-center relative z-10 shadow-2xl">
        {/* Error Icon */}
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-6 text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.25)]">
          <AlertTriangle className="w-8 h-8 stroke-[2.2]" />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
          Something Went Wrong
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
          We encountered an unexpected error while processing your request. Please try refreshing or return to the homepage.
        </p>

        {/* Technical digest if available */}
        {error?.message && (
          <div className="p-3 mb-6 rounded-xl bg-navy-900/80 border border-white/5 text-left text-xs font-mono text-slate-400 overflow-x-auto max-h-24">
            {error.message}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-amber-500 hover:from-accent-hover hover:to-amber-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-accent/20 transition-all hover:scale-105 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider border border-white/10 flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Direct WhatsApp Assistance */}
        <div className="pt-6 border-t border-white/5 text-xs text-slate-500">
          Need immediate car valuation or help?{" "}
          <a
            href={SITE_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-semibold inline-flex items-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp Us Directly
          </a>
        </div>
      </div>
    </div>
  );
}
