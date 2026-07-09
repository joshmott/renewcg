"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../public/logo.png";
import { site } from "@/lib/site";

/**
 * Fixed nav overlaid on the full-screen hero: transparent with a white
 * logo/links at the top of the page, transitioning to a solid bar with the
 * blue logo once the visitor starts scrolling.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // honour a mid-page reload
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            className={`h-[28px] w-auto select-none transition-[filter] duration-300 lg:h-[32px] ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-7 lg:gap-9">
          <a
            href="#services"
            className={`hidden text-[13.5px] font-medium transition-colors sm:block ${link}`}
          >
            Services
          </a>
          <a
            href="#about"
            className={`hidden text-[13.5px] font-medium transition-colors sm:block ${link}`}
          >
            About
          </a>
          <a
            href="#contact"
            className={`hidden text-[13.5px] font-medium transition-colors sm:block ${link}`}
          >
            Contact
          </a>
          <a
            href="#contact"
            className={`text-[13.5px] font-semibold transition-colors ${
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
