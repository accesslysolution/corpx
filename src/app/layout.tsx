import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Components (Preserved your explicit file paths and shell lifecycle layout)
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/ui/FloatingContactButtons";
import Preloader from "@/components/ui/preloader";

// Initialize elegant, editorial typography loaders
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "800"],
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
    default: "Corpx | Premium Deep Cleaning Services in Pune",
    template: "%s | Corpx",
  },
  description:
    "Pune's most trusted deep cleaning service for luxury homes, modern offices, and commercial properties[cite: 1]. Safe products, verified professionals, and spotless results since 2016[cite: 1].",
  metadataBase: new URL("https://corpx.com"),
  keywords: [
    "Deep Cleaning Services in Pune",
    "Home Cleaning Pune",
    "Sofa Cleaning Pune",
    "Kitchen Cleaning Pune",
    "Bathroom Cleaning Pune",
    "Office Cleaning Pune",
  ],
  openGraph: {
    title: "Corpx Premium Cleaning Services Pune",
    description: "Expert top-to-bottom deep cleaning for residential and commercial spaces across Pune[cite: 1].",
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
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}
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