"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Building2 } from "lucide-react";
import "./Clients.css";

const companiesRow1 = [
  { name: "Larsen & Toubro" },
  { name: "Tata Motors" },
  { name: "Bosch" },
  { name: "Siemens" },
  { name: "Cummins" },
];

const companiesRow2 = [
  { name: "Mahindra" },
  { name: "ABB" },
  { name: "Schneider Electric" },
  { name: "Honeywell" },
  { name: "JCB" },
];

function MarqueeRow({ items, reverse = false }: { items: { name: string }[]; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden w-full py-2">
      <motion.div
        className="flex gap-4 md:gap-6 whitespace-nowrap items-center marquee-gpu-layer"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: 28, 
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {/* Quadrupled arrays maintain structural flow continuity across wide displays */}
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center bg-white border border-sky-100/70 rounded-xl px-6 py-3.5 shadow-[0_4px_12px_-6px_rgba(14,165,233,0.03)] transition-all duration-500 hover:border-[#006fe3]/40 hover:shadow-[0_12px_24px_-10px_rgba(0,111,227,0.08)] hover:-translate-y-0.5 group cursor-pointer"
          >
            {/* Elegant Mini Status Dot Indicator */}
            <span className="w-1.5 h-1.5 rounded-full bg-sky-200 group-hover:bg-[#006fe3] transition-colors duration-400 mr-2 shrink-0" />
            
            <span className="text-xs md:text-sm font-bold tracking-wide uppercase text-neutral-600 transition-colors duration-300 group-hover:text-neutral-900 font-body">
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
    <section className="clients-section-canvas py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* ==========================================
           1. PREMIUM ASYMMETRIC TRUST HEADER
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-white border border-sky-200/60 text-sky-950 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase font-body shadow-2xs">
              <Building2 size={13} className="text-[#006fe3]" />
              Institutional-Grade Operations
            </div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading font-extrabold text-neutral-900 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight"
            >
              Trusted by Corporate &amp; <br />
              Industrial Leaders
            </motion.h2>
          </div>

          <div className="lg:col-span-5 lg:pt-8">
            <p className="font-body text-neutral-600 text-sm sm:text-base font-medium leading-relaxed border-l-2 border-[#006fe3]/40 pl-6">
              Providing enterprise-level deployment, modern equipment architectures, and rigorous facility maintenance across corporate environments and production zones.
            </p>
          </div>

        </div>

        {/* ==========================================
           2. SEAMLESS INFINITE TEXT MARQUEE DECK
           ========================================== */}
        <div className="space-y-6 marquee-luxury-mask relative z-10 select-none">
          <MarqueeRow items={companiesRow1} />
          <MarqueeRow items={companiesRow2} reverse />
        </div>

        {/* ==========================================
           3. FLOATING VERIFICATION SIGNPOST
           ========================================== */}
        <div className="flex justify-center items-center gap-2.5 mt-16 text-neutral-500 font-body text-xs font-bold uppercase tracking-widest">
          <ShieldCheck size={15} className="text-[#006fe3]" />
          Corporate Compliance &amp; Insurance Verified
        </div>

      </div>
    </section>
  );
}