"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const VEHICLES = [
  {
    id: "accidental",
    slug: "accidental-cars",
    titleEn: "ACCIDENTAL CARS",
    titleAr: "سيارات الحوادث",
    subtitleEn: "Chassis impact & total loss collision",
    subtitleAr: "صدمات الشاسيه والشطب الكلي",
    tagEn: "Total Loss",
    tagAr: "شطب كلي",
    image: "/Cars/pexels-introspectivedsgn-9395027.jpg",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/40",
    borderColor: "hover:border-rose-500/50",
  },
  {
    id: "damaged",
    slug: "damaged-cars",
    titleEn: "DAMAGED CARS",
    titleAr: "السيارات المتضررة",
    subtitleEn: "Dents, body panels & exterior damage",
    subtitleAr: "أضرار الهيكل والصدمات",
    tagEn: "Body Damage",
    tagAr: "صدمات الهيكل",
    image: "/Cars/pexels-eyyup-erten-1462748243-28123528.jpg",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    borderColor: "hover:border-amber-500/50",
  },
  {
    id: "impounded",
    slug: "impounded-cars",
    titleEn: "IMPOUNDED CARS",
    titleAr: "السيارات المحجوزة",
    subtitleEn: "Yard release & RTA fines clearance",
    subtitleAr: "فك الحجز ومخالفات المرور",
    tagEn: "RTA Clearance",
    tagAr: "فك حجز RTA",
    image: "/Cars/pexels-faizanmeer-38015521.jpg",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
    borderColor: "hover:border-blue-500/50",
  },
  {
    id: "non-running",
    slug: "non-running-cars",
    titleEn: "NON-RUNNING CARS",
    titleAr: "سيارات معطلة",
    subtitleEn: "Stationary, dead & won't start",
    subtitleAr: "محرك تالف ولا تعمل",
    tagEn: "Free Towing",
    tagAr: "سحب مجاني",
    image: "/Cars/pexels-izafi-38113231.jpg",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
    borderColor: "hover:border-orange-500/50",
  },
  {
    id: "mechanical",
    slug: "mechanical-issues",
    titleEn: "MECHANICAL ISSUES",
    titleAr: "أعطال ميكانيكية",
    subtitleEn: "Gearbox, transmission & engine faults",
    subtitleAr: "أعطال الجيربوكس والمحرك",
    tagEn: "Engine / Gear",
    tagAr: "أعطال ميكانيك",
    image: "/Cars/pexels-introspectivedsgn-9271245.jpg",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    borderColor: "hover:border-emerald-500/50",
  },
  {
    id: "electrical",
    slug: "electrical-issues",
    titleEn: "ELECTRICAL ISSUES",
    titleAr: "أعطال كهربائية",
    subtitleEn: "ECU wiring & hybrid battery failure",
    subtitleAr: "ضفيرة كهرباء وبطاريات هايبرد",
    tagEn: "ECU / Battery",
    tagAr: "كهرباء وكمبيوتر",
    image: "/Cars/pexels-lorenzo-manera-686693293-31546711.jpg",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    borderColor: "hover:border-purple-500/50",
  },
  {
    id: "scrap",
    slug: "old-scrap-cars",
    titleEn: "OLD & SCRAP CARS",
    titleAr: "سكراب وخردة قديمة",
    subtitleEn: "15+ years rusted junkers & shells",
    subtitleAr: "سيارات قديمة ومعدن سكراب",
    tagEn: "Top Scrap Rate",
    tagAr: "أعلى وزن سكراب",
    image: "/Cars/pexels-andre-mouton-11270698.jpg",
    badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
    borderColor: "hover:border-yellow-500/50",
  },
  {
    id: "flooded",
    slug: "flooded-cars",
    titleEn: "FLOODED CARS",
    titleAr: "سيارات الغرق والسيول",
    subtitleEn: "Submerged in storm rain & water",
    subtitleAr: "أضرار مياه الأمطار والسيول",
    tagEn: "Water Submerged",
    tagAr: "غرق مياه",
    image: "/Cars/pexels-juan-felipe-ramirez-312591454-14944640.jpg",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    borderColor: "hover:border-cyan-500/50",
  },
];

export default function VehicleTypesSection() {
  const { isRTL, locale } = useLanguage();

  return (
    <section id="we-buy-cars" className="pt-20 sm:pt-28 pb-12 sm:pb-16 bg-navy-950 relative overflow-hidden border-b border-white/5">
      {/* Ambient Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-bold uppercase tracking-wider mb-3 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>
              {locale === "ar" ? "نشتري جميع الحالات" : "ANY CONDITION • ANY MODEL"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-[1.2]"
          >
            {locale === "ar" ? (
              <>
                نشتري <span className="text-gradient">السيارات والڤانات</span>
              </>
            ) : (
              <>
                WE BUY <span className="text-gradient">CARS & VANS</span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base font-light"
          >
            {locale === "ar"
              ? "مهما كانت حالة سيارتك، نضمن لك أفضل سعر كاش في دبي مع سحب مجاني من باب بيتك."
              : "Whatever the condition, we offer the best guaranteed cash offer in UAE with free doorstep recovery."}
          </motion.p>
        </div>

        {/* 8 Big Cards Grid with High-Quality Realistic Imagery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {VEHICLES.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Link
                  href={`/details/${item.slug}`}
                  className={`group block rounded-3xl bg-navy-900/70 hover:bg-navy-900 border border-white/10 ${item.borderColor} shadow-xl hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col justify-between overflow-hidden h-full`}
                >
                  {/* Big Visual Realistic Photo Header */}
                  <div className="w-full h-48 sm:h-52 relative overflow-hidden bg-navy-950">
                    <Image
                      src={item.image}
                      alt={item.titleEn}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Atmospheric Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
                    
                    {/* Floating Condition Badge */}
                    <div className={`absolute top-3.5 ${isRTL ? "left-3.5" : "right-3.5"} px-3 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md shadow-md ${item.badgeColor}`}>
                      {locale === "ar" ? item.tagAr : item.tagEn}
                    </div>
                  </div>

                  {/* Card Content: Title, Subtitle & Action */}
                  <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-black text-white tracking-wide group-hover:text-accent transition-colors">
                        {locale === "ar" ? item.titleAr : item.titleEn}
                      </h3>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        {locale === "ar" ? item.subtitleAr : item.subtitleEn}
                      </p>
                    </div>

                    {/* VIEW DETAIL Action Footer */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-accent transition-colors">
                      <span>{locale === "ar" ? "عرض التفاصيل" : "VIEW DETAILS"}</span>
                      {isRTL ? (
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform text-accent" />
                      ) : (
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-accent" />
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
