import Link from "next/link";
import { Car, Home, PlusCircle, PhoneCall, ArrowLeft, Sparkles } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist on ScrapCars Dubai.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl w-full text-center relative z-10 space-y-8">
        {/* Floating 404 Graphic */}
        <div className="relative inline-flex items-center justify-center">
          <span className="text-8xl sm:text-9xl font-black tracking-tighter text-white/10 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-accent to-amber-500 p-0.5 shadow-[0_0_50px_rgba(255,107,44,0.4)]">
              <div className="w-full h-full bg-navy-950 rounded-[22px] flex items-center justify-center text-accent">
                <Car className="w-10 h-10 sm:w-12 sm:h-12 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lost in the Junkyard?</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Page <span className="text-gradient">Not Found</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed">
            The page or vehicle link you are looking for has been moved, removed, or never existed. Don’t worry, you can easily get back on track!
          </p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
          <Link
            href="/"
            className="p-4 rounded-2xl glass-card border border-white/10 hover:border-accent/40 text-center hover-lift group transition-all"
          >
            <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <Home className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-0.5">Home</h4>
            <p className="text-[11px] text-slate-400">Back to main page</p>
          </Link>

          <Link
            href="/dashboard/new-post"
            className="p-4 rounded-2xl glass-card border border-white/10 hover:border-accent/40 text-center hover-lift group transition-all"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <PlusCircle className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-0.5">Sell Your Car</h4>
            <p className="text-[11px] text-slate-400">Get instant cash offer</p>
          </Link>

          <Link
            href="/contact"
            className="p-4 rounded-2xl glass-card border border-white/10 hover:border-accent/40 text-center hover-lift group transition-all"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <PhoneCall className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-0.5">Contact Us</h4>
            <p className="text-[11px] text-slate-400">24/7 UAE Support</p>
          </Link>
        </div>

        {/* Direct WhatsApp Prompt */}
        <div className="pt-4 text-xs text-slate-500">
          Have an urgent vehicle valuation request?{" "}
          <a
            href={SITE_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-semibold"
          >
            Chat with us on WhatsApp ({SITE_INFO.phone})
          </a>
        </div>
      </div>
    </div>
  );
}
