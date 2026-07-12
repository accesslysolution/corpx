"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight, ArrowRight, MessageCircle, HelpCircle } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import "./ServicesPage.css";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesPage() {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="w-full min-h-screen services-hub-canvas text-neutral-950 font-body overflow-x-hidden pt-28 pb-20 catalog-gpu-layer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* 1. EDITORIAL HEADER SECTION */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20 pb-12 border-b border-neutral-200/60">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#006fe3]/5 border border-[#006fe3]/10 text-[#006fe3] rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase">
              <Sparkles size={12} className="fill-current" />
              Corporate Portfolio Index
            </div>
            <h1 className="font-heading font-extrabold text-neutral-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15]">
              Professional Cleaning Services in Pune <br />
              <span className="text-[#006fe3] bg-gradient-to-r from-[#006fe3] to-[#005bc4] bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold block pt-2 tracking-normal font-heading">
                — For Every Space, Every Need
              </span>
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pt-10 space-y-4">
            <p className="font-body text-neutral-500 text-sm sm:text-base font-medium leading-relaxed border-l-2 border-[#006fe3]/40 pl-6">
              Whether your home needs a full deep clean, your office needs a reliable maintenance partner, or your commercial property needs specialised treatment — we have the right service and the right team for you.
            </p>
          </div>
        </motion.div>

        {/* 2. SERVICES BLUEPRINT CARD MATRIX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {servicesData.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group flex flex-col catalog-spatial-card border border-neutral-200/70 rounded-2xl overflow-hidden"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 border-b border-neutral-100">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-w-7xl) 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="catalog-pill-tag text-[9px] font-bold tracking-wider uppercase text-neutral-800 font-body px-3 py-1.5 rounded-sm shadow-xs flex items-center gap-1.5">
                      <IconComponent size={11} className="text-[#006fe3]" />
                      {service.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-neutral-900 text-lg sm:text-xl tracking-tight leading-snug flex items-center justify-between group-hover:text-[#006fe3] transition-colors duration-300">
                      {service.title}
                      <ArrowUpRight size={16} className="text-neutral-300 group-hover:text-[#006fe3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed line-clamp-3">
                      {service.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-6 mt-8 border-t border-neutral-100">
                    <a
                      href={`https://wa.me/919595000022?text=${encodeURIComponent(`Hi, I am reaching out to book a dedicated slot for your premier ${service.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center font-body font-bold text-[10px] tracking-widest uppercase py-3.5 px-2 rounded-sm bg-neutral-50 text-neutral-700 border border-neutral-200/70 catalog-action-trigger flex items-center justify-center gap-1.5 hover:bg-[#25d366] hover:text-white hover:border-[#25d366]"
                    >
                      <MessageCircle size={13} className="shrink-0" />
                      Book Now
                    </a>
                    
                    <Link
                      href={`/services/${service.id}`}
                      className="flex-1 text-center font-body font-bold text-[10px] tracking-widest uppercase py-3.5 px-2 rounded-sm bg-neutral-950 text-white catalog-action-trigger flex items-center justify-center gap-1.5 hover:bg-[#006fe3]"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={12} className="shrink-0" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3. LOWER DIRECTIONAL DECK BANNER */}
        <motion.div 
          variants={fadeUp}
          className="mt-20 bg-white border border-neutral-200/70 p-6 sm:p-8 rounded-2xl shadow-[0_12px_30px_-15px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="w-12 h-12 rounded-full bg-[#006fe3]/5 border border-[#006fe3]/10 text-[#006fe3] flex items-center justify-center shrink-0">
              <HelpCircle size={20} />
            </div>
            <div className="space-y-0.5">
              <h4 className="font-heading font-bold text-neutral-900 text-base">Not sure which service you need?</h4>
              <p className="font-body text-xs text-neutral-500 font-medium">Contact our spatial consultation office directly — we will guide you.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="btn-urgent-orange w-full sm:w-fit text-center font-body font-bold text-xs uppercase tracking-widest py-4 px-8 shrink-0 shadow-sm flex items-center justify-center gap-2 group rounded-sm"
          >
            Consult Our Experts
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

      </div>
    </motion.main>
  );
}