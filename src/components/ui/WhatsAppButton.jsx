"use client";

import { MessageCircle } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppButton() {
  const { isRTL, t, locale } = useLanguage();

  const defaultMsg = locale === "ar"
    ? "مرحباً ScrapCars دبي، أود الحصول على تسعيرة لسيارتي السكراب."
    : "Hi ScrapCars Dubai, I would like to get a cash offer for my scrap/damaged car.";

  const whatsappUrl = `https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <div
      className={`fixed bottom-6 z-50 flex items-center gap-3 ${
        isRTL ? "left-6 flex-row-reverse" : "right-6 flex-row"
      }`}
    >
      {/* Tooltip badge on hover */}
      <span className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full bg-navy-900/95 backdrop-blur-md border border-white/10 text-xs font-semibold text-white shadow-xl shadow-black/40">
        {t("common.whatsAppChat", "Chat on WhatsApp")}
      </span>

      {/* Floating Button with pulsing green ring */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </div>
  );
}
