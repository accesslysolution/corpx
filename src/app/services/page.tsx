"use client";

import { motion, Variants } from "framer-motion";

/* ✅ VARIANTS */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Deep Cleaning Solutions",
      desc: "Comprehensive end-to-end cleaning for residential and commercial spaces with advanced equipment and trained professionals.",
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    },
    {
      title: "Residential Cleaning Solutions",
      desc: "Complete home cleaning including bedrooms, kitchens, bathrooms, and living spaces for a hygienic lifestyle.",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    },
    {
      title: "Industrial Cleaning Solutions",
      desc: "Heavy-duty cleaning for factories, warehouses, and industrial setups ensuring safety and compliance.",
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    },
    {
      title: "Corporate Office Cleaning",
      desc: "Professional office cleaning for workstations, meeting rooms, cabins, and common areas.",
      img: "https://images.unsplash.com/photo-1581091215367-59ab6b9a1f1f",
    },
    {
      title: "Facade & Glass Cleaning",
      desc: "High-rise glass and facade cleaning using safety equipment and modern techniques.",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    },
    {
      title: "Healthcare Facility Cleaning",
      desc: "Sanitization and infection-controlled cleaning for hospitals, clinics, and medical facilities.",
      img: "https://images.unsplash.com/photo-1588776814546-ec7e7c2aaf9b",
    },
    {
      title: "Building & Premises Maintenance",
      desc: "Routine cleaning and upkeep of societies, buildings, staircases, lifts, and parking areas.",
      img: "https://images.unsplash.com/photo-1590725140246-20acdee442be",
    },
    {
      title: "Hotel & Commercial Kitchen Cleaning",
      desc: "Deep cleaning of hotel kitchens, exhaust systems, grease removal, and hygiene compliance.",
      img: "https://images.unsplash.com/photo-1556911220-bda9f7f7597e",
    },
    {
      title: "Cafe & Restaurant Cleaning",
      desc: "Food-grade cleaning services ensuring hygiene standards for cafes, restaurants, and dining spaces.",
      img: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    },
    {
      title: "Before Possession Cleaning",
      desc: "Deep cleaning of new properties before handover to ensure a spotless move-in experience.",
      img: "https://images.unsplash.com/photo-1560184897-ae75f418493e",
    },
    {
      title: "Carpet & Upholstery Cleaning",
      desc: "Advanced fabric-safe cleaning for carpets, sofas, and upholstery with stain and odor removal.",
      img: "https://images.unsplash.com/photo-1582582494700-0b8b8b7f3b2f",
    },
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="bg-gray-50 min-h-screen py-20"
    >
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Professional Cleaning Services
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From homes to industrial spaces — we deliver deep cleaning solutions
            with trained professionals and modern equipment.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* IMAGE */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                <button className="mt-4 text-sm font-medium text-[var(--primary)] hover:text-black transition">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </motion.section>
  );
}