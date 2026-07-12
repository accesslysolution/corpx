"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Layers, ArrowRight } from "lucide-react";
import "./GalleryView.css";

interface GalleryItem {
  name: string;
  category: "Deep Cleaning" | "Corporate" | "Facade" | "Specialized";
  url: string;
}

const galleryItems: GalleryItem[] = [
  { name: "Luxury Estate Deep Cleaning", category: "Deep Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331723/1_nia5il.mp4" },
  { name: "Structural Glass & Facade Care", category: "Facade", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331718/2_cduqtm.mp4" },
  { name: "Corporate Workspace Maintenance", category: "Corporate", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331702/3_xqd2ct.mp4" },
  { name: "Executive Suite Sanitization", category: "Corporate", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331705/4_ngs3cg.mp4" },
  { name: "Industrial Roof Infrastructure", category: "Specialized", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331708/5_qbi9op.mp4" },
  { name: "Architectural Exterior Wash", category: "Facade", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331710/6_msjifu.mp4" },
  { name: "Heavy Commercial Floor Scrubbing", category: "Specialized", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331716/7_ehuden.mp4" },
  { name: "High-Traffic Office Reset", category: "Corporate", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331715/8_dksxfo.mp4" },
  { name: "Top-Tier Residential Restoration", category: "Deep Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331721/9_bh97t1.mp4" },
  { name: "Corporate Headquarters Cleaning", category: "Corporate", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331719/10_waqnqg.mp4" },
  { name: "Industrial Warehouse Clearance", category: "Specialized", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331726/11_oelhc3.mp4" },
  { name: "Tech Park Commercial Hygiene", category: "Corporate", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331729/12_gt9jhd.mp4" },
  { name: "Widescreen Facade Optimization", category: "Facade", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331726/13_udg2jq.mp4" },
  { name: "Rooftop Concrete Descaling", category: "Specialized", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331731/14_snsw0v.mp4" },
  { name: "High-Rise Window Detailed Clean", category: "Facade", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331730/15_e7dusj.mp4" },
  { name: "Premium Washroom Disinfection", category: "Specialized", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331700/16_my4ut1.mp4" },
  { name: "Commercial Fixture Sanitization", category: "Specialized", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331702/17_ftscat.mp4" },
  { name: "Modern Office Spatial Overhaul", category: "Corporate", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331711/18_d6mm9y.mp4" },
  { name: "Luxury Fabric Sofa Refresh", category: "Deep Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331731/20_cc1ukc.mp4" }
];

const filterCategories = [
  { label: "All Works", value: "All" },
  { label: "Deep Cleaning", value: "Deep Cleaning" },
  { label: "Corporate Workspaces", value: "Corporate" },
  { label: "Structural Facades", value: "Facade" },
  { label: "Specialized Solutions", value: "Specialized" }
];

const VideoCard = ({ item }: { item: GalleryItem }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleHoverStart = () => {
    setIsPlaying(true);
    const playPromise = videoRef.current?.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  };

  const handleHoverEnd = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  return (
    <motion.div
      className="relative mb-6 break-inside-avoid rounded-xl overflow-hidden bg-white border border-black/[0.04] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] portfolio-media-container origin-center select-none cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      whileHover={{ 
        scale: 1.08, 
        zIndex: 30,
        boxShadow: "0 30px 60px -20px rgba(0, 111, 227, 0.18), 0 20px 40px -30px rgba(0, 0, 0, 0.15)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 25 
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <div className="relative w-full h-full overflow-hidden bg-neutral-100">
        <video
          ref={videoRef}
          src={item.url}
          className="w-full h-auto block object-cover scale-[1.005] transition-transform duration-700 group-hover:scale-[1.03]"
          muted
          loop
          playsInline
          preload="none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-neutral-950/10 opacity-70 hover:opacity-20 transition-opacity duration-500" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 z-10 flex flex-col justify-end pointer-events-none">
        <div className="backdrop-blur-xl bg-white/70 border border-white/40 p-3.5 rounded-lg shadow-sm flex items-center justify-between">
          <div className="space-y-0.5 pr-2">
            <span className="text-[9px] font-bold tracking-widest font-body text-[#006fe3] uppercase block">
              {item.category === "Corporate" ? "Corporate Space" : item.category}
            </span>
            <h3 className="text-neutral-900 font-heading font-bold text-xs sm:text-sm tracking-tight leading-tight">
              {item.name}
            </h3>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#006fe3] text-white flex items-center justify-center shrink-0 shadow-sm">
            <Eye size={12} />
          </div>
        </div>
      </div>

      <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-sm flex items-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-white/60"}`} />
        <span className="text-[9px] font-bold text-white uppercase tracking-widest font-body">
          {isPlaying ? "Streaming" : "Loop"}
        </span>
      </div>
    </motion.div>
  );
};

export default function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <section className="w-full py-20 md:py-28 bg-neutral-50/70 relative border-b border-black/[0.02]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Asymmetric Header Structure */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-heading font-extrabold text-neutral-900 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              Real Transformations, <br />
              Captured In Motion
            </h2>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="font-heading font-bold text-5xl md:text-6xl text-neutral-300/70 block leading-none">
              100%
            </span>
            <span className="text-[10px] font-bold tracking-widest text-neutral-500 font-body uppercase mt-1 block">
              Transparent Operations
            </span>
          </div>
        </div>

        {/* High-End Editorial Filter Grid Panel */}
        <div className="flex flex-wrap items-center gap-2 border-b border-black/[0.05] pb-6 mb-12 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold font-body uppercase tracking-wider pr-4 border-r border-black/[0.08] hidden sm:flex">
            <Layers size={14} />
            Filter Matrix
          </div>
          {filterCategories.map((cat) => {
            const isTarget = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`filter-pill-transition px-4 py-2 text-xs font-bold font-body uppercase tracking-wider rounded-sm cursor-pointer whitespace-nowrap ${
                  isTarget
                    ? "bg-[#006fe3] text-white shadow-sm shadow-blue-600/10"
                    : "bg-white text-neutral-600 border border-black/[0.05] hover:bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Motion Masonry Display Grid */}
        <motion.div 
          layout
          className="masonry-luxury-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <VideoCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Funnel Callout Banner */}
        <div className="mt-16 bg-white p-6 sm:p-8 rounded-xl border border-black/[0.04] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-neutral-900 text-lg">
              Ready to experience this elite spatial result on your property?
            </h4>
            <p className="font-body text-xs text-neutral-500 font-medium">
              Our trained and verified professionals deliver thorough, high-end cleaning services across Pune.
            </p>
          </div>
          <a 
            href="/contact"
            className="btn-urgent-orange text-xs tracking-wider uppercase py-3.5 px-6 shrink-0 inline-flex items-center gap-2 group shadow-sm"
          >
            Request Site Survey
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}