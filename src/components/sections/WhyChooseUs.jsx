"use client";

import { Banknote, FileCheck2, Truck, Shield, Clock, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Banknote, Truck, Banknote, FileCheck2, Shield, Clock];

export default function WhyChooseUs() {
  const { t, translations, isRTL } = useLanguage();
  const features = translations?.whyChooseUs?.features || [];

  return (
    <section className="py-24 bg-navy-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-3 block">
              {t("whyChooseUs.tag", "Why Choose Us")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2] mb-6">
              {t("whyChooseUs.title", "The Most Trusted Car Scrapping Service in UAE")}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light mb-8">
              {t("whyChooseUs.subtitle", "We eliminate the stress of selling scrap, damaged, or unwanted vehicles with transparent pricing and zero hidden fees.")}
            </p>

            <div className="space-y-6">
              {features.slice(0, 3).map((feat, index) => {
                const Icon = icons[index] || Banknote;
                const colors = [
                  "bg-accent/10 border-accent/20 text-accent",
                  "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
                  "bg-purple-500/10 border-purple-500/20 text-purple-400",
                ];
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${colors[index % colors.length]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{feat.title}</h4>
                      <p className="text-sm text-slate-400 font-light leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual Bento Box */}
          <div className="grid grid-cols-2 gap-4 min-h-[460px]">
            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80" 
                alt="Towing Service in Dubai" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
              <div className={`absolute bottom-6 ${isRTL ? "right-6 left-6" : "left-6 right-6"}`}>
                <h3 className="text-2xl font-bold text-white">
                  {t("common.freeTowing", "Free Towing Across All Emirates")}
                </h3>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden relative group bg-navy-800 p-6 flex flex-col justify-between border border-white/5">
              <span className="text-4xl font-black text-accent">24/7</span>
              <p className="text-sm text-slate-300 font-medium">
                {t("whyChooseUs.features.5.title", "Rapid Response & Towing")}
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden relative group bg-gradient-to-br from-emerald-600 to-emerald-900 p-6 flex flex-col justify-between border border-emerald-400/20">
              <span className="text-4xl font-black text-white">100%</span>
              <p className="text-sm text-emerald-100 font-medium">
                {t("whyChooseUs.features.3.title", "Free RTA Paperwork & Transfer")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
