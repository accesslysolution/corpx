"use client";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const services = [
  { title: "Home Deep Cleaning", tag: "Popular" },
  { title: "Sofa Cleaning", tag: "Essential" },
  { title: "Bathroom Cleaning", tag: "Hygiene" },
  { title: "Kitchen Deep Cleaning", tag: "Premium" },
  { title: "Carpet & Mattress Cleaning", tag: "Advanced" },
  { title: "Office Cleaning", tag: "Commercial" },
  { title: "Full Home Sanitization", tag: "Safe Living" },
  { title: "Move-in / Move-out Cleaning", tag: "Convenience" },
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-[var(--bg)]">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-[var(--primary)]">
            Our Signature Services
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Designed to deliver deep cleanliness, hygiene, and comfort with professional care.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-[var(--accent)]/40 transition-all cursor-pointer"
            >
              
              {/* Icon Placeholder */}
              <div className="w-10 h-10 mb-4 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] font-semibold">
                ✦
              </div>

              {/* Tag */}
              <span className="inline-block mb-2 text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                {service.tag}
              </span>

              {/* Title */}
              <h3 className="text-lg font-medium text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Professional cleaning with advanced tools and eco-friendly solutions tailored to your needs.
              </p>

            </motion.div>
          ))}

        </div>
      </Container>
    </section>
  );
}