"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Car, 
  User, 
  Globe, 
  LogOut, 
  ChevronDown, 
  LayoutDashboard, 
  PlusCircle
} from "lucide-react";
import { getUser, logout } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();
  const { locale, toggleLanguage, t, isRTL } = useLanguage();
  const dropdownRef = useRef(null);

  // Sync user state on mount, route change, or custom auth event
  useEffect(() => {
    const syncUser = () => {
      setUser(getUser());
    };

    syncUser();

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("auth-change", syncUser);
    window.addEventListener("storage", syncUser);

    // Close dropdown on outside click
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("auth-change", syncUser);
      window.removeEventListener("storage", syncUser);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pathname]);

  // Navigation Links: Home -> Sell Your Car -> About -> Services -> Contact
  const navLinks = [
    { label: t("nav.home", "Home"), href: "/" },
    { label: t("nav.sellCar", "Sell Your Car"), href: "/dashboard/new-post" },
    { label: t("nav.about", "About Us"), href: "/about" },
    { label: t("nav.services", "Services"), href: "/services" },
    { label: t("nav.contact", "Contact Us"), href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 ${
        scrolled ? "py-3 bg-navy-950/95 shadow-xl" : "py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-gold flex items-center justify-center shadow-md shadow-accent/20 group-hover:scale-105 transition-transform">
            <Car className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            Scrap<span className="text-accent">Cars</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-accent bg-white/5"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher Toggle */}
          <button
            onClick={toggleLanguage}
            title={locale === "en" ? "تبديل إلى العربية" : "Switch to English"}
            className="px-3 py-1.5 rounded-lg border border-white/10 bg-navy-900/80 hover:bg-navy-800 text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-accent" />
            <span>{locale === "en" ? "العربية" : "English"}</span>
          </button>

          {user ? (
            /* Logged in: Dashboard Dropdown */
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 border cursor-pointer ${
                  pathname.startsWith("/dashboard") || pathname.startsWith("/admin") || userDropdownOpen
                    ? "bg-accent/15 border-accent/40 text-accent shadow-sm shadow-accent/20"
                    : "bg-navy-900/80 border-white/10 text-slate-200 hover:text-white hover:bg-navy-800"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  {user.name ? user.name.charAt(0).toUpperCase() : <User className="w-3.5 h-3.5" />}
                </div>
                <span>{user.role === "ADMIN" ? t("nav.admin", "Admin") : t("nav.dashboard", "Dashboard")}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${userDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {userDropdownOpen && (
                <div
                  className={`absolute top-full mt-2 w-56 rounded-2xl bg-navy-900/98 border border-white/10 backdrop-blur-xl shadow-2xl p-2 space-y-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150 ${
                    isRTL ? "left-0" : "right-0"
                  }`}
                >
                  {/* User Profile Header */}
                  <div className="px-3 py-2.5 border-b border-white/5 mb-1">
                    <p className="text-xs font-bold text-white truncate">{user.name || "User"}</p>
                    <p className="text-[11px] text-slate-400 truncate">{user.email || ""}</p>
                    <span className="inline-block mt-1 text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-accent/20 text-accent">
                      {user.role || "USER"}
                    </span>
                  </div>

                  {/* Dashboard link */}
                  <Link
                    href={user.role === "ADMIN" ? "/admin" : "/dashboard"}
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <LayoutDashboard className="w-4 h-4 text-accent" />
                    <span>{user.role === "ADMIN" ? t("nav.admin", "Admin Panel") : t("nav.dashboard", "Dashboard")}</span>
                  </Link>

                  {/* Sell Car Quick Action */}
                  <Link
                    href="/dashboard/new-post"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <PlusCircle className="w-4 h-4 text-emerald-400" />
                    <span>{t("nav.sellCar", "Sell Your Car")}</span>
                  </Link>

                  <div className="border-t border-white/5 my-1" />

                  {/* Logout Action */}
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      logout();
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors cursor-pointer text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>{t("nav.logout", "Logout")}</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Not logged in: Login Button */
            <Link
              href="/login"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-accent to-amber-500 text-white text-sm font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all hover:scale-105"
            >
              {t("nav.login", "Login")}
            </Link>
          )}
        </div>

        {/* Mobile items & hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 rounded-lg border border-white/10 bg-navy-900 text-xs font-semibold text-slate-200 flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5 text-accent" />
            <span>{locale === "en" ? "عربي" : "EN"}</span>
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 rounded-lg bg-navy-800 text-slate-300 flex items-center justify-center cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-navy-800"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/5 space-y-2">
            {user ? (
              <>
                <div className="px-4 py-2 bg-navy-900 rounded-xl mb-2">
                  <p className="text-xs font-bold text-white">{user.name}</p>
                  <p className="text-[10px] text-slate-400">{user.email}</p>
                </div>
                <Link
                  href={user.role === "ADMIN" ? "/admin" : "/dashboard"}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm text-accent font-semibold hover:bg-navy-800"
                >
                  {user.role === "ADMIN" ? t("nav.admin", "Admin Panel") : t("nav.dashboard", "Dashboard")}
                </Link>
                <button
                  onClick={() => { logout(); setMobileOpen(false); }}
                  className="block w-full text-left px-4 py-2.5 rounded-lg text-sm text-red-400 hover:bg-navy-800 cursor-pointer"
                >
                  {t("nav.logout", "Logout")}
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 rounded-lg bg-accent text-white text-sm font-semibold text-center"
              >
                {t("nav.login", "Login")}
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
