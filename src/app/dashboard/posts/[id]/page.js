"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, Calendar, Car, MessageCircle } from "lucide-react";
import Link from "next/link";
import { apiFetch, getUser } from "@/lib/api";
import StatusBadge from "@/components/ui/StatusBadge";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_INFO } from "@/lib/constants";

export default function PostDetailPage({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const { t, locale, isRTL } = useLanguage();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accepting, setAccepting] = useState(false);

  useEffect(() => {
    if (!getUser()) { router.push("/login"); return; }
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const data = await apiFetch(`/posts/${id}`);
      setPost(data.post);
    } catch {
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  const acceptOffer = async () => {
    setAccepting(true);
    try {
      await apiFetch(`/posts/${id}/accept`, { method: "PATCH" });
      fetchPost();
    } catch {} finally {
      setAccepting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 text-center text-slate-400">
        {t("common.loading", "Loading...")}
      </div>
    );
  }

  if (!post) return null;

  const whatsappInquiryMsg = locale === "ar"
    ? `مرحباً، بخصوص طلبي لسيارة ${post.brand} ${post.model} (رقم الطلب: ${post._id})، أود الاستفسار.`
    : `Hi ScrapCars Dubai, regarding my post for ${post.brand} ${post.model} (ID: ${post._id}), I have a question.`;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/dashboard" 
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white mb-6 transition-colors"
        >
          {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{t("common.back", "Back to Dashboard")}</span>
        </Link>

        {/* Post Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">{post.brand} {post.model}</h1>
            <p className="text-sm text-slate-400 mt-1">
              {post.year} • {t(`conditions.${post.condition}`, post.condition)}
            </p>
          </div>
          <StatusBadge status={post.status} />
        </div>

        {/* Photos */}
        {post.images?.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {post.images.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-video bg-navy-800 border border-white/5">
                <img src={img} alt={`Car photo ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        {/* Details */}
        <div className="p-6 rounded-2xl bg-navy-900/60 border border-white/5 space-y-4 mb-6">
          <h2 className="text-sm font-semibold text-white">
            {t("postDetails.carDetails", "Vehicle Specifications")}
          </h2>

          {post.description && (
            <div>
              <h3 className="text-xs font-medium text-slate-400 mb-1">
                {t("sellForm.descLabel", "Description")}
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">{post.description}</p>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-slate-300">
            <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
            <span>{post.locationAddress}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
            <span>{t("common.date", "Date")}: {new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Offer Section */}
        {post.offerPrice && post.status === "OFFER_SENT" && (
          <div className="p-6 rounded-2xl bg-accent/10 border border-accent/30 space-y-4 shadow-xl">
            <div>
              <p className="text-sm text-amber-300 font-medium">{t("postDetails.offerReceived", "Cash Offer Received!")}</p>
              <p className="text-3xl font-black text-white mt-1">
                {post.offerPrice.toLocaleString()} <span className="text-accent text-2xl font-bold">{t("common.aed", "AED")}</span>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={acceptOffer}
                disabled={accepting}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-amber-500 text-white font-semibold text-sm flex items-center gap-2 disabled:opacity-50 cursor-pointer shadow-lg shadow-accent/20"
              >
                <CheckCircle className="w-4 h-4" />
                {accepting ? t("common.loading", "Accepting...") : t("postDetails.acceptOfferBtn", "Accept Offer & Schedule Pickup")}
              </button>

              <a
                href={`https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(whatsappInquiryMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold text-sm transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                {t("postDetails.needHelp", "Negotiate on WhatsApp")}
              </a>
            </div>
          </div>
        )}

        {post.status === "ACCEPTED" && (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
            <p className="text-sm text-emerald-400 font-semibold">
              ✓ {t("postDetails.acceptSuccess", "Offer accepted! We will contact you to schedule free pickup.")}
            </p>
          </div>
        )}

        {post.status === "PICKUP_SCHEDULED" && (
          <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/30">
            <p className="text-sm text-purple-400 font-semibold">
              🚚 {locale === "ar" ? "تم جدولة السحب المجاني! سيصل فريقنا لموقعك قريباً." : "Pickup has been scheduled. Our towing team will arrive at your location soon."}
            </p>
          </div>
        )}

        {post.status === "COMPLETED" && (
          <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30">
            <p className="text-sm text-green-400 font-semibold">
              ✓ {locale === "ar" ? "تم اكتمال الصفقة بنجاح! شكراً لاختيارك ScrapCars دبي." : "Completed! Thank you for selling with ScrapCars Dubai."}
            </p>
            {post.offerPrice && (
              <p className="text-lg font-bold text-white mt-2">
                {locale === "ar" ? "المبلغ المستلم:" : "Final Payment:"} {post.offerPrice.toLocaleString()} {t("common.aed", "AED")}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
