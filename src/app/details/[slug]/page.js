"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  ShieldCheck,
  Truck,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Clock,
  Car,
  FileCheck2,
  Banknote
} from "lucide-react";
import { SITE_INFO } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";
import { VEHICLE_CATEGORIES } from "@/lib/vehicleCategoriesData";

export default function DetailsPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  const category = VEHICLE_CATEGORIES[slug];
  const router = useRouter();

  const { isRTL, locale } = useLanguage();

  if (!category) {
    notFound();
  }

  const otherCategories = Object.values(VEHICLE_CATEGORIES).filter(
    (c) => c.slug !== slug
  );

  const whatsappMsg = locale === "ar"
    ? `مرحباً ScrapCars، أريد تقييم فوري لسيارتي (${category.titleAr}).`
    : `Hi ScrapCars, I would like an instant valuation for my ${category.title}.`;

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/#we-buy-cars");
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-200 pt-36 pb-24">
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-accent/5 blur-[140px] pointer-events-none -z-10" />

      {/* Fixed Back Button with generous top and bottom spacing */}
      <div className="fixed top-[80px] sm:top-[84px] inset-x-0 z-40 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            <button
              type="button"
              onClick={handleBack}
              className="pointer-events-auto group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-slate-300 hover:text-accent border border-white/15 hover:border-accent/40 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-xl shadow-black/50 transition-all duration-200 cursor-pointer"
            >
              {isRTL ? (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              ) : (
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              )}
              <span>{locale === "ar" ? "رجوع" : "Back"}</span>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 border-b border-white/10 pb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {locale === "ar" ? "شراء فوري في الإمارات" : "INSTANT BUYOUT ACROSS UAE"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase mb-3">
            {locale === "ar" ? category.titleAr : category.title}
          </h1>

          <p className="text-base sm:text-lg text-amber-400 font-medium max-w-3xl">
            {category.tagline}
          </p>
        </motion.div>

        {/* Two-Column Layout (Matching User's Reference Screenshots) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Main Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-12"
          >
            
            {/* Section 1: Intro */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                SCRAPCARS BUYER
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light">
                {category.intro}
              </p>
            </div>

            {/* Section 2: Why Should You Sell To Us */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                {category.whySellTitle}
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light">
                {category.whySellText}
              </p>
            </div>

            {/* Section 3: Benefits (Green Checkmarks, exact reference layout) */}
            <div className="space-y-5">
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                BENEFITS OF SELLING CAR SCRAP ON SCRAPCARS
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-light">
                {locale === "ar"
                  ? "مع ScrapCars يمكنك تجنب جميع مشاكل البيع التقليدية والتخلص من سيارتك بسرعة وأمان:"
                  : "With ScrapCars, you can avoid all these problems and get rid of your scrap car in a quick and easy way. Here are some of the benefits of selling your scrap car to us:"}
              </p>

              <div className="space-y-3 pt-2">
                {category.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-snug font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: How Can You Sell Your Car To Us (Steps) */}
            <div className="space-y-5">
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                HOW CAN YOU SELL YOUR SCRAP CAR TO US?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-light">
                {locale === "ar"
                  ? "بيع سيارتك السكراب بسيط ومريح للغاية، فقط اتبع هذه الخطوات:"
                  : "Selling your scrap car to us is very simple and convenient. All you need to do is follow these steps:"}
              </p>

              <div className="space-y-4 pt-1">
                {category.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-navy-900/80 border border-white/10">
                    <div className="w-8 h-8 rounded-xl bg-accent/15 border border-accent/30 text-accent font-bold text-sm flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Additional Car Services We Offer */}
            <div className="space-y-5">
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                ADDITIONAL CAR SERVICES WE OFFER
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-light">
                {locale === "ar"
                  ? "في ScrapCars نتجاوز مجرد شراء السيارات ونقدم خدمات شاملة لراحتكم:"
                  : "At ScrapCars, we go beyond just buying scrap and accidental cars. We provide a range of additional car-related services designed to make your experience even more convenient and stress-free:"}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {category.additionalServices.map((svc, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Truck className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      {svc.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {svc.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Quote Card & Real Vehicle Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Instant Cash Quote Card */}
            <div className="rounded-3xl p-6 sm:p-7 bg-navy-900 border border-white/15 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-lg font-black text-white">
                    {locale === "ar" ? "احصل على تقييم فوري" : "Get Instant Cash Quote"}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {locale === "ar" ? "تسعير فوري خلال 10 دقائق" : "Guaranteed payout within 10 mins"}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  Free Towing
                </span>
              </div>

              <div className="space-y-3">
                <Link
                  href="/dashboard/new-post"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-accent to-amber-500 hover:from-accent-hover hover:to-amber-600 text-white font-bold text-sm text-center shadow-[0_0_25px_rgba(255,107,44,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  <span>{locale === "ar" ? "أدخل بيانات سيارتك أونلاين" : "Submit Your Vehicle Online"}</span>
                  {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </Link>

                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{locale === "ar" ? "أرسل صور السيارة عبر واتساب" : "Send Photos on WhatsApp"}</span>
                </a>

                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>{SITE_INFO.phone}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% RTA Cleared</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Same-Day Towing</span>
                </div>
              </div>
            </div>

            {/* Photo Gallery (Authentic condition imagery like user reference) */}
            <div className="space-y-4 pt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                {locale === "ar" ? "صور لسيارات تم شراؤها" : "Recent Purchased Examples"}
              </h3>

              <div className="space-y-4">
                {category.images.map((imgUrl, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative h-64 sm:h-72 w-full rounded-3xl overflow-hidden border border-white/10 group shadow-lg"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${category.title} example ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                      <span className="font-semibold text-white">
                        {category.title} • UAE Purchased
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px] border border-emerald-500/30">
                        Paid on Spot
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

        {/* Other Categories Explorer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white">
              {locale === "ar" ? "تصفح باقي فئات السيارات" : "Explore Other Vehicle Categories"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
              {locale === "ar"
                ? "نشتري جميع حالات السيارات والسكراب في دبي وجميع الإمارات"
                : "We buy all conditions and models across Dubai & UAE"}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherCategories.map((other, idx) => (
              <motion.div
                key={other.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  href={`/details/${other.slug}`}
                  className="p-4 rounded-2xl bg-navy-900/60 hover:bg-navy-900 border border-white/10 hover:border-accent/40 transition-all text-center group flex flex-col items-center justify-between h-full hover-lift"
                >
                  <span className="text-xs font-bold text-white group-hover:text-accent transition-colors mb-1">
                    {locale === "ar" ? other.titleAr : other.title}
                  </span>
                  <span className="text-[11px] text-slate-400 group-hover:text-slate-200 flex items-center gap-1">
                    <span>{locale === "ar" ? "عرض التفاصيل" : "View Details"}</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
