import type { Metadata } from "next";
import Link from "next/link";

/* ─── METADATA ─── */
export const metadata: Metadata = {
  title: "Bad Credit Car Loans Texas | $999 Down | ReApprove Auto",
  description:
    "Get approved for a bad credit car loan in Texas with just $999 down. No bank needed. In-house and subprime auto financing available statewide. Pre-qualify in 60 seconds.",
  openGraph: {
    title: "Bad Credit Car Loans Texas | $999 Down | ReApprove Auto",
    description:
      "Bad credit? No credit? Repo? We connect Texas buyers with in-house lenders who say yes. $999 min down. Pre-qualify in 60 seconds.",
    url: "https://reapproveauto.com/bad-credit-car-loans",
  },
  alternates: {
    canonical: "https://reapproveauto.com/bad-credit-car-loans",
  },
};

/* ─── SCHEMA ─── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: "Bad Credit Car Loans Texas",
  description:
    "In-house and subprime auto financing for Texas buyers with bad credit, no credit, or past repossessions. Down payments starting at $999. Fast approvals across DFW, Houston, San Antonio, and statewide.",
  provider: {
    "@type": "Organization",
    name: "ReApprove Auto",
    url: "https://reapproveauto.com",
  },
  areaServed: { "@type": "State", name: "Texas" },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "500",
    description: "Minimum down payment for bad credit car loan approval",
  },
  featureList: [
    "No hard credit pull to pre-qualify",
    "Bad credit, no credit, and repo accepted",
    "In-house financing — no bank required",
    "Same-day approval in most cases",
    "Down payments starting at $999",
    "Income-based approval process",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get a car loan with bad credit in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest way is through a buy here pay here dealer or subprime lender who approves based on income rather than credit score. ReApprove Auto pre-qualifies you in 60 seconds and matches you with the right lender.",
      },
    },
    {
      "@type": "Question",
      name: "What credit score do I need to get a car loan in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With in-house financing (BHPH), there is no minimum credit score. We work with buyers who have scores as low as 300, or no credit history at all. What matters is your income.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a bad credit car loan with $999 down in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many of our partner dealers and lenders accept down payments as low as $999 for buyers with bad credit. The exact minimum depends on the vehicle price and your income level.",
      },
    },
    {
      "@type": "Question",
      name: "Will applying hurt my credit score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our pre-qualification process uses a soft inquiry — it does not affect your credit score. You only go through a hard pull if you move forward with a specific lender or dealer.",
      },
    },
  ],
};

/* ─── COMPARISON TABLE DATA ─── */
const COMPARISON = [
  { factor: "Credit score required", bank: "650+", bhph: "None" },
  { factor: "Approval speed", bank: "Days to weeks", bhph: "Same day" },
  { factor: "Min. down payment", bank: "10–20%", bhph: "From $999" },
  { factor: "Income verification", bank: "W-2 only", bhph: "All income types" },
  { factor: "Repo history", bank: "Disqualifying", bhph: "Accepted" },
  { factor: "Bankruptcy", bank: "Disqualifying", bhph: "Accepted" },
];

/* ─── PAGE ─── */
export default function BadCreditCarLoansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
        </nav>

        {/* BREADCRUMB */}
        <div className="px-4 max-w-md mx-auto mb-4">
          <p className="text-xs text-[#8BA898]">
            <Link href="/" className="hover:text-[#00C896] transition-colors">Home</Link>
            {" "}/{" "}
            <span className="text-white">Bad Credit Car Loans</span>
          </p>
        </div>

        {/* HERO */}
        <section className="px-4 pt-6 pb-12 max-w-md mx-auto">
          <div className="bg-[#00C896]/10 border border-[#00C896]/20 rounded-2xl px-4 py-2 inline-block mb-4">
            <p className="text-[#00C896] text-xs font-semibold uppercase tracking-wider">
              Texas Statewide · All Credit Types
            </p>
          </div>

          <h1 className="text-3xl font-black text-white tracking-tight leading-tight mb-4">
            Bad Credit Car Loans in Texas — $999 Down, No Bank Needed
          </h1>

          <p className="text-[#8BA898] text-base leading-relaxed mb-6">
            Your credit score does not define your ability to get a car in Texas.
            ReApprove Auto connects bad credit buyers with in-house lenders and
            BHPH dealers who make approval decisions based on income — not your
            past.
          </p>

          <Link
            href="/apply"
            className="block w-full bg-[#00C896] hover:bg-[#00B584] text-[#0A0F0D] font-black text-lg py-5 rounded-2xl tracking-tight text-center transition-all mb-3"
          >
            Check My Pre-Qualification — 60 Seconds →
          </Link>
          <p className="text-[#8BA898] text-xs text-center">
            No hard credit pull · No SSN required · Bad credit welcome
          </p>
        </section>

        {/* BHPH vs BANK COMPARISON */}
        <section className="px-4 py-12 bg-[#111A15] border-y border-[#1C2B22]">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-black text-white tracking-tight mb-2">
              In-House Financing vs. Bank Loan — Why BHPH Wins for Bad Credit
            </h2>
            <p className="text-[#8BA898] text-sm mb-8">
              Traditional banks turn away buyers with scores below 650. BHPH
              dealers don&apos;t.
            </p>

            <div className="overflow-hidden rounded-2xl border border-[#1C2B22]">
              <div className="grid grid-cols-3 bg-[#1C2B22] px-4 py-3">
                <p className="text-[#8BA898] text-xs font-bold uppercase tracking-wider">Factor</p>
                <p className="text-[#8BA898] text-xs font-bold uppercase tracking-wider text-center">Bank Loan</p>
                <p className="text-[#00C896] text-xs font-bold uppercase tracking-wider text-center">BHPH / In-House</p>
              </div>
              {COMPARISON.map((row, i) => (
                <div
                  key={row.factor}
                  className={`grid grid-cols-3 px-4 py-4 border-t border-[#1C2B22] ${
                    i % 2 === 0 ? "bg-[#0A0F0D]" : "bg-[#111A15]"
                  }`}
                >
                  <p className="text-white text-xs font-medium">{row.factor}</p>
                  <p className="text-[#8BA898] text-xs text-center">{row.bank}</p>
                  <p className="text-[#00C896] text-xs text-center font-bold">{row.bhph}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-4 py-12 max-w-md mx-auto">
          <h2 className="text-2xl font-black text-white tracking-tight mb-8">
            How to Get a Bad Credit Car Loan in Texas
          </h2>
          <div className="flex flex-col gap-5">
            {[
              {
                step: "01",
                title: "Pre-qualify online — no credit pull",
                body: "Enter your monthly income. We use a soft check only. No SSN, no bank access required.",
              },
              {
                step: "02",
                title: "Get matched with an in-house lender",
                body: "We connect you with BHPH dealers and subprime lenders in your area who work with your credit situation.",
              },
              {
                step: "03",
                title: "Pick your car, pay your down payment",
                body: "Choose from available inventory. Bring your down payment (starting at $999). Sign paperwork.",
              },
              {
                step: "04",
                title: "Drive home today",
                body: "Most approvals and drive-offs happen the same day. Make payments directly to the dealer — no bank middleman.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-[#111A15] border border-[#1C2B22] rounded-2xl p-6 flex gap-5"
              >
                <span className="text-[#00C896] font-black text-3xl leading-none shrink-0">
                  {item.step}
                </span>
                <div>
                  <p className="text-white font-bold text-sm mb-1">{item.title}</p>
                  <p className="text-[#8BA898] text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-12 bg-[#111A15] border-y border-[#1C2B22]">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-black text-white tracking-tight mb-8">
              Bad Credit Car Loan FAQs
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

        {/* RELATED SERVICES */}
        <section className="px-4 py-12 max-w-md mx-auto">
          <h2 className="text-xl font-black text-white tracking-tight mb-6">
            Related Financing Options
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              { label: "Buy Here Pay Here Dallas TX", href: "/buy-here-pay-here-dallas" },
              { label: "No Credit Check Cars Texas", href: "/no-credit-check-cars" },
              { label: "Second Chance Auto Financing", href: "/second-chance-financing" },
              { label: "In-House Car Financing Texas", href: "/in-house-financing" },
              { label: "First-Time Buyer Program", href: "/first-time-buyer" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-[#111A15] border border-[#1C2B22] hover:border-[#00C896]/40 rounded-xl px-5 py-4 flex items-center justify-between group transition-all"
              >
                <p className="text-white text-sm font-medium group-hover:text-[#00C896] transition-colors">
                  {link.label}
                </p>
                <span className="text-[#00C896] text-sm">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 py-12 bg-[#00C896]/5 border-t border-[#00C896]/10">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-black text-white tracking-tight mb-3">
              Bad Credit Doesn&apos;t Have to Mean No Car
            </h2>
            <p className="text-[#8BA898] text-sm mb-8">
              Start your 60-second pre-qualification. No bank. No broker. Just
              you, your income, and keys.
            </p>
            <Link
              href="/apply"
              className="block w-full bg-[#00C896] hover:bg-[#00B584] text-[#0A0F0D] font-black text-lg py-5 rounded-2xl tracking-tight text-center transition-all"
            >
              Pre-Qualify — $999 Min. Down →
            </Link>
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
