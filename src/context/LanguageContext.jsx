"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("scrapcars_lang");
    if (saved === "ar" || saved === "en") {
      setLocale(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    }
    setMounted(true);
  }, []);

  const changeLanguage = (lang) => {
    if (lang === "en" || lang === "ar") {
      setLocale(lang);
      localStorage.setItem("scrapcars_lang", lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  };

  const toggleLanguage = () => {
    const nextLang = locale === "en" ? "ar" : "en";
    changeLanguage(nextLang);
  };

  /**
   * Helper function to get translation by key path, e.g. t("hero.titleStart")
   */
  const t = (keyPath, fallback = "") => {
    if (!keyPath) return fallback;
    const keys = keyPath.split(".");
    let current = translations[locale];

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English if translation is missing
        let enCurrent = translations.en;
        for (const enKey of keys) {
          if (enCurrent && enCurrent[enKey] !== undefined) {
            enCurrent = enCurrent[enKey];
          } else {
            return fallback || keyPath;
          }
        }
        return enCurrent;
      }
    }
    return current;
  };

  const isRTL = locale === "ar";

  return (
    <LanguageContext.Provider
      value={{
        locale,
        isRTL,
        dir: isRTL ? "rtl" : "ltr",
        changeLanguage,
        toggleLanguage,
        t,
        translations: translations[locale],
      }}
    >
      <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Provide fallback when outside of provider
    return {
      locale: "en",
      isRTL: false,
      dir: "ltr",
      changeLanguage: () => {},
      toggleLanguage: () => {},
      t: (key) => key,
      translations: translations.en,
    };
  }
  return context;
};
