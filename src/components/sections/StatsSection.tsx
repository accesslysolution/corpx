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
    <section className="w-full py-16 md:py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-[var(--primary)]">
            Trusted by Thousands
          </h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            We deliver consistent quality and premium cleaning experiences
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
                <Counter value={stat.value} />
              </h3>

              <p className="mt-2 text-gray-500 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}