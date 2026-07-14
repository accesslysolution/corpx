"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  ArrowUpRight, 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Star, 
  Award 
} from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="footer-luxury-canvas border-t border-neutral-200/60 font-body relative z-10 pb-24 md:pb-0 footer-gpu-accelerate">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-12">
        
        {/* ==========================================
           NEW INTEGRATION: ELITE TERMINAL CLOSING CTA
           ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
          className="terminal-cta-box rounded-2xl border border-white/[0.06] p-8 md:p-12 mb-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.3)]"
        >
          {/* Text Information Stack */}
          <div className="space-y-4 max-w-2xl relative z-10">
            <p className="text-xs font-semibold text-neutral-400 tracking-wide font-body">
              Ready to experience the difference a truly clean space makes? Whether it's your home, office, or commercial property — we're here to help.
            </p>
            <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Book Your Professional Cleaning Today
            </h2>
            <p className="text-xs text-neutral-500 font-medium font-body">
              Call us | WhatsApp us | Or fill in our quick contact form. We'll respond within the hour.
            </p>
            
            {/* High-End Clean Signal Inline Matrix */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-3 text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-body">
              <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.05] px-2.5 py-1 rounded-sm">
                <Star size={11} className="text-amber-400 fill-amber-400 shrink-0" />
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.05] px-2.5 py-1 rounded-sm">
                <ShieldCheck size={11} className="text-[#006fe3] shrink-0" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.05] px-2.5 py-1 rounded-sm">
                <MapPin size={11} className="text-[#006fe3] shrink-0" />
                <span>Serving All Areas of Pune, Mumbai, Bangalore & Hydrabad</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.05] px-2.5 py-1 rounded-sm">
                <Award size={11} className="text-amber-400 shrink-0" />
                <span>Trusted Since 2016</span>
              </div>
            </div>
          </div>

          {/* Action Trigger Pathway */}
          <div className="shrink-0 w-full lg:w-fit relative z-10">
            <Link
              href="/contact"
              className="btn-urgent-orange w-full sm:w-fit inline-flex items-center justify-center gap-2.5 text-xs font-bold font-body uppercase tracking-widest py-4 px-10 shadow-md group rounded-sm"
            >
              Get Your Free Quote
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* ==========================================
           2. MAIN ARCHITECTURAL NAVIGATION MATRIX
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Block 1: Brand Authority Signature */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link href="/" className="inline-block w-fit focus:outline-none">
              <div className="h-9 overflow-hidden flex items-center relative">
                <Image 
                  src="/logo.avif" 
                  alt="CorpX Corporate Brand Identity" 
                  width={105} 
                  height={42}
                  className="object-cover translate-y-[-6px] select-none" 
                  priority
                />
              </div>
            </Link>
            
            <p className="font-body text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed max-w-sm">
              Premium architectural deep cleaning and structural facility management solutions systematically engineered for modern luxury residences, workspaces, and corporate developments.
            </p>
          </div>

          {/* Block 2: Complete Navigation Matrix Link Array */}
          <div className="lg:col-span-2 flex flex-col space-y-5">
            <h4 className="text-[10px] font-bold text-neutral-900 tracking-widest uppercase border-b border-neutral-100 pb-2 font-heading">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-neutral-600">
              <li>
                <Link href="/" className="architectural-footer-link inline-flex items-center gap-1 group">
                  Home 
                  <ArrowUpRight size={12} className="text-neutral-300 opacity-0 -translate-y-0.5 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="architectural-footer-link inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="architectural-footer-link inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="architectural-footer-link inline-block">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="architectural-footer-link inline-block">
                  Contact Matrix
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/privacy-policy" className="text-neutral-400 hover:text-[#006fe3] text-xs font-medium transition-colors duration-300 inline-block">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Block 3: Premium Services Index Catalogue Reference */}
          <div className="lg:col-span-3 flex flex-col space-y-5">
            <h4 className="text-[10px] font-bold text-neutral-900 tracking-widest uppercase border-b border-neutral-100 pb-2 font-heading">
              Capabilities
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-neutral-500 select-none">
              <li className="flex items-center gap-2 transition-colors duration-300 hover:text-neutral-900">
                <span className="w-1 h-1 rounded-full bg-neutral-300" /> Architectural Deep Cleaning
              </li>
              <li className="flex items-center gap-2 transition-colors duration-300 hover:text-neutral-900">
                <span className="w-1 h-1 rounded-full bg-neutral-300" /> Premium Residential Overhauls
              </li>
              <li className="flex items-center gap-2 transition-colors duration-300 hover:text-neutral-900">
                <span className="w-1 h-1 rounded-full bg-neutral-300" /> Industrial Facility Upkeep
              </li>
              <li className="flex items-center gap-2 transition-colors duration-300 hover:text-neutral-900">
                <span className="w-1 h-1 rounded-full bg-neutral-300" /> Widescreen Structural Facade Care
              </li>
              <li className="flex items-center gap-2 transition-colors duration-300 hover:text-neutral-900">
                <span className="w-1 h-1 rounded-full bg-neutral-300" /> Fabric Sofa & Upholstery Extraction
              </li>
              <li className="flex items-center gap-2 transition-colors duration-300 hover:text-neutral-900">
                <span className="w-1 h-1 rounded-full bg-neutral-300" /> Commercial Kitchen Hygiene Systems
              </li>
            </ul>
          </div>

          {/* Block 4: Strategic Communication Core Terminal */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h4 className="text-[10px] font-bold text-neutral-900 tracking-widest uppercase border-b border-neutral-100 pb-2 font-heading">
              Communication Hub
            </h4>
            
            <div className="space-y-3.5">
              <a 
                href="tel:+919595000022" 
                className="flex items-center gap-3 text-neutral-700 hover:text-[#006fe3] text-xs sm:text-sm font-bold transition-colors duration-300 group focus:outline-none"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200/70 flex items-center justify-center text-neutral-600 shadow-xs group-hover:bg-[#006fe3]/5 group-hover:text-[#006fe3] group-hover:border-[#006fe3]/20 transition-all duration-300 shrink-0">
                  <Phone size={13} strokeWidth={2} />
                </div>
                +91 95950 00022
              </a>

              <a 
                href="mailto:corpx.companny@gmail.com" 
                className="flex items-center gap-3 text-neutral-700 hover:text-[#006fe3] text-xs sm:text-sm font-semibold transition-colors duration-300 group focus:outline-none break-all"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200/70 flex items-center justify-center text-neutral-600 shadow-xs group-hover:bg-[#006fe3]/5 group-hover:text-[#006fe3] group-hover:border-[#006fe3]/20 transition-all duration-300 shrink-0">
                  <Mail size={13} strokeWidth={2} />
                </div>
                corpx.companny@gmail.com
              </a>
            </div>

            <div className="pt-2">
              <a 
                href="https://wa.me/919595000022?text=Hi%20CorpX,%20I%20want%20to%20get%20a%20free%20quote%20for%20deep%20cleaning%20services%20in%20Pune."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-action-trigger w-full text-center inline-flex items-center justify-center gap-2.5 border border-neutral-200 bg-white text-neutral-800 font-body font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-sm shadow-xs active:scale-98 cursor-pointer focus:outline-none"
              >
                <MessageCircle size={14} className="fill-current text-[#25d366]" />
                Start WhatsApp Chat
              </a>
            </div>
          </div>

        </div>

        {/* ==========================================
           3. BOTTOM COMPLIANCE & ACCREDITATION BAR
           ========================================== */}
        <div className="border-t border-neutral-200/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          
          <div className="space-y-1">
            <p className="text-xs text-neutral-400 font-medium">
              &copy; {currentYear} CorpX Operations. All rights reserved. Engineering pristine architectural standards.
            </p>
            <p className="text-[10px] text-neutral-400 font-medium tracking-wide">
              Interface System Architecture by{" "}
              <a 
                href="https://lupaentertainment.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-500 hover:text-[#006fe3] font-bold transition-colors duration-300 focus:outline-none"
              >
                Lupa Entertainment
              </a>
            </p>
          </div>
          
          <div className="text-[10px] text-neutral-500 tracking-wider font-bold uppercase flex items-center gap-2 bg-white border border-neutral-200/70 shadow-2xs px-3.5 py-1.5 rounded-sm select-none shrink-0">
            <ShieldCheck size={14} className="text-[#006fe3] shrink-0" strokeWidth={2.5} />
            <span>ISO 9001:2015 Certified Quality Infrastructure</span>
          </div>
          
        </div>

      </div>
    </footer>
  );
}