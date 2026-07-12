"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ArrowUpRight } from "lucide-react";
import "./ServicesSlider.css";

const services = [
  { id: 0, title: "Home Deep Cleaning", href: "/services/home-deep-cleaning", img: "/gallery/Deep_Cleaning.avif" },
  { id: 1, title: "Kitchen Deep Cleaning", href: "/services/kitchen-deep-cleaning", img: "/gallery/Hotel.avif" },
  { id: 2, title: "Carpet Cleaning", href: "/services/bathroom-cleaning", img: "/gallery/Carpet.avif" },
  { id: 3, title: "Sofa & Upholstery Cleaning", href: "/services/sofa-upholstery-cleaning", img: "/gallery/Upholstery.avif" },
  { id: 4, title: "Office Deep Cleaning", href: "/services/office-cleaning", img: "/gallery/Corporate_Office.avif" },
  { id: 5, title: "Sanitization Services", href: "/services/sanitization", img: "/gallery/Healthcare.avif" },
  { id: 6, title: "Pest Control Services", href: "/services/pest-control", img: "/gallery/Building_Premises.avif" },
  { id: 7, title: "Pre & Post Possession Cleaning", href: "/services/pre-post-possession", img: "/gallery/Before_Possession.avif" },
  { id: 8, title: "Industrial & Commercial Cleaning", href: "/services/industrial-commercial-cleaning", img: "/gallery/Industrial_Cleaning.avif" },
];

export default function ServicesSlider() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const navBtnClass = "w-12 h-12 rounded-full border border-neutral-200 bg-white text-neutral-800 flex items-center justify-center transition-all duration-300 shadow-sm hover:bg-[#006fe3] hover:text-white hover:border-[#006fe3] active:scale-95 cursor-pointer disabled:opacity-30";

  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-neutral-50 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Component Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#006fe3]/5 border border-[#006fe3]/10 text-[#006fe3] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase font-body">
              <Sparkles size={12} className="fill-current" />
              Advanced Architectural Hygiene Showroom
            </div>
            <h2 className="font-heading font-extrabold text-neutral-900 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              Professional Cleaning Services in Pune
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-600 font-medium max-w-xl leading-relaxed">
              Explore our spatial cleaning matrix. Click on any block or use the navigational targets below to bring a solution into 3D focus.
            </p>
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-3">
            <button onClick={handlePrev} className={navBtnClass} aria-label="Previous Service">
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>
            <button onClick={handleNext} className={navBtnClass} aria-label="Next Service">
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* ==========================================================================
           CORE PROGRAMMATIC WIDESCREEN 3D SPATIAL FIELD
           ========================================================================== */}
        <div className="coverflow-3d-viewport w-full min-h-[460px] flex items-center justify-center relative py-12 select-none">
          {/* Expanded track limits on desktop to widen the horizontal interface layout */}
          <div className="coverflow-3d-track w-full max-w-sm md:max-w-xl h-[360px] relative flex items-center justify-center">
            
            {services.map((service, index) => {
              const offset = index - activeIndex;
              const absOffset = Math.abs(offset);
              
              if (absOffset > 2 && absOffset < services.length - 2) return null;

              const isActive = index === activeIndex;
              
              // Responsive spacing parameters to spread elements out across wide monitors
              const horizontalStep = isMobile ? 150 : 310; 
              const stackingStep = isMobile ? 35 : 55;
              
              const rotateY = offset === 0 ? 0 : offset > 0 ? -45 : 45;
              const translateZ = offset === 0 ? 140 : -120 * absOffset;
              const translateX = offset === 0 ? 0 : offset > 0 
                ? horizontalStep + (offset * stackingStep) 
                : -horizontalStep + (offset * stackingStep);
                
              const opacity = offset === 0 ? 1 : absOffset === 1 ? 0.7 : 0.25;
              const zIndex = 10 - absOffset;

              return (
                <motion.div
                  key={service.id}
                  className="spatial-card-container absolute w-full h-full cursor-pointer rounded-2xl bg-white border border-neutral-100 p-2 shadow-md"
                  style={{ originX: 0.5, originY: 0.5 }}
                  animate={{
                    x: translateX,
                    scale: isActive ? 1 : 0.82,
                    rotateY: rotateY,
                    z: translateZ,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 24,
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden group">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      sizes="(max-w-md) 100vw"
                      className="object-cover transition-transform duration-700 select-none"
                      priority={isActive}
                    />

                    <div className={`absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent transition-opacity duration-300 ${isActive ? "opacity-85" : "opacity-60"}`} />

                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end space-y-4 text-white z-10">
                      <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl tracking-tight leading-tight">
                        {service.title}
                      </h3>

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.12 }}
                        >
                          <Link
                            href={service.href}
                            className="inline-flex items-center gap-1.5 text-xs font-bold font-body uppercase tracking-widest text-[#006fe3] bg-white px-5 py-3 rounded-xs w-fit shadow-md transition-all duration-300 hover:bg-[#006fe3] hover:text-white"
                          >
                            Explore Service
                            <ArrowUpRight size={14} />
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Mobile Control Indicators */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button onClick={handlePrev} className={navBtnClass + " w-10 h-10"}>
            <ChevronLeft size={18} />
          </button>
          <button onClick={handleNext} className={navBtnClass + " w-10 h-10"}>
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}