"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  badge: string;
  image: string;
}

export const ServiceCard = ({ title, badge, image }: ServiceCardProps) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-white p-3 md:p-4 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-shadow hover:shadow-xl flex flex-col h-full"
  >
    <div className="relative aspect-square w-full mb-3 rounded-xl overflow-hidden bg-gray-100">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
    </div>

    {/* Badge: Starts at 10px on mobile, scales to 12px (text-xs) on desktop */}
    <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-orange-50 text-orange-600 text-[10px] md:text-xs font-semibold rounded-full mb-2 self-start">
      {badge}
    </span>

    {/* Title: Starts at text-xs on small mobile, grows to text-sm on medium, and text-lg on desktop */}
    <h3 className="text-xs sm:text-sm md:text-lg font-medium text-[var(--primary)] truncate">
      {title}
    </h3>
  </motion.div>
);