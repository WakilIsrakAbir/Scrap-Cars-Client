"use client";

import Link from "next/link";
import { MessageCircle, Phone, ArrowRight, ArrowLeft } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function CTASection() {
  const { t, isRTL, locale } = useLanguage();

  const whatsappMsg = locale === "ar"
    ? "مرحباً ScrapCars دبي، أرغب في بيع سيارتي وأطلب تسعيرة نقدية."
    : "Hi ScrapCars Dubai, I want to sell my car for cash.";

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-t border-white/5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&q=80" 
          alt="Old abandoned car in Dubai" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-navy-950/90 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-bold uppercase tracking-widest mb-6">
          {t("cta.tag", "Ready to Sell?")}
        </span>
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
          {t("cta.title", "Ready to Sell Your Car?")}
        </h2>
        
        <p className="text-slate-300 text-base sm:text-xl mb-10 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          {t("cta.subtitle", "Get your instant cash offer today. We buy any car, in any condition, and offer free pickup anywhere in Dubai & UAE.")}
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
          <Link
            href="/dashboard/new-post"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-amber-500 text-white font-bold text-base shadow-[0_0_30px_rgba(255,107,44,0.3)] hover:shadow-[0_0_40px_rgba(255,107,44,0.5)] transition-all hover:-translate-y-1 flex items-center gap-2 group"
          >
            <span>{t("cta.btnSell", "Sell Your Car Now")}</span>
            {isRTL ? (
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </Link>

          <a
            href={`https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all hover:-translate-y-1 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" /> {t("cta.btnWhatsApp", "Chat with an Appraiser")}
          </a>

          <a
            href={`tel:${SITE_INFO.phoneRaw}`}
            className="px-8 py-4 rounded-xl glass border border-white/20 text-white font-bold text-base hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center gap-2"
          >
            <Phone className="w-5 h-5" /> {SITE_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
