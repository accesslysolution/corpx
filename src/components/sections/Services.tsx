"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Star, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  ArrowUpRight, 
  ArrowRight,
  Home, 
  CookingPot, 
  Bath, 
  Sofa, 
  Building2,
  Layers, 
  ShieldCheck, 
  Bug 
} from "lucide-react";
import { Container } from "../ui/Container";
import "./Services.css";

interface ServiceItem {
  title: string;
  tag: string;
  img: string;
  description: string;
  stats: string[];
  rating: number;
  icon: any;
}

const services: ServiceItem[] = [
  { 
    title: "Home Deep Cleaning", 
    tag: "Residential", 
    img: "/gallery/Deep_Cleaning.avif", 
    description: "Full-house refresh that goes beyond the surface",
    stats: ["Deep carpet & floor descaling", "Comprehensive dust extraction"], 
    rating: 5,
    icon: Home
  },
  { 
    title: "Kitchen Deep Cleaning", 
    tag: "Hygiene Focus", 
    img: "/gallery/Hotel.avif", 
    description: "Grease, grime, and hidden buildup — completely removed",
    stats: ["Carbon extraction vents", "Food-safe sanitization paths"], 
    rating: 5,
    icon: CookingPot
  },
{ 
    title: "Facade Cleaning", 
    tag: "High-Rise Specialist", 
    img: "/gallery/Facade.avif", 
    description: "Streak-free exterior glass, certified safety matrices, and spotless architectural finishes",
    stats: ["Certified safety rigging", "Heavy carbon & dust removal"], 
    rating: 5,
    icon: Layers
  },
  { 
    title: "Sofa & Upholstery Cleaning", 
    tag: "Furniture Care", 
    img: "/gallery/Upholstery.avif", 
    description: "Restore the freshness of your furniture",
    stats: ["Deep fabric extraction", "Stain & odor elimination"], 
    rating: 5,
    icon: Sofa
  },
  { 
    title: "Office Deep Cleaning", 
    tag: "Commercial", 
    img: "/gallery/Corporate_Office.avif", 
    description: "A clean workspace your team deserves",
    stats: ["Tech station cleaning", "After-hours scheduling shifts"], 
    rating: 5,
    icon: Building2
  },
  { 
    title: "Sanitization Services", 
    tag: "Critical Care", 
    img: "/gallery/Healthcare.avif", 
    description: "Disinfection for high-touch surfaces and shared spaces",
    stats: ["Hospital-grade formulations", "Area protection tracking"], 
    rating: 5,
    icon: ShieldCheck
  },
  { 
    title: "Pest Control", 
    tag: "Specialized", 
    img: "/gallery/Building_Premises.avif", 
    description: "Long-lasting protection from common pests",
    stats: ["Targeted barrier shield", "Eco-certified applications"], 
    rating: 5,
    icon: Bug
  }
];

export default function Services() {
  return (
    <section className="w-full py-24 md:py-32 services-luxury-canvas relative border-b border-neutral-200/60 overflow-hidden">
      <Container>
        
        {/* ==========================================
           1. PREMIUM MINIMALIST HEADER BLOCK
           ========================================== */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#006fe3]/5 border border-[#006fe3]/10 text-[#006fe3] rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase font-body">
            <Sparkles size={12} className="fill-current" />
            Solutions Index
          </div>
          <h2 className="font-heading font-extrabold text-neutral-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            Our Services — Overview Section
          </h2>
          <div className="w-12 h-[2px] bg-[#006fe3] my-2" />
          <p className="font-body text-sm sm:text-base text-neutral-600 font-medium max-w-xl leading-relaxed">
            From a single room to an entire commercial facility, we have a cleaning solution that fits. Explore our range of professional cleaning services in Pune:
          </p>
        </div>

        {/* ==========================================
           2. PROFESSIONAL CARDS GRID
           ========================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ type: "spring", stiffness: 140, damping: 22, delay: i * 0.04 }}
                className="group flex flex-col service-spatial-tile border border-neutral-200/70 rounded-2xl overflow-hidden"
              >
                {/* Image Container w/ Hardware Layer Scrim */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 border-b border-neutral-100">
                  <Image 
                    src={service.img} 
                    alt={`${service.title} Case Study`}
                    fill 
                    sizes="(max-w-7xl) 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  
                  {/* Floating Modern Pill Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="premium-pill-tag text-[9px] font-bold tracking-wider uppercase text-neutral-800 font-body px-3 py-1.5 rounded-sm shadow-xs flex items-center gap-1.5">
                      <IconComponent size={11} className="text-[#006fe3]" />
                      {service.tag}
                    </span>
                  </div>
                  
                  {/* Visual Depth Lighting scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Body Space */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                  
                  <div className="space-y-4">
                    {/* Headline Title Link */}
                    <h3 className="font-heading font-bold text-neutral-900 text-lg sm:text-xl tracking-tight leading-snug flex items-center justify-between group-hover:text-[#006fe3] transition-colors duration-300">
                      {service.title}
                      <ArrowUpRight size={16} className="text-neutral-300 group-hover:text-[#006fe3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </h3>

                    {/* Primary Highlight Sub-Text */}
                    <p className="font-body text-xs sm:text-sm text-neutral-900 font-semibold leading-relaxed border-l-2 border-[#006fe3] pl-3 py-0.5 bg-neutral-50/50 rounded-r-sm">
                      {service.description}
                    </p>
                    
                    {/* Secondary Technical Parameters */}
                    <ul className="space-y-2 pt-1">
                      {service.stats.map((stat, idx) => (
                        <li key={idx} className="font-body text-xs text-neutral-500 font-medium flex items-center gap-2.5">
                          <span className="w-1 h-1 rounded-full bg-neutral-300 shrink-0" /> 
                          {stat}
                        </li>
                      ))}
                    </ul>

                    {/* High-End Clean Rating Row */}
                    <div className="flex items-center gap-1.5 pt-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, idx) => (
                          <Star 
                            key={idx} 
                            size={11} 
                            className={`${idx < service.rating ? "fill-[#006fe3] text-[#006fe3]" : "fill-neutral-200 text-neutral-200"}`} 
                          />
                        ))}
                      </div>
                      <span className="text-[9px] font-bold tracking-wider text-neutral-400 font-body uppercase ml-1">
                        {service.rating}.0 Audited Outcomes
                      </span>
                    </div>
                  </div>

                  {/* ==========================================
                     3. ACTION CONTROLS
                     ========================================== */}
                  <div className="flex items-center gap-3 pt-6 mt-8 border-t border-neutral-100">
                    <a 
                      href={`https://wa.me/919595000022?text=${encodeURIComponent(`Hi, I am reaching out to inquire regarding your premier ${service.title} plan.`)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 text-center font-body font-bold text-[11px] tracking-widest uppercase py-3.5 px-4 rounded-sm bg-neutral-50 text-neutral-700 border border-neutral-200/70 action-contact-trigger flex items-center justify-center gap-2 hover:bg-[#25d366] hover:text-white hover:border-[#25d366]"
                    >
                      <MessageCircle size={14} className="shrink-0" />
                      WhatsApp
                    </a>
                    
                    <a 
                      href="tel:9595000022" 
                      className="flex-1 text-center font-body font-bold text-[11px] tracking-widest uppercase py-3.5 px-4 rounded-sm bg-neutral-900 text-white action-contact-trigger flex items-center justify-center gap-2 hover:bg-[#006fe3]"
                    >
                      <Phone size={13} className="shrink-0" />
                      Call Now
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ==========================================
           4. GLOBAL VIEW ALL PORTFOLIOS FOOTER LINK
           ========================================== */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-neutral-200 text-neutral-800 font-body font-bold text-xs uppercase tracking-widest rounded-sm shadow-xs hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 group"
          >
            View All Services
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

      </Container>
    </section>
  );
}