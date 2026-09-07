"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

const FAQS = [
  {
    id: 1,
    qEn: "After I accept a quote to scrap my automobile, what happens?",
    qAr: "بعد قبولي لعرض سعر بيع السيارة سكراب، ما هي الخطوات التالية؟",
    aEn: "Once you accept our cash offer, our dispatch team schedules a convenient pickup time. Our certified recovery driver arrives at your location, inspects the vehicle, assists in completing the official RTA deregistration documents, pays you cash on the spot (or instant bank transfer), and tows the vehicle away for free.",
    aAr: "بمجرد قبول عرض السعر، يقوم فريقنا بتنسيق موعد السحب المناسب لك. يصل سائق السطحة المعتمد إلى موقعك، ويعاين السيارة، ويساعدك في إتمام أوراق إسقاط اللوحات الرسمية من المرور RTA، ثم يسلمك المبلغ نقداً فوراً (أو تحويل بنكي فوري) ويسحب السيارة مجاناً.",
  },
  {
    id: 2,
    qEn: "Do you charge for the collection of junk or scrap cars & vehicles?",
    qAr: "هل توجد أي رسوم على سحب أو نقل سيارات السكراب والتالفة؟",
    aEn: "No, 100% free scrap car pickup from the location used to create your quote is included in every ScrapCars offer across all 7 Emirates. There are zero hidden fees, diagnostic charges, or transportation costs.",
    aAr: "لا، سحب ونقل سيارات السكراب مجاني بنسبة 100% من موقعك في جميع الإمارات السبع ومشمول في كل عرض سعر من ScrapCars. لا توجد أي رسوم خفية أو تكاليف فحص أو نقل نهائياً.",
  },
  {
    id: 3,
    qEn: "How long would it take for my car to be picked up after I accept your quote?",
    qAr: "كم يستغرق الوقت لسحب السيارة بعد موافقتي على عرض السعر؟",
    aEn: "We offer rapid same-day pickup. In most areas across Dubai, Sharjah, and Ajman, our recovery fleet can reach your doorstep within 30 to 60 minutes after you accept our quote.",
    aAr: "نوفر خدمة سحب سريعة في نفس اليوم. في معظم مناطق دبي والشارقة وعجمان، يمكن لسطحاتنا الوصول إلى باب منزلك خلال 30 إلى 60 دقيقة فقط من تأكيد العرض.",
  },
  {
    id: 4,
    qEn: "Which car brands do you scrap?",
    qAr: "ما هي ماركات وموديلات السيارات التي تقومون بشرائها وسكرابها؟",
    aEn: "We buy and dismantle all brands without exception—including Toyota, Nissan, Honda, Mercedes-Benz, BMW, Lexus, Ford, Hyundai, Kia, GMC, and luxury sports cars. We accept running, non-running, accident-damaged, or rusted vehicles.",
    aAr: "نشتري ونسكراب جميع أنواع وموديلات السيارات دون استثناء — بما في ذلك تويوتا، نيسان، هوندا، مرسيدس، بي إم دبليو، لكزس، فورد، هيونداي، والسيارات الفارهة. نقبل السيارات العاطلة، المصدومة، أو الصدئة.",
  },
  {
    id: 5,
    qEn: "When and how will I receive payment for my old car?",
    qAr: "متى وكيف سأستلم المبلغ المالي مقابل سيارتي القديمة؟",
    aEn: "Payment is paid on the spot before the car is loaded onto our tow truck. You can choose instant physical cash in hand or immediate UAE bank transfer.",
    aAr: "يتم تسليم المبلغ فوراً في موقعك قبل رفع السيارة على السطحة. يمكنك اختيار استلام كاش فوري نقداً باليد أو تحويل بنكي فوري لحسابك.",
  },
  {
    id: 6,
    qEn: "Do you have a physical place close to me?",
    qAr: "هل لديكم فرع أو موقع فعلي يمكنني زيارته؟",
    aEn: "Yes, our primary auto salvage and dismantling yard is located in Al Quoz Industrial Area 3, Dubai. However, you never need to visit us—our recovery fleet comes directly to your home, garage, or office anywhere in the UAE.",
    aAr: "نعم، ساحة ومرفق تدوير وسكراب السيارات الرئيسي لدينا يقع في منطقة القوز الصناعية 3، دبي. ومع ذلك، لست بحاجة للقدوم إلينا؛ حيث تأتي سطحاتنا مباشرة إلى موقعك في أي مكان بالإمارات.",
  },
  {
    id: 7,
    qEn: "Is there any inspection required before selling my vehicle?",
    qAr: "هل يشترط فحص المرور أو اجتياز الفحص الفني قبل البيع؟",
    aEn: "No RTA passing inspection or roadworthiness test is required. We purchase vehicles that failed RTA testing, cars with expired registrations, or those that have been sitting idle for years.",
    aAr: "لا يشترط أبداً نجاح السيارة في فحص المرور الدوري. نحن نشتري السيارات الراسبة في فحص RTA، ومنتهية الملكية منذ سنوات، والمتوقفة دون فحص.",
  },
  {
    id: 8,
    qEn: "Can I sell multiple vehicles at the same time?",
    qAr: "هل يمكنني بيع أكثر من سيارة أو أسطول تجاري في نفس الوقت؟",
    aEn: "Yes! We purchase single vehicles as well as company fleets, rental cars, delivery vans, and multiple scrap units with bulk on-site appraisal and instant consolidated payment.",
    aAr: "نعم بكل تأكيد! نشتري السيارات الفردية بالإضافة إلى أساطيل الشركات وسيارات التأجير وباصات التوصيل مع معاينة فورية ودفع موحد فوري.",
  },
];

export default function SellerFAQSection() {
  const { locale, isRTL } = useLanguage();
  const [openId, setOpenId] = useState(null); // All collapsed (+) by default

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="mt-20 pt-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "مركز مساعدة البائعين" : "SELLER KNOWLEDGE BASE"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase">
            {locale === "ar" ? (
              <>
                الأسئلة الأكثر شيوعاً{" "}
                <span className="text-gradient">من بائعي السيارات</span>
              </>
            ) : (
              <>
                MOST COMMON QUESTIONS{" "}
                <span className="text-gradient">ASKED BY SELLERS</span>
              </>
            )}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light mt-2 max-w-2xl">
            {locale === "ar"
              ? "إليك إجابات واضحة ومباشرة على أكثر الأسئلة التي يطرحها عملاؤنا قبل بيع سياراتهم التالفة أو السكراب."
              : "Clear, transparent answers to the questions sellers ask most before scrapping their damaged or unwanted vehicle."}
          </p>
        </motion.div>

        {/* Two Columns: Accordion (Left) & Real Dusty Salvage Vehicle Image (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-3"
          >
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-navy-900 border-accent/40 shadow-lg shadow-accent/5"
                      : "bg-navy-900/50 hover:bg-navy-900/80 border-white/10"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors"
                  >
                    <span className={`text-sm sm:text-base font-bold transition-colors leading-snug ${
                      isOpen ? "text-amber-400" : "text-white hover:text-slate-200"
                    }`}>
                      {locale === "ar" ? faq.qAr : faq.qEn}
                    </span>

                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? "bg-accent text-white"
                        : "bg-white/5 text-slate-400 group-hover:text-white"
                    }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-white/5 mt-1">
                          {locale === "ar" ? (
                            <p>{faq.aAr}</p>
                          ) : (
                            <p>
                              {faq.aEn.includes("ScrapCars") ? (
                                <>
                                  {faq.aEn.split("ScrapCars")[0]}
                                  <span className="font-bold text-accent">ScrapCars</span>
                                  {faq.aEn.split("ScrapCars")[1]}
                                </>
                              ) : (
                                faq.aEn
                              )}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* Right Column: Visual Showcase Matching User Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            
            {/* Real Dusty Salvage Car Image Container */}
            <div className="rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl group min-h-[420px] lg:min-h-[500px]">
              <Image
                src="/Cars/pexels-faizanmeer-38015524.jpg"
                alt="Abandoned and scrap vehicle parked in Dubai compound"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
              
              {/* Bottom Card Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-navy-950/85 backdrop-blur-md border border-white/15 shadow-xl">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{locale === "ar" ? "شراء سيارات السكراب والمهجورة فوراً" : "We Buy Abandoned & Compound Cars"}</span>
                </div>
                <p className="text-xs text-slate-300 font-light">
                  {locale === "ar"
                    ? "سيارات متوقفة في الساحات والمنازل برمال وغبار؟ نشتريها ونسحبها مجاناً."
                    : "Dusty, parked for years, or abandoned in parking bays? We pay top cash and tow away today."}
                </p>
              </div>
            </div>

            {/* Quick Contact Callout */}
            <div className="p-5 rounded-2xl bg-navy-900/70 border border-white/10 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">
                  {locale === "ar" ? "لديك استفسار آخر؟" : "Still have questions?"}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {locale === "ar" ? "تواصل معنا مباشرة عبر الواتساب" : "Chat directly with our appraisers 24/7"}
                </p>
              </div>

              <a
                href={`https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(
                  locale === "ar"
                    ? "مرحباً ScrapCars، لدي سؤال بخصوص بيع سيارتي."
                    : "Hi ScrapCars, I have a question about scrapping my car."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs transition-all flex items-center gap-1.5 shadow-md flex-shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
