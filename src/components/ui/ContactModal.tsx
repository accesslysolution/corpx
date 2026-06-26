"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactModal({ isOpen, onClose, action, pending, state }: any) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
          >
            {/* Added 'relative' here so the button can be positioned absolutely inside this box */}
            <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] overflow-y-auto relative">
              
              {/* Positioned inside the container at the top right */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors z-50 cursor-pointer"
              >
                <X size={20} />
              </button>
              
              <ContactForm action={action} pending={pending} state={state} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}