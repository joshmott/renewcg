import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const deepBlue = "#10175f";
const cream = "#f7f1e3";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 90px",
          backgroundColor: deepBlue,
          color: cream,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 150,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: cream,
          }}
        >
          renew
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 44,
            fontWeight: 600,
            letterSpacing: "0.28em",
          }}
        >
          CONSTRUCTION GROUP
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 32,
            opacity: 0.85,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
