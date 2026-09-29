"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const CHUNK_GB = 0.375;

const hashes: Record<string, string> = {
    a: "9f2c", b: "41ad", c: "c07e", d: "5b19", e: "e3d4", f: "0a8f", g: "7c61", h: "d2b0",
    d2: "f64a", a2: "2e97", g2: "b8c3",
};

const versions = [
    { tag: "v1", message: "import raw_cut.mov", chunks: ["a", "b", "c", "d", "e", "f", "g", "h"] },
    { tag: "v2", message: "colour grade scene 4", chunks: ["a", "b", "c", "d2", "e", "f", "g", "h"] },
    { tag: "v3", message: "new intro, regrade scene 7", chunks: ["a2", "b", "c", "d2", "e", "f", "g2", "h"] },
];

// Every object that will ever exist, in creation order.
const allObjects = Array.from(new Set(versions.flatMap((v) => v.chunks)));

const gb = (n: number) => `${n.toFixed(1)} GB`;

export default function DedupDemo() {
    const [vi, setVi] = useState(1);
    const v = versions[vi];
    const prev = new Set(versions.slice(0, vi).flatMap((x) => x.chunks));
    const stored = new Set(versions.slice(0, vi + 1).flatMap((x) => x.chunks));

    const naive = (vi + 1) * v.chunks.length * CHUNK_GB;
    const dedup = stored.size * CHUNK_GB;
    const max = versions.length * v.chunks.length * CHUNK_GB;

    return (
        <div className="rounded-lg border border-line bg-surface p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="kicker">Try it · content-addressed storage</p>
                <div role="group" aria-label="File version" className="flex rounded-full border border-line p-1">
                    {versions.map((x, i) => (
                        <button
                            key={x.tag}
                            type="button"
                            aria-pressed={i === vi}
                            onClick={() => setVi(i)}
                            className={cn(
                                "h-9 min-w-12 rounded-full px-3 font-mono text-xs transition-colors",
                                i === vi ? "bg-fg text-bg" : "text-muted hover:text-fg",
                            )}
                        >
                            {x.tag}
                        </button>
                    ))}
                </div>
            </div>

            <p className="mt-6 font-mono text-sm">
                <span className="text-muted">$ mediagit commit -m</span> &quot;{v.message}&quot;
            </p>

            <div className="mt-6">
                <p className="kicker mb-2">promo_master.mov · 8 FastCDC chunks · BLAKE3 ids</p>
                <ol className="grid grid-cols-4 gap-1.5 sm:grid-cols-8">
                    {v.chunks.map((c, i) => {
                        const isNew = !prev.has(c);
                        return (
                            <li
                                key={i}
                                className={cn(
                                    "flex h-12 flex-col justify-center rounded border px-2 font-mono text-[11px] transition-colors duration-500",
                                    isNew ? "border-accent bg-accent text-bg" : "border-line bg-bg text-muted",
                                )}
                            >
                                <span>{hashes[c]}</span>
                                <span className="text-[9px] opacity-70">{isNew ? "new" : "reused"}</span>
                            </li>
                        );
                    })}
                </ol>
            </div>

            <div className="mt-6">
                <p className="kicker mb-2">
                    Object store · {stored.size} unique chunk{stored.size === 1 ? "" : "s"}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                    {allObjects.map((c) => {
                        const exists = stored.has(c);
                        const fresh = exists && !prev.has(c);
                        return (
                            <li
                                key={c}
                                aria-hidden={!exists}
                                className={cn(
                                    "flex h-7 w-12 items-center justify-center rounded border font-mono text-[10px] transition-all duration-500",
                                    !exists && "border-dashed border-line text-transparent",
                                    exists && !fresh && "border-line bg-bg text-muted",
                                    fresh && "border-accent text-accent",
                                )}
                            >
                                {hashes[c]}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <dl className="mt-8 grid gap-4 font-mono text-xs">
                {(
                    [
                        ["Full copies per version", naive, "bg-muted/40"],
                        ["MediaGit (deduplicated)", dedup, "bg-accent"],
                    ] as const
                ).map(([label, value, bar]) => (
                    <div key={label} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1.5">
                        <dt className="text-muted">{label}</dt>
                        <dd className="tabular-nums">{gb(value)}</dd>
                        <dd className="col-span-2 h-1.5 overflow-hidden rounded-full bg-line">
                            <div
                                className={cn("h-full rounded-full transition-[width] duration-700 ease-out", bar)}
                                style={{ width: `${(value / max) * 100}%` }}
                            />
                        </dd>
                    </div>
                ))}
            </dl>
            <p className="mt-4 text-xs text-muted">Illustrative sizes. Only changed chunks are stored, and every version stays restorable. Real benchmarks show 70–95% chunk reuse when a large file gets a small edit.</p>
        </div>
    );
}
