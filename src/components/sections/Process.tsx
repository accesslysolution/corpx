"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    step: "01",
    title: "Book Instantly",
    desc: "Schedule your cleaning in seconds with our seamless booking experience.",
  },
  {
    step: "02",
    title: "We Arrive Ready",
    desc: "Our trained professionals show up on time, fully equipped.",
  },
  {
    step: "03",
    title: "Enjoy the Shine",
    desc: "Relax while we transform your space into spotless perfection.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Process() {
  return (
    <section className="py-28 bg-[#F9FAFB] text-[var(--primary)] relative overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            How It <span className="text-[var(--accent)]">Works</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            A simple, smooth and professional process designed for your comfort.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group relative p-8 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[var(--accent)]"
            >
              {/* Accent Glow (subtle) */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-b from-[var(--accent)]/5 to-transparent"></div>

              {/* Step */}
              <div className="relative text-5xl font-serif text-[var(--accent)] mb-6">
                {s.step}
              </div>

              {/* Title */}
              <h3 className="relative text-2xl font-medium mb-3">
                {s.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-600 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}