import HeroSection from "@/components/sections/HeroSection";
import VehicleTypesSection from "@/components/sections/VehicleTypesSection";
import HowItWorks from "@/components/sections/HowItWorks";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Home | ScrapCars",
  description: "Dubai's #1 scrap car buyer. Sell any condition car for instant cash. Free towing across UAE. RTA paperwork handled.",
};

export default function Home() {
  return (
    <>
      {/* 1. Value proposition & Instant CTA */}
      <HeroSection />

      {/* 2. Supported car conditions: Accidental, Damaged, Dead Engine, Scrap */}
      <VehicleTypesSection />

      {/* 3. 4-step simple selling process */}
      <HowItWorks />

      {/* 4. Detailed services & all 7 Emirates coverage */}
      <ServicesSection />

      {/* 5. Why Choose Us: Free Towing, Instant Cash, RTA Cleared */}
      <WhyChooseUs />

      {/* 6. Social Proof & Verified UAE Customer Reviews */}
      <ReviewsSection />

      {/* 7. Final Call to Action */}
      <CTASection />
    </>
  );
}
