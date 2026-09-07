"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";
import SellerFAQSection from "@/components/sections/SellerFAQSection";

export default function ContactPage() {
  const { t, locale, isRTL } = useLanguage();

  const whatsappInquiry = locale === "ar"
    ? "مرحباً ScrapCars دبي، أود التواصل معكم بخصوص بيع سيارة."
    : "Hi ScrapCars Dubai, I want to inquire about selling my car.";

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-navy-950 relative overflow-hidden">
      {/* Decorative Ambient Blur */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-2.5 block">
            {t("contactPage.tag", "Get In Touch")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            {t("contactPage.titleStart", "We're Here To")}{" "}
            <span className="text-gradient">
              {t("contactPage.titleGradient", "Help")}
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            {t("contactPage.subtitle", "Have questions about selling your scrap car? Need an instant valuation? Reach out to our team 24/7.")}
          </p>
        </motion.div>

        {/* Balanced Left & Right Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Compact Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between space-y-3.5"
          >
            
            {/* Card 1: Call Directly */}
            <div className="p-4 sm:p-5 rounded-2xl glass-card flex items-center gap-4 hover-lift border border-white/10 hover:border-accent/30 transition-all">
              <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-0.5">
                  {t("contactPage.callTitle", "Call Us Directly")}
                </h3>
                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="text-slate-300 hover:text-accent font-semibold transition-colors text-sm sm:text-base dir-ltr block"
                >
                  {SITE_INFO.phone}
                </a>
              </div>
            </div>

            {/* Card 2: WhatsApp Us */}
            <div className="p-4 sm:p-5 rounded-2xl glass-card flex items-center gap-4 hover-lift border border-white/10 hover:border-emerald-500/30 transition-all">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-0.5">
                  {t("contactPage.whatsAppTitle", "WhatsApp Us")}
                </h3>
                <a 
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(whatsappInquiry)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline transition-colors text-xs sm:text-sm font-medium block"
                >
                  {t("contactPage.whatsAppSubtitle", "Click to Chat (Instant Reply)")}
                </a>
              </div>
            </div>

            {/* Card 3: Business Hours */}
            <div className="p-4 sm:p-5 rounded-2xl glass-card flex items-center gap-4 hover-lift border border-white/10 hover:border-purple-500/30 transition-all">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1 flex items-center justify-between gap-2 flex-wrap">
                <div>
                  <h3 className="text-sm font-bold text-white mb-0.5">
                    {t("contactPage.hoursTitle", "Business Hours")}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-semibold">
                    {t("contactPage.hoursDesc", "Open 24/7")}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span>{t("contactPage.towingBadge", "Towing anytime")}</span>
                </div>
              </div>
            </div>

            {/* Card 4: Facility & Map */}
            <div className="p-4 sm:p-5 rounded-2xl glass-card hover-lift border border-white/10 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    {t("contactPage.facilityTitle", "Our Dismantling Facility")}
                  </h3>
                  <p className="text-slate-400 text-xs mt-0.5">{t("footer.location", SITE_INFO.address)}</p>
                </div>
              </div>

              {/* Map Preview */}
              <div className="w-full h-28 sm:h-32 rounded-xl bg-navy-800 border border-white/5 relative overflow-hidden group">
                <img
                  src="/Cars/pexels-mariosjpgs-38898678.jpg"
                  alt="Dubai Car Scrapyard and Towing Location"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-navy-950/85 backdrop-blur text-xs font-semibold text-white border border-white/15 flex items-center gap-1.5 hover:border-accent hover:text-accent transition-colors shadow-sm"
                  >
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>{t("contactPage.viewMap", "View on Google Maps")}</span>
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 flex"
          >
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 flex flex-col justify-between w-full shadow-2xl">
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    {t("contactPage.formTitle", "Send a Message")}
                  </h3>
                  <p className="text-slate-400 font-light text-xs sm:text-sm">
                    {t("contactPage.formSubtitle", "Fill out the form below and our team will get back to you within 30 minutes.")}
                  </p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t("contactPage.firstName", "First Name")}
                      </label>
                      <input
                        type="text"
                        placeholder="Ahmed"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-shadow"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t("contactPage.lastName", "Last Name")}
                      </label>
                      <input
                        type="text"
                        placeholder="Al Mansouri"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-shadow"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t("contactPage.email", "Email Address")}
                      </label>
                      <input
                        type="email"
                        placeholder="ahmed@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-shadow"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t("contactPage.phone", "Phone / WhatsApp Number")}
                      </label>
                      <input
                        type="tel"
                        placeholder="050 123 4567"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-shadow"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t("contactPage.message", "Your Message")}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t("contactPage.messagePlaceholder", "How can we help? Include car details if you want a quote...")}
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-shadow resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent to-amber-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(255,107,44,0.3)] hover:shadow-[0_0_35px_rgba(255,107,44,0.5)] transition-all hover:-translate-y-0.5 cursor-pointer mt-2"
                  >
                    {t("contactPage.sendBtn", "Send Message")}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Most Common Questions Asked by Seller (FAQ Section) */}
        <SellerFAQSection />

      </div>
    </div>
  );
}
