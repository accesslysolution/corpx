import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/ui/floatingCTA";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Corpx | Professional Cleaning Services",
    template: "%s | Corpx",
  },
  description:
    "Premium residential, commercial, and industrial cleaning services delivered at your doorstep with professional care.",
  metadataBase: new URL("https://corpx.com"),
  openGraph: {
    title: "Corpx Cleaning Services",
    description: "Professional cleaning services for homes and businesses.",
    type: "website",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        
        {/* App Shell */}
        <div className="flex min-h-screen flex-col">
          
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <Footer />
        </div>

        {/* Floating CTA (outside layout flow) */}
        <FloatingContactButtons />

      </body>
    </html>
  );
}