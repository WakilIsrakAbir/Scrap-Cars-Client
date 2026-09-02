"use client";

import CTASection from "@/components/sections/CTASection";
import { useLanguage } from "@/context/LanguageContext";

const serviceImages = [
  "https://images.unsplash.com/photo-1530983821611-372076fa48ba?w=800&q=80",
  "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
];

export default function ServicesPage() {
  const { t, translations, isRTL } = useLanguage();
  const services = translations?.servicesPage?.items || [];
  const cities = translations?.servicesPage?.cities || ["Dubai", "Sharjah", "Ajman", "Abu Dhabi", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"];

  return (
    <>
      <div className="pt-32 pb-24 px-4 bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm font-bold uppercase tracking-widest text-accent mb-3 block">
              {t("servicesPage.tag", "What We Do")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              {t("servicesPage.title", "Premium Services For")}{" "}
              <span className="text-gradient">
                {t("servicesPage.titleGradient", "Scrap & Damaged Cars")}
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              {t("servicesPage.subtitle", "We offer hassle-free services for selling your damaged or scrap car. From valuation to free towing and legal paperwork, we handle everything.")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group rounded-3xl overflow-hidden glass-card flex flex-col sm:flex-row hover-lift">
                <div className="w-full sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
                  <img 
                    src={serviceImages[i % serviceImages.length]} 
                    alt={s.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Service Area Banner */}
          <div className="mt-24 p-12 rounded-3xl bg-gradient-to-r from-navy-900 to-navy-800 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979436-5a52a32c2195?w=1200&q=80')] opacity-5 bg-cover bg-center" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">
                {t("servicesPage.coverageTitle", "Our Service Coverage")}
              </h3>
              <p className="text-slate-400 mb-6">
                {t("servicesPage.coverageSubtitle", "We provide free towing and instant cash services across the UAE.")}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {cities.map((city) => (
                  <span key={city} className="px-5 py-2.5 rounded-xl glass border-accent/20 text-accent font-semibold text-sm">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
