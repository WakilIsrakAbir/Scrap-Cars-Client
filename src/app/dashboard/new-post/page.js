"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Send, MessageCircle, CheckCircle2 } from "lucide-react";
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
  const [form, setForm] = useState({
    brand: "Toyota",
    model: "",
    year: "2020",
    condition: "damaged",
    description: "",
    locationAddress: "",
  });

  useEffect(() => {
    if (!getUser()) router.push("/login");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (images.length === 0) {
      setError(locale === "ar" ? "يرجى رفع صورة واحدة على الأقل للسيارة" : "Please upload at least 1 photo of your car");
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
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const set = (key, val) => setForm({ ...form, [key]: val });

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">
            {t("sellForm.pageTitle", "Submit Your Scrap Car for Cash")}
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            {t("sellForm.pageSubtitle", "Fill in details and upload 4-5 photos to get an instant cash offer")}
          </p>
        </div>

        {/* Success Modal / Banner with WhatsApp Instant Action */}
        {successData && (
          <div className="mb-8 p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-center space-y-4 shadow-2xl">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-bold text-white">
              {t("sellForm.successTitle", "Submission Successful!")}
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              {t("sellForm.successDesc", "Your car has been submitted. Our valuation team is reviewing it and will send you a cash offer shortly.")}
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {successData.whatsappChatUrl && (
                <a
                  href={successData.whatsappChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-lg flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  {t("sellForm.chatOnWhatsapp", "Speed up valuation on WhatsApp")}
                </a>
              )}
              <button
                onClick={() => router.push("/dashboard")}
                className="px-6 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-medium text-sm border border-white/10"
              >
                {t("common.viewDetails", "Go to Dashboard")}
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        {!successData && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Car Details */}
            <div className="p-6 rounded-2xl bg-navy-900/60 border border-white/5 space-y-4">
              <h2 className="text-sm font-semibold text-white">
                {t("postDetails.carDetails", "Car Details")}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    {t("sellForm.brandLabel", "Car Make / Brand")}
                  </label>
                  <select
                    value={form.brand}
                    onChange={(e) => set("brand", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent"
                  >
                    {CAR_BRANDS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    {t("sellForm.modelLabel", "Car Model")}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.model}
                    onChange={(e) => set("model", e.target.value)}
                    placeholder={t("sellForm.modelPlaceholder", "e.g. Camry, Civic, X5")}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    {t("sellForm.yearLabel", "Year of Manufacture")}
                  </label>
                  <select
                    value={form.year}
                    onChange={(e) => set("year", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent"
                  >
                    {Array.from({ length: 30 }, (_, i) => 2026 - i).map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    {t("sellForm.conditionLabel", "Vehicle Condition")}
                  </label>
                  <select
                    value={form.condition}
                    onChange={(e) => set("condition", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent"
                  >
                    {CAR_CONDITIONS.map((c) => (
                      <option key={c.id} value={c.id}>
                        {t(`conditions.${c.id}`, c.label)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  {t("sellForm.descLabel", "Description / Damage Details")}
                </label>
                <textarea
                  rows={3}
                  value={form.description}
                  onChange={(e) => set("description", e.target.value)}
                  placeholder={t("sellForm.descPlaceholder", "Describe mechanical issues, missing parts, accident details, etc.")}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  {t("sellForm.locationLabel", "Pickup Location in UAE")}
                </label>
                <input
                  type="text"
                  required
                  value={form.locationAddress}
                  onChange={(e) => set("locationAddress", e.target.value)}
                  placeholder={t("sellForm.locationPlaceholder", "e.g. Al Barsha 1, Dubai")}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            {/* Photo Upload */}
            <div className="p-6 rounded-2xl bg-navy-900/60 border border-white/5 space-y-3">
              <h2 className="text-sm font-semibold text-white">
                {t("sellForm.photosLabel", "Car Photos")}{" "}
                <span className="text-slate-400 font-normal">
                  ({t("sellForm.photosHelp", "Upload up to 5 clear photos")})
                </span>
              </h2>
              <ImageUploader images={images} setImages={setImages} max={5} />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent to-amber-500 text-white font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {t("sellForm.submitting", "Uploading & Submitting...")}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> {t("sellForm.submitBtn", "Submit for Cash Offer")}
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
