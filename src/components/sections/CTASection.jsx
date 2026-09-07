"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function CTASection() {
  const { t, isRTL, locale } = useLanguage();

  const whatsappMsg = locale === "ar"
    ? "مرحباً ScrapCars دبي، أرغب في بيع سيارتي وأطلب تسعيرة نقدية."
    : "Hi ScrapCars Dubai, I want to sell my car for cash.";

  return (
    <section className="relative py-14 sm:py-20 overflow-hidden border-t border-white/5">
      {/* Background Image with Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Cars/pexels-introspectivedsgn-9395015.jpg" 
          alt="Damaged car in UAE scrap yard" 
          className="w-full h-full object-cover brightness-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/80 to-navy-950" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("cta.tag", "Ready to Sell?")}</span>
          </span>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.15]">
            {t("cta.title", "Ready to Sell Your Car?")}
          </h2>
          
          <p className="text-slate-300 text-base sm:text-xl mb-10 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            {t("cta.subtitle", "Get your instant cash offer today. We buy any car, in any condition, and offer free pickup anywhere in Dubai & UAE.")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/dashboard/new-post"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-amber-500 text-white font-bold text-base shadow-[0_0_30px_rgba(255,107,44,0.3)] hover:shadow-[0_0_40px_rgba(255,107,44,0.5)] transition-all flex items-center gap-2 group"
              >
                <span>{t("cta.btnSell", "Sell Your Car Now")}</span>
                {isRTL ? (
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </Link>
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>{t("cta.btnWhatsApp", "Chat with an Appraiser")}</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="px-8 py-4 rounded-xl glass border border-white/20 text-white font-bold text-base hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>{SITE_INFO.phone}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
