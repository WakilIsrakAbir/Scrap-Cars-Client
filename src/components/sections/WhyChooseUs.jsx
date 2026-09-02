import { Banknote, FileCheck2, Truck } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-navy-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-3 block">Why Choose Us</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.15] mb-6">
              We Value Your Car, <br/>
              <span className="text-gradient-silver">And Your Time.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light mb-8">
              Selling a junk or damaged car shouldn't be stressful. We cut out the middlemen to guarantee you the highest possible price, all while handling the legal paperwork entirely for free.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Banknote className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Best Price Guarantee</h4>
                  <p className="text-sm text-slate-400 font-light">We pay cash on the spot, offering the most competitive salvage rates in Dubai.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <FileCheck2 className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">RTA Paperwork Handled</h4>
                  <p className="text-sm text-slate-400 font-light">Don't worry about fines or ownership transfer. Our experts handle RTA documentation legally.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Free Doorstep Towing</h4>
                  <p className="text-sm text-slate-400 font-light">We will pick up your vehicle from any Emirate at absolutely zero cost to you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Bento Box */}
          <div className="grid grid-cols-2 gap-4 h-[600px]">
            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80" alt="Towing Service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white">Any Emirate, Anytime</h3>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden relative group bg-navy-800 p-6 flex flex-col justify-between border border-white/5">
              <span className="text-4xl font-black text-accent">24/7</span>
              <p className="text-sm text-slate-300 font-medium">Customer Support & Towing Availability</p>
            </div>

            <div className="rounded-3xl overflow-hidden relative group bg-gradient-to-br from-emerald-600 to-emerald-900 p-6 flex flex-col justify-between border border-emerald-400/20">
              <span className="text-4xl font-black text-white">100%</span>
              <p className="text-sm text-emerald-100 font-medium">Secure & Legal Ownership Transfer</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
