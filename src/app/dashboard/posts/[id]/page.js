"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  CheckCircle2,
  MapPin, 
  Calendar, 
  Car, 
  MessageCircle,
  Truck,
  FileText,
  ShieldCheck,
  Banknote,
  Flame,
  Clock,
  Phone
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { apiFetch, getUser } from "@/lib/api";
import StatusBadge from "@/components/ui/StatusBadge";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_INFO } from "@/lib/constants";

const PIPELINE_STEPS = [
  { id: "SUBMITTED", label: "Car Submitted" },
  { id: "UNDER_REVIEW", label: "Valuation Review" },
  { id: "OFFER_SENT", label: "Cash Offer Ready" },
  { id: "PICKUP_SCHEDULED", label: "Free Towing Dispatch" },
  { id: "COMPLETED", label: "Paid & Completed" },
];

function getStepIndex(status) {
  switch (status) {
    case "PENDING":
      return 0;
    case "UNDER_REVIEW":
      return 1;
    case "OFFER_SENT":
      return 2;
    case "ACCEPTED":
    case "PICKUP_SCHEDULED":
      return 3;
    case "COMPLETED":
      return 4;
    default:
      return 0;
  }
}

export default function PostDetailPage({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const { t, locale, isRTL } = useLanguage();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accepting, setAccepting] = useState(false);
  const [activeImgIdx, setActiveImgIdx] = useState(0);

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
    } catch (err) {
      alert(err.message || "Failed to accept offer");
    } finally {
      setAccepting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 text-center text-slate-400">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <span>Loading vehicle information...</span>
      </div>
    );
  }

  if (!post) return null;

  const currentStepIdx = getStepIndex(post.status);
  const whatsappInquiryMsg = locale === "ar"
    ? `مرحباً ScrapCars دبي، بخصوص طلبي لسيارة ${post.brand} ${post.model} (رقم الطلب: ${post._id})، أود الاستفسار.`
    : `Hi ScrapCars Dubai, regarding my car ${post.brand} ${post.model} (ID: ${post._id}), I have a question.`;

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 bg-navy-950">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <Link 
          href="/dashboard" 
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-colors"
        >
          {isRTL ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
          <span>Back to My Dashboard</span>
        </Link>

        {/* Post Header Card */}
        <div className="p-6 rounded-3xl glass-card border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                {post.brand} {post.model}
              </h1>
              <span className="text-sm font-bold text-accent">({post.year})</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mt-1 flex-wrap">
              <span className="text-slate-300 font-semibold">{t(`conditions.${post.condition}`, post.condition)}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{post.locationAddress}</span>
              </span>
              <span>•</span>
              <span>ID: {post._id.slice(-6)}</span>
            </div>
          </div>

          <StatusBadge status={post.status} />
        </div>

        {/* 5-Stage Visual Progress Stepper Card */}
        <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-3 shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-bold text-white uppercase tracking-wider">Buyout Progress</span>
            <span>Step {currentStepIdx + 1} of 5</span>
          </div>

          <div className="grid grid-cols-5 gap-2 text-center">
            {PIPELINE_STEPS.map((step, idx) => {
              const isDone = idx <= currentStepIdx;
              const isCurrent = idx === currentStepIdx;

              return (
                <div key={step.id} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-full h-2 rounded-full transition-all ${
                      isDone
                        ? isCurrent
                          ? "bg-accent shadow-md shadow-accent/50"
                          : "bg-emerald-400"
                        : "bg-white/10"
                    }`}
                  />
                  <span className={`text-[10px] sm:text-xs font-semibold leading-tight ${
                    isDone ? "text-white" : "text-slate-500"
                  }`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* High-Res Photos Preview */}
        {post.images?.length > 0 && (
          <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-3 shadow-lg">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Uploaded Vehicle Photos
            </h3>

            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-navy-900 border border-white/10">
              <img
                src={post.images[activeImgIdx]}
                alt={`${post.brand} photo`}
                className="w-full h-full object-contain"
              />
              <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/80 text-xs font-mono text-white">
                {activeImgIdx + 1} / {post.images.length}
              </span>
            </div>

            {post.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {post.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImgIdx(i)}
                    className={`w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                      activeImgIdx === i ? "border-accent scale-95" : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Guaranteed Offer Action Box */}
        {post.offerPrice && post.status === "OFFER_SENT" && (
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-accent/20 via-navy-900 to-amber-500/20 border border-accent/40 space-y-4 shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider">
              <Flame className="w-4 h-4 text-accent animate-pulse" />
              <span>Cash Offer Ready For Your Car</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <p className="text-xs text-slate-300">Guaranteed instant buyout price:</p>
                <div className="text-3xl sm:text-4xl font-black text-white mt-0.5">
                  {post.offerPrice.toLocaleString()}{" "}
                  <span className="text-gradient text-2xl sm:text-3xl">AED</span>
                </div>
              </div>
              <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full self-start sm:self-auto">
                Includes Free Towing & RTA Paperwork
              </span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={acceptOffer}
                disabled={accepting}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all hover-lift cursor-pointer disabled:opacity-50 flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>{accepting ? "Accepting..." : "Accept Offer & Schedule Free Pickup"}</span>
              </button>

              <a
                href={`https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(whatsappInquiryMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-colors flex items-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Accepted or Scheduled Notice */}
        {(post.status === "ACCEPTED" || post.status === "PICKUP_SCHEDULED") && (
          <div className="p-6 rounded-3xl bg-purple-950/40 border border-purple-500/30 space-y-3">
            <div className="flex items-center gap-3 text-purple-300 font-bold text-base">
              <Truck className="w-5 h-5 text-purple-400" />
              <span>Offer Accepted ({post.offerPrice?.toLocaleString()} AED) • Recovery Towing Dispatched</span>
            </div>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Our certified tow truck operator will contact you before arrival. Please ensure you have the vehicle key, your Emirates ID, and the vehicle registration card (Mulkiya) or RTA possession slip ready.
            </p>
          </div>
        )}

        {/* Completed Notice */}
        {post.status === "COMPLETED" && (
          <div className="p-6 rounded-3xl bg-emerald-950/40 border border-emerald-500/30 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
              <CheckCircle2 className="w-5 h-5" />
              <span>Deal Completed & Full Payment Handed Over</span>
            </div>
            <p className="text-xs text-slate-300 font-light">
              This vehicle has been towed and deregistered officially with RTA. Total paid: <strong className="text-white">{post.offerPrice?.toLocaleString()} AED</strong>.
            </p>
          </div>
        )}

        {/* Damage Description & Specifications */}
        <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Vehicle Details & Description
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-slate-400 block mb-0.5">Condition Category</span>
              <span className="text-white font-bold">{t(`conditions.${post.condition}`, post.condition)}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-slate-400 block mb-0.5">Pickup Address</span>
              <span className="text-amber-400 font-semibold">{post.locationAddress}</span>
            </div>
          </div>

          {post.description && (
            <div className="p-4 rounded-xl bg-navy-950/70 border border-white/5 space-y-1">
              <span className="text-xs text-slate-400 block">Notes from Submission:</span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {post.description}
              </p>
            </div>
          )}
        </div>

        {/* UAE RTA Deregistration Guidance Checklist */}
        <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>UAE RTA Deregistration Checklist</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>Original Emirates ID & Vehicle Mulkiya (Registration Card)</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>Zero outstanding traffic fines required (or deducted from payout)</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>Instant physical cash handed over before vehicle is lifted onto flatbed</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>Official signed ScrapCars sales & disposal handover receipt</span>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

