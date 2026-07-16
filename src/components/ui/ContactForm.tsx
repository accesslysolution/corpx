"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, Briefcase, MessageSquare, Send, CheckCircle2, MapPin } from "lucide-react";

const services = [
  "Deep Cleaning Solutions", "Residential Cleaning", "Industrial Cleaning",
  "Corporate Office Cleaning", "Facade & Glass Cleaning", "Carpet Cleaning",
  "Hotel & Kitchen Cleaning", "Construction Site Cleaning",
];

const locations = [
  "Pune", "Mumbai", "Bangalore", "Hyderabad"
];

const inputClass = "w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-gray-400 font-body";
const iconClass = "absolute left-4 top-3.5 text-gray-400";

export default function ContactForm({ action, pending: externalPending, state }: any) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Listen for external state changes (if using React useActionState / useFormState)
  useEffect(() => {
    if (state?.success) {
      setIsSubmitted(true);
    }
  }, [state]);

  // 2. Auto-reset the Thank You screen after 5 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  // 3. Robust async wrapper to guarantee UI state transition
  const handleFormSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      if (action) {
        await action(formData);
      }
      // Trigger success screen regardless of what the server action returns
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLoading = externalPending || isSubmitting;

  return (
    <motion.form
      action={handleFormSubmit}
      className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden font-body"
    >
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500" />

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          /* THANK YOU VIEW */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 flex flex-col items-center justify-center text-center space-y-4"
          >
            <CheckCircle2 className="text-green-500 w-16 h-16" />
            <h3 className="text-2xl font-bold text-gray-900 font-heading">Thank You!</h3>
            <p className="text-gray-500">We've received your request and will be in touch shortly.</p>
          </motion.div>
        ) : (
          /* FORM VIEW */
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2 font-heading">Let's Connect</h2>
            <p className="text-gray-500 mb-8">Tell us about your requirements, and we'll reach out shortly.</p>

            <div className="relative">
              <User className={iconClass} size={20} />
              <input name="full_name" required placeholder="Full Name" className={inputClass} />
            </div>
            
            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative">
                <Mail className={iconClass} size={20} />
                <input name="email" type="email" required placeholder="Email Address" className={inputClass} />
              </div>
              <div className="relative">
                <Phone className={iconClass} size={20} />
                <input name="phone" required placeholder="Phone Number" className={inputClass} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative">
                <Briefcase className={iconClass} size={20} />
                <select name="service" required className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="">Select Service</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="relative">
                <MapPin className={iconClass} size={20} />
                <select name="location" required className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="">Select Location</option>
                  {locations.map((loc) => <option key={loc} value={loc}>{loc}</option>)}
                </select>
              </div>
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-gray-400" size={20} />
              <textarea name="message" rows={4} placeholder="Your Requirements (Optional)..." className={`${inputClass} pt-3`} />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-indigo-600 transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? "Sending..." : <>Submit Request <Send size={18} /></>}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}