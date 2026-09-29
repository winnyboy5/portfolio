import { ImageResponse } from "next/og";
import { site } from "@/data";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 72,
                    background: "#f3f0e8",
                    color: "#17161a",
                    fontFamily: "serif",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, fontFamily: "monospace", color: "#5c584f" }}>
                    <div style={{ width: 14, height: 14, borderRadius: 14, background: "#c4401b" }} />
                    {`Open to ${site.openTo.join(" · ")} roles`}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 40, fontFamily: "sans-serif" }}>{site.name}</div>
                    <div style={{ fontSize: 84, lineHeight: 1, letterSpacing: -2, marginTop: 20 }}>
                        I design systems — and still write the code that runs them.
                    </div>
                </div>
                <div style={{ display: "flex", fontSize: 24, fontFamily: "monospace", color: "#5c584f" }}>
                    {`Senior Full-Stack Engineer · SME · ${site.years} years · Chennai, IN`}
                </div>
            </div>
        ),
        size,
    );
}
