import { ImageResponse } from "next/og";

export const alt = "VEYTRA Unternehmensentwicklung – von der unternehmerischen Frage zur belastbaren Entscheidung.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function DevelopmentOpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "54px 65px", background: "#f7f6f2", color: "#23251f", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: 29, fontWeight: 700, letterSpacing: "-.04em" }}>VEYTRA</span><span style={{ fontSize: 14, letterSpacing: ".13em", color: "#69745b" }}>UNTERNEHMENSENTWICKLUNG</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 26 }}><span style={{ fontSize: 69, lineHeight: 1.05, letterSpacing: "-.05em" }}>Von der unternehmerischen Frage</span><span style={{ fontSize: 69, lineHeight: 1.05, letterSpacing: "-.05em", color: "#c55338" }}>zur belastbaren Entscheidung.</span></div>
      <div style={{ display: "flex", width: "100%", borderTop: "1px solid #cbd3bc", marginTop: 42, paddingTop: 27 }}>
        {["DISCOVER", "VALIDATE", "GROW", "IMPROVE"].map((phase, index) => <div key={phase} style={{ display: "flex", flexDirection: "column", width: "25%", gap: 11, borderLeft: index > 0 ? "1px solid #cbd3bc" : "none", paddingLeft: index > 0 ? 25 : 0 }}><span style={{ color: "#7d896b", fontSize: 12 }}>0{index + 1}</span><span style={{ fontSize: 20, fontWeight: 500 }}>{phase}</span></div>)}
      </div>
    </div>,
    size
  );
}
