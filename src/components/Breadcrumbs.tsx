import Link from "next/link";

type Crumb = { label: string; href?: string };

/**
 * Visible breadcrumb trail for interior-page heroes, styled to match the
 * eyebrow label it replaces (uppercase, tracked, white over the scrim).
 * The last item is the current page and renders unlinked.
 */
export function Breadcrumbs({
  items,
  className = "",
}: {
  items: Crumb[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold tracking-[0.18em] uppercase">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-x-2.5">
              {!last && item.href ? (
                <Link
                  href={item.href}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-white/80">
                  {item.label}
                </span>
              )}
              {!last && (
                <span aria-hidden="true" className="text-white/40">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
