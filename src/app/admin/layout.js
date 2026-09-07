"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Car, 
  Users, 
  ShieldCheck,
  Bell,
  ChevronRight
} from "lucide-react";
import { isAdmin, getUser, logout, apiFetch } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { t, isRTL } = useLanguage();
  const [authorized, setAuthorized] = useState(false);
  const [user, setUser] = useState(null);
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    if (!isAdmin()) {
      router.push("/login");
    } else {
      setAuthorized(true);
      setUser(getUser());
      fetchPendingCount();
    }
  }, [router]);

  const fetchPendingCount = async () => {
    try {
      const data = await apiFetch("/admin/stats");
      if (data && typeof data.pendingPosts === "number") {
        setPendingCount(data.pendingPosts);
      }
    } catch {
      // Non-blocking
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen pt-32 text-center text-slate-400">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <span>{t("common.loading", "Verifying Admin Privileges...")}</span>
      </div>
    );
  }

  const navItems = [
    {
      label: t("admin.carPostsTitle", "Manage Car Posts"),
      href: "/admin/posts",
      icon: Car,
      badge: pendingCount > 0 ? pendingCount : null
    },
    {
      label: t("admin.usersTitle", "User Management"),
      href: "/admin/users",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Header Banner */}
        <div className="mb-6 p-4 sm:p-5 rounded-2xl glass-card border border-white/10 flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-accent to-amber-500 flex items-center justify-center text-white shadow-md shadow-accent/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-white leading-tight">
                  ScrapCars Operations Center
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-[10px] font-bold uppercase tracking-wider">
                  Admin
                </span>
              </div>
              <p className="text-xs text-slate-400 font-light">
                {user?.name || "Administrator"} • {user?.email || "admin@scrapcars.com"}
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid: Sidebar + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Admin Sidebar */}
          <div className="lg:col-span-3">
            <div className="p-3.5 rounded-2xl glass-card border border-white/10 space-y-1.5 sticky top-28 shadow-lg">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-2 pb-1 block">
                Navigation
              </span>

              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.exact 
                  ? pathname === item.href 
                  : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-accent text-white shadow-md shadow-accent/25"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                      <span>{item.label}</span>
                    </div>

                    {item.badge ? (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                        isActive ? "bg-white text-navy-950" : "bg-amber-500 text-white animate-pulse"
                      }`}>
                        {item.badge}
                      </span>
                    ) : (
                      <ChevronRight className={`w-3.5 h-3.5 opacity-50 ${isRTL ? "rotate-180" : ""}`} />
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/10 mt-3 px-3">
                <div className="p-3 rounded-xl bg-navy-900/60 border border-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                    <Bell className="w-3.5 h-3.5" />
                    <span>Instant Alert</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                    Incoming vehicle quotes trigger direct WhatsApp notifications to sellers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9 min-w-0">
            {children}
          </div>

        </div>

      </div>
    </div>
  );
}

