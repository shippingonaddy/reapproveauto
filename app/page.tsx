import type { Metadata } from "next";
import HeroFlow from "@/components/HeroFlow";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Buy Here Pay Here DFW | $999 Down Bad Credit Cars | ReApprove Auto",
  description:
    "Pre-qualify in 60 seconds for buy here pay here cars in DFW. Bad credit, no credit, repo OK. In-house financing from $999 down. Dallas · Fort Worth · Arlington.",
  alternates: { canonical: "https://www.reapproveauto.com" },
};

/* ─── FAQ data (reused for schema below) ─── */
const FAQS = [
  {
    q: "Can I get approved with bad credit or no credit?",
    a: "Yes. ReApprove Auto works with in-house lenders who approve based on income, not credit scores. Bad credit, no credit, and first-time buyers are all welcome.",
  },
  {
    q: "How fast is the pre-qualification process?",
    a: "Our pre-qualification takes about 60 seconds online. Most in-house financing approvals happen the same day — often within the hour.",
  },
  {
    q: "What is the minimum down payment?",
    a: "Down payments start at $999 for many vehicles. The exact amount depends on the car you choose and your monthly income.",
  },
  {
    q: "What is Buy Here Pay Here (BHPH)?",
    a: "Buy Here Pay Here means the dealership finances your vehicle directly — no bank, no credit union needed. You buy the car here and make payments here. It's the fastest route to a car when traditional financing isn't an option.",
  },
  {
    q: "Can I get approved after a repossession?",
    a: "Yes. We specialize in second-chance financing. A past repo does not automatically disqualify you — income and a down payment matter more.",
  },
  {
    q: "What documents do I need?",
    a: "Typically: valid government-issued ID, proof of income (pay stubs, bank statements, or cash documentation), and proof of Texas residency.",
  },
  {
    q: "Do you serve all of DFW?",
    a: "Yes. We connect buyers across Dallas, Fort Worth, Arlington, Garland, Irving, Plano, Grand Prairie, Mesquite, and surrounding DFW cities.",
  },
];

/* ─── FAQ JSON-LD (page-level, injected inline) ─── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/* ─── CITY DATA ─── */
const CITIES = [
  { name: "Dallas", slug: "buy-here-pay-here-dallas", abbr: "DAL" },
  { name: "Fort Worth", slug: "buy-here-pay-here-fort-worth", abbr: "FTW" },
  { name: "Arlington", slug: "buy-here-pay-here-arlington", abbr: "ARL" },
  { name: "Garland", slug: "buy-here-pay-here-garland", abbr: "GAR" },
  { name: "Irving", slug: "buy-here-pay-here-irving", abbr: "IRV" },
  { name: "Plano", slug: "buy-here-pay-here-plano", abbr: "PLN" },
  { name: "Grand Prairie", slug: "buy-here-pay-here-grand-prairie", abbr: "GP" },
  { name: "Mesquite", slug: "buy-here-pay-here-mesquite", abbr: "MSQ" },
];

/* ─── STEPS DATA ─── */
const STEPS = [
  {
    number: "01",
    title: "Pre-qualify in 60 seconds",
    body: "Enter your monthly income. No credit pull, no SSN, no bank account required. We check what matters — your ability to pay.",
  },
  {
    number: "02",
    title: "Pick your car",
    body: "Browse our DFW inventory of reliable used vehicles. SUVs, sedans, trucks — all priced for buyers with bad credit or no credit.",
  },
  {
    number: "03",
    title: "Drive home today",
    body: "Sign paperwork, hand over your down payment, get your keys. Same-day delivery on most approvals. No bank involvement, ever.",
  },
];

/* ─── TESTIMONIALS ─── */
const TESTIMONIALS = [
  {
    quote:
      "I had a repo from 2022 and three dealerships turned me down the same week. ReApprove got me in a 2019 Camry with $700 down. I drove it home that afternoon.",
    name: "Marcus T.",
    city: "Dallas, TX",
    vehicle: "2019 Toyota Camry",
  },
  {
    quote:
      "No credit, first job out of college, couldn't even get a credit card. The pre-qual took literally one minute and they called me back in 20. This is how it should work.",
    name: "Priya M.",
    city: "Fort Worth, TX",
    vehicle: "2020 Honda Civic",
  },
  {
    quote:
      "Gig worker here — DoorDash and Uber. Banks don't see gig income the same way. ReApprove didn't care. Showed them my deposits and got approved same day.",
    name: "DeShawn R.",
    city: "Arlington, TX",
    vehicle: "2018 Ford F-150",
  },
  {
    quote:
      "Bankruptcy discharged six months ago. I needed a car to get back on my feet. $999 down, weekly payments, and zero judgment. These guys are the real deal.",
    name: "Linda K.",
    city: "Irving, TX",
    vehicle: "2021 Nissan Altima",
  },
];

/* ─── SERVICE LINKS ─── */
const SERVICES = [
  { label: "Bad Credit Car Loans", href: "/bad-credit-car-loans" },
  { label: "In-House Financing", href: "/in-house-financing" },
  { label: "No Credit Check Cars", href: "/no-credit-check-cars" },
  { label: "Second Chance Financing", href: "/second-chance-financing" },
  { label: "First-Time Buyer Program", href: "/first-time-buyer" },
  { label: "Subprime Auto Loans", href: "/subprime-auto-loans" },
];

/* ══════════════════════════════════════════
   PAGE (Server Component)
══════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      {/* Page-level FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#0A0F0D]">
        {/* ── NAV ── */}
        <nav className="w-full max-w-md mx-auto flex items-center justify-between px-4 pt-8 pb-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="ReApprove Auto" className="h-16 w-auto" />
            <span className="font-bold text-white tracking-tight text-base">
              ReApprove Auto
            </span>
          </div>
          <span className="text-xs text-[#00C896] font-medium bg-[#00C896]/10 px-3 py-1 rounded-full">
            DFW BHPH
          </span>
        </nav>

        {/* ── H1 (server-rendered, SEO-critical) ── */}
        <div className="sr-only">
          <h1>
            Buy Here Pay Here DFW — $999 Down Bad Credit Cars | ReApprove Auto
          </h1>
        </div>

        {/* ── HERO FLOW (client component) ── */}
        <HeroFlow />

        {/* ══ HOW IT WORKS ══ */}
        <section
          id="how-it-works"
          className="px-4 py-16 max-w-md mx-auto"
          aria-labelledby="how-heading"
        >
          <h2
            id="how-heading"
            className="text-2xl font-black text-white tracking-tight mb-2"
          >
            From Income Check to Ignition — 3 Steps
          </h2>
          <p className="text-[#8BA898] text-sm mb-10">
            No bank. No broker. No confusion. This is buy here pay here the way
            it should work.
          </p>

          <div className="flex flex-col gap-6">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-[#111A15] border border-[#1C2B22] rounded-2xl p-6 flex gap-5"
              >
                <span className="text-[#00C896] font-black text-3xl leading-none shrink-0">
                  {step.number}
                </span>
                <div>
                  <p className="text-white font-bold text-base mb-1">
                    {step.title}
                  </p>
                  <p className="text-[#8BA898] text-sm leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ TRUST STATS ══ */}
        <section
          className="px-4 py-12 bg-[#00C896]/5 border-y border-[#00C896]/10"
          aria-label="Key facts about ReApprove Auto"
        >
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-black text-white tracking-tight mb-8 text-center">
              Why DFW Buyers Choose Us Over Traditional Dealerships
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "60s", label: "Average pre-approval time" },
                { value: "$999", label: "Minimum down payment" },
                { value: "0", label: "Banks or brokers involved" },
                { value: "100%", label: "In-house financing" },
                { value: "All", label: "Credit types accepted" },
                { value: "Same-day", label: "Approval & drive-off" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#111A15] border border-[#1C2B22] rounded-2xl p-5 text-center"
                >
                  <p className="text-[#00C896] font-black text-2xl">
                    {item.value}
                  </p>
                  <p className="text-[#8BA898] text-xs mt-1 leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section
          id="reviews"
          className="px-4 py-16 max-w-md mx-auto"
          aria-labelledby="reviews-heading"
        >
          <h2
            id="reviews-heading"
            className="text-2xl font-black text-white tracking-tight mb-2"
          >
            What DFW Drivers Are Saying
          </h2>
          <p className="text-[#8BA898] text-sm mb-10">
            Real buyers. Real approvals. Real second chances.
          </p>

          <div className="flex flex-col gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-[#111A15] border border-[#1C2B22] rounded-2xl p-6"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#00C896"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-sm leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-[#8BA898] text-xs">{t.city}</p>
                  </div>
                  <span className="text-xs text-[#00C896] bg-[#00C896]/10 px-2 py-1 rounded-full">
                    {t.vehicle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ CITY COVERAGE ══ */}
        <section
          id="locations"
          className="px-4 py-16 bg-[#111A15] border-y border-[#1C2B22]"
          aria-labelledby="cities-heading"
        >
          <div className="max-w-md mx-auto">
            <h2
              id="cities-heading"
              className="text-2xl font-black text-white tracking-tight mb-2"
            >
              Buy Here Pay Here Dealers Serving All of DFW
            </h2>
            <p className="text-[#8BA898] text-sm mb-8">
              Bad credit car lots, BHPH financing, and in-house auto loans
              across the entire Metroplex.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href="/apply"
                  className="bg-[#0A0F0D] border border-[#1C2B22] hover:border-[#00C896]/40 rounded-xl p-4 flex items-center justify-between group transition-all"
                >
                  <div>
                    <p className="text-white font-bold text-sm group-hover:text-[#00C896] transition-colors">
                      {city.name}
                    </p>
                    <p className="text-[#8BA898] text-xs">BHPH Available</p>
                  </div>
                  <span className="text-[#00C896] text-xs font-bold">→</span>
                </Link>
              ))}
            </div>

            {/* Service links */}
            <div>
              <p className="text-[#8BA898] text-xs uppercase tracking-wider font-semibold mb-4">
                Financing options
              </p>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href="/apply"
                    className="text-xs text-[#8BA898] hover:text-[#00C896] bg-[#0A0F0D] border border-[#1C2B22] hover:border-[#00C896]/30 px-3 py-2 rounded-lg transition-all"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section
          id="faq"
          className="px-4 py-16 max-w-md mx-auto"
          aria-labelledby="faq-heading"
        >
          <h2
            id="faq-heading"
            className="text-2xl font-black text-white tracking-tight mb-2"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[#8BA898] text-sm mb-10">
            Everything you need to know about buy here pay here financing in DFW.
          </p>

          <div className="flex flex-col gap-4">
            {FAQS.map(({ q, a }) => (
              <div
                key={q}
                className="bg-[#111A15] border border-[#1C2B22] rounded-2xl p-6"
              >
                <p className="text-white font-bold text-sm mb-2">{q}</p>
                <p className="text-[#8BA898] text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="text-[#00C896] text-sm font-semibold hover:underline"
            >
              View all FAQs →
            </Link>
          </div>
        </section>

        {/* ══ FINAL CTA ══ */}
        <section className="px-4 py-12 bg-[#00C896]/5 border-t border-[#00C896]/10">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-black text-white tracking-tight mb-3">
              Ready to Drive Today?
            </h2>
            <p className="text-[#8BA898] text-sm mb-8">
              Join thousands of DFW buyers who skipped the bank and got their
              keys the same day. Bad credit, no credit, repo — all welcome.
            </p>
            <Link
              href="/apply"
              className="inline-block w-full bg-[#00C896] hover:bg-[#00B584] text-[#0A0F0D] font-black text-lg py-5 rounded-2xl tracking-tight text-center transition-all"
            >
              Start My 60-Second Pre-Qualification →
            </Link>
            <p className="text-[#8BA898] text-xs mt-4">
              No credit pull · No SSN required · No bank · $999 min. down
            </p>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <footer className="px-4 py-10 border-t border-[#1C2B22]">
          <div className="max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="ReApprove Auto"
                className="h-10 w-auto"
              />
              <span className="font-bold text-white text-sm">
                ReApprove Auto
              </span>
            </div>

            <p className="text-[#8BA898] text-xs leading-relaxed mb-6">
              DFW&apos;s fintech-powered buy here pay here platform. We connect
              subprime buyers with in-house financing, bad credit car loans, and
              $999 down options across Dallas, Fort Worth, and the entire
              Metroplex.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 text-xs">
              <div>
                <p className="text-white font-bold mb-3">Financing</p>
                <ul className="space-y-2">
                  {SERVICES.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="text-[#8BA898] hover:text-[#00C896] transition-colors"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white font-bold mb-3">Cities</p>
                <ul className="space-y-2">
                  {CITIES.slice(0, 6).map((c) => (
                    <li key={c.slug}>
                      <Link
                        href="/apply"
                        className="text-[#8BA898] hover:text-[#00C896] transition-colors"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-[#1C2B22] pt-6 flex flex-col gap-3 text-xs text-[#8BA898]">
              <p>📞 (469) 435-0306</p>
              <p>📍 Dallas-Fort Worth Metroplex, TX</p>
              <div className="flex gap-4 mt-2">
                <Link href="/privacy-policy" className="hover:text-[#00C896] transition-colors">Privacy Policy</Link>
                <Link href="/terms-of-use" className="hover:text-[#00C896] transition-colors">Terms of Use</Link>
                <Link href="/faq" className="hover:text-[#00C896] transition-colors">FAQ</Link>
              </div>
              <p className="mt-4">
                © {new Date().getFullYear()} ReApprove Auto. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
