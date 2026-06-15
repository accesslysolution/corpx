"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const services = [
  {
    title: "Deep Cleaning Solutions",
    img: "/gallery/Deep_Cleaning.avif",
    stats: ["5000+ Spaces cleaned", "4.9★ Rated Service", "Same-day available"],
  },
  {
    title: "Residential Cleaning",
    img: "/gallery/Residential_Cleaning.avif",
    stats: ["Apartments & Villas", "Trusted professionals", "Flexible booking"],
  },
  {
    title: "Industrial Cleaning",
    img: "/gallery/Industrial_Cleaning.avif",
    stats: ["Heavy-duty cleaning", "Factory & warehouse", "Safety compliant"],
  },
  {
    title: "Corporate Office Cleaning",
    img: "/gallery/Corporate_Office.avif",
    stats: ["Corporate clients", "Daily/weekly plans", "After-hours service"],
  },
  {
    title: "Facade & Glass Cleaning",
    img: "/gallery/Facade.avif",
    stats: ["High-rise expertise", "Streak-free finish", "Safety equipment"],
  },
  {
    title: "Healthcare Facility Cleaning",
    img: "/gallery/Healthcare.avif",
    stats: ["Hospital-grade hygiene", "Disinfection protocols", "Certified team"],
  },
  {
    title: "Before Possession Cleaning",
    img: "/gallery/Before_Possession.avif",
    stats: ["New home ready", "Dust & debris removal", "Move-in perfect"],
  },
  {
    title: "Carpet Cleaning",
    img: "/gallery/Carpet.avif",
    stats: ["Deep carpet wash", "Stain & odor removal", "Quick drying process"],
  },
  {
    title: "Upholstery Cleaning",
    img: "/gallery/Upholstery.avif",
    stats: ["Sofa & fabric care", "Dust & allergen removal", "Fabric-safe cleaning"],
  },
  {
    title: "Hotel & Kitchen Cleaning",
    img: "/gallery/Hotel.avif",
    stats: ["Grease removal", "Food-safe cleaning", "Hygiene compliance"],
  },
  {
    title: "Cafe & Restaurant Cleaning",
    img: "/gallery/Cafe.avif",
    stats: ["Grease & oil removal", "Food-grade sanitization", "FSSAI hygiene compliance"],
  },
  {
    title: "Building & Premises Maintenance",
    img: "/gallery/Building_Premises.avif",
    stats: ["Common area upkeep", "Daily facility maintenance", "Electrical & plumbing support"],
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function IndustryStyleCleaningSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <Container>

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-[var(--primary)]">
            Transformative Cleaning Solutions
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Professional-grade cleaning services designed for modern homes and businesses.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >

              {/* IMAGE */}
              <div className="relative w-full h-[260px]">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* TITLE */}
              <div className="absolute bottom-4 left-4 z-10 text-white">
                <p className="text-lg font-semibold drop-shadow-md">
                  {service.title}
                </p>
              </div>

              {/* OVERLAY (IMPROVED FOR CONTRAST) */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/75 transition-all duration-500" />

              {/* HOVER CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 px-6 text-center">
                
                {service.stats.map((stat, idx) => (
                  <p key={idx} className="text-sm md:text-base mb-2 text-gray-200">
                    <span className="text-[var(--accent)] font-semibold">✦ </span>
                    {stat}
                  </p>
                ))}

                <button className="mt-4 px-5 py-2 bg-[var(--accent)] text-white text-sm rounded-full hover:brightness-110 transition">
                  Know More →
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}