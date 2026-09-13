/**
 * Line icons for the services — 24×24, 1.5px stroke, currentColor,
 * matching the thin editorial icon style of the reference site. Geometry is
 * drawn from open-licensed (ISC) Lucide/Feather primitives.
 */

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function FacadeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full" {...strokeProps}>
      {/* renewal arc with arrowhead */}
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      {/* house */}
      <polyline points="7.75 12.5 12 9.25 16.25 12.5" />
      <path d="M9.75 13.75v3.5h4.5v-3.5" />
    </svg>
  );
}

function RemedialIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full" {...strokeProps}>
      {/* hammer — repairs */}
      <path d="M15 12l-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9" />
      <path d="M17.64 15L22 10.64" />
      <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
    </svg>
  );
}

function HeritageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full" {...strokeProps}>
      {/* classical landmark — heritage */}
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  );
}

function CladdingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full" {...strokeProps}>
      {/* clipboard with checks — compliance */}
      <rect width="8" height="4" x="8" y="2" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 13 2 2 4-4" />
    </svg>
  );
}

function MaintenanceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full" {...strokeProps}>
      {/* wrench — maintenance */}
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ResidentialIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full" {...strokeProps}>
      {/* home — residential */}
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function CommercialIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full" {...strokeProps}>
      {/* office building — commercial */}
      <rect x="5" y="2.5" width="14" height="19" rx="1.5" />
      <path d="M9.5 7h1M13.5 7h1M9.5 11h1M13.5 11h1M9.5 15h1M13.5 15h1" />
      <path d="M10 21.5v-3.5h4v3.5" />
    </svg>
  );
}

const icons: Record<string, () => React.JSX.Element> = {
  "facade-upgrades": FacadeIcon,
  "remedial-repairs": RemedialIcon,
  "heritage-restoration": HeritageIcon,
  "cladding-compliance": CladdingIcon,
  "service-maintenance": MaintenanceIcon,
  "residential-construction": ResidentialIcon,
  "commercial-construction": CommercialIcon,
};

export function ServiceIcon({ slug }: { slug: string }) {
  const Icon = icons[slug];
  return Icon ? <Icon /> : null;
}
