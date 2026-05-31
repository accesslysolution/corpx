"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <section className="relative bg-[#070A12] text-white overflow-hidden py-28">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_60%)]" />

      <Container>

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-3">
            <Sparkles className="text-[var(--accent)]" size={18} />
            <span className="text-gray-200 text-sm">
              We typically respond within 24 hours
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Let’s Build Something{" "}
            <span className="text-[var(--accent)]">Great</span>
          </h1>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Whether you need cleaning services, enterprise solutions, or partnerships —  
            our team is ready to help you scale efficiently.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT - FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
          >
            <h2 className="text-xl font-semibold text-white mb-6">
              Send a Message
            </h2>

            <div className="space-y-4">

              <input
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-400 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)]"
                placeholder="Full Name"
              />

              <input
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-400 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)]"
                placeholder="Email Address"
              />

              <input
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-400 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)]"
                placeholder="Phone Number"
              />

              <textarea
                rows={5}
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-400 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)]"
                placeholder="Tell us about your requirement..."
              />

              <button className="w-full mt-2 bg-[var(--accent)] text-white py-3 rounded-xl font-medium hover:opacity-90 transition active:scale-95">
                Submit Request
              </button>
            </div>
          </motion.div>

          {/* RIGHT - INFO */}
          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="text-[var(--accent)]" />
                <h3 className="font-medium text-white">Email Support</h3>
              </div>
              <p className="text-gray-300">support@corpx.com</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="text-[var(--accent)]" />
                <h3 className="font-medium text-white">Phone Support</h3>
              </div>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-[var(--accent)]" />
                <h3 className="font-medium text-white">Office</h3>
              </div>
              <p className="text-gray-300">Pune, Maharashtra, India</p>
            </div>

            <div className="bg-gradient-to-r from-[var(--accent)]/20 to-transparent border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-[var(--accent)]" />
                <h3 className="font-medium text-white">Fast Response</h3>
              </div>
              <p className="text-gray-300">
                Average response time: under 2 hours during business days.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            {
              q: "Do you offer residential cleaning?",
              a: "Yes, we cover homes, offices, and commercial spaces.",
            },
            {
              q: "How fast can I book?",
              a: "You can book instantly — same-day slots available.",
            },
            {
              q: "Do you provide custom plans?",
              a: "Yes, we tailor services for enterprise clients.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-5"
            >
              <h4 className="font-medium text-white mb-2">{item.q}</h4>
              <p className="text-gray-300 text-sm">{item.a}</p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}