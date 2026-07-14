"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Support",
    value: "corpx.company@gmail.com",
    color: "text-blue-600",
    link: "mailto:corpx.company@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone Support",
    value: "+91 9595000022",
    color: "text-emerald-600",
    link: "tel:+919595000022",
  },
  {
    icon: Phone, // Using Phone icon for WhatsApp
    title: "WhatsApp",
    value: "Click to chat",
    color: "text-green-600",
    link: "https://wa.me/919595000022",
  },
  // All 4 City Offices listed individually:
  {
    icon: MapPin,
    title: "Pune Office",
    value: "Katepuram Chowk, Sangavi, Pune",
    color: "text-rose-600",
    link: "https://maps.google.com/?q=Katepuram+Chowk,Sangavi,Pune",
  },
  {
    icon: MapPin,
    title: "Mumbai Office",
    value: "Andheri West, Mumbai, Maharashtra",
    color: "text-rose-600",
    link: "https://maps.google.com/?q=Andheri+West,Mumbai",
  },
  {
    icon: MapPin,
    title: "Bangalore Office",
    value: "Indiranagar, Bangalore, Karnataka",
    color: "text-rose-600",
    link: "https://maps.google.com/?q=Indiranagar,Bangalore",
  },
  {
    icon: MapPin,
    title: "Hyderabad Office",
    value: "HITEC City, Hyderabad, Telangana",
    color: "text-rose-600",
    link: "https://maps.google.com/?q=HITEC+City,Hyderabad",
  },
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contactDetails.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target={item.title.includes("Office") ? "_blank" : undefined}
          rel={item.title.includes("Office") ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(79,70,229,0.1)] transition-all duration-300 block"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg bg-gray-50 ${item.color}`}>
              <item.icon size={20} />
            </div>
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">{item.value}</p>
        </motion.a>
      ))}
    </div>
  );
}