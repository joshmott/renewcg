import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { Year } from "@/components/Year";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-11 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-24">
        <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
          <Image src={logo} alt="" className="h-[22px] w-auto select-none" />
        </Link>
        <div className="text-[12.5px] leading-relaxed text-muted sm:text-right">
          <p>
            {site.credentials.licenceLong} · {site.credentials.abn}
          </p>
          <p>
            © <Year /> {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
