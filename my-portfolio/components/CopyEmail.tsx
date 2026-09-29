"use client";

import { useEffect, useState } from "react";
import { site } from "@/data";
import { cn } from "@/lib/utils";
import { Check, Copy } from "./Icons";

export default function CopyEmail({ className }: { className?: string }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const t = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(t);
    }, [copied]);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(site.email);
            setCopied(true);
        } catch {
            window.location.href = `mailto:${site.email}`;
        }
    };

    return (
        <button
            type="button"
            onClick={copy}
            className={cn(
                "inline-flex h-11 items-center gap-2 rounded-full border border-line px-4 font-mono text-xs transition-colors hover:border-fg",
                className,
            )}
        >
            {copied ? <Check className="text-accent" /> : <Copy />}
            <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
        </button>
    );
}
