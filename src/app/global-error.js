"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#040B14] text-slate-100 flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full p-8 rounded-3xl bg-[#0B1526] border border-white/10 text-center shadow-2xl space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto text-red-400">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black text-white">Application Error</h1>
            <p className="text-xs text-slate-400 leading-relaxed">
              A critical system error occurred. Please refresh the application to recover.
            </p>
          </div>

          <button
            onClick={() => reset()}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF6B2C] to-[#F59E0B] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Restart Application</span>
          </button>
        </div>
      </body>
    </html>
  );
}
