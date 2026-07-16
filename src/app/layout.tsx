import type { Metadata } from "next";
// Updated: Swapped out Playfair_Display for Poppins
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Components (Preserved your explicit file paths and shell lifecycle layout)
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/ui/FloatingContactButtons";
import Preloader from "@/components/ui/preloader";

// Initialize modern, geometric heading typography loader
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// High-end, conversion-oriented local SEO configuration
export const metadata: Metadata = {
  title: {
    default: "Corpx | Premium Deep Cleaning Services in Pune, Mumbai & Bangalore",
    template: "%s | Corpx",
  },
  description:
    "Trusted deep cleaning service for luxury homes, modern offices, and commercial properties across Pune, Mumbai, Hyderabad, and Bangalore. Safe products, verified professionals, and spotless results since 2016.",
  metadataBase: new URL("https://corpx.com"),
  keywords: [
    "Deep Cleaning Services in Pune",
    "Home Cleaning Mumbai",
    "Office Cleaning Bangalore",
    "Sofa Cleaning Pune",
    "Kitchen Cleaning Hyderabad",
    "Bathroom Cleaning Pune",
    "Commercial Cleaning Services India",
  ],
  openGraph: {
    title: "Corpx Premium Cleaning Services",
    description: "Expert top-to-bottom deep cleaning for residential and commercial spaces across Pune, Mumbai, Hyderabad & Bangalore.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      /* Updated: Injecting poppins.variable instead of playfair.variable */
      className={`${poppins.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="font-body antialiased bg-white text-neutral-900 selection:bg-[#006fe3]/10 selection:text-[#006fe3]">
        
        {/* Preloader - Renders first in the document execution flow */}
        <Preloader />

        {/* App Shell Layer Layout */}
        <div className="flex min-h-screen flex-col relative">
          
          {/* Fixed/Sticky Navigation Element */}
          <Navbar />

          {/* Main Context Stage - Built with custom layout spacing to prevent sticky Navbar overlap */}
          <main className="flex-1">
            {children}
          </main>

          {/* Minimalist Footing Asset */}
          <Footer />
        </div>

        {/* Floating CTA System (Positioned cleanly outside standard screen layout constraints) */}
        <FloatingContactButtons />

      </body>
    </html>
  );
}