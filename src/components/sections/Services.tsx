"use client";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const services = [
  { title: "Deep Cleaning Solutions", tag: "Core Service" },
  { title: "Residential Cleaning Solutions", tag: "Home Care" },
  { title: "Industrial Cleaning Solutions", tag: "Heavy Duty" },
  { title: "Corporate Office Cleaning", tag: "Commercial" },
  { title: "Facade & Glass Cleaning", tag: "Specialized" },
  { title: "Healthcare Facility Cleaning", tag: "Critical Hygiene" },
  { title: "Building & Premises Maintenance", tag: "Facility Care" },
  { title: "Hotel & Commercial Kitchen Cleaning", tag: "Hospitality" },
  { title: "Cafe & Restaurant Cleaning", tag: "Food Grade" },
  { title: "Before Possession Cleaning", tag: "Real Estate" },
  { title: "Carpet & Upholstery Cleaning", tag: "Advanced Care" },
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-[var(--primary)]">
            Our Signature Services
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Designed to deliver deep cleanliness, hygiene, and comfort with professional care.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const whatsappMessage = `Hi, I'm interested in ${service.title}. Can you share more details?`;
            const whatsappLink = `https://wa.me/919595000022?text=${encodeURIComponent(whatsappMessage)}`;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-[var(--accent)]/40 transition-all cursor-pointer"
              >
                
                {/* Icon */}
                <div className="w-10 h-10 mb-4 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] font-semibold">
                  ✦
                </div>

                {/* Tag */}
                <span className="inline-block mb-2 text-xs px-2 py-1 bg-slate-100 text-gray-600 rounded-full">
                  {service.tag}
                </span>

                {/* Title */}
                <h3 className="text-lg font-medium text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  Professional cleaning with advanced tools and eco-friendly solutions tailored to your needs.
                </p>

                {/* CTA Buttons */}
                <div className="mt-4 flex gap-2">
                  
                  {/* WhatsApp */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm px-3 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
                  >
                    WhatsApp
                  </a>

                  {/* Call */}
                  <a
                    href="tel:9595000022"
                    className="flex-1 text-center text-sm px-3 py-2 rounded-lg border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition"
                  >
                    Call
                  </a>

                </div>

              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}