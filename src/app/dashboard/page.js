"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Car, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Edit3, 
  Trash2, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Save, 
  Sparkles,
  RefreshCw,
  ExternalLink
} from "lucide-react";
import { apiFetch, getUser } from "@/lib/api";
import StatusBadge from "@/components/ui/StatusBadge";
import Skeleton from "@/components/ui/Skeleton";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useLanguage } from "@/context/LanguageContext";
import { CAR_CONDITIONS, SITE_INFO } from "@/lib/constants";

export default function DashboardPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Edit modal state
  const [editingPost, setEditingPost] = useState(null);
  const [editForm, setEditForm] = useState({
    brand: "",
    model: "",
    year: "",
    condition: "",
    locationAddress: "",
    description: "",
  });
  const [savingEdit, setSavingEdit] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [actionSuccess, setActionSuccess] = useState("");

  useEffect(() => {
    const currentUser = getUser();
    if (!currentUser) {
      router.push("/login");
      return;
    }
    setUser(currentUser);
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const data = await apiFetch("/posts/my");
      setPosts(data.posts || []);
    } catch {
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenEdit = (post) => {
    setEditingPost(post);
    setEditForm({
      brand: post.brand || "",
      model: post.model || "",
      year: post.year || "",
      condition: post.condition || "scrap",
      locationAddress: post.locationAddress || "",
      description: post.description || "",
    });
    setActionSuccess("");
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editingPost) return;

    setSavingEdit(true);
    try {
      await apiFetch(`/posts/${editingPost._id}`, {
        method: "PATCH",
        body: JSON.stringify({
          brand: editForm.brand,
          model: editForm.model,
          year: Number(editForm.year),
          condition: editForm.condition,
          locationAddress: editForm.locationAddress,
          description: editForm.description,
        }),
      });

      setActionSuccess(`Updated ${editForm.brand} ${editForm.model} successfully!`);
      setEditingPost(null);
      await fetchPosts();
    } catch (err) {
      alert(err.message || "Failed to update post");
    } finally {
      setSavingEdit(false);
    }
  };

  const handleDeletePost = async (postId, carTitle) => {
    if (!confirm(`Are you sure you want to delete your post "${carTitle}"? This cannot be undone.`)) {
      return;
    }

    setDeletingId(postId);
    try {
      await apiFetch(`/posts/${postId}`, { method: "DELETE" });
      setActionSuccess(`Deleted "${carTitle}" successfully.`);
      await fetchPosts();
    } catch (err) {
      alert(err.message || "Failed to delete post");
    } finally {
      setDeletingId(null);
    }
  };

  const pendingCount = posts.filter((p) => p.status === "PENDING").length;
  const contactedCount = posts.filter((p) => ["CONTACTED", "ACCEPTED", "OFFER_SENT"].includes(p.status)).length;
  const completedCount = posts.filter((p) => p.status === "COMPLETED").length;

  if (loading && posts.length === 0) {
    return (
      <div className="min-h-screen pt-28 pb-20 px-4 bg-navy-950">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-3 w-full sm:w-1/2">
              <Skeleton className="h-4 w-28 rounded-full" />
              <Skeleton className="h-8 w-64 rounded-xl" />
              <Skeleton className="h-4 w-48 rounded-lg" />
            </div>
            <Skeleton className="h-12 w-44 rounded-2xl" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-5 rounded-2xl glass-card border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-3 w-24 rounded" />
                  <Skeleton className="w-8 h-8 rounded-xl" />
                </div>
                <Skeleton className="h-7 w-16 rounded-lg" />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="p-6 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                <div className="flex items-center gap-4 w-full sm:w-2/3">
                  <Skeleton className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex-shrink-0" />
                  <div className="space-y-2.5 w-full">
                    <Skeleton className="h-4 w-20 rounded-full" />
                    <Skeleton className="h-5 w-48 rounded-lg" />
                    <Skeleton className="h-3 w-32 rounded" />
                  </div>
                </div>
                <Skeleton className="h-10 w-28 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 bg-navy-950">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-5xl mx-auto space-y-8"
      >
        {/* User Welcome Banner */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
          <div className="space-y-1 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/25 text-accent text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Seller Dashboard</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Hello, <span className="text-gradient">{user?.name || "Seller"}</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl">
              View and manage your car submissions. Check whether our admin has reviewed and contacted you regarding your vehicles.
            </p>
          </div>

          <div className="flex items-center gap-3 relative z-10 flex-shrink-0">
            <button
              onClick={fetchPosts}
              className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title="Refresh submissions"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-accent" : ""}`} />
            </button>

            <Link
              href="/dashboard/new-post"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-accent to-amber-500 hover:from-accent-hover hover:to-amber-600 text-white font-bold text-sm shadow-xl shadow-accent/25 transition-all hover-lift cursor-pointer"
            >
              <Plus className="w-5 h-5 stroke-[2.5]" />
              <span>Submit Another Car</span>
            </Link>
          </div>
        </div>

        {/* Success Alert Banner */}
        {actionSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{actionSuccess}</span>
            </div>
            <button
              onClick={() => setActionSuccess("")}
              className="text-slate-400 hover:text-white text-xs ml-3"
            >
              ✕
            </button>
          </div>
        )}

        {/* 3 Simple Operational Metric Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-medium block">Total Posted</span>
              <span className="text-2xl font-black text-white mt-0.5 block">{posts.length}</span>
              <span className="text-[11px] text-slate-400">Cars submitted by you</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Car className="w-5 h-5" />
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-medium block">Awaiting Review</span>
              <span className="text-2xl font-black text-amber-400 mt-0.5 block">{pendingCount}</span>
              <span className="text-[11px] text-slate-400">Admin will review soon</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-medium block">Accepted</span>
              <span className="text-2xl font-black text-emerald-400 mt-0.5 block">{contactedCount + completedCount}</span>
              <span className="text-[11px] text-slate-400">Accepted by admin</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* User's Car Posts List */}
        {posts.length === 0 ? (
          <div className="p-12 rounded-3xl glass-card border border-white/10 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-accent flex items-center justify-center mx-auto">
              <Car className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">You haven't posted any cars yet</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md mx-auto mt-1">
                Post details of your scrap, damaged, or unwanted car to receive a direct review and contact from our operations team.
              </p>
            </div>
            <Link
              href="/dashboard/new-post"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-amber-500 text-white font-bold text-xs shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Plus className="w-4 h-4" />
              <span>Post Your Car Now</span>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-lg font-bold text-white">Your Submitted Cars ({posts.length})</h2>
              <span className="text-xs text-slate-400">Manage, edit, or check contact status</span>
            </div>

            <div className="space-y-4">
              {posts.map((post) => {
                const isContactedOrAccepted = ["CONTACTED", "ACCEPTED", "OFFER_SENT"].includes(post.status);
                const isCompleted = post.status === "COMPLETED";
                const isPending = post.status === "PENDING";
                const isUnderReview = post.status === "UNDER_REVIEW";

                return (
                  <div
                    key={post._id}
                    className="p-5 sm:p-6 rounded-3xl glass-card border border-white/10 space-y-4 shadow-xl hover:border-white/20 transition-all"
                  >
                    {/* Top Section: Photo + Car Details + Action Buttons */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      
                      {/* Left: Thumbnail & Info */}
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-20 rounded-2xl bg-navy-800 border border-white/10 overflow-hidden flex-shrink-0 relative">
                          {post.images?.[0] ? (
                            <img src={post.images[0]} alt={post.brand} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-500">
                              <Car className="w-8 h-8" />
                            </div>
                          )}
                          {post.images?.length > 1 && (
                            <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[9px] text-white font-bold">
                              +{post.images.length - 1} photos
                            </span>
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base sm:text-lg font-bold text-white">
                              {post.brand} {post.model}
                            </h3>
                            <span className="text-xs text-slate-400 font-semibold">({post.year})</span>
                            <StatusBadge status={post.status} />
                          </div>

                          <div className="flex items-center gap-2 text-xs text-slate-400 mt-1.5 flex-wrap">
                            <span className="text-slate-300 font-medium">
                              {t(`conditions.${post.condition}`, post.condition)}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                              <span className="truncate max-w-[220px]">{post.locationAddress}</span>
                            </span>
                          </div>

                          <span className="text-[11px] text-slate-500 mt-1 block">
                            Posted on {new Date(post.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      {/* Right: Action Buttons (Edit & Delete) */}
                      <div className="flex items-center gap-2 sm:self-start flex-wrap">
                        <button
                          onClick={() => handleOpenEdit(post)}
                          className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                          title="Edit your car details"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-accent" />
                          <span>Edit Post</span>
                        </button>

                        <button
                          onClick={() => handleDeletePost(post._id, `${post.brand} ${post.model}`)}
                          disabled={deletingId === post._id}
                          className="px-3.5 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 border border-red-500/20 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
                          title="Delete this post"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>{deletingId === post._id ? "Deleting..." : "Delete"}</span>
                        </button>
                      </div>
                    </div>

                    {/* Description if any */}
                    {post.description && (
                      <p className="text-xs text-slate-300 bg-navy-950/60 p-3 rounded-xl border border-white/5 font-light">
                        <strong className="text-slate-400 font-medium">Notes:</strong> {post.description}
                      </p>
                    )}

                    {/* Admin Review & Contact Status Banner */}
                    <div className="pt-2 border-t border-white/10">
                      {isPending && (
                        <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between gap-3 flex-wrap">
                          <div className="flex items-center gap-2.5">
                            <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                            <span className="text-xs text-amber-300 font-medium">
                              <strong>Status: Pending Review.</strong> Our operations team will review your post and contact you via WhatsApp or phone.
                            </span>
                          </div>
                          <a
                            href={`https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(
                              `Hi ScrapCars, I submitted my ${post.brand} ${post.model} (${post.year}). Please check my post.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Inquire via WhatsApp</span>
                          </a>
                        </div>
                      )}

                      {isUnderReview && (
                        <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between gap-3 flex-wrap">
                          <div className="flex items-center gap-2.5">
                            <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span className="text-xs text-blue-300 font-medium">
                              <strong>Status: Under Review.</strong> An admin is reviewing your vehicle details.
                            </span>
                          </div>
                          <a
                            href={`https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(
                              `Hi ScrapCars, following up on my ${post.brand} ${post.model}.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Chat with Admin</span>
                          </a>
                        </div>
                      )}

                      {isContactedOrAccepted && (
                        <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-between gap-3 flex-wrap">
                          <div className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span className="text-xs text-emerald-300 font-medium">
                              <strong>Admin Contacted / Accepted!</strong> The admin has reviewed your car and reached out to finalize doorstep pickup and payment.
                            </span>
                          </div>
                          <a
                            href={`https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(
                              `Hi ScrapCars, regarding my accepted post for the ${post.brand} ${post.model}. When will the recovery driver arrive?`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>WhatsApp Admin</span>
                          </a>
                        </div>
                      )}

                      {isCompleted && (
                        <div className="p-3.5 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                          <span className="text-xs text-teal-300 font-medium">
                            <strong>Completed!</strong> Vehicle has been collected and the deal is concluded. Thank you for selling with ScrapCars Dubai.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* EDIT POST MODAL */}
        <AnimatePresence>
          {editingPost && (
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-navy-900 border border-white/15 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-accent/20 text-accent flex items-center justify-center">
                      <Edit3 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Edit Your Car Post</h3>
                      <p className="text-xs text-slate-400">Update details for admin review</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setEditingPost(null)}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal Form */}
                <form onSubmit={handleSaveEdit} className="p-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Make / Brand</label>
                      <input
                        type="text"
                        required
                        value={editForm.brand}
                        onChange={(e) => setEditForm({ ...editForm, brand: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Model</label>
                      <input
                        type="text"
                        required
                        value={editForm.model}
                        onChange={(e) => setEditForm({ ...editForm, model: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Year</label>
                      <input
                        type="number"
                        required
                        min={1970}
                        max={2026}
                        value={editForm.year}
                        onChange={(e) => setEditForm({ ...editForm, year: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Condition</label>
                      <select
                        value={editForm.condition}
                        onChange={(e) => setEditForm({ ...editForm, condition: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent"
                      >
                        {CAR_CONDITIONS.map((cond) => (
                          <option key={cond.id} value={cond.id}>
                            {cond.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Pickup Location / City (UAE)</label>
                    <input
                      type="text"
                      required
                      value={editForm.locationAddress}
                      onChange={(e) => setEditForm({ ...editForm, locationAddress: e.target.value })}
                      placeholder="e.g. Al Quoz, Dubai"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Condition Notes / Description</label>
                    <textarea
                      rows={3}
                      value={editForm.description}
                      onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                      placeholder="Describe any damage, missing parts, engine status..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent resize-none"
                    />
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-2.5">
                    <button
                      type="button"
                      onClick={() => setEditingPost(null)}
                      className="px-4 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={savingEdit}
                      className="px-5 py-2 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs font-bold transition-all shadow-md shadow-accent/25 flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>{savingEdit ? "Saving..." : "Save Changes"}</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}
