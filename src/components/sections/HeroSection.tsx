"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./HeroSection.css";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Curated premium interior/facility assets mapped directly via high-performance IDs
  const desktopVideo = "77CuKfbUc2k";
  const mobileVideo = "fz1YLkCfIYs";
  const videoId = isMobile ? mobileVideo : desktopVideo;

  return (
    <section className="video-stage-container">
      
      {/* High-Performance Streaming Video Core */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&playsinline=1`}
          className="embedded-stream-canvas"
          allow="autoplay; fullscreen"
          title="Pristine Architectural Asset Stream Loop"
          loading="lazy"
        />
      </div>

      {/* Luxury Tint, Blur, & Gradient Vignette Contrast Interface */}
      <div className="premium-vignette-layer bg-black/20" />

      {/* Typographic Content Layer */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto h-full flex flex-col items-center justify-center space-y-6">
        
        {/* Headline Copy Content — Mapped straight from the verify document matrix */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-bold text-white tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]"
        >
          Deep Cleaning, Not Just Surface Cleaning. <br />
          <span className="text-[#006fe3] font-normal italic font-heading">
            We go where regular cleaning can't.
          </span>
        </motion.h2>
        
        {/* Localized Identity Sub-Signal */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs sm:text-sm tracking-[0.22em] font-body font-bold text-white/80 uppercase flex items-center gap-2"
        >
          <Sparkles size={14} className="text-[#006fe3] shrink-0" />
          Trusted Premium Results Since 2016
        </motion.p>
      </div>

      {/* Clean Bottom Gradient Bridge to Smoothly Re-enter Light Layout Content */}
      <div className="bottom-canvas-bridge" />
    </section>
  );
}