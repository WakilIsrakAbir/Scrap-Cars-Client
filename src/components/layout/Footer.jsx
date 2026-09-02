"use client";

import Link from "next/link";
import { Car, Phone, Mail, MapPin } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-navy-950 border-t border-white/5 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-gold flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Scrap<span className="text-accent">Cars</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              {t("footer.description", "Dubai's trusted scrap & damaged car buyer. Instant cash, free towing, and legal RTA paperwork.")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              {t("footer.quickLinks", "Quick Links")}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">{t("nav.home", "Home")}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{t("nav.about", "About Us")}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t("nav.services", "Services")}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t("nav.contact", "Contact")}</Link></li>
              <li><Link href="/dashboard/new-post" className="hover:text-accent transition-colors font-medium">{t("nav.sellCar", "Sell Your Car")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              {t("footer.contactInfo", "Contact Us")}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href={`tel:${SITE_INFO.phoneRaw}`} className="hover:text-white dir-ltr">{SITE_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{SITE_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>{t("footer.location", SITE_INFO.address)}</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {SITE_INFO.name}. {t("footer.rights", "All rights reserved.")}
        </p>
      </div>
    </footer>
  );
}
