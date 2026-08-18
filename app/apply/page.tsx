import type { Metadata } from "next";
import HeroFlow from "@/components/HeroFlow";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apply for In-House Financing | $999 Down Bad Credit OK",
  description:
    "Pre-qualify for in-house auto financing in 60 seconds. Bad credit, no credit, repo OK. $999 min down. No bank needed. ReApprove Auto — DFW.",
  alternates: { canonical: "https://www.reapproveauto.com/apply" },
  robots: { index: true, follow: true },
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F0D]">
      <nav className="w-full max-w-md mx-auto flex items-center justify-between px-4 pt-8 pb-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="ReApprove Auto" className="h-12 w-auto" />
          <span className="font-bold text-white text-sm">ReApprove Auto</span>
        </Link>
        <span className="text-xs text-[#00C896] font-medium bg-[#00C896]/10 px-3 py-1 rounded-full">
          60-Second Pre-Qual
        </span>
      </nav>
      <HeroFlow />
    </div>
  );
}
