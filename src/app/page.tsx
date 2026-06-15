import HeroSection from "@/components/sections/HeroSection";
import Services from "@/components/sections/Services";
import ServicesSlider from "@/components/sections/ServicesSlider";
import Process from "@/components/sections/Process";
import StatsSection from "@/components/sections/StatsSection";
import IndustryStyleCleaningSection from "@/components/sections/IndustryShowcase";
import Clients from "@/components/sections/Clients";
import GalleryView from "@/components/sections/GalleryView";

export default function HomePage() {
  return (
    <>
      {/* HERO — strongest first impression */}
      <HeroSection />

      {/* TRUST + SOCIAL PROOF */}
      <StatsSection />
      <ServicesSlider />
      <Clients />
      <GalleryView />


      {/* SERVICES EXPERIENCE */}
      <Services />

      {/* PROCESS FLOW */}
      <Process />
      <IndustryStyleCleaningSection />
    </>
  );
}