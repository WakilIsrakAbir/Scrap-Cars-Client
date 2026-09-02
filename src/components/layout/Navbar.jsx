"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Car, LogIn, User } from "lucide-react";
import { NAV_LINKS, SITE_INFO } from "@/lib/constants";
import { getUser, logout } from "@/lib/api";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setUser(getUser());
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-gold flex items-center justify-center">
            <Car className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            Scrap<span className="text-accent">Cars</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-accent"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link
                href={user.role === "ADMIN" ? "/admin" : "/dashboard"}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <User className="w-4 h-4" />
                {user.role === "ADMIN" ? "Admin" : "Dashboard"}
              </Link>
              <button
                onClick={logout}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                href="/dashboard/new-post"
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-accent to-amber-500 text-white text-sm font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-shadow"
              >
                Sell Your Car
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 rounded-lg bg-navy-800 text-slate-300 flex items-center justify-center"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
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
                <Link
                  href={user.role === "ADMIN" ? "/admin" : "/dashboard"}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-navy-800"
                >
                  {user.role === "ADMIN" ? "Admin Panel" : "My Dashboard"}
                </Link>
                <button
                  onClick={() => { logout(); setMobileOpen(false); }}
                  className="block w-full text-left px-4 py-2.5 rounded-lg text-sm text-red-400 hover:bg-navy-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-navy-800"
                >
                  Login
                </Link>
                <Link
                  href="/dashboard/new-post"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-lg bg-accent text-white text-sm font-semibold text-center"
                >
                  Sell Your Car
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
