"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Phone, ShieldCheck, Star, MessageCircle } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t, isRTL, locale } = useLanguage();

  const whatsappMsg = locale === "ar"
    ? "مرحباً ScrapCars دبي، أريد تقييم فوري لسيارتي."
    : "Hi ScrapCars Dubai, I would like an instant valuation for my scrap car.";

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1530983821611-372076fa48ba?w=1920&q=85&auto=format&fit=crop"
          alt="Scrapyard with cars in Dubai"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border-accent/30 text-accent text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,107,44,0.2)]">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {t("hero.badge", "Dubai's #1 Scrap Car Buyer")}
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-medium backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>RTA Paperwork Free</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.2] tracking-tight">
              {t("hero.titleStart", "Turn Your Scrap Car Into ")}
              <span className="text-gradient drop-shadow-xl relative inline-block mx-1">
                {t("hero.titleHighlight", "Instant Cash")}
                <div className="absolute -bottom-1 left-0 w-full h-2 bg-accent/20 blur-sm rounded-full" />
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
              {t("hero.subtitle", "We buy cars in any condition across UAE with free towing and instant cash on spot.")}
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <Link
                href="/dashboard/new-post"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-amber-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(255,107,44,0.3)] hover:shadow-[0_0_35px_rgba(255,107,44,0.5)] transition-all hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                <span>{t("hero.ctaPrimary", "Get Instant Cash Offer")}</span>
                {isRTL ? (
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
              </Link>

              <a
                href={`https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold text-sm transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> {t("hero.ctaSecondary", "WhatsApp Quotation")}
              </a>
            </div>

            {/* Trust indicators */}
            <div className="pt-5 flex items-center gap-6 border-t border-white/10 max-w-md">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-gold mb-0.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="text-[11px] text-slate-400 font-medium">4.9/5 (2,000+ Reviews)</span>
              </div>
              <div className="w-px h-7 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">{t("hero.stat1Number", "15,000+")}</span>
                <span className="text-[11px] text-slate-400 font-medium">{t("hero.stat1Label", "Cars Purchased")}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Eye-Catchy Visual Element */}
          <div className="hidden lg:flex lg:col-span-5 relative w-full items-center justify-center">
             {/* Ambient glow behind card */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-accent/25 via-amber-500/10 to-blue-500/15 rounded-full blur-[70px] pointer-events-none" />
             
             {/* Floating Card Container */}
             <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden glass border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] animate-float group">
                <Image 
                  src="https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?q=80&w=1200&auto=format&fit=crop"
                  alt="Scrap and Damaged Car"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  priority
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

                {/* Card Tag */}
                <div className={`absolute top-4 ${isRTL ? "right-4" : "left-4"} glass px-3 py-1 rounded-full border border-white/15 text-[11px] font-semibold text-white backdrop-blur-md`}>
                  🚗 {locale === "ar" ? "نشتري جميع الموديلات والحالات" : "Any Make & Model Accepted"}
                </div>
                
                {/* Bottom Card Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-amber-400 font-semibold tracking-wide uppercase">{t("whyChooseUs.features.0.title", "Highest Valuation")}</p>
                  <p className="text-white font-bold text-base">{t("hero.badge", "Damaged & Scrap Cars")}</p>
                </div>
             </div>

             {/* Floating Trust Badges */}
             <div className={`absolute -bottom-4 ${isRTL ? "-right-4" : "-left-4"} glass px-4 py-2.5 rounded-xl border border-white/15 shadow-xl backdrop-blur-md z-20 animate-float-reverse`}>
               <div className="flex items-center gap-2.5">
                 <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                   <span className="text-sm font-bold text-accent">{t("common.aed", "AED")}</span>
                 </div>
                 <div>
                   <p className="text-white font-bold text-xs">{t("common.instantCash", "Instant Cash")}</p>
                   <p className="text-slate-400 text-[10px]">{locale === "ar" ? "تسليم فوري في يدك" : "Paid on the spot"}</p>
                 </div>
               </div>
             </div>
             
             <div className={`absolute -top-4 ${isRTL ? "-left-2" : "-right-2"} glass px-4 py-2.5 rounded-xl border border-white/15 shadow-xl backdrop-blur-md z-20 animate-float-slow`}>
               <div className="flex items-center gap-2.5">
                 <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                   <ShieldCheck className="w-4 h-4 text-emerald-400" />
                 </div>
                 <div>
                   <p className="text-white font-bold text-xs">{t("common.freeTowing", "Free Towing")}</p>
                   <p className="text-slate-400 text-[10px]">{locale === "ar" ? "لكل مدن الإمارات" : "All over UAE"}</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
