"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, Car, Clock } from "lucide-react";
import { apiFetch, getUser } from "@/lib/api";
import StatusBadge from "@/components/ui/StatusBadge";
import { useLanguage } from "@/context/LanguageContext";

export default function DashboardPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = getUser();

  useEffect(() => {
    if (!user) { router.push("/login"); return; }
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await apiFetch("/posts/my");
      setPosts(data.posts || []);
    } catch {
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">
              {t("dashboard.title", "My Dashboard")}
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              {t("dashboard.subtitle", "Manage your car listings and track cash offers")}
            </p>
          </div>
          <Link
            href="/dashboard/new-post"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent to-amber-500 text-white text-sm font-semibold flex items-center gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow"
          >
            <Plus className="w-4 h-4" /> {t("dashboard.newPostBtn", "New Post")}
          </Link>
        </div>

        {/* Posts List */}
        {loading ? (
          <div className="text-center py-20 text-slate-400">
            {t("common.loading", "Loading...")}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 rounded-2xl bg-navy-900/50 border border-white/5">
            <Car className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-1">
              {t("dashboard.noPostsTitle", "No car posts yet")}
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              {t("dashboard.noPostsDesc", "Post your first car to get an instant guaranteed cash offer.")}
            </p>
            <Link
              href="/dashboard/new-post"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white text-sm font-semibold"
            >
              <Plus className="w-4 h-4" /> {t("dashboard.postFirstCarBtn", "Post Your Car")}
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/dashboard/posts/${post._id}`}
                className="block p-5 rounded-2xl bg-navy-900/60 border border-white/5 hover:border-accent/20 transition-all hover:translate-x-1"
              >
                <div className="flex items-start gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-xl bg-navy-800 overflow-hidden flex-shrink-0 border border-white/5">
                    {post.images?.[0] ? (
                      <img src={post.images[0]} alt={post.brand} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600">
                        <Car className="w-8 h-8" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {post.brand} {post.model}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {post.year} • {t(`conditions.${post.condition}`, post.condition)}
                        </p>
                      </div>
                      <StatusBadge status={post.status} />
                    </div>

                    {post.offerPrice && (
                      <p className="text-sm font-bold text-accent mt-2">
                        {t("dashboard.offerLabel", "Offer")}: {post.offerPrice.toLocaleString()} {t("common.aed", "AED")}
                      </p>
                    )}

                    <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
