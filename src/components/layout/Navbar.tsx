"use client";
import { useState } from "react";
import { useActionState } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { submitContactForm } from "@/app/actions/contact";
import ContactModal from "@/components/ui/ContactModal";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, action, pending] = useActionState(submitContactForm, null);

  // Auto-close modal on success
  if (state?.success && isModalOpen) {
    setTimeout(() => setIsModalOpen(false), 2500);
  }

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <header className="hidden md:flex fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-2 flex justify-between items-center w-full">
          <Link href="/" className="flex items-center">
            <div className="h-8 overflow-hidden flex items-center">
              <Image 
                src="/logo.avif" alt="CorpX Logo" width={100} height={40}
                className="object-cover translate-y-[-6px]" priority
              />
            </div>
          </Link>

          <nav className="flex gap-8 font-medium text-sm">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[var(--accent)] transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[var(--primary)] text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity cursor-pointer"
          >
            Get Quote
          </button>
        </div>
      </header>

      {/* MOBILE TOP HEADER */}
      <header className="md:hidden fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-5 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="h-8 overflow-hidden flex items-center">
            <Image 
              src="/logo.avif" alt="CorpX Logo" width={100} height={40}
              className="object-cover translate-y-[-6px]" priority
            />
          </div>
        </Link>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[var(--primary)] text-white px-4 py-1.5 rounded-full text-xs shadow-md active:scale-95 transition cursor-pointer"
        >
          Get Quote
        </button>
      </header>

      {/* MOBILE BOTTOM NAVBAR */}
      <motion.nav 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-0 w-full z-50 bg-white/90 backdrop-blur-lg border-t border-gray-100 rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] px-6 py-4"
      >
        <div className="flex justify-between items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setActive(link.name)} className="flex flex-col items-center gap-1">
              <link.icon size={20} className={cn(active === link.name ? "text-[var(--accent)]" : "text-gray-400")} />
              <span className={cn("text-[10px]", active === link.name ? "text-[var(--primary)]" : "text-gray-400")}>
                {link.name}
              </span>
            </Link>
          ))}

          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[var(--accent)] p-3 rounded-full text-white shadow-lg active:scale-95 transition cursor-pointer"
          >
            <Calendar size={20} />
          </button>
        </div>
      </motion.nav>

      {/* THE MODAL */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        action={action}
        pending={pending}
        state={state}
      />
    </>
  );
}