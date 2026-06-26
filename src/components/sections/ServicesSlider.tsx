"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { id: 1, title: "Deep Cleaning Solutions", img: "/gallery/Deep_Cleaning.avif" },
  { id: 2, title: "Residential Cleaning", img: "/gallery/Residential_Cleaning.avif" },
  { id: 3, title: "Industrial Cleaning", img: "/gallery/Industrial_Cleaning.avif" },
  { id: 4, title: "Corporate Office Cleaning", img: "/gallery/Corporate_Office.avif" },
  { id: 5, title: "Facade & Glass Cleaning", img: "/gallery/Facade.avif" },
  { id: 6, title: "Healthcare Facility Cleaning", img: "/gallery/Healthcare.avif" },
  { id: 7, title: "Before Possession Cleaning", img: "/gallery/Before_Possession.avif" },
  { id: 8, title: "Carpet Cleaning", img: "/gallery/Carpet.avif" },
  { id: 9, title: "Upholstery Cleaning", img: "/gallery/Upholstery.avif" },
  { id: 10, title: "Hotel & Commercial Kitchen Cleaning", img: "/gallery/Hotel.avif" },
  { id: 11, title: "Cafe & Restaurant Cleaning", img: "/gallery/Cafe.avif" },
  { id: 12, title: "Building & Premises Maintenance", img: "/gallery/Building_Premises.avif" },
];

export default function ServicesSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 400; 
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll("right");
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="section"
    >
      <div className="container-custom">
        
        {/* Header - Heavy Bold */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--primary)] mb-4">
            Complete Cleaning Solutions
          </h2>
          <p className="text-lg text-[var(--muted)]">
            Residential, commercial & industrial-grade professional services
          </p>
        </div>

        {/* Video + Text Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="flex gap-4">
            <div className="w-[140px] md:w-[180px] aspect-[9/16] rounded-2xl overflow-hidden shadow-soft">
              <video src="/gallery/video/1.webm" className="w-full h-full object-cover" autoPlay muted loop playsInline />
            </div>
            <div className="w-[140px] md:w-[180px] aspect-[9/16] rounded-2xl overflow-hidden shadow-soft">
              <video src="/gallery/video/2.webm" className="w-full h-full object-cover" autoPlay muted loop playsInline />
            </div>
          </div>
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--primary)] mb-4">See Our Work in Action</h3>
            <p>
              Watch how our professional team transforms spaces with deep cleaning,
              advanced equipment, and industry-grade techniques. From homes to
              commercial properties, we deliver spotless results every time.
            </p>
          </div>
        </div>

        {/* Slider - Using .card and .card-hover utilities */}
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4">
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              whileHover={{ scale: 1.02 }} 
              className="card card-hover min-w-[300px] md:min-w-[380px] h-[240px] relative overflow-hidden snap-center cursor-pointer"
            >
              <Image src={service.img} alt={service.title} fill className="object-cover img-hover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white text-xl font-bold tracking-tight">
                {service.title}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unified Controls - Using .btn-outline utility */}
        <div className="flex justify-center gap-4 mt-10">
          <button 
            onClick={() => scroll("left")} 
            className="btn-outline w-14 h-14 rounded-full flex items-center justify-center p-0"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={() => scroll("right")} 
            className="btn-outline w-14 h-14 rounded-full flex items-center justify-center p-0"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </motion.section>
  );
}