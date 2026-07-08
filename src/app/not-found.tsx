import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-[1440px] flex-col items-start justify-center px-6 py-24 sm:px-12 lg:px-24">
      <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
        404 — Page not found
      </p>
      <h1 className="mt-4 max-w-[640px] text-[34px] leading-[1.15] font-medium tracking-[-0.015em] text-ink lg:text-[44px]">
        That page doesn&rsquo;t exist.
      </h1>
      <Link
        href="/"
        className="mt-8 rounded-[10px] bg-blue px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-blue-dark"
      >
        Back to home
      </Link>
    </section>
  );
}
