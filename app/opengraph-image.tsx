import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#171717",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
          border: "1px solid #e5e5e5"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            letterSpacing: "0.16em",
            textTransform: "uppercase"
          }}
        >
          <span>{site.name}</span>
          <span style={{ color: "#737373" }}>Deutschland</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 78, lineHeight: 1.02, fontWeight: 600, maxWidth: 980 }}>
            Venture Studio für Startup-Aufbau
          </div>
          <div style={{ width: 160, height: 2, background: "#171717" }} />
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#525252", maxWidth: 860 }}>
            Von der validierten Idee bis zu MVP, Spin-off und Seed-Vorbereitung.
          </div>
        </div>
      </div>
    ),
    size
  );
}
