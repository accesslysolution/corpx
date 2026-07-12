"use client";

import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Sparkles, 
  ArrowLeft, 
  ArrowRight,
  MessageCircle, 
  Phone, 
  Shield, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  HelpCircle,
  Award,
  ShieldAlert
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import "../ServicesPage.css";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  // Handle active states for the FAQ accordion loop safely
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  return (
    <main className="w-full min-h-screen services-hub-canvas text-neutral-950 font-body overflow-x-hidden pt-28 pb-20 catalog-gpu-layer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* ==========================================
           1. PREMIUM ROUTING BACKLINK HEADER
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-neutral-200/40">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 font-body font-bold text-xs uppercase tracking-widest text-neutral-500 hover:text-[#006fe3] transition-colors duration-300 group focus:outline-none"
          >
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to All Services
          </Link>

          <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
            <Award size={13} className="text-[#006fe3]" />
            ISO 9001:2015 Quality Blueprint Verified
          </div>
        </div>

        {/* ==========================================
           2. SPLIT WORKSPACE COLUMN OVERVIEW
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Architectural Media Shell */}
          <div className="lg:col-span-5">
            <div className="detail-sticky-media-frame shadow-xl bg-white">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-w-7xl) 40vw"
                  className="object-cover select-none animate-fade-in"
                  priority
                />
              </div>
              
              <div className="p-6 bg-neutral-900 text-white space-y-4">
                <div className="flex items-center gap-2.5 text-xs font-bold font-body uppercase tracking-wider text-neutral-400">
                  <Shield size={14} className="text-[#006fe3]" />
                  Operational Coverage Assurance
                </div>
                <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                  All cleaning execution vectors are mapped out, background-checked, and audit-verified to guarantee seamless delivery across the Pune municipal pipeline.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Content Blocks */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#006fe3]/5 border border-[#006fe3]/10 text-[#006fe3] rounded-full px-4 py-1.5 text-[10px] font-bold tracking-wider uppercase">
                {service.tag}
              </div>
              <h1 className="font-heading font-extrabold text-neutral-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
                {service.title}
              </h1>
            </div>

            {/* Core Explanatory Descriptions */}
            <div className="space-y-6 font-body text-neutral-600 font-medium text-sm sm:text-base leading-relaxed">
              <p className="text-neutral-900 font-semibold text-base sm:text-lg border-l-2 border-[#006fe3] pl-4 py-0.5 bg-neutral-50/40 rounded-r-md">
                {service.desc}
              </p>
              <p className="text-neutral-500">
                {service.extendedDesc}
              </p>
            </div>

            {/* Scope Features Checklist Component */}
            <div className="space-y-5 pt-6 border-t border-neutral-200/60">
              <h3 className="font-heading font-bold text-neutral-900 text-lg tracking-tight flex items-center gap-2.5">
                <Sparkles size={17} className="text-[#006fe3]" />
                What is Included / Technical Scope
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-neutral-200/50 rounded-xl shadow-2xs group hover:border-[#006fe3]/20 transition-colors duration-300">
                    <CheckCircle2 size={15} className="text-[#006fe3] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-neutral-700 leading-normal">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] font-semibold text-neutral-400 italic">
                * Specific inclusions may vary based on structural property size and package selected. Our team will explicitly confirm the absolute scope matrix before operations begin.
              </p>
            </div>

            {/* Systematic Step Process Flow Matrix */}
            <div className="space-y-5 pt-6 border-t border-neutral-200/60">
              <h3 className="font-heading font-bold text-neutral-900 text-lg tracking-tight flex items-center gap-2.5">
                <Clock size={17} className="text-[#006fe3]" />
                Methodical Execution Process Roadmap
              </h3>
              <div className="space-y-3.5">
                {service.processSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-neutral-50/50 rounded-xl border border-neutral-200/40 group hover:bg-white transition-colors duration-300">
                    <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#006fe3] transition-colors">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-neutral-600 leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ==========================================
               3. INTERACTIVE FAQ ACCORDION ENGINE
               ========================================== */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-5 pt-6 border-t border-neutral-200/60">
                <h3 className="font-heading font-bold text-neutral-900 text-lg tracking-tight flex items-center gap-2.5">
                  <HelpCircle size={17} className="text-[#006fe3]" />
                  Frequently Asked Questions
                </h3>
                
                <div className="border border-neutral-200/60 rounded-xl bg-white overflow-hidden divide-y divide-neutral-100 shadow-3xs">
                  {service.faqs.map((faq, idx) => {
                    const isOpen = openFaqIdx === idx;
                    return (
                      <div key={idx} className="w-full">
                        <button
                          onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                          className="w-full text-left px-5 py-4 font-heading font-bold text-xs sm:text-sm text-neutral-800 flex items-center justify-between gap-4 transition-colors hover:bg-neutral-50/80 cursor-pointer focus:outline-none"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown 
                            size={14} 
                            className={`text-neutral-400 shrink-0 transition-transform duration-300 ${isOpen ? "transform rotate-180 text-[#006fe3]" : ""}`} 
                          />
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden bg-neutral-50/40"
                            >
                              <p className="px-5 pb-5 pt-1 font-body text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ==========================================
               4. TERMINAL ACTION CONVERSION HUD PIPELINE
               ========================================== */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-neutral-200/60">
              <a
                href={`https://wa.me/919595000022?text=${encodeURIComponent(`Hi, I want to request a high-priority operational booking slot for: ${service.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 text-center font-body font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-sm bg-neutral-900 text-white flex items-center justify-center gap-2.5 hover:bg-[#006fe3] transition-all duration-300 shadow-md focus:outline-none active:scale-98"
              >
                <MessageCircle size={15} className="fill-current text-[#25d366]" />
                Book Your Cleaning Session
              </a>
              
              <Link
                href="/contact"
                className="w-full sm:flex-1 text-center font-body font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-sm bg-[#fe4d01] text-white flex items-center justify-center gap-2 hover:bg-[#e04400] transition-all duration-300 shadow-sm active:scale-98 group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}