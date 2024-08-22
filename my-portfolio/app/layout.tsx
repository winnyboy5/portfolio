import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider";

const quicksand = Quicksand({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Aswin Krishnamoorthy",
    description: "Developer Portfolio",
    manifest: '/icons/site.webmanifest',
    icons: {
        icon: '/icons/favicon-32x32.png',
        shortcut: '/icons/favicon-32x32.png',
        apple: '/icons/apple-touch-icon.png',
        other: {
        rel: '/icons/apple-touch-icon.png',
        url: '/icons/apple-touch-icon.png',
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={quicksand.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
