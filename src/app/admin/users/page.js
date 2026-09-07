"use client";

import { useEffect, useState } from "react";
import { 
  Search, 
  Users, 
  Phone, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  ShieldAlert, 
  UserCheck, 
  UserX,
  Car,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  RefreshCw
} from "lucide-react";
import { apiFetch, getUser } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";

export default function AdminUsersPage() {
  const { t } = useLanguage();
  const currentAdmin = getUser();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [updatingId, setUpdatingId] = useState(null);
  const [actionSuccess, setActionSuccess] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await apiFetch("/admin/users");
      setUsers(data.users || []);
    } catch {
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleRoleToggle = async (targetUser) => {
    const newRole = targetUser.role === "ADMIN" ? "USER" : "ADMIN";
    const confirmPrompt = targetUser.role === "ADMIN" 
      ? `Are you sure you want to demote ${targetUser.name} to regular USER?`
      : `Are you sure you want to promote ${targetUser.name} to ADMIN? They will have full access to the operations center.`;

    if (!confirm(confirmPrompt)) return;

    setUpdatingId(targetUser._id);
    setActionSuccess("");
    try {
      await apiFetch(`/admin/users/${targetUser._id}/role`, {
        method: "PATCH",
        body: JSON.stringify({ role: newRole })
      });
      setActionSuccess(`Role updated: ${targetUser.name} is now an ${newRole}`);
      await fetchUsers();
    } catch (err) {
      alert(err.message || "Failed to update role");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleRestrictionToggle = async (targetUser) => {
    const actionText = targetUser.isRestricted ? "unrestrict" : "restrict";
    const confirmPrompt = targetUser.isRestricted
      ? `Lift restriction for ${targetUser.name}? They will regain access to post cars and log in.`
      : `Are you sure you want to restrict/block ${targetUser.name}? They will be blocked from logging into the system.`;

    if (!confirm(confirmPrompt)) return;

    setUpdatingId(targetUser._id);
    setActionSuccess("");
    try {
      const res = await apiFetch(`/admin/users/${targetUser._id}/restriction`, {
        method: "PATCH"
      });
      setActionSuccess(res.message || `User restriction status updated`);
      await fetchUsers();
    } catch (err) {
      alert(err.message || "Failed to toggle restriction");
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredUsers = users.filter((u) => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return (
      u.name?.toLowerCase().includes(q) ||
      u.email?.toLowerCase().includes(q) ||
      u.phone?.toLowerCase().includes(q) ||
      u.role?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-white tracking-tight">
              User Management
            </h2>
            <span className="px-2.5 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-bold">
              {users.length} Registered
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-light mt-0.5">
            Manage user accounts, assign Administrator privileges, and enforce account restrictions.
          </p>
        </div>

        {/* Search Input & Refresh */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, or phone..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-navy-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent"
            />
          </div>
          
          <button
            onClick={fetchUsers}
            disabled={loading}
            className="p-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            title="Refresh list"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-accent" : ""}`} />
          </button>
        </div>
      </div>

      {/* Success Notification Alert */}
      {actionSuccess && (
        <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-between animate-fadeIn">
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

      {/* Users Table */}
      <div className="rounded-2xl glass-card border border-white/10 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-navy-950/90 border-b border-white/10 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
              <tr>
                <th className="px-5 py-4">User Details</th>
                <th className="px-5 py-4">Contact</th>
                <th className="px-5 py-4">Posts</th>
                <th className="px-5 py-4">Role</th>
                <th className="px-5 py-4">Account Status</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-20 text-center text-slate-400">
                    <div className="w-7 h-7 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                    <span>Loading registered users...</span>
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    No registered users match your search.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((u) => {
                  const isCurrentAdmin = currentAdmin && (currentAdmin._id === u._id || currentAdmin.email === u.email);
                  const isBusy = updatingId === u._id;
                  const waUrl = u.phone 
                    ? `https://wa.me/${u.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hi ${u.name}, this is ScrapCars Operations...`)}`
                    : null;

                  return (
                    <tr 
                      key={u._id} 
                      className={`hover:bg-white/[0.02] transition-colors ${u.isRestricted ? "bg-red-950/10" : ""}`}
                    >
                      {/* User details */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl font-black text-xs flex items-center justify-center border ${
                            u.role === "ADMIN"
                              ? "bg-accent/20 border-accent/40 text-accent"
                              : u.isRestricted
                              ? "bg-red-500/20 border-red-500/40 text-red-400"
                              : "bg-navy-800 border-white/10 text-slate-300"
                          }`}>
                            {u.name?.charAt(0)?.toUpperCase() || "U"}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-white text-sm truncate">{u.name}</span>
                              {isCurrentAdmin && (
                                <span className="px-1.5 py-0.2 rounded bg-accent/20 text-accent text-[10px] font-bold">
                                  You
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-slate-400 flex items-center gap-1 mt-0.5 truncate">
                              <Mail className="w-3 h-3 text-slate-500 flex-shrink-0" />
                              <span className="truncate">{u.email}</span>
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="px-5 py-4">
                        {u.phone ? (
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-200 font-mono">{u.phone}</span>
                            {waUrl && (
                              <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-400 hover:text-emerald-300"
                                title="Chat on WhatsApp"
                              >
                                <MessageCircle className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        ) : (
                          <span className="text-xs text-slate-500 italic">No phone</span>
                        )}
                      </td>

                      {/* Posts submitted */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1.5 text-xs text-slate-300">
                          <Car className="w-3.5 h-3.5 text-accent" />
                          <span className="font-bold text-white">{u.postCount || 0}</span>
                          <span className="text-slate-400">cars</span>
                        </div>
                      </td>

                      {/* Role */}
                      <td className="px-5 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1 ${
                          u.role === "ADMIN" 
                            ? "bg-accent/15 border border-accent/35 text-accent" 
                            : "bg-blue-500/15 border border-blue-500/30 text-blue-300"
                        }`}>
                          {u.role === "ADMIN" ? (
                            <ShieldCheck className="w-3 h-3 text-accent" />
                          ) : (
                            <UserCheck className="w-3 h-3 text-blue-400" />
                          )}
                          <span>{u.role}</span>
                        </span>
                      </td>

                      {/* Account Status (Active / Restricted) */}
                      <td className="px-5 py-4">
                        {u.isRestricted ? (
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1 bg-red-500/15 border border-red-500/30 text-red-400">
                            <ShieldAlert className="w-3 h-3" />
                            <span>Restricted</span>
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Active</span>
                          </span>
                        )}
                      </td>

                      {/* Action Buttons */}
                      <td className="px-5 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          
                          {/* Role Toggle Button (Promote to Admin / Demote) */}
                          <button
                            onClick={() => handleRoleToggle(u)}
                            disabled={isBusy || isCurrentAdmin}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                              u.role === "ADMIN"
                                ? "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
                                : "bg-accent/15 hover:bg-accent text-accent hover:text-white border-accent/30"
                            }`}
                            title={isCurrentAdmin ? "Cannot change your own role" : `Make ${u.role === "ADMIN" ? "USER" : "ADMIN"}`}
                          >
                            {u.role === "ADMIN" ? "Demote to User" : "Promote to Admin"}
                          </button>

                          {/* Restriction Toggle Button (Block / Unblock) */}
                          <button
                            onClick={() => handleRestrictionToggle(u)}
                            disabled={isBusy || isCurrentAdmin}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                              u.isRestricted
                                ? "bg-emerald-500/15 hover:bg-emerald-500 text-emerald-400 hover:text-white border-emerald-500/30"
                                : "bg-red-500/15 hover:bg-red-500 text-red-400 hover:text-white border-red-500/30"
                            }`}
                            title={isCurrentAdmin ? "Cannot restrict yourself" : u.isRestricted ? "Unblock user" : "Block user"}
                          >
                            {u.isRestricted ? "Unrestrict" : "Restrict"}
                          </button>

                        </div>
                      </td>

                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
