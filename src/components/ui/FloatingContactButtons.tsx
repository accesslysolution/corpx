"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import "./FloatingContactButtons.css";

export default function FloatingContactButtons() {
  return (
    <div className="fixed inset-x-0 bottom-24 md:bottom-8 pointer-events-none z-50 px-6 sm:px-8 lg:px-12 font-body select-none">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between relative">
        
        {/* ==========================================
           LEFT SIDECORE: LUXURY WHATSAPP ENTRY
           ========================================== */}
        <motion.a
          href="https://wa.me/919595000022?text=Hi%20CorpX,%20I%20am%20reaching%20out%20to%20request%20a%20professional%20consultation%20for%20deep%20cleaning%20services."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.85, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 20, delay: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="pointer-events-auto group flex items-center gap-3 h-14 rounded-full bg-white/90 text-neutral-900 border border-neutral-200/60 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.12)] pl-4 pr-4 hover:pr-6 premium-floating-trigger hover:border-[#25d366]/30"
        >
          {/* Constant Active Ambient Radar Wave */}
          <div className="whatsapp-pulse-ring radar-pulse-ring" />

          {/* Original React-Icons Asset Wrapper */}
          <div className="w-6 h-6 shrink-0 flex items-center justify-center text-[#25d366] group-hover:scale-110 transition-transform duration-300">
            <FaWhatsapp size={22} />
          </div>

          {/* Desktop Expansion Tooltip Label */}
          <span className="max-w-0 overflow-hidden font-body font-bold text-[10px] tracking-widest text-neutral-800 uppercase whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-out select-none">
            Chat Online
          </span>
          
          {/* Luxury Live Indicator Pulse Point */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#25d366]" />
        </motion.a>

        {/* ==========================================
           RIGHT SIDECORE: LUXURY TELEPHONY ENTRY
           ========================================== */}
        <motion.a
          href="tel:+919595000022"
          initial={{ opacity: 0, scale: 0.85, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 20, delay: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="pointer-events-auto group flex items-center gap-3 h-14 rounded-full bg-neutral-950 text-white border border-white/[0.06] shadow-[0_16px_36px_-10px_rgba(0,0,0,0.3)] pr-4 pl-4 hover:pl-6 premium-floating-trigger hover:border-[#006fe3]/40"
        >
          {/* Constant Active Ambient Radar Wave */}
          <div className="radar-pulse-ring" />

          {/* Desktop Expansion Tooltip Label */}
          <span className="max-w-0 overflow-hidden font-body font-bold text-[10px] tracking-widest text-neutral-300 uppercase whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-out select-none">
            Call Desk
          </span>

          {/* Icon Terminal Container */}
          <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] text-white flex items-center justify-center group-hover:bg-[#006fe3] group-hover:border-[#006fe3] transition-all duration-300 shrink-0">
            <Phone size={13} strokeWidth={2.5} className="group-hover:animate-pulse" />
          </div>
        </motion.a>

      </div>
    </div>
  );
}