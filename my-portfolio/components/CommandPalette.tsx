"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { sections, site } from "@/data";
import { cn } from "@/lib/utils";

type Action = { id: string; label: string; hint: string; run: () => void };

const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
    history.replaceState(null, "", `#${id}`);
};

export default function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState("");
    const [index, setIndex] = useState(0);
    const { resolvedTheme, setTheme } = useTheme();

    const actions: Action[] = useMemo(
        () => [
            { id: "top", label: "Top", hint: "Go to", run: () => goTo("top") },
            ...sections.map((s) => ({
                id: s.id,
                label: s.label,
                hint: "Go to",
                run: () => goTo(s.id),
            })),
            {
                id: "copy",
                label: "Copy email address",
                hint: site.email,
                run: () => void navigator.clipboard?.writeText(site.email),
            },
            { id: "mail", label: "Send an email", hint: "mailto", run: () => location.assign(`mailto:${site.email}`) },
            { id: "resume", label: "Open résumé", hint: "PDF", run: () => window.open(site.resume, "_blank") },
            { id: "github", label: "GitHub", hint: "External", run: () => window.open(site.github, "_blank", "noopener") },
            {
                id: "linkedin",
                label: "LinkedIn",
                hint: "External",
                run: () => window.open(site.linkedin, "_blank", "noopener"),
            },
            {
                id: "theme",
                label: "Toggle light / dark theme",
                hint: "Theme",
                run: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
            },
        ],
        [resolvedTheme, setTheme],
    );

    const results = actions.filter((a) => a.label.toLowerCase().includes(query.trim().toLowerCase()));

    useEffect(() => {
        const d = dialogRef.current;
        if (!d) return;
        if (open && !d.open) {
            d.showModal();
            inputRef.current?.focus();
        } else if (!open && d.open) {
            d.close();
        }
    }, [open]);

    const close = () => {
        setQuery("");
        setIndex(0);
        onClose();
    };

    const run = (a: Action | undefined) => {
        if (!a) return;
        close();
        a.run();
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setIndex((i) => (i + 1) % Math.max(results.length, 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setIndex((i) => (i - 1 + results.length) % Math.max(results.length, 1));
        } else if (e.key === "Enter") {
            e.preventDefault();
            run(results[index]);
        }
    };

    return (
        <dialog
            ref={dialogRef}
            onClose={close}
            onClick={(e) => e.target === dialogRef.current && close()}
            aria-label="Command menu"
            className="mx-auto mt-[12vh] w-[min(34rem,calc(100vw-2rem))] rounded-xl border border-line bg-bg p-0 text-fg shadow-2xl"
        >
            <div className="flex items-center gap-3 border-b border-line px-4">
                <span className="font-mono text-xs text-accent">›</span>
                <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIndex(0);
                    }}
                    onKeyDown={onKeyDown}
                    placeholder="Jump to a section or run an action…"
                    aria-label="Search commands"
                    aria-controls="cmd-list"
                    aria-activedescendant={results[index] ? `cmd-${results[index].id}` : undefined}
                    role="combobox"
                    aria-expanded="true"
                    className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted"
                />
                <kbd className="hidden rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted sm:block">
                    esc
                </kbd>
            </div>
            <ul id="cmd-list" role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
                {results.map((a, i) => (
                    <li
                        key={a.id}
                        id={`cmd-${a.id}`}
                        role="option"
                        aria-selected={i === index}
                        onMouseMove={() => setIndex(i)}
                        onClick={() => run(a)}
                        className={cn(
                            "flex cursor-pointer items-center justify-between gap-4 rounded-md px-3 py-2.5 text-sm",
                            i === index && "bg-surface",
                        )}
                    >
                        <span>{a.label}</span>
                        <span className="truncate font-mono text-[11px] text-muted">{a.hint}</span>
                    </li>
                ))}
                {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">No matches.</li>}
            </ul>
        </dialog>
    );
}
