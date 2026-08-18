import type { Metadata } from "next";
import Link from "next/link";

/* ─── METADATA ─── */
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ReApprove Auto collects, uses, and protects the information you submit through our pre-qualification form.",
  alternates: {
    canonical: "https://www.reapproveauto.com/privacy-policy",
  },
};

/* ─── PAGE ─── */
export default function PrivacyPolicyPage() {
  return (
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
          <span className="text-white">Privacy Policy</span>
        </p>
      </div>

      {/* HERO */}
      <section className="px-4 pt-6 pb-8 max-w-md mx-auto">
        <h1 className="text-3xl font-black text-white tracking-tight leading-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-[#8BA898] text-base leading-relaxed">
          ReApprove Auto is a lead-generation service. We connect Dallas–Fort
          Worth buyers with independent buy-here-pay-here dealerships that
          finance in-house. This policy explains what information we collect
          through our pre-qualification form and how we handle it.
        </p>
      </section>

      {/* WHAT WE COLLECT */}
      <section className="px-4 py-8 max-w-md mx-auto border-t border-[#1C2B22]">
        <h2 className="text-xl font-black text-white tracking-tight mb-4">
          1. What Information We Collect
        </h2>
        <p className="text-[#8BA898] text-sm leading-relaxed mb-4">
          When you complete our pre-qualification form, we collect only what
          is needed to match you with a dealer partner:
        </p>
        <ul className="text-[#8BA898] text-sm leading-relaxed list-disc pl-5 space-y-2">
          <li>First name</li>
          <li>Phone number</li>
          <li>Your preferred contact method (text, call, or either)</li>
          <li>Monthly income and how you get paid</li>
          <li>Zip code</li>
        </ul>
        <p className="text-[#8BA898] text-sm leading-relaxed mt-4">
          We do not require your Social Security number, and pre-qualifying
          does not involve a hard credit pull. We do not ask for or store
          your credit score.
        </p>
      </section>

      {/* HOW WE USE IT */}
      <section className="px-4 py-8 max-w-md mx-auto border-t border-[#1C2B22]">
        <h2 className="text-xl font-black text-white tracking-tight mb-4">
          2. How We Use Your Information
        </h2>
        <p className="text-[#8BA898] text-sm leading-relaxed mb-4">
          Your information is used to:
        </p>
        <ul className="text-[#8BA898] text-sm leading-relaxed list-disc pl-5 space-y-2">
          <li>Match you with a buy-here-pay-here dealer partner in your area</li>
          <li>Contact you by text or call about your pre-qualification</li>
        </ul>
        <p className="text-[#8BA898] text-sm leading-relaxed mt-4">
          Submitted information is stored in our secure lead-management
          system (Airtable). Some internal notifications about new
          submissions may be sent through our email provider, Resend.
        </p>
      </section>

      {/* THIRD-PARTY SHARING */}
      <section className="px-4 py-8 max-w-md mx-auto border-t border-[#1C2B22]">
        <h2 className="text-xl font-black text-white tracking-tight mb-4">
          3. Sharing Your Information
        </h2>
        <p className="text-[#8BA898] text-sm leading-relaxed mb-4">
          ReApprove Auto is not a dealership and does not extend financing
          directly. To pre-qualify you, we share your information only with
          the dealer partner(s) best positioned to work with your situation.
        </p>
        <p className="text-[#8BA898] text-sm leading-relaxed">
          We do not sell your information to third parties, and we do not
          share it for advertising purposes.
        </p>
      </section>

      {/* COOKIES & ANALYTICS */}
      <section className="px-4 py-8 max-w-md mx-auto border-t border-[#1C2B22]">
        <h2 className="text-xl font-black text-white tracking-tight mb-4">
          4. Cookies & Analytics
        </h2>
        <p className="text-[#8BA898] text-sm leading-relaxed">
          We use Vercel Analytics to understand how visitors use our site —
          for example, which pages are viewed and general traffic patterns.
          This data is aggregated and is not used to identify you
          individually. We do not use third-party advertising cookies or
          tracking pixels.
        </p>
      </section>

      {/* DATA RETENTION */}
      <section className="px-4 py-8 max-w-md mx-auto border-t border-[#1C2B22]">
        <h2 className="text-xl font-black text-white tracking-tight mb-4">
          5. Data Retention
        </h2>
        <p className="text-[#8BA898] text-sm leading-relaxed">
          We retain your submitted information for as long as needed to
          pursue your pre-qualification and connect you with a dealer
          partner, and for a reasonable period after in case you follow up.
          You can request deletion at any time — see below.
        </p>
      </section>

      {/* DELETION REQUESTS */}
      <section className="px-4 py-8 max-w-md mx-auto border-t border-[#1C2B22]">
        <h2 className="text-xl font-black text-white tracking-tight mb-4">
          6. Requesting Deletion
        </h2>
        <p className="text-[#8BA898] text-sm leading-relaxed mb-4">
          To request that we delete your information, call or text us at{" "}
          <a href="tel:+14694350306" className="text-[#00C896] font-semibold">
            (469) 435-0306
          </a>{" "}
          or email{" "}
          <a
            href="mailto:privacy@reapproveauto.com"
            className="text-[#00C896] font-semibold"
          >
            privacy@reapproveauto.com
          </a>
          {/* TODO: replace with your real monitored inbox */}
          . We will remove your information from our systems within a
          reasonable time, except where we are required to keep records for
          legal or compliance reasons.
        </p>
      </section>

      {/* LAST UPDATED */}
      <section className="px-4 py-8 max-w-md mx-auto border-t border-[#1C2B22]">
        <p className="text-[#8BA898] text-xs">
          Last updated: August 18, 2026
        </p>
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
  );
}
