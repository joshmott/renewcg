import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-brand-900 text-cream-100">
      <div className="blueprint-grid-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Link href="/" aria-label={`${site.name} — home`}>
                <Logo tone="cream" className="text-lg" />
              </Link>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-cream-100/75">
                {site.description}
              </p>
              <div className="mt-6 space-y-1 text-sm font-semibold text-cream-100/90">
                <p>{site.credentials.licence}</p>
                <p>{site.credentials.abn}</p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="text-xs font-bold tracking-[0.2em] text-cream-100/60 uppercase">
                Services
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-cream-100/85 transition-colors hover:text-cream-100 hover:underline"
                    >
                      {s.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-xs font-bold tracking-[0.2em] text-cream-100/60 uppercase">
                Company
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {site.nav
                  .filter((n) => n.href !== "/")
                  .map((n) => (
                    <li key={n.href}>
                      <Link
                        href={n.href}
                        className="text-cream-100/85 transition-colors hover:text-cream-100 hover:underline"
                      >
                        {n.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-xs font-bold tracking-[0.2em] text-cream-100/60 uppercase">
                Contact
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-cream-100/85">
                <li>
                  <a
                    href={site.contact.phoneHref}
                    className="transition-colors hover:text-cream-100 hover:underline"
                  >
                    {site.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="break-all transition-colors hover:text-cream-100 hover:underline"
                  >
                    {site.contact.email}
                  </a>
                </li>
                <li>{site.contact.address}</li>
                <li>{site.contact.hours}</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-cream-100/15 pt-8 text-xs text-cream-100/60 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p>
              Licensed for residential &amp; commercial building work in NSW ·{" "}
              {site.credentials.serviceArea}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
