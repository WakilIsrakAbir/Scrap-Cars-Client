"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Calendar, 
  Car, 
  X, 
  CheckCircle2, 
  Clock, 
  Trash2, 
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  Eye,
  RefreshCw
} from "lucide-react";
import { apiFetch } from "@/lib/api";
import StatusBadge from "@/components/ui/StatusBadge";
import Skeleton from "@/components/ui/Skeleton";
import { useLanguage } from "@/context/LanguageContext";

export default function AdminPostsPage() {
  const { t, locale, isRTL } = useLanguage();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const data = await apiFetch("/admin/posts");
      setPosts(data.posts || []);
    } catch {
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    setStatusUpdating(true);
    try {
      const res = await apiFetch(`/admin/posts/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status })
      });
      await fetchPosts();
      if (selectedPost?._id === id && res.post) {
        setSelectedPost(res.post);
      }
    } catch (err) {
      alert(err.message || "Failed to update status");
    } finally {
      setStatusUpdating(false);
    }
  };

  const deletePost = async (id) => {
    if (!confirm("Are you sure you want to permanently delete this vehicle post?")) return;
    setDeleting(true);
    try {
      await apiFetch(`/admin/posts/${id}`, { method: "DELETE" });
      setSelectedPost(null);
      await fetchPosts();
    } catch (err) {
      alert(err.message || "Failed to delete post");
    } finally {
      setDeleting(false);
    }
  };

  const openModal = (post) => {
    setSelectedPost(post);
    setActiveImageIdx(0);
  };

  // Filter and search
  const filteredPosts = posts.filter((post) => {
    let matchesTab = true;
    if (activeTab === "PENDING") matchesTab = post.status === "PENDING";
    else if (activeTab === "ACCEPTED") matchesTab = ["ACCEPTED", "CONTACTED"].includes(post.status);

    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesTab;

    const brandMatch = post.brand?.toLowerCase().includes(q);
    const modelMatch = post.model?.toLowerCase().includes(q);
    const userMatch = post.userId?.name?.toLowerCase().includes(q);
    const phoneMatch = post.userId?.phone?.toLowerCase().includes(q);
    const locationMatch = post.locationAddress?.toLowerCase().includes(q);

    return matchesTab && (brandMatch || modelMatch || userMatch || phoneMatch || locationMatch);
  });

  const tabs = [
    { id: "ALL", label: "All Vehicles", count: posts.length },
    { id: "PENDING", label: "Pending", count: posts.filter((p) => p.status === "PENDING").length },
    { id: "ACCEPTED", label: "Accepted", count: posts.filter((p) => ["ACCEPTED", "CONTACTED"].includes(p.status)).length },
  ];

  return (
    <div className="space-y-6">
      
      {/* Header & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Vehicle Submissions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light mt-0.5">
            Review user vehicle details, inspect damage reports, and contact sellers directly to accept and coordinate pickup.
          </p>
        </div>

        {/* Search Input & Refresh */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search car, seller, or city..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-navy-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent"
            />
          </div>

          <button
            onClick={fetchPosts}
            disabled={loading}
            className="p-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            title="Refresh submissions"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-accent" : ""}`} />
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-accent text-white shadow-md shadow-accent/20"
                  : "bg-navy-900/60 hover:bg-navy-900 text-slate-300 border border-white/5 hover:border-white/10"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-bold ${
                isActive ? "bg-white/20 text-white" : "bg-white/5 text-slate-400"
              }`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Vehicles Table / List */}
      <div className="rounded-2xl glass-card border border-white/10 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-navy-950/90 border-b border-white/10 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5">Vehicle</th>
                <th className="px-5 py-3.5">Seller & Location</th>
                <th className="px-5 py-3.5">Condition</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5">Quick Contact</th>
                <th className="px-5 py-3.5 text-right">Review Details</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/5">
              {loading ? (
                <>
                  {[1, 2, 3].map((i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <Skeleton className="w-14 h-14 rounded-xl flex-shrink-0" />
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-28 rounded" />
                            <Skeleton className="h-3 w-20 rounded" />
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-24 rounded" />
                          <Skeleton className="h-3 w-16 rounded" />
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <Skeleton className="h-6 w-20 rounded-full" />
                      </td>
                      <td className="px-5 py-4">
                        <Skeleton className="h-6 w-24 rounded-full" />
                      </td>
                      <td className="px-5 py-4">
                        <Skeleton className="h-3 w-20 rounded" />
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <Skeleton className="h-8 w-16 rounded-xl" />
                          <Skeleton className="h-8 w-8 rounded-xl" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              ) : filteredPosts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-14 text-center text-slate-400 text-sm">
                    No vehicles found matching the selected filter.
                  </td>
                </tr>
              ) : (
                filteredPosts.map((post) => {
                  const sellerWhatsApp = post.userId?.phone
                    ? `https://wa.me/${post.userId.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                        `Hi ${post.userId?.name || ""}, regarding your ${post.brand} ${post.model} on ScrapCars Dubai. We have reviewed your post and want to discuss accepting it...`
                      )}`
                    : null;

                  return (
                    <tr key={post._id} className="hover:bg-white/[0.02] transition-colors">
                      
                      {/* Vehicle */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 rounded-xl bg-navy-800 border border-white/10 overflow-hidden flex-shrink-0 relative">
                            {post.images?.[0] ? (
                              <img src={post.images[0]} alt={post.brand} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-500">
                                <Car className="w-5 h-5" />
                              </div>
                            )}
                            {post.images?.length > 1 && (
                              <span className="absolute bottom-1 right-1 px-1 rounded bg-black/70 text-[9px] text-white font-bold">
                                +{post.images.length - 1}
                              </span>
                            )}
                          </div>

                          <div>
                            <h4 className="text-sm font-bold text-white leading-tight">
                              {post.brand} {post.model}
                            </h4>
                            <span className="text-xs text-slate-400 mt-0.5 block">
                              Year: <strong className="text-slate-300">{post.year}</strong>
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Seller & Location */}
                      <td className="px-5 py-4">
                        <div>
                          <span className="text-xs font-semibold text-white block">
                            {post.userId?.name || "Anonymous Seller"}
                          </span>
                          <p className="text-[11px] text-slate-400 mt-0.5 font-mono">{post.userId?.phone || "No phone"}</p>
                          <p className="text-[11px] text-slate-400 mt-0.5 truncate max-w-[180px] flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-accent flex-shrink-0" />
                            <span>{post.locationAddress}</span>
                          </p>
                        </div>
                      </td>

                      {/* Condition */}
                      <td className="px-5 py-4">
                        <span className="text-xs text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg inline-block">
                          {t(`conditions.${post.condition}`, post.condition)}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="px-5 py-4">
                        <StatusBadge status={post.status} />
                      </td>

                      {/* Quick Contact Buttons */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          {sellerWhatsApp ? (
                            <a
                              href={sellerWhatsApp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 text-xs font-bold transition-all flex items-center gap-1.5"
                              title="Chat on WhatsApp"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span>WhatsApp</span>
                            </a>
                          ) : (
                            <span className="text-xs text-slate-500 italic">No phone</span>
                          )}

                          {post.userId?.phone && (
                            <a
                              href={`tel:${post.userId.phone}`}
                              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs transition-colors"
                              title="Direct Phone Call"
                            >
                              <Phone className="w-3.5 h-3.5 text-accent" />
                            </a>
                          )}
                        </div>
                      </td>

                      {/* Review Details Action */}
                      <td className="px-5 py-4 text-right">
                        <button
                          onClick={() => openModal(post)}
                          className="px-3.5 py-1.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs font-bold transition-all shadow-md shadow-accent/20 cursor-pointer inline-flex items-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Review</span>
                        </button>
                      </td>

                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed Post Review & Status Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-navy-900 border border-white/15 rounded-3xl w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl"
            >
              
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-navy-900/95 backdrop-blur-md z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {selectedPost.brand} {selectedPost.model} ({selectedPost.year})
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <StatusBadge status={selectedPost.status} />
                      <span className="text-xs text-slate-400">
                        Submitted on {new Date(selectedPost.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                
                {/* Photo Gallery */}
                {selectedPost.images?.length > 0 ? (
                  <div className="space-y-3">
                    <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-navy-950 border border-white/10">
                      <img
                        src={selectedPost.images[activeImageIdx]}
                        alt="Vehicle View"
                        className="w-full h-full object-contain"
                      />
                      <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/75 text-xs text-white font-mono">
                        {activeImageIdx + 1} / {selectedPost.images.length}
                      </span>
                    </div>

                    {selectedPost.images.length > 1 && (
                      <div className="flex items-center gap-2 overflow-x-auto pb-1">
                        {selectedPost.images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveImageIdx(i)}
                            className={`w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                              activeImageIdx === i ? "border-accent scale-95" : "border-white/10 opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img src={img} alt="thumb" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="py-12 rounded-2xl bg-navy-950/60 border border-white/5 text-center text-slate-500 text-xs">
                    No inspection photos uploaded for this car.
                  </div>
                )}

                {/* Seller Direct Contact Box */}
                <div className="p-5 rounded-2xl bg-navy-950/90 border border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 font-light block">Seller Contact Information</span>
                    <span className="text-sm font-bold text-white">{selectedPost.userId?.name || "Anonymous Seller"}</span>
                    <p className="text-xs text-slate-300 font-mono mt-0.5">{selectedPost.userId?.phone || "No phone provided"}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{selectedPost.userId?.email}</p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {selectedPost.userId?.phone ? (
                      <>
                        <a
                          href={`tel:${selectedPost.userId.phone}`}
                          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors border border-white/10"
                        >
                          <Phone className="w-3.5 h-3.5 text-accent" />
                          <span>Call Seller</span>
                        </a>

                        <a
                          href={`https://wa.me/${selectedPost.userId.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                            `Hi ${selectedPost.userId?.name || ""}, this is ScrapCars Dubai Operations. We reviewed your post for the ${selectedPost.brand} ${selectedPost.model} (${selectedPost.year}). We would like to accept and arrange doorstep collection...`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md shadow-[#25D366]/20"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Contact on WhatsApp</span>
                        </a>
                      </>
                    ) : (
                      <span className="text-xs text-slate-500 italic">No phone number available</span>
                    )}
                  </div>
                </div>

                {/* Vehicle Specifications & Damage Details */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-slate-400 font-medium block">Vehicle Condition</span>
                      <span className="text-white font-bold mt-0.5 block">
                        {t(`conditions.${selectedPost.condition}`, selectedPost.condition)}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium block">Pickup Location / City</span>
                      <span className="text-amber-400 font-semibold mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-accent" />
                        <span>{selectedPost.locationAddress}</span>
                      </span>
                    </div>
                  </div>

                  {selectedPost.description && (
                    <div className="pt-2 border-t border-white/5">
                      <span className="text-xs text-slate-400 font-medium block mb-1">User Condition Description</span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light bg-navy-950/60 p-3.5 rounded-xl border border-white/5">
                        {selectedPost.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Status Updater: Admin Post Review & Contact Actions */}
                <div className="p-5 rounded-2xl bg-navy-950 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Update Review / Contact Status
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Mark if you have contacted the seller or completed the vehicle handover.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {[
                      { key: "PENDING", label: "Pending" },
                      { key: "ACCEPTED", label: "Accept" },
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        disabled={statusUpdating}
                        onClick={() => updateStatus(selectedPost._id, item.key)}
                        className={`px-4 py-3 rounded-xl text-sm font-bold border transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 ${
                          (selectedPost.status === item.key || (item.key === "ACCEPTED" && selectedPost.status === "CONTACTED"))
                            ? item.key === "ACCEPTED"
                              ? "bg-emerald-500 text-white border-emerald-400 shadow-lg shadow-emerald-500/25"
                              : "bg-amber-500 text-white border-amber-400 shadow-lg shadow-amber-500/25"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {item.key === "ACCEPTED" && <CheckCircle2 className="w-4 h-4" />}
                        {item.key === "PENDING" && <Clock className="w-4 h-4" />}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    disabled={deleting}
                    onClick={() => deletePost(selectedPost._id)}
                    className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{deleting ? "Deleting..." : "Delete Post"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPost(null)}
                    className="px-5 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
