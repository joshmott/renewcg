import Image from "next/image";
import logoFile from "../../public/logo.png";

/**
 * The client's logo (public/logo.png, trimmed from the uploaded original
 * "Renew Construction Group Transparent.png").
 *
 * tone="cream" renders a light silhouette for dark backgrounds — the
 * artwork is single-colour, so a CSS invert keeps the letterforms crisp.
 * Consumers size it with a height class (e.g. className="h-9").
 */

type Tone = "blue" | "cream";

export function Logo({
  tone = "blue",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <Image
      src={logoFile}
      alt=""
      priority
      className={`w-auto select-none ${
        tone === "cream" ? "brightness-0 invert" : ""
      } ${className}`}
    />
  );
}
