"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LogIn, Eye, EyeOff } from "lucide-react";
import { apiFetch, setToken, setUser } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";

export default function LoginPage() {
  const router = useRouter();
  const { t, isRTL } = useLanguage();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify(form),
      });
      setToken(data.token);
      setUser(data.user);
      router.push(data.user.role === "ADMIN" ? "/admin/posts" : "/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md p-8 rounded-2xl bg-navy-900/80 border border-white/5 shadow-2xl"
      >
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
            <LogIn className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white">
            {t("auth.loginTitle", "Welcome Back")}
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            {t("auth.loginSubtitle", "Login to manage your car listings & view offers")}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              {t("auth.emailLabel", "Email Address")}
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              {t("auth.passwordLabel", "Password")}
            </label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                className={`w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent ${
                  isRTL ? "pl-10" : "pr-10"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className={`absolute top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 cursor-pointer ${
                  isRTL ? "left-3" : "right-3"
                }`}
              >
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-accent to-amber-500 text-white font-semibold text-sm disabled:opacity-50 cursor-pointer shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow"
          >
            {loading ? t("auth.loggingIn", "Logging in...") : t("auth.loginBtn", "Login")}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-navy-900 px-3 text-slate-400 font-medium tracking-wider">
              {t("auth.orDivider", "Or continue with")}
            </span>
          </div>
        </div>

        {/* Google Sign In */}
        <GoogleAuthButton onAuthError={(msg) => setError(msg)} />

        <p className="text-center text-sm text-slate-400 mt-6">
          {t("auth.noAccount", "Don't have an account?")}{" "}
          <Link href="/register" className="text-accent hover:underline font-medium">
            {t("auth.registerLink", "Register")}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

