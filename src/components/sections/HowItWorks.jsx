"use client";

import { motion } from "framer-motion";
import { ClipboardList, BadgeDollarSign, FileCheck, Truck, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [ClipboardList, BadgeDollarSign, FileCheck, Truck];

export default function HowItWorks() {
  const { t, isRTL, translations, locale } = useLanguage();
  const steps = translations?.howItWorks?.steps || [];

  return (
    <section className="py-12 sm:py-16 relative bg-navy-950 overflow-hidden border-t border-white/5">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>{t("howItWorks.tag", "Simple Process")}</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-2">
            {t("howItWorks.title", "How It Works")}
          </h2>

          <p className="mt-4 sm:mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {t("howItWorks.subtitle", "Sell your scrap or damaged car across UAE in just 4 simple steps.")}
          </p>
        </motion.div>

        {/* 4 Process Steps with Staggered Scroll Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((item, i) => {
            const Icon = icons[i] || ClipboardList;
            return (
              <motion.div
                key={item.step || i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative group p-8 rounded-3xl glass-card border border-white/10 hover:border-accent/40 shadow-xl transition-all duration-300"
              >
                {/* Number Watermark */}
                <span className={`absolute -top-4 ${isRTL ? "left-4" : "right-4"} text-7xl font-black text-white/[0.04] group-hover:text-accent/[0.12] transition-colors pointer-events-none select-none`}>
                  {item.step}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-navy-800 border border-white/10 text-accent flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-amber-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-black/50 mb-6 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
