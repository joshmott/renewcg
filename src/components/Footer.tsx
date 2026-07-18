import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { Year } from "@/components/Year";
import { services, site } from "@/lib/site";

const headingClasses =
  "text-xs font-semibold tracking-[0.18em] uppercase text-muted";
const linkClasses =
  "text-[14.5px] text-body transition-colors hover:text-blue";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/#contact" },
];

const landingPages = [
  { label: "Concrete Cancer Repair", href: "/services/concrete-cancer-repair" },
  {
    label: "Balcony Repairs & Waterproofing",
    href: "/services/balcony-repairs-waterproofing",
  },
  {
    label: "Strata Remedial Builders",
    href: "/services/strata-remedial-builders",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-12 lg:px-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand + contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label={`${site.name} — home`}
              className="inline-block"
            >
              <Image src={logo} alt="" className="h-[26px] w-auto select-none" />
            </Link>
            <p className="mt-5 max-w-[300px] text-[14.5px] leading-[1.7]">
              Remedial construction across greater Sydney — licensed, insured
              and accountable from inspection to sign-off.
            </p>
            <div className="mt-5 flex flex-col gap-1.5">
              <a
                href={site.contact.phoneHref}
                className="w-fit text-[14.5px] font-semibold text-ink transition-colors hover:text-blue"
              >
                {site.contact.phone}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="w-fit text-[14.5px] font-semibold text-ink transition-colors hover:text-blue"
              >
                {site.contact.email}
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <p className={headingClasses}>Menu</p>
            <ul className="mt-5 flex flex-col gap-3">
              {menuLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkClasses}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className={headingClasses}>Services</p>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={linkClasses}>
                    {s.title}
                  </Link>
                </li>
              ))}
              {landingPages.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClasses}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-hairline pt-6 text-[12.5px] leading-relaxed text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.credentials.licenceLong} · {site.credentials.abn} ·{" "}
            <a
              href={site.credentials.buyNswUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue"
            >
              buy.nsw registered supplier
            </a>
          </p>
          <p>
            © <Year /> {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
