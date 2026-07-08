import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container, EmailLink, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote or talk to Renew Construction Group about remedial works, renovations, extensions, new builds and commercial fit outs across NSW.",
  alternates: { canonical: "/contact" },
};

const contactDetails: { label: string; value: string; href?: string }[] = [
  {
    label: "Phone",
    value: site.contact.phone,
    href: site.contact.phoneHref,
  },
  {
    label: "Mobile",
    value: site.contact.mobile,
    href: site.contact.mobileHref,
  },
  // "email" is a sentinel — rendered via EmailLink for clean wrapping
  { label: "Email", value: "email" },
  { label: "Based in", value: site.contact.address },
  { label: "Hours", value: site.contact.hours },
  { label: "Service area", value: site.credentials.serviceArea },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project"
        lede="Quotes, defect reports, feasibility questions — send through whatever you have and we'll come back to you within one business day."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-brand-100 bg-white p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-brand-800">
                Request a quote
              </h2>
              <p className="mt-2 mb-8 text-sm text-ink/60">
                All fields are required unless marked optional.
              </p>
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl bg-brand-600 p-8 text-cream-100 sm:p-10">
              <h2 className="text-xl font-bold">Contact details</h2>
              <dl className="mt-6 space-y-4">
                {contactDetails.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs font-bold tracking-[0.18em] text-cream-100/75 uppercase">
                      {item.label}
                    </dt>
                    <dd className="mt-0.5 font-semibold">
                      {item.value === "email" ? (
                        <EmailLink className="hover:underline" />
                      ) : item.href ? (
                        <a href={item.href} className="hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl border border-brand-100 bg-white p-8 sm:p-10">
              <h2 className="text-xl font-bold text-brand-800">
                Licensed &amp; insured
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/75">
                <li>{site.credentials.licence}</li>
                <li>{site.credentials.dbpRegistration}</li>
                <li>{site.credentials.abn}</li>
                <li>{site.credentials.insurance}</li>
              </ul>
              <p className="mt-4 text-xs text-ink/60">
                Verify our licence and registration anytime via the NSW Fair
                Trading public registers.
              </p>
            </div>

            <div className="rounded-3xl border border-brand-100 bg-cream-100 p-8 sm:p-10">
              <h2 className="text-xl font-bold text-brand-800">
                For strata managers
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Managing defects across multiple buildings? Email your defect
                reports or scopes of work and we&apos;ll respond with budget
                pricing and a proposed methodology for your next committee
                meeting.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
