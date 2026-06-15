"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Deep Cleaning Solutions",
    img: "/gallery/Deep_Cleaning.avif",
  },
  {
    id: 2,
    title: "Residential Cleaning",
    img: "/gallery/Residential_Cleaning.avif",
  },
  {
    id: 3,
    title: "Industrial Cleaning",
    img: "/gallery/Industrial_Cleaning.avif",
  },
  {
    id: 4,
    title: "Corporate Office Cleaning",
    img: "/gallery/Corporate_Office.avif",
  },
  {
    id: 5,
    title: "Facade & Glass Cleaning",
    img: "/gallery/Facade.avif",
  },
  {
    id: 6,
    title: "Healthcare Facility Cleaning",
    img: "/gallery/Healthcare.avif",
  },
  {
    id: 7,
    title: "Before Possession Cleaning",
    img: "/gallery/Before_Possession.avif",
  },
  {
    id: 8,
    title: "Carpet Cleaning",
    img: "/gallery/Carpet.avif",
  },
  {
    id: 9,
    title: "Upholstery Cleaning",
    img: "/gallery/Upholstery.avif",
  },
  {
    id: 10,
    title: "Hotel & Commercial Kitchen Cleaning",
    img: "/gallery/Hotel.avif",
  },
  {
    id: 11,
    title: "Cafe & Restaurant Cleaning",
    img: "/gallery/Cafe.avif",
  },
  {
    id: 12,
    title: "Building & Premises Maintenance",
    img: "/gallery/Building_Premises.avif",
  },
];

export default function ServicesSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-14 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
              Complete Cleaning Solutions
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Residential, commercial & industrial-grade professional services
            </p>
          </div>

          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ✅ VIDEO + TEXT SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">

          {/* Videos (Smaller Size) */}
          <div className="flex gap-4">
            <div className="w-[140px] md:w-[180px] aspect-[9/16] rounded-xl overflow-hidden shadow-md">
              <video src="/gallery/Video/1.webm" className="w-full h-full object-cover" autoPlay muted loop playsInline />
            </div>
            <div className="w-[140px] md:w-[180px] aspect-[9/16] rounded-xl overflow-hidden shadow-md">
              <video src="/gallery/Video/2.webm" className="w-full h-full object-cover" autoPlay muted loop playsInline />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-xl">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              See Our Work in Action
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Watch how our professional team transforms spaces with deep cleaning,
              advanced equipment, and industry-grade techniques. From homes to
              commercial properties, we deliver spotless results every time.
            </p>
          </div>

        </div>

        {/* Slider */}
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {services.map((service) => (
            <motion.div key={service.id} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="min-w-[300px] md:min-w-[380px] h-[200px] md:h-[240px] relative rounded-2xl overflow-hidden snap-start cursor-pointer shadow-lg">
              <Image src={service.img} alt={service.title} fill className="object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 text-white text-base md:text-lg font-medium">
                {service.title}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex justify-center gap-4 mt-6">
          <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}