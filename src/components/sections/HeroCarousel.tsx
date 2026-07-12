"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, MapPin } from "lucide-react";
import "./HeroCarousel.css";

export default function HeroCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yImg1 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yImg2 = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const yImg3 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yImg4 = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const textFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 30]);

  const desktopVideo = "77CuKfbUc2k";
  const mobileVideo = "fz1YLkCfIYs";
  const videoId = isMobile ? mobileVideo : desktopVideo;

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-tr from-neutral-50 via-[#006fe3]/[0.01] to-white flex items-center pt-16"
    >
      {/* Background Ambient Video Layer */}
      <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none video-mask-canvas">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&playsinline=1`}
          className="w-full h-full object-cover scale-[1.2]"
          allow="autoplay; fullscreen"
          title="Ambient Interior Video Overlay"
        />
      </div>

      {/* Main Content Hub */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* Left Column: Premium SEO Copy Block */}
          <motion.div
            style={{ opacity: textFade, y: textY }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 lg:max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 frosted-pill-badge rounded-full px-4 py-1.5 shadow-sm bg-white/80 border border-neutral-200/50">
              <MapPin size={13} className="text-[#006fe3]" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-neutral-800 font-body">
                Premium Standards &bull; Pune Region
              </span>
            </div>

            {/* Target SEO Optimized Widescreen Heading */}
            <h1 className="font-heading font-extrabold text-neutral-900 text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.1] tracking-tight">
              Pune's Most Trusted <br />
              <span className="text-[#006fe3] bg-gradient-to-r from-[#006fe3] to-[#005bc4] bg-clip-text text-transparent">
                Deep Cleaning
              </span> Service <br />
              <span className="text-xl sm:text-2xl md:text-3xl font-bold block text-neutral-500 tracking-normal font-heading pt-2">
                — For Homes, Offices & Commercial Spaces
              </span>
            </h1>

            {/* Subheadline Structural Description */}
            <p className="font-body text-neutral-600 text-base sm:text-lg md:text-xl font-medium max-w-xl leading-relaxed">
              Expert cleaning professionals. Safe, proven products. Results you can see — and feel. Serving Pune since 2016.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-xs font-bold font-body text-neutral-500 uppercase tracking-wide">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-[#006fe3]" />
                <span>ISO 9001:2015 Certified Operations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles size={16} className="text-[#006fe3]" />
                <span>Premium Quality Formulations</span>
              </div>
            </div>

            {/* Action Call Pipeline Links */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="btn-urgent-orange text-center group font-bold tracking-wider text-xs uppercase px-8 py-4 flex items-center justify-center gap-2 shadow-sm"
              >
                Get a Free Quote Today
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <Link 
                href="/services" 
                className="btn-secondary-clean text-center font-bold tracking-wider text-xs uppercase py-4 px-8 border border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50 rounded-sm"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 3D Spatial Parallax Frame Grid */}
          <div className="lg:col-span-5 hidden lg:block hero-perspective-canvas h-[540px] relative w-full">
            {[
              { y: yImg1, rotate: "-rotate-3", depth: "depth-tier-high", coords: "top-4 left-4 w-52 h-52" },
              { y: yImg2, rotate: "rotate-6", depth: "depth-tier-mid", coords: "top-12 right-4 w-56 h-56" },
              { y: yImg3, rotate: "rotate-2", depth: "depth-tier-high", coords: "bottom-4 left-10 w-60 h-60" },
              { y: yImg4, rotate: "-rotate-4", depth: "depth-tier-mid", coords: "bottom-12 right-8 w-48 h-48" },
            ].map((img, i) => (
              <motion.div
                key={i}
                style={{ y: img.y }}
                className={`absolute ${img.coords} ${img.rotate} ${img.depth} parallax-glass-card bg-white p-2 rounded-2xl shadow-[0_15px_35px_-15px_rgba(0,111,227,0.1)] border border-neutral-100 hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:z-30 cursor-pointer`}
              >
                <div className="relative w-full h-full overflow-hidden rounded-xl bg-neutral-100">
                  <Image
                    src={`/gallery/${i + 1}.avif`}
                    alt="Premium Clean Spatial Transformation Portfolio Asset"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    sizes="(max-w-7xl) 33vw"
                    priority
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}