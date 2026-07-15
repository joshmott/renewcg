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
 *                       Defaults to Resend's onboarding sender. NOTE: the
 *                       onboarding sender can only deliver to the Resend
 *                       account owner's own address — verify the domain in
 *                       Resend and set this to lift that restriction.
 *   QUOTE_TO_EMAIL    — optional recipient override; defaults to the
 *                       business inbox from site config.
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
      to: [process.env.QUOTE_TO_EMAIL ?? site.contact.email],
      reply_to: email || undefined,
      subject: `Quote request — ${name}`,
      text,
    }),
  }).catch((err: unknown) => {
    console.error("quote: could not reach Resend", err);
    return null;
  });

  if (!res?.ok) {
    // Surface Resend's reason in the Vercel function logs so delivery
    // problems (unverified domain, bad key, restricted recipient) are
    // diagnosable instead of failing silently into the mailto fallback.
    if (res) {
      const detail = await res.text().catch(() => "");
      console.error(`quote: Resend rejected the send (${res.status}): ${detail}`);
    }
    return NextResponse.json({ error: "send-failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
