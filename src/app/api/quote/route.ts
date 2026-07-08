import { NextResponse } from "next/server";
import { site } from "@/lib/site";

/**
 * Delivers quote requests to the business inbox via Resend.
 *
 * Configuration (Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY    — required for delivery; without it the endpoint
 *                       returns 501 and the client falls back to mailto.
 *   QUOTE_FROM_EMAIL  — optional verified sender, e.g.
 *                       "Renew website <quotes@renewcg.com.au>".
 *                       Defaults to Resend's onboarding sender.
 */
export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  if (!data || typeof data !== "object") {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }

  // Honeypot filled → spam bot. Pretend success.
  if (data.company) return NextResponse.json({ ok: true });

  const name = String(data.name ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const email = String(data.email ?? "").trim();
  if (!name || (!phone && !email)) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "email-not-configured" }, { status: 501 });
  }

  const text = [
    `Name: ${name}`,
    `Phone: ${phone || "—"}`,
    `Email: ${email || "—"}`,
    `Property type: ${String(data.propertyType ?? "").trim() || "—"}`,
    `Service needed: ${String(data.service ?? "").trim() || "—"}`,
    "",
    "Message:",
    String(data.message ?? "").trim() || "—",
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.QUOTE_FROM_EMAIL ?? "Renew website <onboarding@resend.dev>",
      to: [site.contact.email],
      reply_to: email || undefined,
      subject: `Quote request — ${name}`,
      text,
    }),
  }).catch(() => null);

  if (!res?.ok) {
    return NextResponse.json({ error: "send-failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
