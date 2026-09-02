"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import StatusBadge from "@/components/ui/StatusBadge";
import { POST_STATUSES } from "@/lib/constants";

export default function AdminPostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [offerPrice, setOfferPrice] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
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
    try {
      await apiFetch(`/admin/posts/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status })
      });
      fetchPosts();
      if (selectedPost?._id === id) setSelectedPost({ ...selectedPost, status });
    } catch (err) {
      alert(err.message);
    }
  };

  const sendOffer = async (e) => {
    e.preventDefault();
    if (!offerPrice) return;
    try {
      await apiFetch(`/admin/posts/${selectedPost._id}/offer`, {
        method: "PATCH",
        body: JSON.stringify({ offerPrice: Number(offerPrice) })
      });
      setOfferPrice("");
      fetchPosts();
      setSelectedPost(null);
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div className="text-slate-400">Loading posts...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Manage Car Posts</h1>

      {/* Detail Modal Overlay */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-navy-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-navy-900 z-10">
              <h2 className="text-xl font-bold text-white">Post Details</h2>
              <button onClick={() => setSelectedPost(null)} className="text-slate-400 hover:text-white">Close</button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white">{selectedPost.brand} {selectedPost.model}</h3>
                  <p className="text-sm text-slate-400">{selectedPost.year} • {selectedPost.condition}</p>
                </div>
                <StatusBadge status={selectedPost.status} />
              </div>

              {selectedPost.images?.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                  {selectedPost.images.map((img, i) => (
                    <img key={i} src={img} alt="car" className="w-full aspect-square object-cover rounded-lg" />
                  ))}
                </div>
              )}

              <div className="text-sm text-slate-300">
                <p><strong>Description:</strong> {selectedPost.description || "N/A"}</p>
                <p className="mt-2"><strong>Location:</strong> {selectedPost.locationAddress}</p>
                <p className="mt-2"><strong>User:</strong> {selectedPost.userId?.name} ({selectedPost.userId?.phone})</p>
              </div>

              {/* Actions */}
              <div className="border-t border-white/10 pt-6 space-y-4">
                <h4 className="text-sm font-semibold text-white">Admin Actions</h4>
                
                <div className="flex gap-2 flex-wrap">
                  {Object.keys(POST_STATUSES).map((status) => (
                    <button
                      key={status}
                      onClick={() => updateStatus(selectedPost._id, status)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${selectedPost.status === status ? 'bg-accent/20 border-accent/50 text-accent' : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'}`}
                    >
                      Set {status}
                    </button>
                  ))}
                </div>

                <form onSubmit={sendOffer} className="flex gap-3 pt-4">
                  <input
                    type="number"
                    placeholder="Offer Amount (AED)"
                    value={offerPrice}
                    onChange={(e) => setOfferPrice(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg bg-navy-950 border border-white/10 text-white text-sm"
                  />
                  <button type="submit" className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold">
                    Send Offer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-navy-900/60 border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-navy-950 border-b border-white/5 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-6 py-4">Car</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Offer Price</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {posts.map((post) => (
              <tr key={post._id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-white">{post.brand} {post.model}</div>
                  <div className="text-xs text-slate-500">{post.year}</div>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={post.status} />
                </td>
                <td className="px-6 py-4">
                  {post.offerPrice ? `AED ${post.offerPrice}` : "-"}
                </td>
                <td className="px-6 py-4 text-xs">
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-accent hover:text-white transition-colors font-medium text-xs bg-accent/10 px-3 py-1.5 rounded-lg"
                  >
                    Manage
                  </button>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                  No posts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
