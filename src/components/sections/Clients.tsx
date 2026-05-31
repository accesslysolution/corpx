"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companiesRow1 = [
  { name: "Larsen & Toubro", domain: "larsentoubro.com" },
  { name: "Tata Motors", domain: "tatamotors.com" },
  { name: "Bosch", domain: "bosch.com" },
  { name: "Siemens", domain: "siemens.com" },
  { name: "Cummins", domain: "cummins.com" },
];

const companiesRow2 = [
  { name: "Mahindra", domain: "mahindra.com" },
  { name: "ABB", domain: "abb.com" },
  { name: "Schneider Electric", domain: "se.com" },
  { name: "Honeywell", domain: "honeywell.com" },
  { name: "JCB", domain: "jcb.com" },
];

function getLogo(domain: string) {
  return `https://logo.clearbit.com/${domain}`;
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: { name: string; domain: string }[];
  reverse?: boolean;
}) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-14 whitespace-nowrap items-center"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src={getLogo(item.domain)}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>

            <span className="text-sm md:text-base font-medium text-gray-800">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="py-24 relative">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold text-center mb-16"
        >
          Trusted by Industry Leaders
        </motion.h2>

        {/* Rows */}
        <div className="space-y-12">
          <MarqueeRow items={companiesRow1} />
          <MarqueeRow items={companiesRow2} reverse />
        </div>

      </div>

      {/* Premium Edge Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>

    </section>
  );
}