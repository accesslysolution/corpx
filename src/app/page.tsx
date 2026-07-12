import HeroCarousel from "@/components/sections/HeroCarousel";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import GalleryView from "@/components/sections/GalleryView";
import ServicesSlider from "@/components/sections/ServicesSlider";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      
      {/* 1. INITIAL IMPRESSION: Cinematic & Value Proposition */}
      <section id="hero-flow" className="relative">
        <HeroCarousel />
        <HeroSection />
      </section>

      {/* 2. TRUST & SOCIAL PROOF: Instant Authority Building */}
      <div className="bg-neutral-50/50">
        <StatsSection />
        <GalleryView />
      </div>

      {/* 3. INTERACTIVE ENGAGEMENT: Dynamic Visual Portfolios */}
      <ServicesSlider />
      
      {/* 4. REAL CLIENT VALIDATION: Localized Social Proof */}
      <Clients />

      <WhyChooseUs />

      {/* 5. EXPERIENTIAL DEPTH: Exhaustive Solution Architecture */}
      <div className="bg-neutral-50/30 border-y border-black/[0.02]">
        <Services />
      </div>

      {/* 6. SYSTEMIC METHODOLOGY: Frictionless Operational Roadmap */}
      <Process />

      <Testimonials />

    </div>
  );
}