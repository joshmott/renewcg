import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { site } from "@/lib/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-[22px] sm:px-12 lg:px-24 lg:py-[26px]">
        <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
          <Image
            src={logo}
            alt=""
            priority
            className="h-[24px] w-auto select-none lg:h-[26px]"
          />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-7 lg:gap-9">
          <a
            href="#services"
            className="hidden text-[13.5px] font-medium text-body transition-colors hover:text-ink sm:block"
          >
            Services
          </a>
          <a
            href="#about"
            className="hidden text-[13.5px] font-medium text-body transition-colors hover:text-ink sm:block"
          >
            About
          </a>
          <a
            href="#contact"
            className="hidden text-[13.5px] font-medium text-body transition-colors hover:text-ink sm:block"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="text-[13.5px] font-semibold text-blue transition-colors hover:text-blue-dark"
          >
            Request a quote&nbsp;&rarr;
          </a>
        </nav>
      </div>
    </header>
  );
}
