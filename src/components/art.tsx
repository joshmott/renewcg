/**
 * Hand-drawn SVG line art in the brand palette. Used as service icons and as
 * graphic placeholders on project cards until real photography is supplied.
 */

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

export function ServiceIcon({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      role="presentation"
    >
      {slug === "class-2-remedial-works" && (
        <g {...stroke}>
          {/* apartment block with repair cross */}
          <rect x="5" y="4" width="14" height="24" />
          <path d="M9 9h2M13 9h2M9 14h2M13 14h2M9 19h2M13 19h2" />
          <path d="M10 28v-4h4v4" />
          <circle cx="24" cy="21" r="6" />
          <path d="M24 18.2v5.6M21.2 21h5.6" />
        </g>
      )}
      {slug === "residential-renovations" && (
        <g {...stroke}>
          {/* house with paint roller */}
          <path d="M4 15L14 6l10 9" />
          <path d="M7 13.5V26h14V13.5" />
          <path d="M12 26v-6h4v6" />
          <path d="M22 4h6v4h-6zM28 6h2v6h-4" />
        </g>
      )}
      {slug === "home-extensions" && (
        <g {...stroke}>
          {/* house with dashed addition */}
          <path d="M3 14l8-7 8 7" />
          <path d="M5.5 12v12H17V12" />
          <path d="M17 24h10V13" strokeDasharray="2.5 2.5" />
          <path d="M17 13h10" strokeDasharray="2.5 2.5" />
          <path d="M21 24v-5h3v5" strokeDasharray="2.5 2.5" />
        </g>
      )}
      {slug === "new-builds" && (
        <g {...stroke}>
          {/* crane over new frame */}
          <path d="M6 28V10L20 6" />
          <path d="M6 14l8-5.7" />
          <path d="M20 6v5" />
          <path d="M17 11h6v3h-6z" />
          <path d="M4 28h24" />
          <path d="M22 28v-7h6v7" />
        </g>
      )}
      {slug === "commercial-fit-outs" && (
        <g {...stroke}>
          {/* office tower with partition */}
          <rect x="6" y="5" width="12" height="23" />
          <path d="M10 10h4M10 15h4M10 20h4" />
          <path d="M18 12h8v16h-8" />
          <path d="M21 17h2M21 22h2" />
          <path d="M4 28h24" />
        </g>
      )}
    </svg>
  );
}

/**
 * Blueprint-style placeholder artwork for a project card, keyed by category.
 * Replace with real photography by adding an `image` to the project data.
 */
export function ProjectArt({
  category,
  className = "",
}: {
  category: string;
  className?: string;
}) {
  const art = (() => {
    switch (category) {
      case "Class 2 Remedial Works":
        return (
          <g {...stroke} strokeWidth={2}>
            {/* apartment façade with scaffolding */}
            <rect x="70" y="30" width="100" height="130" />
            <path d="M85 45h14M110 45h14M135 45h14M85 70h14M110 70h14M135 70h14M85 95h14M110 95h14M135 95h14M85 120h14M110 120h14M135 120h14" />
            <path d="M180 160V50M215 160V50M180 50h35M180 85h35M180 120h35M180 160h35" />
            <path d="M180 85l35-35M180 120l35-35M180 160l35-40" />
            <path d="M40 160h240" />
          </g>
        );
      case "Extensions":
        return (
          <g {...stroke} strokeWidth={2}>
            <path d="M50 95l55-45 55 45" />
            <path d="M65 84v76h80V84" />
            <path d="M92 160v-34h26v34" />
            <path d="M145 160h90V95" strokeDasharray="6 6" />
            <path d="M145 95h90" strokeDasharray="6 6" />
            <path d="M170 160v-30h20v30" strokeDasharray="6 6" />
            <path d="M30 160h250" />
          </g>
        );
      case "New Builds":
        return (
          <g {...stroke} strokeWidth={2}>
            <path d="M60 160V55L150 30" />
            <path d="M60 80l52-38" />
            <path d="M150 30v25" />
            <path d="M138 55h48v18h-48z" />
            <path d="M162 73v18" />
            <path d="M150 91h24v14h-24z" />
            <path d="M190 160v-48h58v48" />
            <path d="M205 160v-24h18v24" />
            <path d="M30 160h250" />
          </g>
        );
      case "Commercial Fit Outs":
        return (
          <g {...stroke} strokeWidth={2}>
            <rect x="60" y="30" width="90" height="130" />
            <path d="M78 50h20M112 50h20M78 78h20M112 78h20M78 106h20M112 106h20M78 134h20M112 134h20" />
            <path d="M150 70h80v90h-80" />
            <path d="M168 90h16M168 112h16M198 90h16M198 112h16" />
            <path d="M40 160h240" />
          </g>
        );
      default:
        // Renovations & general residential
        return (
          <g {...stroke} strokeWidth={2}>
            <path d="M45 100L120 40l75 60" />
            <path d="M62 87v73h116V87" />
            <path d="M95 160v-42h28v42" />
            <path d="M140 120h22v20h-22z" />
            <path d="M210 160V70h40v90" strokeDasharray="6 6" />
            <path d="M25 160h250" />
          </g>
        );
    }
  })();

  return (
    <svg
      viewBox="0 0 300 180"
      aria-hidden="true"
      className={className}
      role="presentation"
      preserveAspectRatio="xMidYMax meet"
    >
      {art}
    </svg>
  );
}
