import type { Metadata } from "next";
import Link from "next/link";

/* ─── METADATA ─── */
export const metadata: Metadata = {
  title: "Buy Here Pay Here Dallas TX | $999 Down Bad Credit Cars",
  description:
    "Buy here pay here car lots in Dallas TX. Bad credit, no credit, repo OK. In-house financing from $999 down. Pre-qualify in 60 seconds — no bank needed.",
  openGraph: {
    title: "Buy Here Pay Here Dallas TX | $999 Down | ReApprove Auto",
    description:
      "Bad credit car lots in Dallas TX. Get approved with $999 down. No bank, no broker. BHPH financing available today.",
    url: "https://reapproveauto.com/buy-here-pay-here-dallas",
  },
  alternates: {
    canonical: "https://reapproveauto.com/buy-here-pay-here-dallas",
  },
};

/* ─── LOCAL SCHEMA ─── */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["AutoDealer", "LocalBusiness"],
  "@id": "https://reapproveauto.com/buy-here-pay-here-dallas#localbusiness",
  name: "ReApprove Auto — Dallas Buy Here Pay Here",
  url: "https://reapproveauto.com/buy-here-pay-here-dallas",
  description:
    "Buy here pay here car dealer serving Dallas TX. In-house financing for bad credit buyers with down payments starting at $999. BHPH, subprime, and no credit check options available.",
  telephone: "+14694350306", // TODO: replace with your real number
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7767,
    longitude: -96.797,
  },
  areaServed: {
    "@type": "City",
    name: "Dallas",
    containedInPlace: { "@type": "State", name: "Texas" },
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dallas BHPH Financing Options",
    itemListElement: [
      {
        "@type": "Offer",
        name: "$999 Down Buy Here Pay Here Dallas",
        description:
          "In-house auto financing for Dallas TX buyers with bad credit, no credit, or past repossessions. Down payments starting at $999.",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where can I find buy here pay here car lots in Dallas TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ReApprove Auto connects Dallas buyers with BHPH dealerships across the city and surrounding DFW areas. Pre-qualify online in 60 seconds and we'll match you with the right lot.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a car in Dallas with bad credit and $999 down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many of our Dallas BHPH partners accept $999 as a minimum down payment for buyers with bad credit, no credit, or past repossessions. Income matters more than credit score.",
      },
    },
    {
      "@type": "Question",
      name: "Do Dallas buy here pay here dealers check credit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BHPH dealers in Dallas typically do not require good credit. Many offer no credit check options or make decisions based primarily on income and employment status.",
      },
    },
  ],
};

/* ─── NEARBY AREAS ─── */
const NEARBY = [
  { name: "Garland", href: "/buy-here-pay-here-garland" },
  { name: "Irving", href: "/buy-here-pay-here-irving" },
  { name: "Plano", href: "/buy-here-pay-here-plano" },
  { name: "Grand Prairie", href: "/buy-here-pay-here-grand-prairie" },
  { name: "Mesquite", href: "/buy-here-pay-here-mesquite" },
  { name: "Fort Worth", href: "/buy-here-pay-here-fort-worth" },
];

/* ─── PAGE ─── */
export default function DallasBHPHPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#0A0F0D]">
        {/* NAV */}
        <nav className="w-full max-w-md mx-auto flex items-center justify-between px-4 pt-8 pb-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="ReApprove Auto" className="h-12 w-auto" />
            <span className="font-bold text-white text-sm">ReApprove Auto</span>
          </Link>
          <span className="text-xs text-[#00C896] bg-[#00C896]/10 px-3 py-1 rounded-full font-medium">
            Dallas BHPH
          </span>
        </nav>

        {/* BREADCRUMB */}
        <div className="px-4 max-w-md mx-auto mb-4">
          <p className="text-xs text-[#8BA898]">
            <Link href="/" className="hover:text-[#00C896] transition-colors">Home</Link>
            {" "}/{" "}
            <span className="text-white">Buy Here Pay Here Dallas</span>
          </p>
        </div>

        {/* HERO */}
        <section className="px-4 pt-6 pb-12 max-w-md mx-auto">
          <div className="bg-[#00C896]/10 border border-[#00C896]/20 rounded-2xl px-4 py-2 inline-block mb-4">
            <p className="text-[#00C896] text-xs font-semibold uppercase tracking-wider">
              Dallas, TX · BHPH Available
            </p>
          </div>

          <h1 className="text-3xl font-black text-white tracking-tight leading-tight mb-4">
            Buy Here Pay Here Car Lots in Dallas TX — $999 Down, Bad Credit OK
          </h1>

          <p className="text-[#8BA898] text-base leading-relaxed mb-6">
            Looking for buy here pay here dealers in Dallas TX? ReApprove Auto
            connects you with in-house financing options that don&apos;t care
            about your credit score — just your income and ability to pay. Bad
            credit, no credit, past repo, bankruptcy — all welcome.
          </p>

          {/* Trust signals */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "$999", label: "Min. down payment" },
              { value: "60s", label: "Pre-qual time" },
              { value: "0", label: "Banks involved" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#111A15] border border-[#1C2B22] rounded-xl p-4 text-center"
              >
                <p className="text-[#00C896] font-black text-xl">{item.value}</p>
                <p className="text-[#8BA898] text-xs mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/apply"
            className="block w-full bg-[#00C896] hover:bg-[#00B584] text-[#0A0F0D] font-black text-lg py-5 rounded-2xl tracking-tight text-center transition-all"
          >
            Pre-Qualify for Dallas BHPH →
          </Link>
          <p className="text-[#8BA898] text-xs mt-3 text-center">
            No credit pull · No SSN · No bank
          </p>
        </section>

        {/* WHAT IS BHPH */}
        <section className="px-4 py-12 bg-[#111A15] border-y border-[#1C2B22]">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-black text-white tracking-tight mb-4">
              What Is Buy Here Pay Here in Dallas?
            </h2>
            <p className="text-[#8BA898] text-sm leading-relaxed mb-4">
              Buy here pay here (BHPH) is a type of in-house auto financing where
              the dealership acts as the lender. Instead of going to a bank or
              credit union, you finance the vehicle directly through the lot.
              Payments are made directly to the dealer — no third-party lender
              involved.
            </p>
            <p className="text-[#8BA898] text-sm leading-relaxed mb-4">
              Dallas BHPH dealers are the fastest path to a car when your credit
              score doesn&apos;t qualify you for traditional financing. Approval is
              based on income — not your FICO score.
            </p>
            <p className="text-[#8BA898] text-sm leading-relaxed">
              ReApprove Auto works as a fintech-powered BHPH network, connecting
              Dallas buyers with vetted in-house dealers and subprime lenders
              across the Metroplex.
            </p>
          </div>
        </section>

        {/* WHO WE HELP */}
        <section className="px-4 py-12 max-w-md mx-auto">
          <h2 className="text-2xl font-black text-white tracking-tight mb-6">
            Who Can Get Approved for BHPH in Dallas?
          </h2>
          <div className="flex flex-col gap-3">
            {[
              { icon: "❌", label: "Bad credit (300–580 score)" },
              { icon: "🆕", label: "No credit history or first-time buyer" },
              { icon: "🔄", label: "Past car repossession" },
              { icon: "📋", label: "Recent bankruptcy (Chapter 7 or 13)" },
              { icon: "💵", label: "Cash income, gig work, or self-employed" },
              { icon: "🌍", label: "New to the US or no Social Security Number" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#111A15] border border-[#1C2B22] rounded-xl px-5 py-4 flex items-center gap-4"
              >
                <span className="text-xl">{item.icon}</span>
                <p className="text-white text-sm font-medium">{item.label}</p>
                <span className="ml-auto text-[#00C896] text-sm font-bold">✓</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-12 bg-[#111A15] border-y border-[#1C2B22]">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-black text-white tracking-tight mb-8">
              Dallas BHPH — Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-4">
              {faqSchema.mainEntity.map((item) => (
                <div
                  key={item.name}
                  className="bg-[#0A0F0D] border border-[#1C2B22] rounded-2xl p-6"
                >
                  <p className="text-white font-bold text-sm mb-2">{item.name}</p>
                  <p className="text-[#8BA898] text-sm leading-relaxed">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEARBY CITIES */}
        <section className="px-4 py-12 max-w-md mx-auto">
          <h2 className="text-xl font-black text-white tracking-tight mb-6">
            Also Serving Nearby DFW Cities
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {NEARBY.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="bg-[#111A15] border border-[#1C2B22] hover:border-[#00C896]/40 rounded-xl px-4 py-4 flex items-center justify-between group transition-all"
              >
                <p className="text-white text-sm font-bold group-hover:text-[#00C896] transition-colors">
                  {city.name}
                </p>
                <span className="text-[#00C896] text-xs">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 py-12 bg-[#00C896]/5 border-t border-[#00C896]/10">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-black text-white tracking-tight mb-3">
              Ready to Drive in Dallas Today?
            </h2>
            <p className="text-[#8BA898] text-sm mb-8">
              Start your 60-second pre-qualification. No credit pull, no bank, no
              judgment. Just income and a down payment.
            </p>
            <Link
              href="/apply"
              className="block w-full bg-[#00C896] hover:bg-[#00B584] text-[#0A0F0D] font-black text-lg py-5 rounded-2xl tracking-tight text-center transition-all"
            >
              Pre-Qualify Now — $999 Min. Down →
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="px-4 py-8 border-t border-[#1C2B22]">
          <div className="max-w-md mx-auto flex flex-col gap-3 text-xs text-[#8BA898]">
            <Link href="/" className="text-white font-bold hover:text-[#00C896]">← Back to ReApprove Auto Home</Link>
            <p>© {new Date().getFullYear()} ReApprove Auto. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-[#00C896]">Privacy</Link>
              <Link href="/terms-of-use" className="hover:text-[#00C896]">Terms</Link>
              <Link href="/faq" className="hover:text-[#00C896]">FAQ</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
