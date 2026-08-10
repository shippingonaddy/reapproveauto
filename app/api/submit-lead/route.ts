import { NextRequest, NextResponse } from "next/server";

/** Escape user input before it goes into the notification email's HTML. */
function esc(v: unknown) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** "1,500" / "$1500" / "" → 1500 / null. Airtable's Number field rejects strings. */
function toNumber(v: unknown) {
  const digits = String(v ?? "").replace(/[^\d]/g, "");
  return digits ? parseInt(digits, 10) : null;
}

export async function POST(req: NextRequest) {
  let lead: Record<string, unknown> = {};

  try {
    const body = await req.json();
    const { name, phone, contactMethod, income, payType, zip } = body;

    if (!name || !phone || !zip) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    lead = {
      name: String(name).trim(),
      phone: String(phone).trim(),
      contactMethod: String(contactMethod ?? "").trim(),
      income: toNumber(income),
      payType: String(payType ?? "").trim(),
      zip: String(zip).replace(/\D/g, "").slice(0, 5),
      submittedAt: new Date().toISOString(),
    };

    // ── 1. Persist to Airtable — source of truth, must succeed ──
    const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE = process.env.AIRTABLE_TABLE || "Leads";

    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
      // Never silently swallow a lead: the log line is the recovery path.
      console.error("LEAD_NOT_PERSISTED airtable_env_missing", JSON.stringify(lead));
      return NextResponse.json({ error: "Storage not configured" }, { status: 500 });
    }

    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: lead.name,
                Phone: lead.phone,
                "Contact Method": lead.contactMethod,
                "Monthly Income": lead.income,
                "Pay Type": lead.payType,
                Zip: lead.zip,
                Status: "New",
                "Submitted At": lead.submittedAt,
              },
            },
          ],
        }),
      }
    );

    if (!airtableRes.ok) {
      const detail = await airtableRes.text();
      console.error(
        "LEAD_NOT_PERSISTED airtable_write_failed",
        airtableRes.status,
        detail,
        JSON.stringify(lead)
      );
      return NextResponse.json({ error: "Could not save lead" }, { status: 500 });
    }

    // ── 2. Notify — best effort. One dead vendor must not take down the others. ──
    const notifications: Promise<unknown>[] = [];

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "arturogodoy1306@icloud.com";

    if (RESEND_API_KEY) {
      notifications.push(
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "ReApprove Auto <leads@reapproveauto.com>",
            to: [NOTIFY_EMAIL],
            subject: `🔥 New Lead — ${lead.name} (${lead.contactMethod || "no preference"})`,
            html: `
            <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; background: #0A0F0D; color: #fff; padding: 32px; border-radius: 12px;">
              <h2 style="color: #00C896; margin-top: 0;">New ReApprove Lead</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="color: #8BA898; padding: 8px 0; width: 140px;">Name</td><td style="color: #fff; font-weight: bold;">${esc(lead.name)}</td></tr>
                <tr><td style="color: #8BA898; padding: 8px 0;">Phone</td><td style="color: #fff; font-weight: bold;">${esc(lead.phone)}</td></tr>
                <tr><td style="color: #8BA898; padding: 8px 0;">Contact via</td><td style="color: #00C896; font-weight: bold;">${esc(lead.contactMethod)}</td></tr>
                <tr><td style="color: #8BA898; padding: 8px 0;">Monthly income</td><td style="color: #fff;">$${esc(lead.income)}</td></tr>
                <tr><td style="color: #8BA898; padding: 8px 0;">Pay type</td><td style="color: #fff;">${esc(lead.payType)}</td></tr>
                <tr><td style="color: #8BA898; padding: 8px 0;">Zip code</td><td style="color: #fff;">${esc(lead.zip)}</td></tr>
                <tr><td style="color: #8BA898; padding: 8px 0;">Submitted</td><td style="color: #fff;">${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} CT</td></tr>
              </table>
              <a href="tel:${esc(lead.phone)}" style="display: block; margin-top: 24px; background: #00C896; color: #0A0F0D; text-align: center; padding: 14px; border-radius: 8px; font-weight: bold; text-decoration: none;">
                Call ${esc(lead.name)} Now
              </a>
            </div>
          `,
          }),
        })
      );
    }

    // Generic outbound webhook (n8n, Make, Zapier — any endpoint that accepts JSON).
    const LEAD_WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL || process.env.ZAPIER_WEBHOOK_URL;

    if (LEAD_WEBHOOK_URL) {
      notifications.push(
        fetch(LEAD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: lead.name,
            phone: lead.phone,
            contact_method: lead.contactMethod,
            monthly_income: lead.income,
            pay_type: lead.payType,
            zip: lead.zip,
            submitted_at: lead.submittedAt,
          }),
        })
      );
    }

    const results = await Promise.allSettled(notifications);
    for (const r of results) {
      // The lead is already saved, so a failed notification is loud but not fatal.
      if (r.status === "rejected") console.error("Lead notification failed:", r.reason);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("LEAD_NOT_PERSISTED unhandled_error", err, JSON.stringify(lead));
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
