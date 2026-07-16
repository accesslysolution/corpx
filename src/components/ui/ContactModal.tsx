"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ContactForm from "./ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  action: any;
  pending: boolean;
  state: any;
  defaultLocation?: string; // Optional prop to pre-select Pune, Mumbai, Bangalore, or Hyderabad
}

export default function ContactModal({ 
  isOpen, 
  onClose, 
  action, 
  pending, 
  state,
  defaultLocation = "" 
}: ContactModalProps) {
  
  // 1. Lock background body scrolling & add Escape key listener when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
            aria-hidden="true"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none font-body"
            role="dialog"
            aria-modal="true"
          >
            {/* Added 'relative' here so the button can be positioned absolutely inside this box */}
            <div className="bg-white rounded-3xl w-full max-w-lg shadow-[0_25px_70px_rgba(0,0,0,0.25)] border border-neutral-100 overflow-hidden pointer-events-auto max-h-[90vh] overflow-y-auto relative">
              
              {/* Positioned inside the container at the top right */}
              <button 
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 rounded-full transition-all duration-200 z-50 cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#006fe3]"
                aria-label="Close modal"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
              
              {/* Passes down the default location if specified */}
              <ContactForm 
                action={action} 
                pending={pending} 
                state={state} 
                defaultLocation={defaultLocation} 
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}