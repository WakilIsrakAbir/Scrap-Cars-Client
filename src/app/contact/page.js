"use client";

import { Mail, MapPin, Phone, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-navy-950 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-bold uppercase tracking-widest text-accent mb-3 block">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            We're Here To <span className="text-gradient">Help</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Have questions about selling your scrap car? Need an instant valuation? Reach out to our team 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Info & Maps */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl glass-card flex items-start gap-5 hover-lift">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Call Us Directly</h3>
                <a href={`tel:${SITE_INFO.phoneRaw}`} className="text-slate-400 hover:text-white transition-colors text-lg">
                  {SITE_INFO.phone}
                </a>
              </div>
            </div>

            <div className="p-8 rounded-3xl glass-card flex items-start gap-5 hover-lift">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">WhatsApp Us</h3>
                <a 
                  href={`https://wa.me/${SITE_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors text-lg"
                >
                  Click to Chat (Instant Reply)
                </a>
              </div>
            </div>

            <div className="p-8 rounded-3xl glass-card flex items-start gap-5 hover-lift">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Business Hours</h3>
                <p className="text-slate-400 text-lg mb-1">Open 24/7</p>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-500/10 inline-flex px-2 py-1 rounded-md">
                  <CheckCircle2 className="w-3 h-3" /> Towing available anytime
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl glass-card hover-lift">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Our Facility</h3>
                  <p className="text-slate-400 text-base">{SITE_INFO.address}</p>
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="w-full h-48 rounded-xl bg-navy-800 border border-white/5 relative overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="px-4 py-2 rounded-lg bg-navy-950/80 backdrop-blur text-sm font-semibold text-white border border-white/10 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" /> View on Google Maps
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-10 rounded-3xl glass-card h-full">
              <div className="mb-8">
                <h3 className="text-3xl font-black text-white mb-3">Send a Message</h3>
                <p className="text-slate-400 font-light">Fill out the form below and our team will get back to you within 30 minutes.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="Ahmed"
                      className="w-full px-5 py-3.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Al Mansouri"
                      className="w-full px-5 py-3.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-shadow"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="ahmed@example.com"
                      className="w-full px-5 py-3.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="050 123 4567"
                      className="w-full px-5 py-3.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-shadow"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Your Message</label>
                  <textarea
                    rows={5}
                    placeholder="How can we help? Include car details if you want a quote..."
                    className="w-full px-5 py-3.5 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-shadow resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-accent to-amber-500 text-white font-bold text-base shadow-[0_0_30px_rgba(255,107,44,0.3)] hover:shadow-[0_0_40px_rgba(255,107,44,0.5)] transition-all hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
