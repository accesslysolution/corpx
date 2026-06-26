"use client";

import { useActionState } from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { submitContactForm } from "@/app/actions/contact";
import ContactForm from "@/components/ui/ContactForm";
import ContactInfo from "@/components/ui/ContactInfo";
import MapEmbed from "@/components/ui/MapEmbed";

const mainVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.1 }
  },
};

export default function ContactPage() {
  const [state, action, pending] = useActionState(submitContactForm, null);

  return (
    <main className="min-h-screen bg-gray-50 py-20 overflow-hidden">
      <Container>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={mainVariants}
          className="text-center mb-16 flex flex-col items-center"
        >
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src="/logo.avif" 
            alt="Company Logo" 
            className="h-24 md:h-28 w-auto mb-6 object-contain" 
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let’s Connect
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Ready to transform your space? Our team is standing by to provide expert cleaning solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: The Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={mainVariants}
          >
            <ContactForm action={action} pending={pending} state={state} />
          </motion.div>

          {/* Right Column: Contact Details and Map */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-8"
          >
            <ContactInfo />
            <MapEmbed />
          </motion.div>
        </div>
      </Container>
    </main>
  );
}