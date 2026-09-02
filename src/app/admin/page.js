"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { Car, Users, CheckCircle, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AdminDashboard() {
  const { t } = useLanguage();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await apiFetch("/admin/stats");
      setStats(data);
    } catch {
      setStats({
        totalPosts: 0,
        pendingPosts: 0,
        completedPosts: 0,
        totalUsers: 0
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-slate-400">{t("common.loading", "Loading stats...")}</div>;

  const statCards = [
    { label: t("admin.statTotalPosts", "Total Posts"), value: stats?.totalPosts || 0, icon: Car, color: "text-blue-400", bg: "bg-blue-400/10" },
    { label: t("admin.statPending", "Pending Review"), value: stats?.pendingPosts || 0, icon: Clock, color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { label: t("admin.statCompleted", "Completed Deals"), value: stats?.completedPosts || 0, icon: CheckCircle, color: "text-green-400", bg: "bg-green-400/10" },
    { label: t("admin.statTotalUsers", "Total Users"), value: stats?.totalUsers || 0, icon: Users, color: "text-purple-400", bg: "bg-purple-400/10" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">
        {t("admin.overview", "Dashboard Overview")}
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-navy-900/60 border border-white/5 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.bg} ${s.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-1">{s.label}</p>
              <p className="text-2xl font-bold text-white">{s.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
