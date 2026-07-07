"use client";

import { useState } from "react";

export default function HeroFlow() {
  const [step, setStep] = useState<"hero" | "form" | "intake" | "approved">("hero");
  const [income, setIncome] = useState("");
  const [payType, setPayType] = useState("");
  const [zip, setZip] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  const approvalAmount =
    income && parseInt(income) >= 1500
      ? Math.min(parseInt(income) * 6, 18000)
      : 8500;

  return (
    <div className="flex flex-col items-center px-4 pt-4 pb-16">
      {step === "hero" && <HeroStep onStart={() => setStep("form")} />}
      {step === "form" && (
        <FormStep
          income={income} setIncome={setIncome}
          payType={payType} setPayType={setPayType}
          zip={zip} setZip={setZip}
          onSubmit={() => setStep("intake")}
        />
      )}
      {step === "intake" && (
        <IntakeStep
          amount={approvalAmount}
          name={name} setName={setName}
          phone={phone} setPhone={setPhone}
          contactMethod={contactMethod} setContactMethod={setContactMethod}
          onSubmit={() => setStep("approved")}
        />
      )}
      {step === "approved" && <ApprovedStep name={name} contactMethod={contactMethod} />}
    </div>
  );
}

/* ── HERO ── */
function HeroStep({ onStart }: { onStart: () => void }) {
  return (
    <div className="w-full max-w-md flex flex-col items-center text-center gap-6">
      {/* Notification card */}
      <div className="slide-up slide-up-1 w-full bg-[#111A15] border border-[#00C896]/20 rounded-3xl p-6 flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#00C896] flex items-center justify-center shrink-0 pulse-green">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14l-4-4 1.41-1.41L11 13.17l6.59-6.59L19 8l-8 8z"
              fill="#0A0F0D"
            />
          </svg>
        </div>
        <div className="text-left">
          <p className="text-xs text-[#00C896] font-semibold uppercase tracking-wider mb-1">
            ReApprove Auto
          </p>
          <p className="text-white font-bold text-lg leading-tight">
            See if you pre-qualify.
          </p>
          <p className="text-[#8BA898] text-sm mt-1">
            No credit pull. Takes 60 seconds →
          </p>
        </div>
      </div>

      {/* Headline */}
      <div className="slide-up slide-up-2">
        <p className="text-4xl font-black text-white leading-tight tracking-tight">
          In DFW,{" "}
          <span className="text-[#00C896]">no car</span> means
          <br />
          no life.
        </p>
        <p className="text-[#8BA898] mt-4 text-base leading-relaxed">
          You qualify. You just don&apos;t know it yet.
        </p>
      </div>

      {/* Stats row */}
      <div className="slide-up slide-up-3 w-full grid grid-cols-3 gap-3">
        {[
          { value: "60s", label: "Pre-approval" },
          { value: "$999", label: "Min. down" },
          { value: "100%", label: "In-house" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-[#111A15] border border-[#1C2B22] rounded-2xl p-4 text-center"
          >
            <p className="text-[#00C896] font-black text-xl">{stat.value}</p>
            <p className="text-[#8BA898] text-xs mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="slide-up slide-up-4 w-full">
        <button
          onClick={onStart}
          className="w-full bg-[#00C896] hover:bg-[#00B584] active:scale-95 transition-all text-[#0A0F0D] font-black text-lg py-5 rounded-2xl tracking-tight"
        >
          Check My Pre-Qualification →
        </button>
        <p className="text-[#8BA898] text-xs mt-3">
          No hard credit pull. No judgment. Bad credit welcome.
        </p>
      </div>

      {/* Trust bar */}
      <div className="slide-up slide-up-4 w-full border-t border-[#1C2B22] pt-6 flex items-center justify-center gap-6 text-xs text-[#8BA898]">
        <span>✓ Repo OK</span>
        <span>✓ Bankruptcy OK</span>
        <span>✓ Texas only</span>
      </div>
    </div>
  );
}

/* ── FORM ── */
function FormStep({
  income, setIncome,
  payType, setPayType,
  zip, setZip,
  onSubmit,
}: {
  income: string; setIncome: (v: string) => void;
  payType: string; setPayType: (v: string) => void;
  zip: string; setZip: (v: string) => void;
  onSubmit: () => void;
}) {
  const isTexasZip = zip.length === 5 && (zip.startsWith("75") || zip.startsWith("76"));
  const zipError = zip.length === 5 && !isTexasZip;

  return (
    <div className="w-full max-w-md flex flex-col gap-5 slide-up slide-up-1">
      <div className="text-center mb-2">
        <p className="text-[#00C896] font-semibold text-sm mb-2">Step 1 of 2</p>
        <h2 className="text-3xl font-black text-white tracking-tight">
          Quick check ⚡
        </h2>
        <p className="text-[#8BA898] text-sm mt-2">
          Three questions. That&apos;s it.
        </p>
      </div>

      {/* Income */}
      <div className="bg-[#111A15] border border-[#1C2B22] rounded-2xl p-5">
        <label className="text-[#8BA898] text-xs font-semibold uppercase tracking-wider block mb-3">
          Monthly take-home income
        </label>
        <div className="flex items-center gap-2">
          <span className="text-[#00C896] text-2xl font-black">$</span>
          <input
            type="number"
            placeholder="1,500"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="bg-transparent text-white text-2xl font-black w-full outline-none placeholder:text-[#2A3D32]"
          />
        </div>
        <p className="text-[#8BA898] text-xs mt-3">
          Cash, gig, self-employed — all good.
        </p>
      </div>

      {/* Employment type — now with state */}
      <div className="bg-[#111A15] border border-[#1C2B22] rounded-2xl p-5">
        <label className="text-[#8BA898] text-xs font-semibold uppercase tracking-wider block mb-3">
          How do you get paid?
        </label>
        <div className="grid grid-cols-2 gap-2">
          {["W-2 / Paycheck", "Cash / Self-Employed", "Benefits / SSI", "Multiple sources"].map((opt) => (
            <button
              key={opt}
              onClick={() => setPayType(opt)}
              className={`text-sm font-semibold py-3 px-3 rounded-xl border text-left transition-all ${
                payType === opt
                  ? "bg-[#00C896]/20 border-[#00C896] text-[#00C896]"
                  : "bg-[#1C2B22] border-transparent text-white hover:bg-[#00C896]/10 hover:border-[#00C896]/40"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Zip code */}
      <div className="bg-[#111A15] border border-[#1C2B22] rounded-2xl p-5">
        <label className="text-[#8BA898] text-xs font-semibold uppercase tracking-wider block mb-3">
          Your zip code
        </label>
        <input
          type="text"
          inputMode="numeric"
          maxLength={5}
          placeholder="75001"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
          className={`bg-transparent text-2xl font-black w-full outline-none placeholder:text-[#2A3D32] ${zipError ? "text-red-400" : "text-white"}`}
        />
        {zipError ? (
          <p className="text-red-400 text-xs mt-3">
            We only serve DFW — enter a Texas zip starting with 75 or 76.
          </p>
        ) : (
          <p className="text-[#8BA898] text-xs mt-3">
            Texas residents only.
          </p>
        )}
      </div>

      <button
        onClick={onSubmit}
        disabled={!income || !payType || !isTexasZip}
        className="w-full bg-[#00C896] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#00B584] active:scale-95 transition-all text-[#0A0F0D] font-black text-lg py-5 rounded-2xl tracking-tight"
      >
        See If I Pre-Qualify →
      </button>
      <p className="text-center text-[#8BA898] text-xs">
        No SSN required. No credit pull.
      </p>
    </div>
  );
}

/* ── INTAKE ── */
function IntakeStep({
  amount, name, setName, phone, setPhone, contactMethod, setContactMethod, onSubmit,
}: {
  amount: number;
  name: string; setName: (v: string) => void;
  phone: string; setPhone: (v: string) => void;
  contactMethod: string; setContactMethod: (v: string) => void;
  onSubmit: () => void;
}) {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD", maximumFractionDigits: 0,
  }).format(amount);

  return (
    <div className="w-full max-w-md flex flex-col gap-5 slide-up slide-up-1">
      {/* Amount banner */}
      <div className="w-full bg-[#00C896]/10 border border-[#00C896]/30 rounded-2xl p-4 text-center">
        <p className="text-[#00C896] text-xs font-semibold uppercase tracking-wider mb-1">
          You may pre-qualify for up to
        </p>
        <p className="text-3xl font-black text-white">{formatted}</p>
      </div>

      <div className="text-center">
        <p className="text-[#00C896] font-semibold text-sm mb-2">Step 2 of 2</p>
        <h2 className="text-2xl font-black text-white tracking-tight">
          Last step — who do we contact?
        </h2>
        <p className="text-[#8BA898] text-sm mt-1">
          We&apos;ll reach out, you don&apos;t chase us.
        </p>
      </div>

      {/* First name only */}
      <div className="bg-[#111A15] border border-[#1C2B22] rounded-2xl p-5">
        <label className="text-[#8BA898] text-xs font-semibold uppercase tracking-wider block mb-3">
          First name
        </label>
        <input
          type="text"
          placeholder="Your first name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-transparent text-white text-xl font-bold w-full outline-none placeholder:text-[#2A3D32]"
        />
      </div>

      {/* Phone */}
      <div className="bg-[#111A15] border border-[#1C2B22] rounded-2xl p-5">
        <label className="text-[#8BA898] text-xs font-semibold uppercase tracking-wider block mb-3">
          Phone number
        </label>
        <input
          type="tel"
          placeholder="(214) 555-0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-transparent text-white text-xl font-bold w-full outline-none placeholder:text-[#2A3D32]"
        />
      </div>

      {/* Contact method — replaces "best time" */}
      <div className="bg-[#111A15] border border-[#1C2B22] rounded-2xl p-5">
        <label className="text-[#8BA898] text-xs font-semibold uppercase tracking-wider block mb-3">
          How do you want us to reach you?
        </label>
        <div className="grid grid-cols-3 gap-2">
          {["Text", "Call", "Either"].map((m) => (
            <button
              key={m}
              onClick={() => setContactMethod(m)}
              className={`text-sm font-semibold py-3 rounded-xl border transition-all ${
                contactMethod === m
                  ? "bg-[#00C896]/20 border-[#00C896] text-[#00C896]"
                  : "bg-[#1C2B22] border-transparent text-white"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onSubmit}
        disabled={!name || !phone || !contactMethod}
        className="w-full bg-[#00C896] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#00B584] active:scale-95 transition-all text-[#0A0F0D] font-black text-lg py-5 rounded-2xl tracking-tight"
      >
        I&apos;m Ready — Reach Out to Me
      </button>
      <p className="text-center text-[#8BA898] text-xs">
        No spam. Just one {contactMethod === "Text" ? "text" : contactMethod === "Call" ? "call" : "text or call"} from our team.
      </p>
    </div>
  );
}

/* ── APPROVED ── */
function ApprovedStep({ name, contactMethod }: { name: string; contactMethod: string }) {
  return (
    <div className="w-full max-w-md flex flex-col items-center text-center gap-6">
      <div className="slide-up slide-up-1 w-full bg-[#111A15] border border-[#00C896]/30 rounded-3xl p-8">
        <div className="w-16 h-16 rounded-full bg-[#00C896] flex items-center justify-center mx-auto mb-5 pulse-green">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="#0A0F0D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-white font-black text-2xl">
          You&apos;re in, {name ? name.split(" ")[0] : "friend"}.
        </p>
        <p className="text-[#8BA898] text-sm mt-3">
          We&apos;ll {contactMethod === "Call" ? "call" : "text"} you within the hour.
        </p>
      </div>

      <div className="slide-up slide-up-2 w-full bg-[#111A15] border border-[#1C2B22] rounded-3xl p-6 text-left">
        <p className="text-white font-bold mb-4">What happens next:</p>
        {[
          { icon: contactMethod === "Call" ? "📞" : "💬", text: `We ${contactMethod === "Call" ? "call" : "text"} you within the hour` },
          { icon: "🚗", text: "Pick from our DFW inventory" },
          { icon: "🔑", text: "Drive off same day" },
        ].map((item) => (
          <div key={item.text} className="flex items-center gap-3 mb-3 last:mb-0">
            <span className="text-xl">{item.icon}</span>
            <span className="text-[#8BA898] text-sm">{item.text}</span>
          </div>
        ))}
      </div>

      <p className="slide-up slide-up-3 text-[#8BA898] text-xs">
        ReApprove Auto · DFW In-House Financing · No bank. No BS.
      </p>
    </div>
  );
}
