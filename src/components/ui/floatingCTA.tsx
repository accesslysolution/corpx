"use client";

import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

export default function FloatingContactButtons() {
  return (
    <>
      {/* WhatsApp - LEFT */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-24 md:bottom-6 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition z-50"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call - RIGHT */}
      <a
        href="tel:+919999999999"
        className="fixed right-4 bottom-24 md:bottom-6 w-14 h-14 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition z-50"
      >
        <FiPhoneCall size={22} />
      </a>
    </>
  );
}