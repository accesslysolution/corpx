"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const services = [
  {
    title: "Home Deep Cleaning",
    img: "/gallery/1.avif",
    stats: ["5000+ Homes cleaned", "4.9★ Customer rating", "Same-day service"],
  },
  {
    title: "Sofa & Upholstery",
    img: "/gallery/2.avif",
    stats: ["Fabric-safe cleaning", "99% stain removal", "Quick dry tech"],
  },
  {
    title: "Bathroom Cleaning",
    img: "/gallery/3.avif",
    stats: ["Germ-free surfaces", "Hard stain removal", "Odor elimination"],
  },
  {
    title: "Kitchen Deep Cleaning",
    img: "/gallery/4.avif",
    stats: ["Grease removal", "Cabinet detailing", "Hygiene certified"],
  },
  {
    title: "Office Cleaning",
    img: "/gallery/5.avif",
    stats: ["Corporate clients", "Flexible timing", "Daily maintenance"],
  },
  {
    title: "Full Home Sanitization",
    img: "/gallery/6.avif",
    stats: ["Virus protection", "Safe chemicals", "Family-safe"],
  },
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
    // Updated bg to light slate for a clean, professional look
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
              // Added border and subtle shadow for better contrast against light bg
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

              {/* NORMAL TEXT */}
              <div className="absolute bottom-4 left-4 z-10 text-white">
                <p className="text-lg font-semibold">{service.title}</p>
              </div>

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition-all duration-500" />

              {/* HOVER CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 px-6 text-center">
                
                {service.stats.map((stat, idx) => (
                  <p key={idx} className="text-sm md:text-base mb-2">
                    <span className="text-[var(--accent)] font-semibold">✦ </span>
                    {stat}
                  </p>
                ))}

                <button className="mt-4 px-5 py-2 bg-[var(--accent)] text-white text-sm rounded-full hover:opacity-90 transition">
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