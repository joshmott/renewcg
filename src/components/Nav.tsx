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
 * visitor starts scrolling. Anchor links smooth-scroll on the home page and
 * navigate home-then-scroll from any other page.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // honour a mid-page reload
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the services dropdown whenever the route changes.
  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  // On interior pages the home sections don't exist, so send the browser home.
  const anchor = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  const link = scrolled
    ? "text-body hover:text-ink"
    : "text-white/85 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-hairline bg-paper/95 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-[22px] sm:px-12 lg:px-24 lg:py-[26px]">
        <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
          <Image
            src={logo}
            alt=""
            priority
            className={`h-[32px] w-auto select-none transition-[filter] duration-300 lg:h-[38px] ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-7 lg:gap-9">
          {/* Services dropdown */}
          <div
            className="relative hidden sm:block"
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
              className={`absolute left-1/2 top-full z-10 -translate-x-1/2 pt-4 transition-opacity duration-150 ${
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
            className={`hidden text-[15px] font-semibold transition-colors sm:block ${link}`}
          >
            About
          </a>
          <a
            href={anchor("contact")}
            className={`hidden text-[15px] font-semibold transition-colors sm:block ${link}`}
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
      </div>
    </header>
  );
}
