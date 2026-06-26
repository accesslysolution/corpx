"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "../ui/Container";

const services = [
  { title: "Deep Cleaning Solutions", tag: "Core Service", img: "/gallery/Deep_Cleaning.avif", stats: ["5000+ Spaces cleaned", "Same-day service"], rating: 5 },
  { title: "Residential Cleaning", tag: "Home Care", img: "/gallery/Residential_Cleaning.avif", stats: ["Apartments & Villas", "Trusted pros"], rating: 5 },
  { title: "Industrial Cleaning", tag: "Heavy Duty", img: "/gallery/Industrial_Cleaning.avif", stats: ["Heavy-duty equipment", "Safety compliant"], rating: 4 },
  { title: "Corporate Office", tag: "Commercial", img: "/gallery/Corporate_Office.avif", stats: ["Corporate clients", "After-hours"], rating: 5 },
  { title: "Facade & Glass", tag: "Specialized", img: "/gallery/Facade.avif", stats: ["High-rise expertise", "Safety gear"], rating: 5 },
  { title: "Healthcare Facility", tag: "Critical Hygiene", img: "/gallery/Healthcare.avif", stats: ["Hospital-grade", "Disinfection"], rating: 5 },
  { title: "Building Maintenance", tag: "Facility Care", img: "/gallery/Building_Premises.avif", stats: ["Common area upkeep", "Repair support"], rating: 4 },
  { title: "Hotel & Kitchen", tag: "Hospitality", img: "/gallery/Hotel.avif", stats: ["Grease removal", "Food-safe"], rating: 5 },
  { title: "Cafe & Restaurant", tag: "Food Grade", img: "/gallery/Cafe.avif", stats: ["Grease & oil removal", "FSSAI compliant"], rating: 5 },
];

export default function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Signature Services</h2>
          <p className="mt-4 text-gray-600 max-w-lg mx-auto">Professional-grade cleaning solutions tailored for modern spaces.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image src={service.img} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full self-start mb-4">
                  {service.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.stats.map((stat, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" /> {stat}
                    </li>
                  ))}
                </ul>

                {/* Rating Section */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} className={`${idx < service.rating ? "fill-green-500 text-green-500" : "fill-gray-200 text-gray-200"}`} />
                  ))}
                  <span className="text-xs font-semibold text-gray-400 ml-2">{service.rating}.0 Verified</span>
                </div>

                <div className="flex gap-2 pt-4 border-t border-slate-100">
                  <a href={`https://wa.me/919595000022?text=${encodeURIComponent(`Hi, I'm interested in ${service.title}.`)}`} target="_blank" className="flex-1 text-center text-sm py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition">WhatsApp</a>
                  <a href="tel:9595000022" className="flex-1 text-center text-sm py-3 rounded-xl bg-[#001f3f] text-white font-semibold hover:bg-[#002d59] transition">Call Now</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}