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

// Using logo.dev as a reliable demo endpoint
function getLogo(domain: string) {
  return `https://img.logo.dev/${domain}?token=pub_demo`;
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
          duration: 35, // Slightly slower for better readability
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
              <Image
                src={getLogo(item.domain)}
                alt={item.name}
                fill
                sizes="48px"
                className="object-contain"
                // Added onError to handle broken links gracefully in a demo
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${item.name[0]}&background=random`;
                }}
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
    <section className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold text-center mb-16"
        >
          Trusted by Industry Leaders
        </motion.h2>

        <div className="space-y-12">
          <MarqueeRow items={companiesRow1} />
          <MarqueeRow items={companiesRow2} reverse />
        </div>
      </div>

      {/* Edge Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
    </section>
  );
}