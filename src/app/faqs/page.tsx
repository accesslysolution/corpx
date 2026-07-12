"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  ChevronDown, 
  HelpCircle, 
  ArrowRight, 
  MessageCircle,
  ShieldCheck,
  UserCheck,
  Calendar
} from "lucide-react";
import "./FAQs.css";

/* ✅ HIGH-PERFORMANCE INTERACTIVE ANIMATION ENGINE */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  name: string;
  icon: any;
  items: FAQItem[];
}

export default function FAQPage() {
  const categories: FAQCategory[] = [
    {
      id: "general",
      name: "General Questions",
      icon: ShieldCheck,
      items: [
        {
          question: "What is deep cleaning, and how is it different from regular cleaning?",
          answer: "Regular cleaning maintains the appearance of your space — sweeping, mopping, and wiping down surfaces. Deep cleaning goes much further: it targets the hidden dirt, grease, dust, and grime that accumulates over time in areas regular cleaning misses — grout lines, behind appliances, inside vents, and in corners and crevices. The result is a space that is not just tidy, but genuinely clean."
        },
        {
          question: "How often should I get a deep cleaning done?",
          answer: "For most homes, we recommend a full deep clean every 3 to 6 months. Offices, restaurants, and high-traffic commercial spaces often benefit from monthly or quarterly deep cleans. We will advise you based on your specific space and usage."
        },
        {
          question: "What areas do you serve?",
          answer: "We provide cleaning services across all major areas of Pune, including Hinjewadi, Baner, Wakad, Kothrud, Viman Nagar, Koregaon Park, Hadapsar, Wagholi, Aundh, Pimple Saudagar, and surrounding localities."
        },
        {
          question: "Do I need to prepare anything before the team arrives?",
          answer: "We recommend removing personal valuables, fragile items, and small objects from surfaces so our team can clean efficiently and safely. For kitchen cleaning, it helps to empty countertops beforehand."
        }
      ]
    },
    {
      id: "team-products",
      name: "Our Team & Products",
      icon: UserCheck,
      items: [
        {
          question: "Are your cleaning professionals trained and verified?",
          answer: "Yes. Every member of our cleaning team is trained in professional cleaning techniques and has gone through a background verification process. We take the trust you place in us seriously."
        },
        {
          question: "Are the cleaning products safe for children and pets?",
          answer: "Yes. We use professional-grade cleaning products that are effective on dirt and germs while being safe for residential use. If you have specific concerns or sensitivities, let us know when you book."
        },
        {
          question: "Can you remove tough stains?",
          answer: "We make every effort to remove stubborn stains, and most improve significantly with our treatment. However, some stains that have fully set into a surface or material may not be completely removable. We will be honest with you about what is achievable."
        }
      ]
    },
    {
      id: "booking-logistics",
      name: "Booking & Logistics",
      icon: Calendar,
      items: [
        {
          question: "Do I need to be present during the cleaning?",
          answer: "You only need to be available at the start to provide access and at the end for the inspection walkthrough. You do not need to stay throughout."
        },
        {
          question: "How long does a typical service take?",
          answer: "Home deep cleans generally take 3 to 8 hours depending on size and condition. Kitchen cleaning: 2 to 4 hours. Bathroom cleaning: 1 to 2 hours per bathroom. We will give you a more specific estimate when you book."
        },
        {
          question: "What if I am not satisfied with the result?",
          answer: "We do a walkthrough with you at the end of every job. If anything does not meet your expectations, we will address it before we leave. Your satisfaction is our standard."
        },
        {
          question: "How do I book a service?",
          answer: "Call us, send a WhatsApp message, or fill in our contact form. We will confirm your requirements and schedule a time that works for you — usually within 24 to 48 hours."
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>("general");
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const currentCategoryData = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="w-full min-h-screen faqs-luxury-canvas text-neutral-950 font-body overflow-x-hidden pt-28 pb-20 faq-gpu-accelerate"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ==========================================
           1. PREMIUM MINIMAL EDITORIAL HEADER
           ========================================== */}
        <motion.div variants={fadeUp} className="max-w-3xl mb-16 space-y-4 pb-10 border-b border-neutral-200/60">
          <div className="inline-flex items-center gap-2 bg-[#006fe3]/5 border border-[#006fe3]/10 text-[#006fe3] rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase">
            <HelpCircle size={12} className="fill-current" />
            Information Registry Matrix
          </div>
          
          <h1 className="font-heading font-extrabold text-neutral-900 text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
            Your Questions About Our Cleaning Services — Answered
          </h1>
          
          <p className="font-body text-neutral-500 text-sm sm:text-base font-medium max-w-xl leading-relaxed">
            New to professional deep cleaning, or want to know more about how we work? Here are the questions we hear most often — answered clearly and honestly.
          </p>
        </motion.div>

        {/* ==========================================
           2. DUAL ZONE ASYMMETRIC CONTENT MATRIX
           ========================================== */}
        <div className="faq-split-workspace">
          
          {/* Left Navigation Zone: Sticky Categorical Index Menu */}
          <div className="faq-sticky-sidebar">
            <div className="space-y-2 bg-neutral-100/40 p-3 rounded-2xl border border-neutral-200/50 backdrop-blur-md">
              <span className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block px-3 pt-2 pb-1 font-body">
                Select Domain Index
              </span>
              {categories.map((cat) => {
                const CatIcon = cat.icon;
                const isActive = activeCategory === cat.id;
                
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenFaqIdx(null);
                    }}
                    className={`category-nav-button ${isActive ? "active" : ""}`}
                  >
                    <CatIcon size={14} className={isActive ? "text-[#006fe3]" : "text-neutral-400"} />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Main Accordion Zone: Interactive Expandable Panels */}
          <div className="faq-content-stack">
            <div className="space-y-4">
              {currentCategoryData.items.map((item, idx) => {
                const isOpen = openFaqIdx === idx;
                
                return (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="accordion-matrix-box"
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full text-left px-6 py-5 font-heading font-bold text-sm sm:text-base text-neutral-800 flex items-center justify-between gap-6 transition-colors hover:bg-neutral-50/60 cursor-pointer focus:outline-none"
                    >
                      <span>{item.question}</span>
                      <ChevronDown 
                        size={16} 
                        className={`text-neutral-400 shrink-0 transition-transform duration-300 ${isOpen ? "transform rotate-180 text-[#006fe3]" : ""}`} 
                      />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                          className="overflow-hidden bg-neutral-50/30"
                        >
                          <p className="px-6 pb-6 pt-1 font-body text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed border-t border-neutral-100/60">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ==========================================
           3. FINAL TERMINAL FOOTER SUPPORT CONVERTOR
           ========================================== */}
        <motion.div 
          variants={fadeUp}
          className="mt-24 bg-neutral-950 rounded-2xl border border-white/[0.06] p-8 md:p-12 text-center relative overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,111,227,0.06),transparent_60%)] pointer-events-none" />
          
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase block">
              Direct Spatial Consultation Desk
            </span>
            <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl tracking-tight leading-tight">
              Still Have Questions Regarding Our Standards?
            </h2>
            <p className="font-body text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed">
              Connect directly with our operations desk. We provide comprehensive operational estimates and project plan consulting calls within the hour.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 max-w-md mx-auto relative z-10">
            <a
              href="https://wa.me/919595000022?text=Hi%20CorpX,%20I%20have%20reviewed%20your%20FAQ%20index%20and%20would%20like%20to%20consult%20regarding%20a%20custom%20cleaning%20plan."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 text-center font-body font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-sm bg-white border border-white text-neutral-900 shadow-xs transition-all duration-300 hover:bg-neutral-50 active:scale-98 flex items-center justify-center gap-2"
            >
              <MessageCircle size={14} className="fill-current text-[#25d366]" />
              WhatsApp Desk
            </a>
            
            <a
              href="tel:+919595000022"
              className="w-full sm:flex-1 text-center font-body font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-sm bg-[#fe4d01] border border-[#fe4d01] text-white shadow-xs transition-all duration-300 hover:bg-[#e04400] active:scale-98 flex items-center justify-center gap-2 group"
            >
              Call Consulting Desk
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </motion.main>
  );
}