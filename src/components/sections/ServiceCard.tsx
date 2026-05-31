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
    className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-shadow hover:shadow-xl"
  >
    <div className="relative h-40 w-full mb-4 rounded-xl overflow-hidden bg-gray-100">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
    </div>

    <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-full mb-2">
      {badge}
    </span>

    <h3 className="text-lg font-medium text-[var(--primary)]">
      {title}
    </h3>
  </motion.div>
);