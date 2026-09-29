"use client";

import { useEffect, useState } from "react";
import { sections } from "@/data";
import CommandPalette from "./CommandPalette";
import { Search } from "./Icons";
import ThemeToggle from "./ThemeToggle";

const navIds = ["work", "mediagit", "experience", "contact"];

export default function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            const target = e.target as HTMLElement;
            const typing = target.closest("input, textarea, [contenteditable]");
            if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
                e.preventDefault();
                setOpen((o) => !o);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-sm supports-[backdrop-filter]:bg-bg/80">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
            >
                Skip to content
            </a>
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
                <a href="#top" className="flex items-baseline gap-2 whitespace-nowrap">
                    <span className="font-serif text-2xl italic leading-none">Aswin K.</span>
                    <span className="hidden font-mono text-[11px] text-muted sm:inline">/ staff engineer</span>
                </a>
                <nav aria-label="Primary" className="hidden md:block">
                    <ul className="flex gap-7 text-sm">
                        {sections
                            .filter((s) => navIds.includes(s.id))
                            .map((s) => (
                                <li key={s.id}>
                                    <a href={`#${s.id}`} className="link text-muted hover:text-fg">
                                        {s.label}
                                    </a>
                                </li>
                            ))}
                    </ul>
                </nav>
                <div className="flex items-center gap-1">
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        aria-haspopup="dialog"
                        className="inline-flex h-9 items-center gap-2 rounded-full border border-line px-3 font-mono text-xs text-muted transition-colors hover:border-fg hover:text-fg"
                    >
                        <Search width={14} height={14} />
                        <span className="md:hidden">Menu</span>
                        <kbd className="hidden md:inline">⌘K</kbd>
                    </button>
                    <ThemeToggle />
                </div>
            </div>
            <CommandPalette open={open} onClose={() => setOpen(false)} />
        </header>
    );
}
