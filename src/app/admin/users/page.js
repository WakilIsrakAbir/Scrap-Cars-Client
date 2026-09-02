"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";

export default function AdminUsersPage() {
  const { t } = useLanguage();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await apiFetch("/admin/users");
      setUsers(data.users || []);
    } catch {
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-slate-400">{t("common.loading", "Loading users...")}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">
        {t("admin.usersTitle", "Registered Users")}
      </h1>

      <div className="bg-navy-900/60 border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-navy-950 border-b border-white/5 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-6 py-4">{t("admin.tableName", "Name")}</th>
              <th className="px-6 py-4">{t("admin.tableEmail", "Email")}</th>
              <th className="px-6 py-4">{t("admin.tablePhone", "Phone")}</th>
              <th className="px-6 py-4">{t("admin.tableRole", "Role")}</th>
              <th className="px-6 py-4">{t("admin.tableJoined", "Joined")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {users.map((u) => (
              <tr key={u._id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 font-medium text-white">{u.name}</td>
                <td className="px-6 py-4">{u.email}</td>
                <td className="px-6 py-4">{u.phone || "-"}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-md text-xs font-semibold ${u.role === 'ADMIN' ? 'bg-purple-500/10 text-purple-400' : 'bg-slate-500/10 text-slate-400'}`}>
                    {u.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs">
                  {new Date(u.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                  {t("common.noData", "No users found.")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
