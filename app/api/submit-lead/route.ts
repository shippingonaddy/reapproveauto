import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, contactMethod, income, payType, zip } = body;

    if (!name || !phone || !zip) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ── Email notification via Resend ──
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "arturogodoy1306@icloud.com";

    if (RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "ReApprove Auto <leads@reapproveauto.com>",
          to: [NOTIFY_EMAIL],
          subject: `🔥 New Lead — ${name} (${contactMethod})`,
          html: `
            <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; background: #0A0F0D; color: #fff; padding: 32px; border-radius: 12px;">
              <h2 style="color: #00C896; margin-top: 0;">New ReApprove Lead</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="color: #8BA898; padding: 8px 0; width: 140px;">Name</td><td style="color: #fff; font-weight: bold;">${name}</td></tr>
                <tr><td style="color: #8BA898; padding: 8px 0;">Phone</td><td style="color: #fff; font-weight: bold;">${phone}</td></tr>
                <tr><td style="color: #8BA898; padding: 8px 0;">Contact via</td><td style="color: #00C896; font-weight: bold;">${contactMethod}</td></tr>
                <tr><td style="color: #8BA898; padding: 8px 0;">Monthly income</td><td style="color: #fff;">$${income}</td></tr>
                <tr><td style="color: #8BA898; padding: 8px 0;">Pay type</td><td style="color: #fff;">${payType}</td></tr>
                <tr><td style="color: #8BA898; padding: 8px 0;">Zip code</td><td style="color: #fff;">${zip}</td></tr>
                <tr><td style="color: #8BA898; padding: 8px 0;">Submitted</td><td style="color: #fff;">${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} CT</td></tr>
              </table>
              <a href="tel:${phone}" style="display: block; margin-top: 24px; background: #00C896; color: #0A0F0D; text-align: center; padding: 14px; border-radius: 8px; font-weight: bold; text-decoration: none;">
                Call ${name} Now
              </a>
            </div>
          `,
        }),
      });
    }

    // ── Zapier webhook (Google Sheets) ──
    const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL;

    if (ZAPIER_WEBHOOK_URL) {
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          contact_method: contactMethod,
          monthly_income: income,
          pay_type: payType,
          zip,
          submitted_at: new Date().toISOString(),
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
