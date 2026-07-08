/**
 * Code-recreation of the Renew Construction Group logo:
 * the "rcg" reflection mark beside the lowercase "renew" wordmark,
 * with CONSTRUCTION GROUP set in spaced caps beneath.
 *
 * `tone="blue"` renders the standard blue-on-light lockup;
 * `tone="cream"` renders the reversed version for dark backgrounds.
 */

type Tone = "blue" | "cream";

export function LogoMark({
  tone = "blue",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const box =
    tone === "blue"
      ? "bg-brand-600 text-cream-100"
      : "bg-cream-100 text-brand-600";
  return (
    <span
      aria-hidden="true"
      className={`flex select-none flex-col items-center justify-center overflow-hidden px-[0.3em] leading-none font-bold lowercase tracking-tight ${box} ${className}`}
    >
      <span className="translate-y-[0.06em]">rcg</span>
      <span className="-translate-y-[0.06em] opacity-90 [transform:scaleY(-1)]">
        rcg
      </span>
    </span>
  );
}

export function Logo({
  tone = "blue",
  className = "",
  withSubline = true,
}: {
  tone?: Tone;
  className?: string;
  withSubline?: boolean;
}) {
  const text = tone === "blue" ? "text-brand-600" : "text-cream-100";
  return (
    <span className={`inline-flex flex-col ${text} ${className}`}>
      <span className="flex items-stretch">
        <LogoMark tone={tone} className="text-[0.62em]" />
        <span className="ml-[0.08em] text-[1.9em] leading-[0.95] font-bold lowercase tracking-tight">
          renew
        </span>
      </span>
      {withSubline && (
        <span className="mt-[0.28em] text-[0.61em] leading-none font-semibold tracking-[0.18em] uppercase">
          Construction Group
        </span>
      )}
    </span>
  );
}
