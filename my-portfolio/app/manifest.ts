import type { MetadataRoute } from "next";
import { site } from "@/data";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: site.name,
        short_name: "Aswin K.",
        description: site.description,
        start_url: "/",
        display: "standalone",
        background_color: "#f2f1ec",
        theme_color: "#141816",
        icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
    };
}
