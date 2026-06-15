"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Deep Cleaning Solutions",
    badge: "4.9★ Rated",
    image: "/gallery/Deep_Cleaning.avif",
  },
  {
    title: "Residential Cleaning",
    badge: "Home Care",
    image: "/gallery/Residential_Cleaning.avif",
  },
  {
    title: "Corporate Office Cleaning",
    badge: "Commercial",
    image: "/gallery/Corporate_Office.avif",
  },
  {
    title: "Sofa & Upholstery Cleaning",
    badge: "Quick Dry",
    image: "/gallery/Upholstery.avif",
  },
];

const containerVariant: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const textVariant: Variants = {
  hidden: { opacity: 0, y: 80, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariant: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -80 : 80,
    y: 60,
    rotate: i % 2 === 0 ? -8 : 8,
    scale: 0.85,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 14 },
  },
};

const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10, y: 100 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [120, -80]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const yCards = useTransform(scrollYProgress, [0, 1], [80, -30]);
  const yImg1 = useTransform(scrollYProgress, [0, 1], [200, -150]);
  const yImg2 = useTransform(scrollYProgress, [0, 1], [220, -120]);
  const yImg3 = useTransform(scrollYProgress, [0, 1], [180, -180]);
  const yImg4 = useTransform(scrollYProgress, [0, 1], [240, -100]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [0.9, 1.08]);

  // If not mounted, return a minimal static version to avoid hydration mismatch
  if (!isMounted) return <section ref={ref} className="min-h-screen bg-[#F9FAFB]" />;

  return (
    <section ref={ref} className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 bg-[#F9FAFB] overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="flex-1 w-full"
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="max-w-2xl mb-10 text-center md:text-left">
              <motion.h1
                variants={textVariant}
                style={{ y: yText, opacity: opacityText }}
                className="text-4xl md:text-6xl font-bold text-[var(--primary)] tracking-tight mb-6"
              >
                Home services at your doorstep
              </motion.h1>
              <motion.p
                variants={textVariant}
                style={{ y: yText, opacity: opacityText }}
                className="text-lg md:text-xl text-gray-600"
              >
                Professional deep cleaning services at your convenience.
              </motion.p>
            </div>

            <motion.div
              style={{ y: yCards }}
              className="grid grid-cols-2 gap-2 md:gap-4 md:border-l md:border-gray-200/80 md:pl-6 scale-95 md:scale-100 origin-center md:origin-left"
            >
              {services.map((service, idx) => (
                <motion.div key={idx} custom={idx} variants={cardVariant}>
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="hidden md:block flex-1 relative w-full h-[520px]">
            {[
              { y: yImg1, cls: "top-0 left-0 w-56 h-56 -rotate-2" },
              { y: yImg2, cls: "top-10 right-0 w-60 h-60 rotate-3" },
              { y: yImg3, cls: "bottom-0 left-10 w-64 h-64 rotate-2" },
              { y: yImg4, cls: "bottom-10 right-10 w-48 h-48 -rotate-3" },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={imageVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ y: img.y, scale: scaleImg }}
                className={`absolute ${img.cls}`}
                whileHover={{ scale: 1.12, rotate: 0, zIndex: 20 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <Image
                  src={`/gallery/${i + 1}.avif`}
                  alt="Cleaning"
                  fill
                  className="object-cover rounded-2xl shadow-xl shadow-black/10"
                />
              </motion.div>
            ))}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -z-10 flex items-center justify-center"
            >
              <div className="w-[320px] h-[320px] bg-blue-200 rounded-full blur-3xl opacity-30" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}