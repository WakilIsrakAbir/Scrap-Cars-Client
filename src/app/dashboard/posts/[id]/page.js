"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle, MapPin, Calendar, Car } from "lucide-react";
import Link from "next/link";
import { apiFetch, getUser } from "@/lib/api";
import StatusBadge from "@/components/ui/StatusBadge";

export default function PostDetailPage({ params }) {
  const { id } = use(params);
  const router = useRouter();
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

  if (loading) return <div className="min-h-screen pt-24 text-center text-slate-400">Loading...</div>;
  if (!post) return null;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        {/* Post Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">{post.brand} {post.model}</h1>
            <p className="text-sm text-slate-400 mt-1">{post.year} • {post.condition}</p>
          </div>
          <StatusBadge status={post.status} />
        </div>

        {/* Photos */}
        {post.images?.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {post.images.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-video bg-navy-800">
                <img src={img} alt={`Car photo ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        {/* Details */}
        <div className="p-6 rounded-2xl bg-navy-900/60 border border-white/5 space-y-4 mb-6">
          {post.description && (
            <div>
              <h3 className="text-xs font-medium text-slate-400 mb-1">Description</h3>
              <p className="text-sm text-slate-200">{post.description}</p>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-slate-300">
            <MapPin className="w-4 h-4 text-accent" />
            {post.locationAddress}
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Calendar className="w-4 h-4 text-accent" />
            Posted: {new Date(post.createdAt).toLocaleDateString()}
          </div>
        </div>

        {/* Offer Section */}
        {post.offerPrice && post.status === "OFFER_SENT" && (
          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 space-y-4">
            <div>
              <p className="text-sm text-slate-300">Cash Offer from ScrapCars Dubai</p>
              <p className="text-3xl font-bold text-accent mt-1">
                AED {post.offerPrice.toLocaleString()}
              </p>
            </div>
            <button
              onClick={acceptOffer}
              disabled={accepting}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-amber-500 text-white font-semibold text-sm flex items-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              <CheckCircle className="w-4 h-4" />
              {accepting ? "Accepting..." : "Accept Offer"}
            </button>
          </div>
        )}

        {post.status === "ACCEPTED" && (
          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
            <p className="text-sm text-emerald-400 font-semibold">
              ✓ Offer accepted! We will contact you to schedule free pickup.
            </p>
          </div>
        )}

        {post.status === "PICKUP_SCHEDULED" && (
          <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20">
            <p className="text-sm text-purple-400 font-semibold">
              🚚 Pickup has been scheduled. Our team will arrive at your location soon.
            </p>
          </div>
        )}

        {post.status === "COMPLETED" && (
          <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
            <p className="text-sm text-green-400 font-semibold">
              ✓ Completed! Thank you for selling with ScrapCars Dubai.
            </p>
            {post.offerPrice && (
              <p className="text-lg font-bold text-white mt-2">
                Final Payment: AED {post.offerPrice.toLocaleString()}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
