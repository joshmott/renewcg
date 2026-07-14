"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../../public/logo.png";
import { services, site } from "@/lib/site";

/**
 * Fixed nav overlaid on the hero: transparent with a white logo/links at the
 * top of the page, transitioning to a solid bar with the blue logo once the
 * visitor starts scrolling. On small screens the links collapse into a
 * hamburger menu. Anchor links smooth-scroll on the home page and navigate
 * home-then-scroll from any other page.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // honour a mid-page reload
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close both menus whenever the route changes.
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // On interior pages the home sections don't exist, so send the browser home.
  const anchor = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  const closeMobile = () => setMobileOpen(false);

  // Solid bar when the visitor has scrolled OR the mobile menu is open.
  const solid = scrolled || mobileOpen;

  const link = solid
    ? "text-body hover:text-ink"
    : "text-white/85 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? "border-hairline bg-paper/95 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-[22px] sm:px-12 lg:px-24 lg:py-[26px]">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="shrink-0"
          onClick={closeMobile}
        >
          <Image
            src={logo}
            alt=""
            priority
            className={`h-[32px] w-auto select-none transition-[filter] duration-300 lg:h-[38px] ${
              solid ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main"
          className="hidden items-center gap-7 sm:flex lg:gap-9"
        >
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocusCapture={() => setServicesOpen(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                setServicesOpen(false);
              }
            }}
          >
            <a
              href={anchor("services")}
              onClick={() => setServicesOpen(false)}
              aria-expanded={servicesOpen}
              className={`text-[15px] font-semibold transition-colors ${link}`}
            >
              Services
            </a>
            <div
              className={`absolute top-full left-1/2 z-10 -translate-x-1/2 pt-4 transition-opacity duration-150 ${
                servicesOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="min-w-[240px] rounded-[12px] border border-hairline bg-paper p-2 shadow-[0_18px_40px_rgba(20,24,60,.1)]">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-[8px] px-4 py-2.5 text-[14.5px] font-medium text-body transition-colors hover:bg-tint hover:text-ink"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <a
            href={anchor("about")}
            className={`text-[15px] font-semibold transition-colors ${link}`}
          >
            About
          </a>
          <a
            href={anchor("contact")}
            className={`text-[15px] font-semibold transition-colors ${link}`}
          >
            Contact
          </a>
          <a
            href={anchor("contact")}
            className={`text-[15px] font-semibold transition-colors ${
              scrolled
                ? "text-blue hover:text-blue-dark"
                : "text-white hover:text-white/80"
            }`}
          >
            Request a quote&nbsp;&rarr;
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          className={`-mr-2 flex h-10 w-10 items-center justify-center transition-colors sm:hidden ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-hairline bg-paper transition-[max-height,opacity] duration-300 sm:hidden ${
          mobileOpen ? "max-h-[85vh] border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="mx-auto flex max-w-[1440px] flex-col px-6 pt-2 pb-6"
        >
          <p className="px-1 pt-4 pb-1 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
            Services
          </p>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              onClick={closeMobile}
              className="rounded-[8px] px-1 py-2.5 text-[16px] font-medium text-body transition-colors hover:text-ink"
            >
              {s.title}
            </Link>
          ))}
          <div className="my-3 h-px w-full bg-hairline" />
          <a
            href={anchor("about")}
            onClick={closeMobile}
            className="px-1 py-2.5 text-[16px] font-semibold text-ink"
          >
            About
          </a>
          <a
            href={anchor("contact")}
            onClick={closeMobile}
            className="px-1 py-2.5 text-[16px] font-semibold text-ink"
          >
            Contact
          </a>
          <a
            href={anchor("contact")}
            onClick={closeMobile}
            className="mt-4 inline-flex w-full items-center justify-center rounded-[10px] bg-blue px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-blue-dark"
          >
            Request a quote
          </a>
        </nav>
      </div>
    </header>
  );
}
