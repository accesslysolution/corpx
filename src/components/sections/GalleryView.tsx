"use client";

import { motion } from "framer-motion";

const services = [
  "Deep Cleaning", "Facade Cleaning", "Corporate Office Cleaning",
  "Corporate Office Cleaning", "Roof Cleaning", "Facade Cleaning",
  "Industrial Cleaning", "Corporate Office Cleaning", "Deep Cleaning",
  "Corporate Office Cleaning", "Industrial Cleaning", "Corporate Office Cleaning",
  "Facade Cleaning", "Rooftop Cleaning", "Facade Cleaning",
  "Washroom Cleaning", "Washroom Cleaning", "Office Cleaning"
];

export default function GalleryView() {
  return (
    <section className="w-full py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Our Work</h2>
          <p className="text-gray-500 mt-3 text-lg">Professional transformations, captured in motion.</p>
        </div>

        {/* Masonry Grid (Pinterest Style) */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {services.map((name, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative break-inside-avoid rounded-3xl overflow-hidden shadow-lg bg-white group cursor-pointer"
            >
              <video
                src={`/${index + 1}.mp4`}
                className="w-full h-auto block"
                autoPlay
                muted
                loop
                playsInline
              />
              
              {/* Modern Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 p-3 rounded-2xl">
                  <h3 className="text-white font-semibold text-sm tracking-wide">
                    {name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}