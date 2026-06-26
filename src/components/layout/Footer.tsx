"use client";

import { Container } from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle, ChevronRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white relative overflow-hidden">
      
      {/* Upscaled Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--accent)]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--accent)]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Subtle Top Border Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container>
        <div className="relative py-20 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16">
          
          {/* BRAND & CONTACT */}
          <div className="md:col-span-5 flex flex-col">
            <div className="mb-6">
              <Image
                src="/logowhite.avif"
                alt="Corpx Logo"
                width={150}
                height={54}
                priority
                className="opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <p className="text-[var(--muted)] text-sm md:text-[15px] leading-relaxed max-w-sm mb-8 font-light">
              Premium cleaning & facility management for modern spaces. 
              Reliable teams, refined processes, and consistently spotless results.
            </p>

            {/* Elevated Contact Items */}
            <div className="space-y-4 text-sm mt-auto">
              <a
                href="tel:+919595000022"
                className="group flex items-center gap-4 w-fit text-[var(--muted)] hover:text-white transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-all duration-300">
                  <Phone size={14} className="group-hover:text-white" />
                </div>
                <span className="tracking-wide">+91 95950 00022</span>
              </a>

              <a
                href="mailto:corpx.companny@gmail.com"
                className="group flex items-center gap-4 w-fit text-[var(--muted)] hover:text-white transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-all duration-300">
                  <Mail size={14} className="group-hover:text-white" />
                </div>
                <span className="tracking-wide">corpx.companny@gmail.com</span>
              </a>

              <a
                href="https://wa.me/919595000022?text=Hi%20I%20need%20cleaning%20service"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 w-fit text-[var(--muted)] hover:text-white transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all duration-300">
                  <MessageCircle size={14} className="group-hover:text-white" />
                </div>
                <span className="tracking-wide">Start WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-6 flex items-center gap-2">
              Navigation
              <span className="h-[1px] w-8 bg-[var(--accent)]/50 rounded-full"></span>
            </h4>

            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-[var(--muted)] hover:text-white transition-all duration-300 text-sm md:text-[15px] w-fit font-light"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 text-[var(--accent)]">
                      <ChevronRight size={16} />
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-6 flex items-center gap-2">
              Services
              <span className="h-[1px] w-8 bg-[var(--accent)]/50 rounded-full"></span>
            </h4>

            <ul className="space-y-4 text-[var(--muted)] text-sm md:text-[15px] font-light">
              {[
                "Deep Cleaning",
                "Home & Office Cleaning",
                "Industrial Maintenance",
                "Glass & Facade Care",
                "Carpet & Upholstery",
                "Kitchen Hygiene Services",
              ].map((service) => (
                <li 
                  key={service} 
                  className="group flex items-center hover:text-white transition-colors duration-300 cursor-pointer w-fit"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--border)] group-hover:bg-[var(--accent)] mr-3 transition-colors duration-300"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="relative border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between text-[var(--muted)] text-sm font-light">
          <p className="tracking-wide">
            © {new Date().getFullYear()} Corpx. Built for clean, modern spaces.
          </p>

          <p className="mt-4 md:mt-0 tracking-wide flex items-center gap-1">
            Crafted by{" "}
            <a
              href="https://www.lupaentertainment.com"
              target="_blank"
              rel="noreferrer"
              className="text-white font-medium relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-300"
            >
              Lupa Entertainment
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}