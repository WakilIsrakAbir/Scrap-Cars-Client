"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Car, 
  MapPin, 
  Calendar,
  AlertCircle,
  Search, 
  X, 
  Camera
} from "lucide-react";
import { apiFetch, getUser } from "@/lib/api";
import { CAR_BRANDS, CAR_CONDITIONS } from "@/lib/constants";
import ImageUploader from "@/components/ui/ImageUploader";
import { useLanguage } from "@/context/LanguageContext";

export default function NewPostPage() {
  const router = useRouter();
  const { t, locale, isRTL } = useLanguage();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successData, setSuccessData] = useState(null);

  // Form state - brand starts completely empty
  const [form, setForm] = useState({
    brand: "",
    model: "",
    year: "2020",
    condition: "damaged",
    description: "",
    locationAddress: "",
  });

  // Auto-suggest state for Brand
  const [brandQuery, setBrandQuery] = useState("");
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const brandContainerRef = useRef(null);

  useEffect(() => {
    if (!getUser()) router.push("/login");
  }, [router]);

  // Click outside to close suggestion dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (brandContainerRef.current && !brandContainerRef.current.contains(event.target)) {
        setIsBrandOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter & sort global car brands: prioritize startsWith, then alphabetical
  const filteredBrands = brandQuery.trim()
    ? CAR_BRANDS.filter((brand) =>
        brand.toLowerCase().includes(brandQuery.toLowerCase().trim())
      ).sort((a, b) => {
        const q = brandQuery.toLowerCase().trim();
        const aStarts = a.toLowerCase().startsWith(q);
        const bStarts = b.toLowerCase().startsWith(q);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        return a.localeCompare(b);
      })
    : CAR_BRANDS;

  const handleSelectBrand = (selectedBrand) => {
    setForm((prev) => ({ ...prev, brand: selectedBrand }));
    setBrandQuery(selectedBrand);
    setIsBrandOpen(false);
  };

  const handleBrandChange = (e) => {
    const val = e.target.value;
    setBrandQuery(val);
    setForm((prev) => ({ ...prev, brand: val }));
    setIsBrandOpen(true);
  };

  const clearBrand = () => {
    setBrandQuery("");
    setForm((prev) => ({ ...prev, brand: "" }));
    setIsBrandOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.brand.trim()) {
      setError(locale === "ar" ? "يرجى تحديد ماركة السيارة" : "Please enter or select a car brand");
      return;
    }
    if (images.length === 0) {
      setError(locale === "ar" ? "يرجى إضافة صورة واحدة على الأقل" : "Please upload at least 1 car photo");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, val]) => formData.append(key, val));
      images.forEach((img) => formData.append("images", img.file));

      const res = await apiFetch("/posts", { method: "POST", body: formData });
      if (res.whatsappChatUrl) {
        setSuccessData(res);
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError(err.message || "Failed to submit vehicle");
    } finally {
      setLoading(false);
    }
  };

  const set = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 bg-navy-950">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-2xl mx-auto space-y-6"
      >
        

        {/* Success State */}
        {successData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">Car Submitted Successfully</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Our team will inspect your car details and contact you shortly.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {successData.whatsappChatUrl && (
                <a
                  href={successData.whatsappChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>WhatsApp Chat</span>
                </a>
              )}
              <button
                type="button"
                onClick={() => router.push("/dashboard")}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm border border-white/10 transition-colors"
              >
                Go to Dashboard
              </button>
            </div>
          </motion.div>
        )}

        {/* Clean Main Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-navy-900/80 border border-white/10 space-y-6 shadow-xl">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            
            {/* Brand / Make (Auto-suggest from global car brands) */}
            <div className="relative sm:col-span-1" ref={brandContainerRef}>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Car Brand <span className="text-accent">*</span>
              </label>

              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                
                <input
                  type="text"
                  required
                  value={brandQuery}
                  onChange={handleBrandChange}
                  onFocus={() => setIsBrandOpen(true)}
                  placeholder="Type car brand (e.g. Toyota, BMW...)"
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-slate-500"
                  autoComplete="off"
                />

                {brandQuery && (
                  <button
                    type="button"
                    onClick={clearBrand}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Suggestions Dropdown */}
              <AnimatePresence>
                {isBrandOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.12 }}
                    className="absolute left-0 right-0 top-full mt-1 bg-navy-900 border border-white/20 rounded-xl shadow-2xl max-h-52 overflow-y-auto z-50 divide-y divide-white/5"
                  >
                    {filteredBrands.length > 0 ? (
                      filteredBrands.slice(0, 30).map((brand) => (
                        <button
                          key={brand}
                          type="button"
                          onClick={() => handleSelectBrand(brand)}
                          className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                            form.brand.toLowerCase() === brand.toLowerCase()
                              ? "bg-accent text-white font-bold"
                              : "text-slate-200 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span>{brand}</span>
                          {form.brand.toLowerCase() === brand.toLowerCase() && (
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          )}
                        </button>
                      ))
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleSelectBrand(brandQuery)}
                        className="w-full text-left px-3.5 py-2.5 text-xs text-accent hover:bg-white/10 font-bold"
                      >
                        Use &quot;{brandQuery}&quot;
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Model */}
            <div className="sm:col-span-1">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Model <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Camry, Patrol, Civic"
                value={form.model}
                onChange={(e) => set("model", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-slate-500"
              />
            </div>

            {/* Year */}
            <div className="sm:col-span-1">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Year <span className="text-accent">*</span>
              </label>
              <select
                value={form.year}
                onChange={(e) => set("year", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white text-sm focus:outline-none focus:border-accent transition-colors cursor-pointer"
              >
                {Array.from({ length: 45 }, (_, i) => 2026 - i).map((y) => (
                  <option key={y} value={y} className="bg-navy-950 text-white">
                    {y}
                  </option>
                ))}
              </select>
            </div>

            {/* Condition */}
            <div className="sm:col-span-1">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Condition <span className="text-accent">*</span>
              </label>
              <select
                value={form.condition}
                onChange={(e) => set("condition", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white text-sm focus:outline-none focus:border-accent transition-colors cursor-pointer"
              >
                {CAR_CONDITIONS.map((c) => (
                  <option key={c.id} value={c.id} className="bg-navy-950 text-white">
                    {t(`conditions.${c.id}`, c.label)}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Pickup Location in UAE <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-accent absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Dubai, Sharjah, Abu Dhabi"
                  value={form.locationAddress}
                  onChange={(e) => set("locationAddress", e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Additional Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Any mechanical faults, accident details, or notes..."
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-slate-500 resize-none"
              />
            </div>

          </div>

          {/* Car Photos */}
          <div className="space-y-3 pt-3 border-t border-white/10">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Car Photos <span className="text-accent">*</span>
              </label>
              <span className="text-xs text-slate-400">
                {images.length}/5 photos
              </span>
            </div>
            <ImageUploader images={images} setImages={setImages} max={5} />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-medium flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Clean Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Vehicle</span>
              </>
            )}
          </button>

        </form>

      </motion.div>
    </div>
  );
}
