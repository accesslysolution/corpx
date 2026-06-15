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
    desc: "Complete end-to-end deep cleaning for homes, offices, and commercial spaces using advanced equipment and trained professionals.",
    img: "/gallery/Deep_Cleaning.avif",
  },
  {
    title: "Residential Cleaning",
    desc: "Professional home cleaning for apartments and villas covering bedrooms, kitchens, bathrooms, and living spaces.",
    img: "/gallery/Residential_Cleaning.avif",
  },
  {
    title: "Industrial Cleaning",
    desc: "Heavy-duty cleaning for factories and warehouses ensuring safety, compliance, and efficient operations.",
    img: "/gallery/Industrial_Cleaning.avif",
  },
  {
    title: "Corporate Office Cleaning",
    desc: "Complete office cleaning solutions for workstations, cabins, meeting rooms, and common areas with flexible scheduling.",
    img: "/gallery/Corporate_Office.avif",
  },
  {
    title: "Facade & Glass Cleaning",
    desc: "High-rise facade and glass cleaning with modern tools ensuring a streak-free finish and complete safety.",
    img: "/gallery/Facade.avif",
  },
  {
    title: "Healthcare Facility Cleaning",
    desc: "Hospital-grade sanitization and infection-controlled cleaning for clinics, hospitals, and medical facilities.",
    img: "/gallery/Healthcare.avif",
  },
  {
    title: "Before Possession Cleaning",
    desc: "Deep cleaning of new properties before handover to ensure a spotless and move-in-ready space.",
    img: "/gallery/Before_Possession.avif",
  },
  {
    title: "Carpet Cleaning",
    desc: "Deep carpet cleaning with stain removal, odor control, and quick drying technology.",
    img: "/gallery/Carpet.avif",
  },
  {
    title: "Upholstery Cleaning",
    desc: "Fabric-safe cleaning for sofas and upholstery removing dust, stains, and allergens effectively.",
    img: "/gallery/Upholstery.avif",
  },
  {
    title: "Hotel & Kitchen Cleaning",
    desc: "Deep cleaning of hotel kitchens with grease removal and hygiene compliance for safe food preparation.",
    img: "/gallery/Hotel.avif",
  },
  {
    title: "Cafe & Restaurant Cleaning",
    desc: "Food-grade cleaning services for cafes and restaurants ensuring hygiene and FSSAI compliance.",
    img: "/gallery/Cafe.avif",
  },
  {
    title: "Building & Premises Maintenance",
    desc: "Routine cleaning and maintenance of buildings, societies, parking areas, and common spaces.",
    img: "/gallery/Building_Premises.avif",
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