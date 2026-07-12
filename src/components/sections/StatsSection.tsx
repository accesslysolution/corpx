"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Sparkles, ShieldCheck, Building2, Users2, Star } from "lucide-react";
import "./StatsSection.css";

// Premium structural data configuration matrix
const metrics = [
  {
    id: 1,
    targetNumber: 8500,
    suffix: "+",
    label: "Luxury Estates Restored",
    subLabel: "Homes & Private Villas",
    description: "Premium deep cleaning executed across high-end apartments, penthouses, and private estates.",
    icon: Star,
  },
  {
    id: 2,
    targetNumber: 420,
    suffix: "+",
    label: "Corporate Hubs Managed",
    subLabel: "Commercial Complexes",
    description: "Consistent facility maintenance delivered across commercial tech parks and corporate offices.",
    icon: Building2,
  },
  {
    id: 3,
    targetNumber: 98,
    suffix: ".4%",
    label: "Client Retention Vector",
    subLabel: "Recurring Care Accounts",
    description: "Quarterly recurring cleaning agreements built entirely on quality outcomes and clear trust.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    targetNumber: 120,
    suffix: "+",
    label: "Verified Staff Matrix",
    subLabel: "Background Cleared Professionals",
    description: "In-house cleaning professionals who have passed extensive background checks and safety screenings.",
    icon: Users2,
  },
];

// High-Performance Animated Counter Engine Component
const RollingCounter = ({ target, duration = 2 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function: Cubic Out for a smooth deceleration look at the end
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeProgress * target));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
};

export default function StatsSection() {
  return (
    <section className="w-full bg-neutral-50/40 stats-luxury-viewport overflow-hidden relative border-b border-neutral-200/50">
      
      {/* Structural Graphic Framework Grid Lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-neutral-200/60" />
      
      <div className="max-w-7xl mx-auto px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/50">
          
          {metrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 140, 
                  damping: 24, 
                  delay: idx * 0.08 
                }}
                className="architectural-cell metric-gpu-accelerate p-8 sm:p-10 md:p-14 flex flex-col justify-between min-h-[380px] group select-none"
              >
                {/* Structural Top Segment */}
                <div className="space-y-8 relative z-10">
                  
                  {/* Icon Block with Micro-Glow Shifts */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200/60 text-neutral-800 flex items-center justify-center shadow-xs transition-all duration-500 group-hover:bg-[#006fe3] group-hover:text-white group-hover:border-[#006fe3] group-hover:scale-110">
                    <IconComponent size={20} strokeWidth={1.5} />
                  </div>
                  
                  {/* Technical Counter & Unit Matrix */}
                  <div className="space-y-1">
                    <div className="flex items-baseline font-heading font-extrabold text-neutral-900 tracking-tighter text-5xl sm:text-6xl md:text-7xl leading-none">
                      <RollingCounter target={metric.targetNumber} />
                      <span className="text-[#006fe3] ml-0.5">{metric.suffix}</span>
                    </div>
                    
                    <div className="space-y-0.5 pt-3">
                      <h4 className="text-xs font-bold tracking-widest text-neutral-900 font-body uppercase">
                        {metric.label}
                      </h4>
                      <p className="text-[10px] font-semibold text-[#006fe3] tracking-wider uppercase font-body opacity-80">
                        {metric.subLabel}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Structural Bottom Commentary Segment */}
                <div className="pt-10 relative z-10 border-t border-neutral-100 group-hover:border-neutral-200/60 transition-colors duration-500">
                  <p className="font-body text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed max-w-[260px] group-hover:text-neutral-700 transition-colors duration-400">
                    {metric.description}
                  </p>
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>

      {/* Structural Graphic Framework Grid Lines */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-neutral-200/60" />
      
    </section>
  );
}