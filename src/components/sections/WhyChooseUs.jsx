"use client";

import { motion } from "framer-motion";
import { Banknote, FileCheck2, Truck, Shield, Clock, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Banknote, Truck, Banknote, FileCheck2, Shield, Clock];

export default function WhyChooseUs() {
  const { t, translations, isRTL } = useLanguage();
  const features = translations?.whyChooseUs?.features || [];

  return (
    <section className="py-12 sm:py-16 bg-navy-900 border-y border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column with Motion */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-400 mb-3 block">
              {t("whyChooseUs.tag", "Why Choose Us")}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              {t("whyChooseUs.title", "The Most Trusted Car Scrapping Service in UAE")}
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light mb-6">
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
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: isRTL ? -6 : 6, transition: { duration: 0.2 } }}
                    className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/[0.02] transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 shadow-md ${colors[index % colors.length]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1">{feat.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">{feat.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Visual Bento Box with Balanced Proportions */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4 w-full"
          >
            {/* Controlled Height Scrap Car Image Card */}
            <div className="rounded-3xl overflow-hidden relative group shadow-2xl border border-white/10 h-60 sm:h-64 lg:h-72 w-full">
              <img 
                src="/Cars/pexels-baikoo-38757939.jpg" 
                alt="Free Towing and Abandoned Car Recovery in Dubai" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
              <div className={`absolute bottom-5 ${isRTL ? "right-5 left-5" : "left-5 right-5"}`}>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {t("common.freeTowing", "Free Towing Across All Emirates")}
                </h3>
              </div>
            </div>
            
            {/* Stat Badges */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden relative group bg-navy-800/90 p-5 flex flex-col justify-between border border-white/10 shadow-lg"
              >
                <span className="text-3xl sm:text-4xl font-black text-accent">24/7</span>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                  {t("whyChooseUs.features.5.title", "Rapid Response & Towing")}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden relative group bg-gradient-to-br from-emerald-600 to-emerald-900 p-5 flex flex-col justify-between border border-emerald-400/20 shadow-lg"
              >
                <span className="text-3xl sm:text-4xl font-black text-white">100%</span>
                <p className="text-xs sm:text-sm text-emerald-100 font-medium mt-1">
                  {t("whyChooseUs.features.3.title", "Free RTA Paperwork & Transfer")}
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
