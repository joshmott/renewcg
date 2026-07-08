"use client";

import { useState } from "react";
import { EmailLink } from "@/components/ui";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

/**
 * Zero-backend contact form: on submit it opens the visitor's email client
 * with a pre-filled enquiry to the address in src/lib/site.ts.
 *
 * To upgrade to server-side delivery later, wire the submit handler to a
 * form service (e.g. Formspree/Basin) or a Next.js route handler using an
 * email API (e.g. Resend) — the field names below are ready to post as-is.
 */

const projectTypes = [
  ...services.map((s) => s.title),
  "Something else / not sure yet",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const subject = `Website enquiry — ${data.get("projectType")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Suburb / location: ${data.get("location")}`,
      `Project type: ${data.get("projectType")}`,
      "",
      "Message:",
      String(data.get("message")),
    ].join("\n");

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const inputClasses =
    "w-full rounded-xl border border-brand-400 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/60 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/60";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-brand-800">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-brand-800">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Best contact number"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-brand-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="location" className="mb-1.5 block text-sm font-bold text-brand-800">
            Suburb / location (optional)
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Where is the project?"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="mb-1.5 block text-sm font-bold text-brand-800">
          Project type
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className={inputClasses}
        >
          <option value="" disabled>
            Select the closest match
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-brand-800">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Scope, timing, defect report findings — whatever you have. Rough is fine."
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3.5 text-sm font-bold text-cream-100 transition-colors hover:bg-brand-700"
        >
          Send enquiry
        </button>
        <p role="status" className="text-sm font-semibold text-brand-700">
          {sent ? (
            <>
              Your email app should have opened with the enquiry ready to send
              — or email us directly at <EmailLink className="underline" />.
            </>
          ) : null}
        </p>
      </div>
      <p className="text-xs text-ink/60">
        Submitting opens your email app with the enquiry pre-filled — nothing
        is stored on this website.
      </p>
    </form>
  );
}
