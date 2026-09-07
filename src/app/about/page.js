"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Recycle, CheckCircle2, TrendingUp, Users, Car, Award, Sparkles } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import { useLanguage } from "@/context/LanguageContext";

const statIcons = [TrendingUp, Users, Car, Award];

export default function AboutPage() {
  const { t, translations, isRTL } = useLanguage();
  const stats = translations?.aboutPage?.stats || [];
  const zeroFeesPoints = translations?.aboutPage?.zeroFeesPoints || ["Free Valuation", "Free Towing", "RTA Fees Covered"];
  const greenPoints = translations?.aboutPage?.greenPoints || ["Safe Fluid Disposal", "Parts Salvaging", "Metal Recycling"];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* About Hero Header */}
      <section className="relative py-32 bg-navy-950 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Story Text with Motion */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-accent px-4 py-2 rounded-full glass border-accent/30 inline-flex items-center gap-1.5 mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("aboutPage.storyTag", "Our Story")}</span>
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-8 leading-[1.2]">
                {t("aboutPage.titleStart", "Redefining the")}{" "}
                <span className="text-gradient">
                  {t("aboutPage.titleGradient", "Auto Salvage")}
                </span>{" "}
                {t("aboutPage.titleEnd", "Industry in UAE.")}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-6">
                {t("aboutPage.p1", "Founded with a mission to make selling scrap, accidental, and damaged cars transparent, hassle-free, and profitable for vehicle owners across the United Arab Emirates.")}
              </p>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                {t("aboutPage.p2", "We believe that even a totaled car has value. By eliminating middlemen and operating our own dismantling facilities, we ensure you get the absolute best price for your vehicle, paid instantly in cash.")}
              </p>
            </motion.div>
            
            {/* Bento Image Grid with Motion */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -40 : 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  <div className="rounded-3xl overflow-hidden h-48 relative shadow-2xl border border-white/10 group">
                    <Image src="/Cars/pexels-adempercem-35520285.jpg" alt="Scrap vehicle carcass" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="rounded-3xl overflow-hidden h-64 relative shadow-2xl border border-white/10 group">
                    <Image src="/Cars/pexels-lorenzo-manera-686693293-36476593.jpg" alt="Car dismantling shell" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden h-64 relative shadow-2xl border border-white/10 group">
                    <Image src="/Cars/pexels-sreeraj-r-114875813-16889943.jpg" alt="Salvage car recovery" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="rounded-3xl overflow-hidden h-48 relative shadow-2xl p-6 bg-gradient-to-br from-accent to-amber-600 flex flex-col justify-end border border-white/15">
                    <Recycle className="w-10 h-10 text-white mb-2" />
                    <span className="text-xl font-bold text-white">
                      {t("aboutPage.ecoBadge", "100% Eco-Friendly")}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Staggered Scroll Motion */}
      <section className="py-20 bg-navy-900/50 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => {
              const Icon = statIcons[i] || Award;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="text-center p-8 rounded-3xl glass-card border border-white/10 hover:border-accent/40 shadow-xl transition-all"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-4xl font-black text-white mb-2">{stat.value}</h4>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Standards with Scroll Reveal */}
      <section className="py-32 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              {t("aboutPage.missionTitle", "Our Mission & Standards")}
            </h2>
            <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
              {t("aboutPage.missionDesc", "Traditional scrapyards often undercut car owners with aggressive lowballing and surprise towing fees. At Scrap Cars Dubai, we built a modern digital valuation model backed by our own salvage dismantling centers in Al Quoz and Sharjah.")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-10 rounded-3xl glass border-emerald-500/20 relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px]" />
              <div className="relative z-10">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t("aboutPage.zeroFeesTitle", "Zero Hidden Fees")}
                </h3>
                <p className="text-slate-400 font-light leading-relaxed mb-6">
                  {t("aboutPage.zeroFeesDesc", "What we quote is what you get. We cover all RTA ownership transfer fees, cancellation fees, and towing charges. You receive the full agreed amount in cash.")}
                </p>
                <ul className="space-y-3">
                  {zeroFeesPoints.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-10 rounded-3xl glass border-accent/20 relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px]" />
              <div className="relative z-10">
                <Recycle className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t("aboutPage.greenTitle", "Green Recycling")}
                </h3>
                <p className="text-slate-400 font-light leading-relaxed mb-6">
                  {t("aboutPage.greenDesc", "We are 100% compliant with Dubai Municipality environmental regulations. Fluids are safely drained, usable parts are salvaged, and metal is ethically recycled.")}
                </p>
                <ul className="space-y-3">
                  {greenPoints.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-accent" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
