import Image from "next/image";
import { Recycle, CheckCircle2, TrendingUp, Users, Car, Award } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "About Us | ScrapCars Dubai",
  description: "Dubai's most trusted automotive salvage and scrap buyer.",
};

export default function AboutPage() {
  const stats = [
    { label: "Years Experience", value: "10+", icon: TrendingUp },
    { label: "Happy Clients", value: "5,000+", icon: Users },
    { label: "Cars Recycled", value: "8,500+", icon: Car },
    { label: "Awards Won", value: "3", icon: Award },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* About Hero Header */}
      <section className="relative py-32 bg-navy-950 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-accent px-4 py-2 rounded-full glass border-accent/30 inline-block mb-6">
                Our Story
              </span>

              <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-8 leading-[1.1]">
                Redefining the <br/>
                <span className="text-gradient">Auto Salvage</span> Industry in UAE.
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed font-light mb-8">
                Founded with a mission to make selling scrap, accidental, and damaged cars transparent, hassle-free, and profitable for vehicle owners across the United Arab Emirates.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                We believe that even a totaled car has value. By eliminating middlemen and operating our own dismantling facilities, we ensure you get the absolute best price for your vehicle, paid instantly in cash.
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  <div className="rounded-3xl overflow-hidden h-48 relative shadow-2xl">
                    <Image src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80" alt="Scrapyard" fill className="object-cover" />
                  </div>
                  <div className="rounded-3xl overflow-hidden h-64 relative shadow-2xl">
                    <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" alt="Car dismantling" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden h-64 relative shadow-2xl">
                    <Image src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80" alt="Towing car" fill className="object-cover" />
                  </div>
                  <div className="rounded-3xl overflow-hidden h-48 relative shadow-2xl p-6 bg-gradient-to-br from-accent to-amber-600 flex flex-col justify-end">
                    <Recycle className="w-10 h-10 text-white mb-2" />
                    <span className="text-xl font-bold text-white">100% Eco-Friendly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center p-8 rounded-3xl glass-card hover-lift">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-4xl font-black text-white mb-2">{stat.value}</h4>
                  <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Process */}
      <section className="py-32 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-black text-white mb-6">Our Mission & Standards</h2>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              Traditional scrapyards often undercut car owners with aggressive lowballing and surprise towing fees. At Scrap Cars Dubai, we built a modern digital valuation model backed by our own salvage dismantling centers in Al Quoz and Sharjah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl glass border-emerald-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px]" />
              <div className="relative z-10">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Zero Hidden Fees</h3>
                <p className="text-slate-400 font-light leading-relaxed mb-6">
                  What we quote is what you get. We cover all RTA ownership transfer fees, cancellation fees, and towing charges. You receive the full agreed amount in cash.
                </p>
                <ul className="space-y-3">
                  {["Free Valuation", "Free Towing", "RTA Fees Covered"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-10 rounded-3xl glass border-accent/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px]" />
              <div className="relative z-10">
                <Recycle className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Green Recycling</h3>
                <p className="text-slate-400 font-light leading-relaxed mb-6">
                  We are 100% compliant with Dubai Municipality environmental regulations. Fluids are safely drained, usable parts are salvaged, and metal is ethically recycled.
                </p>
                <ul className="space-y-3">
                  {["Safe Fluid Disposal", "Parts Salvaging", "Metal Recycling"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-accent" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
