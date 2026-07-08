import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

/* ── Layout primitives ──────────────────────────────────────────────────── */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "cream";
}) {
  return (
    <p
      className={`text-xs font-bold tracking-[0.22em] uppercase ${
        tone === "blue" ? "text-brand-600" : "text-cream-100/70"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "blue",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  tone?: "blue" | "cream";
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl ${
          tone === "blue" ? "text-brand-800" : "text-cream-100"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            tone === "blue" ? "text-ink/70" : "text-cream-100/80"
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

/* ── Buttons ────────────────────────────────────────────────────────────── */

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "cream" | "creamOutline";
  className?: string;
}) {
  const variants = {
    primary: "bg-brand-600 text-cream-100 hover:bg-brand-700",
    outline:
      "border-2 border-brand-600 text-brand-700 hover:bg-brand-600 hover:text-cream-100",
    cream: "bg-cream-100 text-brand-800 hover:bg-cream-200",
    creamOutline:
      "border-2 border-cream-100/60 text-cream-100 hover:border-cream-100 hover:bg-cream-100 hover:text-brand-800",
  } as const;
  return (
    <Link href={href} className={`${buttonBase} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 8h11" />
      <path d="M8.5 3.5L13 8l-4.5 4.5" />
    </svg>
  );
}

/* ── Email link ─────────────────────────────────────────────────────────── */

/**
 * Renders the contact email with a soft break opportunity after the "@" so
 * long addresses wrap cleanly in narrow columns instead of mid-word.
 */
export function EmailLink({ className = "" }: { className?: string }) {
  const [local, domain] = site.contact.email.split("@");
  return (
    <a href={`mailto:${site.contact.email}`} className={className}>
      {local}@<wbr />
      {domain}
    </a>
  );
}

/* ── Checklist item ─────────────────────────────────────────────────────── */

export function Check({ tone = "blue" }: { tone?: "blue" | "cream" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className={`mt-0.5 shrink-0 ${
        tone === "blue" ? "text-brand-600" : "text-cream-100"
      }`}
    >
      <rect
        x="1"
        y="1"
        width="16"
        height="16"
        rx="4"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M5 9.2l2.6 2.6L13 6.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Page hero (interior pages) ─────────────────────────────────────────── */

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="blueprint-grid border-b border-brand-100 bg-cream-100">
      <Container className="py-16 sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-balance text-brand-800 sm:text-5xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            {lede}
          </p>
        )}
      </Container>
    </section>
  );
}

/* ── Call-to-action banner ──────────────────────────────────────────────── */

export function CtaBanner({
  title = "Ready to talk about your project?",
  lede = "Tell us what you're planning — or what's gone wrong — and we'll come back to you with straight answers and a clear path forward.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="bg-brand-600">
      <div className="blueprint-grid-dark">
        <Container className="flex flex-col items-start gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-cream-100 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cream-100/85">
              {lede}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact" variant="cream">
              Request a quote <Arrow />
            </ButtonLink>
            <a
              href={site.contact.phoneHref}
              className={`${buttonBase} border-2 border-cream-100/60 text-cream-100 hover:border-cream-100 hover:bg-cream-100 hover:text-brand-800`}
            >
              Call {site.contact.phone}
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
