import type { Metadata } from "next";
import Link from "next/link";

/* ─── METADATA ─── */
export const metadata: Metadata = {
  title: "FAQ — Buy Here Pay Here & Bad Credit Car Loans in DFW",
  description:
    "Answers to the most common questions about buy here pay here financing, bad credit car loans, $999 down options, and BHPH dealers in DFW Texas.",
  alternates: { canonical: "https://www.reapproveauto.com/faq" },
};

/* ─── ALL FAQ DATA ─── */
const FAQ_SECTIONS = [
  {
    category: "Getting Approved",
    faqs: [
      {
        q: "Can I get approved with bad credit or no credit?",
        a: "Yes. ReApprove Auto works with in-house BHPH lenders who approve based on income, not credit scores. Bad credit (even below 500), no credit, and first-time buyers are all welcome.",
      },
      {
        q: "What credit score do I need?",
        a: "There is no minimum credit score for in-house (BHPH) financing. If you have steady income and a down payment, you can get approved regardless of your score — or lack of one.",
      },
      {
        q: "Can I get approved after a repossession?",
        a: "Yes. A past repossession does not disqualify you. We specialize in second-chance financing. Income and a down payment matter more than your repo history.",
      },
      {
        q: "Can I get a car loan after bankruptcy?",
        a: "Yes. Many buyers get approved during or after Chapter 7 or Chapter 13 bankruptcy through BHPH dealers. Discharge status and income are the key factors.",
      },
      {
        q: "I'm self-employed or work gig jobs. Can I qualify?",
        a: "Absolutely. We accept all forms of income verification including bank statements, cash deposits, DoorDash/Uber earnings summaries, 1099s, and self-employment records.",
      },
    ],
  },
  {
    category: "Down Payments & Costs",
    faqs: [
      {
        q: "What is the minimum down payment?",
        a: "Down payments start at $999 for many vehicles. The exact amount depends on the car price and your monthly income. Higher income may qualify you for a lower percentage down.",
      },
      {
        q: "Can I get a car with no money down?",
        a: "Some programs offer zero down or deferred down payment options, but these are rare and income-dependent. Most buyers start with $999–$1,500 down.",
      },
      {
        q: "Are there hidden fees?",
        a: "ReApprove Auto is free to use. The car price, down payment, and any dealer fees are disclosed by the dealership before you sign anything.",
      },
    ],
  },
  {
    category: "The Process",
    faqs: [
      {
        q: "How fast is the pre-qualification?",
        a: "About 60 seconds. You enter your monthly income, answer one question about how you get paid, and submit your contact info. Our team reaches out during your preferred window.",
      },
      {
        q: "Does pre-qualifying hurt my credit score?",
        a: "No. Our pre-qualification uses a soft inquiry — your credit score is not affected. A hard pull only happens if you move forward with a specific dealer or lender.",
      },
      {
        q: "What documents do I need?",
        a: "Typically: a valid government-issued photo ID, proof of income (pay stubs, bank statements, or employer letter), and proof of Texas residency (utility bill, lease, etc.).",
      },
      {
        q: "Can I drive home the same day?",
        a: "In most cases, yes. Same-day approvals and drive-offs are common with BHPH financing, especially when you come prepared with your documents and down payment.",
      },
    ],
  },
  {
    category: "What Is BHPH Financing",
    faqs: [
      {
        q: "What does Buy Here Pay Here mean?",
        a: "Buy Here Pay Here (BHPH) means the dealership acts as the lender. You buy the car at the lot and make your payments directly to that same lot — no bank or third-party lender involved.",
      },
      {
        q: "What is the difference between BHPH and in-house financing?",
        a: "They are the same thing used interchangeably. Both mean the dealer finances the vehicle internally rather than sending you to a bank.",
      },
      {
        q: "What is subprime auto financing?",
        a: "Subprime financing refers to loans for buyers with credit scores below 620. Subprime lenders specialize in higher-risk borrowers and typically charge higher interest rates than prime loans.",
      },
      {
        q: "Are BHPH interest rates higher than bank rates?",
        a: "Yes, typically. BHPH and subprime rates are higher because lenders take on more risk. However, many buyers find the trade-off worthwhile given the access to transportation and the opportunity to rebuild credit.",
      },
    ],
  },
  {
    category: "Coverage Area",
    faqs: [
      {
        q: "Do you serve all of DFW?",
        a: "Yes. ReApprove Auto connects buyers across Dallas, Fort Worth, Arlington, Garland, Irving, Plano, Grand Prairie, Mesquite, and surrounding Metroplex cities.",
      },
      {
        q: "Do you serve Houston, San Antonio, or Austin?",
        a: "Our primary focus is the DFW Metroplex. We are expanding to other Texas cities — check back or contact us to see if your city is covered.",
      },
    ],
  },
];

/* ─── SCHEMA (full FAQ set) ─── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_SECTIONS.flatMap((section) =>
    section.faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    }))
  ),
};

/* ─── PAGE ─── */
export default function FAQPage() {
  return (
    <>
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
        </nav>

        {/* BREADCRUMB */}
        <div className="px-4 max-w-md mx-auto mb-4">
          <p className="text-xs text-[#8BA898]">
            <Link href="/" className="hover:text-[#00C896] transition-colors">Home</Link>
            {" "}/{" "}
            <span className="text-white">FAQ</span>
          </p>
        </div>

        {/* HEADER */}
        <section className="px-4 pt-6 pb-10 max-w-md mx-auto">
          <h1 className="text-3xl font-black text-white tracking-tight leading-tight mb-4">
            Buy Here Pay Here & Bad Credit Car Loan FAQs — DFW Texas
          </h1>
          <p className="text-[#8BA898] text-base leading-relaxed">
            Everything you need to know about BHPH financing, bad credit car
            loans, $999 down options, and how ReApprove Auto works.
          </p>
        </section>

        {/* FAQ SECTIONS */}
        {FAQ_SECTIONS.map((section) => (
          <section
            key={section.category}
            className="px-4 py-8 max-w-md mx-auto border-t border-[#1C2B22]"
          >
            <h2 className="text-lg font-black text-[#00C896] tracking-tight mb-6 uppercase">
              {section.category}
            </h2>
            <div className="flex flex-col gap-4">
              {section.faqs.map(({ q, a }) => (
                <div
                  key={q}
                  className="bg-[#111A15] border border-[#1C2B22] rounded-2xl p-6"
                >
                  <p className="text-white font-bold text-sm mb-2">{q}</p>
                  <p className="text-[#8BA898] text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="px-4 py-12 bg-[#00C896]/5 border-t border-[#00C896]/10">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-black text-white tracking-tight mb-3">
              Still Have Questions?
            </h2>
            <p className="text-[#8BA898] text-sm mb-8">
              The fastest way to get answers specific to your situation is to
              start a pre-qualification — it takes 60 seconds and doesn&apos;t
              affect your credit.
            </p>
            <Link
              href="/apply"
              className="block w-full bg-[#00C896] hover:bg-[#00B584] text-[#0A0F0D] font-black text-lg py-5 rounded-2xl tracking-tight text-center transition-all mb-4"
            >
              Start My Pre-Qualification →
            </Link>
            <p className="text-[#8BA898] text-xs">
              Or call us:{" "}
              <a href="tel:+14694350306" className="text-[#00C896] font-bold">
                (469) 435-0306
              </a>
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="px-4 py-8 border-t border-[#1C2B22]">
          <div className="max-w-md mx-auto flex flex-col gap-3 text-xs text-[#8BA898]">
            <Link href="/" className="text-white font-bold hover:text-[#00C896]">
              ← Back to ReApprove Auto
            </Link>
            <p>© {new Date().getFullYear()} ReApprove Auto. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
