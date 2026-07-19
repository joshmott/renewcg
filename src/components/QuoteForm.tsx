"use client";

import { useState } from "react";
import { services, site } from "@/lib/site";

/**
 * Quote form per the design handoff: underline inputs, require name AND
 * (phone OR email). Submits to /api/quote (Resend). If email delivery isn't
 * configured on the server, falls back to opening the visitor's email app
 * with the enquiry pre-filled.
 */

const propertyTypes = ["Strata / apartment building", "Commercial", "Residential home"];
const serviceOptions = [...services.map((s) => s.title), "Not sure yet"];

const labelClasses =
  "mb-2 block text-[11.5px] font-semibold tracking-[0.14em] uppercase text-muted";
const inputClasses =
  "w-full border-0 border-b border-input-line bg-transparent pb-2.5 text-[15.5px] text-ink placeholder:text-muted/70 focus:border-blue focus:outline-none transition-colors rounded-none";

type Status = "idle" | "sending" | "sent" | "mailto";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const valid = data.name?.trim() && (data.phone?.trim() || data.email?.trim());
    if (!valid) {
      setError(true);
      return;
    }
    setError(false);
    setStatus("sending");

    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => null);

    if (res?.ok) {
      setStatus("sent");
      return;
    }

    // Server-side delivery unavailable — open the visitor's email app instead.
    const body = [
      `Name: ${data.name}`,
      `Phone: ${data.phone || "—"}`,
      `Email: ${data.email || "—"}`,
      `Property type: ${data.propertyType || "—"}`,
      `Service needed: ${data.service || "—"}`,
      "",
      data.message || "",
    ].join("\n");
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `Quote request — ${data.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("mailto");
  }

  if (status === "sent" || status === "mailto") {
    return (
      <div
        role="status"
        className="border-y border-hairline px-6 py-14 text-center"
      >
        <h3 className="text-[19px] font-semibold text-ink">
          Thank you, your request has been received.
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed">
          {status === "mailto" ? (
            <>
              Your email app should have opened with the request ready to send.
              Urgent?{" "}
            </>
          ) : (
            <>We&rsquo;ll be in touch within one business day. Urgent? </>
          )}
          Call{" "}
          <a href={site.contact.phoneHref} className="font-semibold text-ink">
            {site.contact.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-x-7 gap-y-8 sm:grid-cols-2">
      {/* honeypot — humans never see or fill this */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className={labelClasses}>
          Name&nbsp;*
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="phone" className={labelClasses}>
          Phone
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="04xx xxx xxx" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="you@email.com" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="propertyType" className={labelClasses}>
          Property type
        </label>
        <select id="propertyType" name="propertyType" defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Select…
          </option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="service" className={labelClasses}>
          Service needed
        </label>
        <select id="service" name="service" defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Select…
          </option>
          {serviceOptions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us about the issue: what you've noticed, and where."
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col items-end gap-3 sm:col-span-2">
        {error && (
          <p role="alert" className="text-[13.5px] text-error">
            Please add your name and a phone number or email so we can get back
            to you.
          </p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-[10px] bg-blue px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-blue-dark disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send request"}
        </button>
      </div>
    </form>
  );
}
