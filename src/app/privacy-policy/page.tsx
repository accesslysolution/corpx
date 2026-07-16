import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Security",
  description:
    "Learn how CorpX Operations manages, protects, and secures your personal and property data across Pune, Mumbai, Bangalore, and Hyderabad.",
  openGraph: {
    title: "Privacy Policy | CorpX Premium Cleaning",
    description: "Our commitment to ISO 9001:2015 data security and client privacy standards.",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 16, 2026";

  return (
    <div className="bg-neutral-50 min-h-screen py-16 md:py-24 font-body text-neutral-700 selection:bg-[#006fe3]/10 selection:text-[#006fe3]">
      
      {/* Widescreen Header Canvas */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="inline-flex items-center gap-2 bg-white border border-neutral-200/80 rounded-full px-4 py-1.5 shadow-2xs mb-6">
          <ShieldCheck size={14} className="text-[#006fe3]" />
          <span className="text-[11px] font-bold tracking-wider uppercase text-neutral-800 font-heading">
            ISO 9001:2015 Certified Operations &bull;
          </span>
        </div>

        <h1 className="font-heading font-bold text-neutral-900 text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] mb-6">
          Privacy Policy &amp; <br className="hidden sm:inline" />
          <span className="text-[#006fe3] bg-gradient-to-r from-[#006fe3] to-[#005bc4] bg-clip-text text-transparent">
            Data Security Standards
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-8 text-xs sm:text-sm text-neutral-500 font-medium">
          <p>
            Operating entity: <strong className="text-neutral-900">Corp Xtensions LLP (CorpX)</strong>
          </p>
          <p className="bg-neutral-200/60 px-3 py-1 rounded-md w-fit">
            Last Updated: <span className="font-semibold text-neutral-800">{lastUpdated}</span>
          </p>
        </div>
      </div>

      {/* Main Legal Editorial Matrix */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Quick Navigation Sidebar */}
        <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-6 bg-white p-6 rounded-2xl border border-neutral-200/70 shadow-xs hidden sm:block">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-100 pb-3 font-heading">
            Policy Summary
          </h3>
          <ul className="space-y-3 text-xs font-semibold text-neutral-600">
            <li className="flex items-center gap-2 text-[#006fe3]">
              <CheckCircle2 size={14} className="shrink-0" /> Zero Data Selling Guarantee
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-neutral-400 shrink-0" /> Encrypted Form Transmission
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-neutral-400 shrink-0" /> Strict WhatsApp &amp; SMS Opt-In
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-neutral-400 shrink-0" /> Right to Immediate Deletion
            </li>
          </ul>

          <div className="pt-4 border-t border-neutral-100">
            <p className="text-[11px] text-neutral-400 font-medium leading-relaxed mb-3">
              Need immediate clarification regarding your submitted property details?
            </p>
            <a 
              href="mailto:corpx.companny@gmail.com" 
              className="text-xs font-bold text-[#006fe3] hover:underline inline-flex items-center gap-1"
            >
              Contact Privacy Officer <ArrowRight size={12} />
            </a>
          </div>
        </aside>

        {/* Right Column: Detailed Clauses & Content */}
        <div className="lg:col-span-8 space-y-12 text-sm sm:text-base leading-relaxed text-neutral-600 font-body">
          
          {/* Section 1 */}
          <section className="space-y-4 bg-white p-8 rounded-3xl border border-neutral-200/60 shadow-xs">
            <div className="flex items-center gap-3 text-neutral-900 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#006fe3]/10 flex items-center justify-center text-[#006fe3] shrink-0">
                <FileText size={18} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading tracking-tight">
                1. Introduction &amp; Scope
              </h2>
            </div>
            <p>
              At CorpX Operations (<strong>&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;</strong>), preserving the privacy and security of our residential, corporate, and industrial clients is an absolute operational priority. This Privacy Policy outlines how we collect, store, utilize, and protect the personal and property data you provide when accessing our digital interfaces or utilizing our deep cleaning and facility management services across Pune, Mumbai, Bangalore, and Hyderabad.
            </p>
            <p>
              By accessing our website, submitting service inquiry forms, or communicating with our operational teams via phone or WhatsApp, you consent to the data practices described within this architectural standard.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 bg-white p-8 rounded-3xl border border-neutral-200/60 shadow-xs">
            <div className="flex items-center gap-3 text-neutral-900 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#006fe3]/10 flex items-center justify-center text-[#006fe3] shrink-0">
                <Eye size={18} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading tracking-tight">
                2. Information We Systematically Collect
              </h2>
            </div>
            <p>
              To engineer and deliver precise cleaning solutions tailored to your specific physical environments, we collect minimal, highly functional data points:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 marker:text-[#006fe3]">
              <li>
                <strong className="text-neutral-900">Personal Identification:</strong> Your legal name, primary contact telephone number, and active email address when you request a quotation or initiate a booking.
              </li>
              <li>
                <strong className="text-neutral-900">Spatial &amp; Location Metrics:</strong> The city (Pune, Mumbai, Bangalore, or Hyderabad), specific property address, and architectural scale (e.g., residential layout, corporate square footage, facade height) required to deploy our field teams.
              </li>
              <li>
                <strong className="text-neutral-900">Service Specifications:</strong> Specific cleaning requirements, access constraints, preferred operational timelines, and any custom notes submitted through our digital matrix.
              </li>
              <li>
                <strong className="text-neutral-900">Digital Telemetry:</strong> Anonymous browser type, device screen resolution, and routing timestamps automatically logged to optimize interface rendering and platform security.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 bg-white p-8 rounded-3xl border border-neutral-200/60 shadow-xs">
            <div className="flex items-center gap-3 text-neutral-900 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#006fe3]/10 flex items-center justify-center text-[#006fe3] shrink-0">
                <Lock size={18} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading tracking-tight">
                3. How We Utilize Your Information
              </h2>
            </div>
            <p>
              Your data is strictly isolated to operational fulfillment and quality assurance. We never sell, lease, or trade your personal information to third-party marketing aggregators or advertising networks. We use your data exclusively to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 marker:text-[#006fe3]">
              <li>Calculate accurate, transparent cost estimates and service timelines.</li>
              <li>Dispatch verified, background-checked cleaning professionals to your designated premises.</li>
              <li>Send critical operational notifications, appointment confirmations, and quotations via email or WhatsApp.</li>
              <li>Maintain ISO 9001:2015 quality control records and post-service inspection benchmarks.</li>
              <li>Comply with municipal, state, and national taxation and legal reporting frameworks.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 bg-white p-8 rounded-3xl border border-neutral-200/60 shadow-xs">
            <div className="flex items-center gap-3 text-neutral-900 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#006fe3]/10 flex items-center justify-center text-[#006fe3] shrink-0">
                <ShieldCheck size={18} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading tracking-tight">
                4. Data Protection &amp; Third-Party Sharing
              </h2>
            </div>
            <p>
              We implement robust, industry-standard encryption (SSL/TLS) for all digital data transmissions. Stored customer records are restricted within secure database environments accessible only by authorized operational managers.
            </p>
            <p>
              We share structural data only with vetted, essential enterprise partners strictly necessary for service execution:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/70">
                <h4 className="font-bold text-neutral-900 text-xs uppercase tracking-wider mb-1 font-heading">
                  Communication Gateways
                </h4>
                <p className="text-xs text-neutral-500">
                  Shared with WhatsApp (Meta) and secure transactional email servers solely to deliver your requested quotes and alerts.
                </p>
              </div>
              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/70">
                <h4 className="font-bold text-neutral-900 text-xs uppercase tracking-wider mb-1 font-heading">
                  Legal Compliance
                </h4>
                <p className="text-xs text-neutral-500">
                  Disclosed only if mandated by official governmental authorities or judicial subpoenas under applicable Indian law.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 bg-white p-8 rounded-3xl border border-neutral-200/60 shadow-xs">
            <div className="flex items-center gap-3 text-neutral-900 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#006fe3]/10 flex items-center justify-center text-[#006fe3] shrink-0">
                <CheckCircle2 size={18} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading tracking-tight">
                5. Your Privacy Rights &amp; Control
              </h2>
            </div>
            <p>
              You retain sovereign control over your personal identification records. At any point before, during, or after service fulfillment, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 marker:text-[#006fe3]">
              <li>
                <strong className="text-neutral-900">Right of Access:</strong> Request a full summary of the contact and property details currently archived in our active database.
              </li>
              <li>
                <strong className="text-neutral-900">Right to Rectification:</strong> Instantly update or correct inaccurate phone numbers, billing addresses, or site specifications.
              </li>
              <li>
                <strong className="text-neutral-900">Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> Command the permanent deletion of your personal records from our operational systems, provided there are no pending financial settlements or legal retention mandates.
              </li>
              <li>
                <strong className="text-neutral-900">Communication Opt-Out:</strong> Unsubscribe from non-essential promotional communications or seasonal maintenance reminders at any time with a single verbal or written request.
              </li>
            </ul>
          </section>

          {/* Section 6: Direct Contact Matrix */}
          <section className="bg-gradient-to-br from-neutral-900 to-neutral-950 text-white p-8 md:p-10 rounded-3xl shadow-lg space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#006fe3] bg-[#006fe3]/10 px-3 py-1 rounded-sm">
                Compliance Terminal
              </span>
              <h3 className="text-2xl font-bold font-heading tracking-tight">
                Direct Privacy Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
                If you have questions regarding data retention policies, ISO compliance records, or wish to exercise your data deletion rights, reach out directly to our corporate oversight team:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-neutral-800 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#006fe3] shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[11px] text-neutral-400 font-medium">Email Privacy Officer</p>
                  <a href="mailto:corpx.companny@gmail.com" className="font-bold text-white hover:text-[#006fe3] transition-colors">
                    corpx.companny@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#006fe3] shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[11px] text-neutral-400 font-medium">Call Operational HQ</p>
                  <a href="tel:+919595000022" className="font-bold text-white hover:text-[#006fe3] transition-colors">
                    +91 95950 00022
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-400 border-t border-neutral-800/80">
              <MapPin size={14} className="text-[#006fe3] shrink-0" />
              <span>Corporate Operations: Pune, Maharashtra &bull; Serving Pune, Mumbai, Bangalore &amp; Hyderabad</span>
            </div>
          </section>

          {/* Action Call Pipeline Link */}
          <div className="pt-6 flex justify-end">
            <Link 
              href="/contact" 
              className="btn-urgent-orange inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm shadow-md group"
            >
              Return to Contact Matrix
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}