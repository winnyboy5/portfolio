import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider";
import { site } from "@/data";

const serif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    variable: "--font-instrument",
    display: "swap",
});

const sans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-plex-sans",
    display: "swap",
});

const mono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-plex-mono",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: `${site.name} — ${site.title}`,
    description: site.description,
    alternates: { canonical: "/" },
    authors: [{ name: site.name, url: site.url }],
    keywords: [
        "Aswin Krishnamoorthy",
        "Staff Software Engineer",
        "Engineering Lead",
        "Applied AI",
        "Full-Stack",
        "System Design",
        "Software Architecture",
        "Chennai",
    ],
    openGraph: {
        type: "profile",
        url: "/",
        siteName: site.name,
        title: `${site.name} — ${site.title}`,
        description: site.description,
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: `${site.name} — ${site.title}`,
        description: site.description,
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#f3f0e8" },
        { media: "(prefers-color-scheme: dark)", color: "#121214" },
    ],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: "Staff Software Engineer",
    email: `mailto:${site.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
    alumniOf: "EASA College of Engineering & Technology",
    knowsAbout: ["System design", "Software architecture", "Full-stack development", "Applied AI", "Rust"],
    sameAs: [site.github, site.linkedin],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${serif.variable} ${sans.variable} ${mono.variable}`}
        >
            <body className="min-h-dvh">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
