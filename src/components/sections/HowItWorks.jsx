import { ClipboardList, BadgeDollarSign, FileCheck, Truck } from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/constants";

const icons = [ClipboardList, BadgeDollarSign, FileCheck, Truck];

export default function HowItWorks() {
  return (
    <section className="py-32 relative bg-navy-950 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sm font-bold uppercase tracking-widest text-accent mb-3 block">Simple Process</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto font-light">
            We've streamlined the car selling process. No haggling, no hidden fees, and no waiting. 
            Sell your car and get paid in just 4 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.step}
                className="relative group p-8 rounded-3xl glass-card hover-lift hover-glow"
              >
                {/* Number Watermark */}
                <span className="absolute -top-6 right-4 text-7xl font-black text-white/[0.03] group-hover:text-accent/[0.05] transition-colors pointer-events-none">
                  {item.step}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-navy-800 border border-white/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all shadow-lg shadow-black/50 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
