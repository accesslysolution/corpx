import { 
  Home, 
  CookingPot, 
  Layers, 
  Sofa, 
  Building2, 
  ShieldCheck, 
  Bug, 
  Key, 
  Factory 
} from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  desc: string;
  img: string;
  icon: any;
  metaTitle: string;
  metaDesc: string;
  extendedDesc: string;
  features: string[];
  processSteps: string[];
  faqs: FAQItem[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "home-deep-cleaning",
    title: "Home Deep Cleaning — Pune",
    tag: "Full-House Care",
    desc: "A complete top-to-bottom cleaning of your home. We go beyond dusting and mopping — tackling kitchen grease, bathroom grime, furniture dust, fan blades, window tracks, and every corner your regular cleaning routine cannot reach.",
    img: "/gallery/Deep_Cleaning.avif",
    icon: Home,
    metaTitle: "Home Deep Cleaning Services in Pune | Professional Home Cleaning",
    metaDesc: "Looking for reliable home deep cleaning in Pune? Our trained professionals deliver thorough, top-to-bottom cleaning for homes across Pune. Book a free quote today.",
    extendedDesc: "Regular cleaning keeps your home looking tidy. But over time, dust settles in places no mop reaches. Grease builds up behind appliances. Bathroom grout darkens. Ceiling fans become invisible dust traps. And the accumulated grime starts to affect the air you breathe and the way your home feels. Our home deep cleaning service in Pune is designed to fix that — thoroughly, systematically, and with the kind of attention to detail that leaves your home feeling genuinely refreshed.",
    features: [
      "Living Room & Bedrooms: Fans, light fixtures, walls, switches, skirting boards, interior windows, furniture surfaces, and floor deep clean.",
      "Kitchen: Exterior chimney surfaces, tiles, countertops, sink, cabinet exteriors, appliance surfaces, and hidden corner pockets.",
      "Bathrooms: Detailed scrub down of tiles, toilets, washbasins, fixtures, exhaust fans, mirrors, floors, and grout lines.",
      "Windows & Doors: Comprehensive polishing of interior glass, operational frames, handles, and mechanical sliding tracks.",
      "Hard-to-Reach Areas: Systematic clearance behind structural furniture, under beds, above cabinets, and narrow corners."
    ],
    processSteps: [
      "Pre-Cleaning Assessment: Our team walks through your home to understand the scope, identify problem areas, and confirm the custom cleaning plan.",
      "Dry Cleaning First: We start with dusting, vacuuming, and removing loose dirt from all surfaces including ceiling fans, walls, blinds, and floors.",
      "Wet Cleaning & Scrubbing: We apply appropriate cleaning solutions to surfaces and scrub away grease, stains, soap scum, and built-up grime.",
      "Final Mopping & Wipe-Down: All floors are polished and surfaces wiped clean. We ensure everything is completely dry and spotless.",
      "Inspection Walkthrough: We perform a final check with you. If any zone requires touching up, we complete it immediately on the spot."
    ],
    faqs: [
      {
        question: "How long does a home deep cleaning take?",
        answer: "Most homes are completed within 3 to 8 hours depending on the overall size and structural condition. We will provide a precise estimated time tracking window during your initial booking confirmation."
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer: "You only need to be available at the start for property access alignment and at the final phase for the inspection walkthrough. You do not need to remain present throughout the active operating shift."
      },
      {
        question: "How often should I get my home deep cleaned?",
        answer: "We highly recommend scheduling a comprehensive deep clean every 3 to 6 months. High-traffic households or residences with domestic pets benefit from more frequent cleaning intervals."
      },
      {
        question: "Are your cleaning products safe for children and pets?",
        answer: "Yes. We strictly utilize professional-grade, tested cleaning solutions that are powerful against stubborn environmental grime while remaining entirely safe for your household parameters."
      }
    ]
  },
  {
    id: "kitchen-deep-cleaning",
    title: "Kitchen Deep Cleaning — Pune",
    tag: "Hygiene Standard",
    desc: "Your kitchen works hard every day — and the grease, oil, and food residue builds up faster than you would think. We deep clean chimneys, tiles, countertops, cabinets, appliances, and sinks to leave your kitchen spotless and hygienic.",
    img: "/gallery/Hotel.avif",
    icon: CookingPot,
    metaTitle: "Kitchen Deep Cleaning Services in Pune | Grease & Grime Removal",
    metaDesc: "Professional kitchen deep cleaning in Pune. We remove grease, oil buildup, and hidden grime from chimneys, tiles, countertops, and more. Book your free quote.",
    extendedDesc: "The kitchen is where your family's meals are prepared — which makes it one of the most important spaces in your home to keep truly clean. But it is also one of the hardest to clean properly. Grease settles on surfaces invisibly. Oil accumulates inside chimneys. Food residue hides in tile grout and cabinet corners. Sinks develop limescale. And the longer it sits, the harder it gets to remove. Our kitchen deep cleaning service in Pune tackles all of it — using the right tools, the right products, and the patience it actually takes to do the job properly.",
    features: [
      "Chimney / Exhaust Hood: Exhaustive detailing of exterior surfaces, external filters, and localized grease trap deposits.",
      "Kitchen Tiles: Heavy manual scrub down and degreasing of wall surfaces, structural backsplashes, and horizontal grout lines.",
      "Countertops & Work Surfaces: Deep chemical scrubbing, biological sanitization, and stone perimeter buffing.",
      "Cabinets & Drawers: Absolute wipe-down and targeted grease removal across all exterior cabinet faces and framing tracks.",
      "Kitchen Sink: Complete mineral descaling, mechanical scrubbing, and antimicrobial drainage path sanitization.",
      "Appliance Exteriors: Outer surface microfabric polishing for refrigerators, microwaves, ovens, and matching countertop units."
    ],
    processSteps: [
      "Dry Wipe & Dusting: We remove loose structural dust and loose debris before applying any liquids, preventing unappealing surface smearing.",
      "Degreasing Application: Professional-grade emulsifying degreasers are carefully applied to grease-heavy zones and left to work.",
      "Scrubbing & Detail Cleaning: Every surface is scrubbed manually, paying close attention to complex grout lines and narrow corner tracks.",
      "Wipe-Down & Sanitisation: All target points are wiped clean, rinsed thoroughly where applicable, and left completely dry.",
      "Floor Cleaning: The kitchen floor is processed using advanced floor scrubbers and appropriate sanitizers for a pristine finish."
    ],
    faqs: [
      {
        question: "Why does professional kitchen deep cleaning matter?",
        answer: "A build-up of grease and organic residue is not just unhygienic — it represents a distinct fire hazard and directly impacts your indoor air quality. A systematic professional deep clean eliminates hidden bacteria vectors completely."
      }
    ]
  },
  {
    id: "facade-glass-cleaning",
    title: "Facade & Glass Cleaning — Pune",
    tag: "High-Rise Specialist",
    desc: "High-rise structural facade and exterior glass cleaning executed using modern safety tools, expert scaffolding frameworks, and rigorous safety checkpoints to ensure an immaculate, streak-free architectural finish.",
    img: "/gallery/Facade.avif",
    icon: Layers,
    metaTitle: "Bathroom Cleaning Services in Pune | Deep Bathroom Cleaning Experts",
    metaDesc: "Professional bathroom cleaning in Pune. We remove soap scum, hard water stains, and bacteria to leave your bathroom sparkling. Reliable, hygienic, and affordable.",
    extendedDesc: "Bathrooms need more than a quick wipe and a spray. Hard water stains build up on taps and showerheads. Soap scum settles on tiles and glass. Grout lines darken with mould. Exhaust fans clog with dust. And behind the visible grime lies bacteria that regular cleaning simply does not eliminate. Our professional bathroom cleaning service in Pune delivers a thorough, deep clean that leaves your bathroom visually spotless — and genuinely hygienic.",
    features: [
      "Toilet Structure: Disinfection and structural scrubbing of the bowl, seat, lid, external housing, and structural floor base.",
      "Tiles & Glass Walls: Full mechanical scrub down, vertical grout line cleaning, and complete environmental mould removal.",
      "Washbasin & Vanity Mirrors: Complete descaling, surface scrubbing, and streak-free mirror glass polishing.",
      "Shower & Bathtubs: Detailed descaling of shower trays, geometric glass partitions, and perimeter framing tracks.",
      "Taps & Metallic Fittings: Total elimination of stubborn mineral hard water stains, leaving chrome fixtures gleaming.",
      "Exhaust Fan Assemblies: Exterior casing clean down and immediate loose dust extraction from extraction grilles."
    ],
    processSteps: [
      "Initial Evaluation: Identification of specific mineral deposit tiers and surface chemical tolerances.",
      "Targeted Descaling: Application of professional descaling formulations to dissolve built-up calcium and hard water deposits.",
      "Mechanical Agitation: Focused scrubbing of tile faces, tracking parameters, and glass boundaries.",
      "Sanitizing Flush: Disinfection rinse across all major fixtures to establish code-compliant hygiene baselines."
    ],
    faqs: [
      {
        question: "Why does professional bathroom cleaning make a distinct difference?",
        answer: "Hard water across the Pune region causes stubborn mineral deposits that standard household consumer products simply cannot remove effectively. Our team deploys professional industrial descalers that break down years of scaling smoothly."
      }
    ]
  },
  {
    id: "sofa-upholstery-cleaning",
    title: "Sofa & Upholstery Cleaning — Pune",
    tag: "Fabric Care",
    desc: "Sofas, chairs, mattresses, and curtains collect dust, allergens, and stains over time. We use professional shampooing and, where needed, steam cleaning to restore the freshness of your upholstery without damaging the fabric.",
    img: "/gallery/Upholstery.avif",
    icon: Sofa,
    metaTitle: "Sofa Cleaning Pune | Professional Sofa & Upholstery Cleaning",
    metaDesc: "Expert sofa and upholstery cleaning in Pune. We remove dust, stains, and allergens from sofas, chairs, mattresses, and curtains. Book your sofa cleaning today.",
    extendedDesc: "That comfortable sofa you come home to every evening? Over time, it accumulates dust, skin particles, pet dander, food crumbs, and bacteria deep inside its fabric — far beyond what vacuuming can reach. And the stains that seem set in? Most can be significantly improved with the right technique. Our professional sofa and upholstery cleaning service in Pune uses specialised shampooing and, where required, steam cleaning to restore your furniture — gently and effectively.",
    features: [
      "Sofas & Sectionals: High-end detailing for all structural fabric profiles and dimensional layouts.",
      "Chairs & Armchairs: Complete stain extraction across dining seats, custom accent chairs, and fabric office fittings.",
      "Mattress Sterilization: Deep sub-surface extraction, organic stain neutralisation, and mite elimination.",
      "Curtain Maintenance: Advanced shampooing loops and steam refresh processes to eliminate atmospheric dust.",
      "Carpets & Fine Area Rugs: High-lift injection extraction cleaning paired with localized steam treatment configurations."
    ],
    processSteps: [
      "Inspection & Pre-Treatment: We assess the unique fabric weave, identify set-in stains, and apply precise target pre-treatment agents.",
      "Deep Shampooing: Specialized commercial upholstery shampoo is worked thoroughly into the material weave to loosen embedded dirt particles.",
      "Steam Cleaning: For heavy discoloration or deeply soiled upholstery, we activate high-pressure steam extraction units to safely sanitize without chemicals.",
      "Extraction & Drying: Moisture and emulsified soil layers are extracted using twin-stage vacuum extractors, establishing quick drying parameters."
    ],
    faqs: [
      {
        question: "What is the expected drying time for upholstery?",
        answer: "Drying time varies slightly by fabric weave density and seasonal humidity profiles. Most sofa installations are completely dry and ready for standard use within 2 to 4 hours post-extraction."
      }
    ]
  },
  {
    id: "office-cleaning-services",
    title: "Office Cleaning Services — Pune",
    tag: "Corporate Workspace",
    desc: "A clean office is not just about appearance — it affects productivity, employee wellbeing, and the impression you make on clients. We clean workstations, cabins, meeting rooms, common areas, pantries, and washrooms to a professional standard.",
    img: "/gallery/Corporate_Office.avif",
    icon: Building2,
    metaTitle: "Office Cleaning Services in Pune | Professional Office Deep Cleaning",
    metaDesc: "Professional office cleaning services in Pune. We deep clean workstations, cabins, meeting rooms, and washrooms. Reliable, flexible, and ISO-certified. Get a free quote.",
    extendedDesc: "The state of your office says a great deal about your business — to clients, to visitors, and to your own team. A clean, well-maintained workspace improves employee wellbeing, reduces sick days, and creates an environment where people can focus and do their best work. Our professional office cleaning service in Pune delivers thorough, reliable cleaning for workplaces of all sizes — from startups and coworking spaces to large corporate offices and commercial facilities.",
    features: [
      "Workstations & Desks: Microfabric sanitation of primary table tops, monitor casings, keyboards, and task chairs.",
      "Cabins & Meeting Rooms: Complete glass partition polishing, surface dusting, and deep hard floor maintenance.",
      "Common Areas & Lobbies: Detailing of primary reception bays, main entrance seating arrays, and high-touch corridor walls.",
      "Pantry & Cafeteria: Sanitization of food preparation surfaces, exterior appliance shells, utility sinks, and floors.",
      "Washrooms: Absolute deep cleaning, fixture chemical descaling, and continuous biological disinfection routines."
    ],
    processSteps: [
      "Flexible Scheduling Realignment: Operational deployment is arranged during off-peak hours (early morning, evening, or weekends) to ensure zero business disruption.",
      "Zonal Cleaning Deployment: Our professional team splits into assigned task groups across workstations, public lobbies, and utility zones.",
      "Industrial Dust Extraction: Commercial backpack HEPA vacuums sweep through open floor plates and fabric seating arrays.",
      "High-Touch Point Disinfection: Thorough sanitization tracking across all internal entry points, door handles, and public railings."
    ],
    faqs: [
      {
        question: "What facility variations do you systematically support across Pune?",
        answer: "We offer tailored cleaning services for corporate office complexes, co-working spaces, private clinics, educational institutions, commercial fulfillment centers, and high-end retail venues."
      }
    ]
  },
  {
    id: "sanitization-services",
    title: "Sanitization Services — Pune",
    tag: "Microbe Protection",
    desc: "Going beyond cleaning, our sanitization service uses professional-grade disinfectants to eliminate harmful bacteria and viruses on high-touch surfaces — giving your home or workplace an extra layer of protection.",
    img: "/gallery/Healthcare.avif",
    icon: ShieldCheck,
    metaTitle: "Sanitization Services in Pune | Home & Office Disinfection Experts",
    metaDesc: "Professional sanitization and disinfection services for homes and businesses in Pune. Reduce bacteria, viruses, and germs on high-touch surfaces. Book today.",
    extendedDesc: "A space that looks clean and a sanitised space are not the same thing. Harmful bacteria and viruses can survive on countertops, door handles, switches, and shared surfaces — completely invisible to the eye. Our professional sanitization service in Pune goes beyond appearance. Using hospital-grade, tested disinfectants, we treat high-touch surfaces and shared areas to create an environment that is not just visually clean — but genuinely safer for everyone in it.",
    features: [
      "Entry Points: High-intensity disinfection mapping across all internal/external door handles, knobs, and structural frames.",
      "Electrical Switch Matrix: Safe dry-wipe chemical sterilization of light switches, panel plug points, and access keypads.",
      "Horizontal Flat Workspaces: Hospital-grade chemical surface wipes across executive desks, countertops, and boardroom tables.",
      "Public Railings & Lift Tiers: Rigorous scrub down of elevator control arrays, public handrails, and entry turnstiles."
    ],
    processSteps: [
      "Pre-Clean Spatial Alignment: We strongly recommend scheduling a comprehensive Deep Clean before sanitization to clear layout layers.",
      "Disinfectant Atomization: Deployment of professional atomizing mist systems to treat complex open spaces evenly.",
      "Target Micro-Wiping: High-contact surface elements are addressed directly using specialized virucidal barrier solutions.",
      "Ventilation Phase Clearance: The treated facility is monitored through a quick drying phase before opening for full access."
    ],
    faqs: [
      {
        question: "How long does a standard sanitization service take to execute?",
        answer: "Most residential layouts and mid-sized corporate offices are completed within 1 to 3 hours. We utilize fast-acting products that let you safely re-enter the treated space within 30 to 60 minutes post-application."
      },
      {
        question: "How frequently should high-occupancy commercial properties be sanitised?",
        answer: "High-traffic commercial real estate spaces benefit most from weekly or fortnightly sanitization plans. Residential spaces generally maintain safe limits with treatments every 1 to 3 months."
      }
    ]
  },
  {
    id: "pest-control",
    title: "Pest Control — Pune",
    tag: "Infestation Shield",
    desc: "From cockroaches and termites to bed bugs and rodents, our expert pest control team uses safe, effective treatments to eliminate infestations and protect your property long-term.",
    img: "/gallery/Pest-Control.avif",
    icon: Bug,
    metaTitle: "Pest Control Services in Pune | Safe & Effective Pest Treatment",
    metaDesc: "Professional pest control in Pune for cockroaches, termites, bed bugs, rodents, and more. Safe treatments, long-lasting results. Book your inspection today.",
    extendedDesc: "Pests are more than a nuisance. They contaminate food, damage property, spread disease, and compromise the health of anyone living or working in the space. And once an infestation takes hold, the longer you wait, the harder it becomes to resolve. Our professional pest control service in Pune combines thorough inspection, targeted treatment, and long-term prevention — to eliminate current infestations and significantly reduce the risk of future ones.",
    features: [
      "Cockroach Remediation: Application of advanced clear gel baits and residual spray barriers designed for all life stages.",
      "Termite Structural Defense: Sub-slab chemical injections and localized wood-borer barrier treatments.",
      "Bed Bug Eradication: Target thermal and chemical flushing loops across framing seams and fabric junctions.",
      "Rodent Management: Installation of tamper-proof bait stations and structural entry-point mapping checks."
    ],
    processSteps: [
      "Rigorous Site Inspection: A comprehensive structural walkthrough to discover active biological nesting grounds and primary entry tracks.",
      "Assessment & Planning: We review our field findings with you, detail the exact chemical configurations, and coordinate safety measures.",
      "Targeted Mitigation Delivery: Precision application of approved, industry-standard treatments using advanced spraying hardware.",
      "Environmental Exclusion Advice: We outline exact sealing parameters and food storage habits to reduce future pest attraction risks."
    ],
    faqs: [
      {
        question: "Should a deep cleaning section follow a pest control treatment?",
        answer: "Yes, absolutely. We strongly advise scheduling a comprehensive deep clean 48 to 72 hours post pest treatment. This safely extracts dead insects, organic pest residues, and chemical traits, leaving your space perfectly hygienic."
      }
    ]
  }
];