"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { UserPlus, Eye, EyeOff, CheckCircle2, AlertCircle } from "lucide-react";
import { apiFetch, setToken, setUser } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";

export default function RegisterPage() {
  const router = useRouter();
  const { t, isRTL } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password.length < 6) {
      setError(t("auth.passwordMinLength", "Password must be at least 6 characters"));
      return;
    }

    if (form.password !== confirmPassword) {
      setError(t("auth.passwordMismatch", "Passwords do not match. Please check again."));
      return;
    }

    setLoading(true);
    try {
      const data = await apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify(form),
      });
      setToken(data.token);
      setUser(data.user);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const passwordsMatch = form.password && confirmPassword && form.password === confirmPassword;
  const passwordsMismatch = confirmPassword && form.password !== confirmPassword;

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
            <UserPlus className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white">
            {t("auth.registerTitle", "Create Account")}
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            {t("auth.registerSubtitle", "Register to sell your car and track cash offers")}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              {t("auth.fullNameLabel", "Full Name")}
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Ahmed Al Mansouri"
              className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent"
            />
          </div>

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
              {t("auth.phoneLabel", "Phone / WhatsApp")}
            </label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="050 123 4567"
              className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent"
            />
          </div>

          {/* Password Field 1 */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              {t("auth.passwordLabel", "Password")}
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                minLength={6}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                className={`w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent ${
                  isRTL ? "pl-10" : "pr-10"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 cursor-pointer ${
                  isRTL ? "left-3" : "right-3"
                }`}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Password Field 2 - Confirm Password */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-medium text-slate-300">
                {t("auth.confirmPasswordLabel", "Confirm Password")}
              </label>
              {passwordsMatch && (
                <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Match
                </span>
              )}
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                minLength={6}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full px-4 py-2.5 rounded-xl bg-navy-950 border text-white text-sm focus:outline-none ${
                  passwordsMismatch
                    ? "border-red-500/50 focus:border-red-500"
                    : passwordsMatch
                    ? "border-emerald-500/50 focus:border-emerald-500"
                    : "border-white/10 focus:border-accent"
                } ${isRTL ? "pl-10" : "pr-10"}`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={`absolute top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 cursor-pointer ${
                  isRTL ? "left-3" : "right-3"
                }`}
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {passwordsMismatch && (
              <p className="text-[11px] text-red-400 mt-1">
                {t("auth.passwordMismatch", "Passwords do not match")}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || (confirmPassword.length > 0 && form.password !== confirmPassword)}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-accent to-amber-500 text-white font-semibold text-sm disabled:opacity-50 cursor-pointer shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow mt-2"
          >
            {loading ? t("auth.creatingAccount", "Creating account...") : t("auth.registerLink", "Register")}
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
          {t("auth.hasAccount", "Already have an account?")}{" "}
          <Link href="/login" className="text-accent hover:underline font-medium">
            {t("auth.loginLink", "Login")}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

