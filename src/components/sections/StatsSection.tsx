"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { id: 1, label: "Happy Clients", value: 1200 },
  { id: 2, label: "Projects Completed", value: 3500 },
  { id: 3, label: "5★ Reviews", value: 980 },
  { id: 4, label: "Years Experience", value: 8 },
];

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}+</span>;
}

export default function StatsSection() {
  return (
    <section className="w-full py-10 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 md:mb-14"
        >
          <h2 className="text-2xl md:text-5xl font-semibold text-[var(--primary)]">
            Trusted by Thousands
          </h2>
          <p className="mt-2 md:mt-3 text-gray-500 text-xs md:text-base max-w-xl mx-auto">
            We deliver consistent quality and premium cleaning experiences for homes and businesses.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <h3 className="text-xl md:text-4xl font-bold text-[var(--primary)]">
                <Counter value={stat.value} />
              </h3>

              <p className="mt-1 md:mt-2 text-gray-500 text-[11px] md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}