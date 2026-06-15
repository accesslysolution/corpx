import { Container } from "../ui/Container";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#070A12] text-white relative overflow-hidden">
      {/* soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_55%)]" />

      <Container>
        <div className="relative py-24 grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* BRAND BLOCK */}
          <div className="md:col-span-4">
            {/* ✅ LOGO (UPDATED) */}
            <div className="mb-4">
              <Image 
                src="/logowhite.avif" 
                alt="CorpX Logo" 
                width={140} 
                height={50} 
                className="object-contain"
                priority
              />
            </div>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              A modern operations platform for cleaning & service businesses.
              Built for speed, scale, and reliability.
            </p>

            {/* SOCIAL */}
            <div className="mt-6 flex gap-5 text-sm text-gray-500">
              {["LinkedIn", "Instagram", "Twitter"].map((item) => (
                <span
                  key={item}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* LINKS */}
          {[
            {
              title: "Product",
              links: ["Services", "Pricing", "Dashboard", "API"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Blog", "Contact"],
            },
            {
              title: "Resources",
              links: ["Docs", "Help Center", "Guides", "Status"],
            },
          ].map((section) => (
            <div key={section.title} className="md:col-span-2">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                {section.title}
              </h4>

              <ul className="space-y-3 text-gray-300">
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="hover:text-white transition-colors cursor-pointer text-sm"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Get Started
            </h4>

            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Launch your cleaning operations in minutes with Corpx.
            </p>

            <button className="px-4 py-2 rounded-xl bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition active:scale-95">
              Book Service
            </button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="relative border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>© 2026 Corpx. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            {["Privacy", "Terms", "Security"].map((item) => (
              <span
                key={item}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}