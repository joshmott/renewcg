/**
 * TEMPORARY WORDMARK — the client's logo file isn't available yet, so the
 * site renders the word "renew" in brand style wherever the logo belongs.
 * When the logo file lands in /public, replace Logo with an <img> of it
 * (and LogoMark with the square mark) — nothing else needs to change.
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
      className={`flex items-center justify-center px-[0.4em] py-[0.3em] leading-none font-bold lowercase tracking-tight select-none ${box} ${className}`}
    >
      renew
    </span>
  );
}

export function Logo({
  tone = "blue",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const text = tone === "blue" ? "text-brand-600" : "text-cream-100";
  return (
    <span className={`inline-flex ${text} ${className}`}>
      <span className="text-[1.9em] leading-none font-bold lowercase tracking-tight">
        renew
      </span>
    </span>
  );
}
