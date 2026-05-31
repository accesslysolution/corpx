"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Deep Home Cleaning",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
  {
    id: 2,
    title: "Sofa & Upholstery Cleaning",
    img: "https://images.unsplash.com/photo-1582582494700-0b8b8b7f3b2f",
  },
  {
    id: 3,
    title: "Bathroom Deep Sanitization",
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
  },
  {
    id: 4,
    title: "Modular Kitchen Cleaning",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
  },
  {
    id: 5,
    title: "Carpet Deep Cleaning",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
  },
  {
    id: 6,
    title: "Office & Workspace Cleaning",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c",
  },
  {
    id: 7,
    title: "Full Home Premium Cleaning",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 8,
    title: "Industrial Cleaning Solutions",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
  },
  {
    id: 9,
    title: "Restaurant & Cafe Kitchen Cleaning",
    img: "https://images.unsplash.com/photo-1604908554027-3c3f9c0f4f9c",
  },
  {
    id: 10,
    title: "Glass Façade Cleaning",
    img: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
  },
  {
    id: 11,
    title: "Society / Apartment Cleaning",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  },
  {
    id: 12,
    title: "Post-Construction Cleaning",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    id: 13,
    title: "Mattress Deep Cleaning",
    img: "https://images.unsplash.com/photo-1616627561836-6a1a2f6c0f1a",
  },
  {
    id: 14,
    title: "Marble & Floor Polishing",
    img: "https://images.unsplash.com/photo-1600566752225-3c2b0f0f3c2b",
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

          {/* Desktop Controls */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="min-w-[300px] md:min-w-[380px] h-[200px] md:h-[240px] relative rounded-2xl overflow-hidden snap-start cursor-pointer shadow-lg"
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-4 left-4 text-white text-base md:text-lg font-medium">
                {service.title}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex justify-center gap-4 mt-6">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}