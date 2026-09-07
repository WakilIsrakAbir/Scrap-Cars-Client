"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ReviewsSection() {
  const { t, isRTL, translations } = useLanguage();
  const reviewsData = translations?.reviews;
  const reviewsList = reviewsData?.items || [];

  return (
    <section className="py-12 sm:py-16 bg-navy-950 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Header - Title Only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            {t("reviews.titleStart", "What UAE Car Sellers ")}
            <span className="text-accent">
              {t("reviews.titleHighlight", "Say About Us")}
            </span>
          </h2>
        </motion.div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {reviewsList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-navy-900/60 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg flex flex-col"
            >
              {/* 1. Top: User Name, Car/Location & Date */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-white text-base">
                      {item.name}
                    </h4>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {item.car} • {item.location}
                  </p>
                </div>

                <span className="text-xs text-slate-500 font-medium flex-shrink-0 mt-0.5">
                  {item.date}
                </span>
              </div>

              {/* 2. Then: Rating Stars */}
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(item.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* 3. Then: Description */}
              <p className="text-slate-200 text-sm sm:text-[15px] leading-relaxed font-light">
                &ldquo;{item.comment}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
