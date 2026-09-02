"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, List, Users } from "lucide-react";
import { isAdmin } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const { t } = useLanguage();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (!isAdmin()) {
      router.push("/login");
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) return <div className="min-h-screen pt-24 text-center text-slate-400">{t("common.loading", "Loading...")}</div>;

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 mt-8">
        
        {/* Admin Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-navy-900/60 border border-white/5 rounded-2xl p-4 space-y-2 sticky top-28">
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">
              {t("admin.panelTitle", "Admin Panel")}
            </h2>
            
            <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-sm text-slate-300 hover:text-white">
              <LayoutDashboard className="w-4 h-4 text-accent" />
              {t("admin.overview", "Dashboard Overview")}
            </Link>
            
            <Link href="/admin/posts" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-sm text-slate-300 hover:text-white">
              <List className="w-4 h-4 text-accent" />
              {t("admin.carPostsTitle", "Car Posts")}
            </Link>
            
            <Link href="/admin/users" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-sm text-slate-300 hover:text-white">
              <Users className="w-4 h-4 text-accent" />
              {t("admin.usersTitle", "Users")}
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {children}
        </div>
        
      </div>
    </div>
  );
}
