import { 
  ShieldCheck, 
  Home, 
  Flame, 
  Building2 
} from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  icon: any;
  items: FAQItem[];
}

export const faqsCategoriesData: FAQCategory[] = [
  {
    id: "general",
    name: "General & Standards",
    icon: ShieldCheck,
    items: [
      {
        question: "What makes your cleaning service unique across Pune?",
        answer: "We are an ISO 9001:2015 Quality Management System certified enterprise. Our entire operational platform is built on strict background verification matrices, systematic quality audits, and professional-grade industrial equipment arrays, replacing abstract promises with audited results."
      },
      {
        question: "Are your specialized cleaning formulations safe for families and domestic pets?",
        answer: "Yes, completely. We exclusively deploy professional-grade, eco-certified surfactant cleaning solutions that pull stubborn carbon grime and biological staining fields without leaving residual chemical outlines or toxic odor traits inside your interior architecture."
      }
    ]
  },
  {
    id: "residential",
    name: "Home Deep Cleaning",
    icon: Home,
    items: [
      {
        question: "How long does a standard full-home deep cleaning operation take?",
        answer: "Most properties are fully optimized within 3 to 8 hours depending entirely on the total square footage footprint and existing structural environmental build-up conditions. A precise completion tracking time frame is always verified by our shift lead upon initial onboarding walkthrough."
      },
      {
        question: "Do I need to remain physically present at the site throughout the cleaning shift?",
        answer: "No, physical presence is not required. You only need to be present during the first fifteen minutes for site onboarding clearance access and at the terminal closing phase for the signature inspection walkthrough handoff."
      },
      {
        question: "What is the recommended operational frequency for residential deep cleaning?",
        answer: "To secure baseline environmental air purity and protect surface capitalization layers from deterioration, we advise executing a comprehensive deep cleaning sweep every 3 to 6 months. High-density residential spaces or estates hosting domestic animals benefit most from quarterly rotations."
      }
    ]
  },
  {
    id: "kitchen-bath",
    name: "Kitchen & Bathroom Specialist",
    icon: Flame,
    items: [
      {
        question: "Why does professional kitchen degreasing matter compared to standard wipe-downs?",
        answer: "Heavy, unmitigated oil deposits and organic carbon buildup create direct industrial fire hazards while systematically damaging underlying extraction appliance components. Our technical team agitates and extracts these stubborn layers using target emulsifying degreasers to restore standard food safety parameters."
      },
      {
        question: "How does your team treat localized hard water scaling and mineral deposits in bathrooms?",
        answer: "Pune regional hard water matrices generate dense calcium carbonate crystallization networks across fixtures and tiles. We break these bounds apart utilizing specialized low-pH descaling compound mixtures that peel away layers of calcification cleanly without compromising chrome platings or mirror surfaces."
      }
    ]
  },
  {
    id: "commercial-specialized",
    name: "Commercial & Specialized",
    icon: Building2,
    items: [
      {
        question: "What is the standard drying window for fabric sofas and upholstery pieces?",
        answer: "Utilizing our heavy injection-moisture twin-stage vacuum extraction units, more than 90% of structural moisture is pulled from the padding material lines instantly. Upholstered assets are thoroughly dry, refreshed, and prepared for active functional use within 2 to 4 hours."
      },
      {
        question: "Should a deep cleaning section follow a comprehensive pest control application?",
        answer: "Yes, this is a critical health protocol requirement. We strongly recommend scheduling a thorough deep clean 48 to 72 hours post pest application. This sequence isolates and extracts tracking toxins, target chemicals, and deceased organic pest residues from food prep areas and private rooms safely."
      },
      {
        question: "Do you offer flexible off-peak hours scheduling for corporate workspaces?",
        answer: "Yes, absolutely. To protect business operational continuity, our corporate commercial cleaning field operators execute deep clean shifts across late-night, early morning, and weekend slots, strictly aligned to your operational facility framework parameters."
      }
    ]
  }
];