"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Sparkles, 
  MapPin, 
  Zap, 
  Banknote, 
  Truck, 
  ShieldCheck, 
  ArrowRight,
  ArrowLeft,
  CheckCircle2
} from "lucide-react";

const serviceImages = [
  "/Cars/pexels-nityanand-hiremath-132133259-10155527.jpg", // Instant Quote - Total loss / accident wrecked vehicle
  "/Cars/pexels-introspectivedsgn-9395028.jpg", // Best Price - Smashed crash car appraisal
  "/Cars/pexels-umudicreative-36086096.jpg", // Specialist Salvage / Free doorstep recovery
  "/Cars/pexels-pixabay-64149.jpg", // Trusted Recyclers / Certified Eco Facility - Dismantled chassis
];

const serviceIcons = [Zap, Banknote, Truck, ShieldCheck];
const iconColors = [
  "text-amber-400 bg-amber-400/10 border-amber-400/30",
  "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  "text-accent bg-accent/10 border-accent/30",
  "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
];

export default function ServicesSection() {
  const { t, translations, isRTL } = useLanguage();
  const services = translations?.servicesPage?.items || [];
  const cities = translations?.servicesPage?.cities || [
    "Dubai",
    "Sharjah",
    "Ajman",
    "Abu Dhabi",
    "Ras Al Khaimah",
    "Fujairah",
    "Umm Al Quwain",
  ];

  return (
    <section id="services" className="py-12 sm:py-16 px-4 bg-navy-950 border-t border-white/5 scroll-mt-16 relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("servicesPage.tag", "OUR CORE SERVICES")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-[1.2]">
            {t("servicesPage.title", "Comprehensive Car Buying &")}{" "}
            <span className="text-gradient">
              {t("servicesPage.titleGradient", "Salvage Solutions")}
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            {t("servicesPage.subtitle", "Professional car scrapping and salvage solutions tailored for UAE vehicle owners. From lightning-fast digital valuations to certified eco-friendly recycling.")}
          </p>
        </motion.div>
        
        {/* 4 Core Pillars Grid matching reference picture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          {services.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            const iconStyle = iconColors[i % iconColors.length];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group rounded-3xl overflow-hidden glass-card flex flex-col sm:flex-row border border-white/10 hover:border-accent/40 transition-all duration-300 shadow-xl"
              >
                {/* Visual Image Thumbnail */}
                <div className="w-full sm:w-2/5 h-56 sm:h-auto relative overflow-hidden flex-shrink-0">
                  <Image
                    src={serviceImages[i % serviceImages.length]}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-navy-950/85 via-navy-950/40 to-transparent" />
                  
                  {/* Floating Pillar Icon */}
                  <div className={`absolute top-4 ${isRTL ? "right-4" : "left-4"} w-11 h-11 rounded-2xl border backdrop-blur-md flex items-center justify-center shadow-lg ${iconStyle}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Content Box */}
                <div className="w-full sm:w-3/5 p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    {s.badge && (
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-accent mb-2.5">
                        {s.badge}
                      </span>
                    )}

                    <h3 className="text-lg sm:text-xl font-black text-white mb-2.5 group-hover:text-accent transition-colors leading-snug uppercase tracking-tight">
                      {s.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {s.desc}
                    </p>
                  </div>

                  {/* Micro Action Link */}
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href="/dashboard/new-post"
                      className="text-xs font-bold text-accent hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{t("common.getQuote", "Get Instant Quote")}</span>
                      {isRTL ? (
                        <ArrowLeft className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5" />
                      )}
                    </Link>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400/70" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Service Area Banner: Our Service Coverage Across All 7 Emirates */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-950 border border-white/10 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,44,0.06)_0,transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
              {t("servicesPage.coverageTitle", "Our Service Coverage")}
            </h3>
            
            <p className="text-sm sm:text-base text-slate-400 font-light mb-8">
              {t("servicesPage.coverageSubtitle", "We provide free doorstep towing and instant cash handover across all 7 Emirates.")}
            </p>
            
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
              {cities.map((city, idx) => (
                <motion.span
                  key={city}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-navy-950/80 border border-accent/25 text-accent font-semibold text-xs sm:text-sm shadow-sm backdrop-blur-md hover:border-accent hover:bg-accent/10 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{city}</span>
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
