"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yImg2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yImg3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yImg4 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const desktopVideo = "77CuKfbUc2k";
  const mobileVideo = "fz1YLkCfIYs";
  const videoId = isMobile ? mobileVideo : desktopVideo;

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <motion.div className="absolute inset-0 w-full h-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&playsinline=1`}
          className="w-full h-full object-cover scale-[1.1]"
          allow="autoplay; fullscreen"
          title="Hero Video"
        />
        <div className="absolute inset-0 w-full h-full bg-black/60" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[var(--background)] via-black/40 to-transparent" />
      </motion.div>

      {/* Main Content Area */}
      <div className="absolute inset-0 z-10 flex items-center max-w-7xl mx-auto px-8 md:px-20">
        <div className="flex w-full items-center justify-between">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Logo now placed inside the text flow */}
            <div className="mb-6">
               <Image 
                src="/logowhite.avif" 
                alt="Logo" 
                width={150} 
                height={50} 
                className="object-contain" 
              />
            </div>

            <h1 className="text-white text-5xl md:text-8xl font-semibold leading-[0.9] tracking-tighter mb-8">
              Professional <br />
              <span className="text-[var(--accent)]">Home Care</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-normal max-w-lg mb-10 leading-relaxed">
              Experience reliable, deep cleaning services delivered right to your doorstep. 
              Excellence in every corner.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact"><button className="btn-accent px-8 py-4">Book Now</button></Link>
              <Link href="/services" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full">
                View Services
              </Link>
            </div>
          </motion.div>

          {/* Right Side Image Overlay */}
          <div className="hidden lg:block relative w-[500px] h-[520px]">
            {[
              { y: yImg1, cls: "top-0 left-0 w-56 h-56 -rotate-2" },
              { y: yImg2, cls: "top-10 right-0 w-60 h-60 rotate-3" },
              { y: yImg3, cls: "bottom-0 left-10 w-64 h-64 rotate-2" },
              { y: yImg4, cls: "bottom-10 right-10 w-48 h-48 -rotate-3" },
            ].map((img, i) => (
              <motion.div
                key={i}
                style={{ y: img.y, scale: scaleImg }}
                className={`absolute ${img.cls} overflow-hidden rounded-2xl shadow-2xl border-2 border-white/10`}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 20 }}
              >
                <Image
                  src={`/gallery/${i + 1}.avif`}
                  alt="Gallery"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}