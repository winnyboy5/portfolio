"use client";

import { useEffect, useRef, useState } from "react";
import { cases, type NodeId } from "@/data";
import { cn } from "@/lib/utils";

type Pt = [number, number];

type Box = { node: NodeId; x: number; y: number; w: number; h: number; label: string; sub?: string };

const boxes: Box[] = [
    { node: "clients", x: 10, y: 16, w: 100, h: 40, label: "app · a" },
    { node: "clients", x: 130, y: 16, w: 100, h: 40, label: "app · b" },
    { node: "clients", x: 250, y: 16, w: 100, h: 40, label: "app · c" },
    { node: "api", x: 80, y: 108, w: 200, h: 48, label: "API gateway", sub: "v1 · v2 — backward compatible" },
    { node: "cache", x: 80, y: 204, w: 200, h: 48, label: "Query cache", sub: "TTL invalidation" },
    { node: "fn", x: 20, y: 300, w: 150, h: 48, label: "Functions", sub: "Azure · serverless" },
    { node: "ci", x: 210, y: 300, w: 130, h: 48, label: "CI/CD", sub: "staged + smoke tests" },
    { node: "db", x: 80, y: 384, w: 200, h: 48, label: "Postgres", sub: "cursor pagination" },
];

type Edge = { from: NodeId; to: NodeId; pts: Pt[]; dashed?: boolean };

const clientPaths: Pt[][] = [
    [[60, 56], [60, 82], [180, 82], [180, 108]],
    [[180, 56], [180, 108]],
    [[300, 56], [300, 82], [180, 82], [180, 108]],
];

const edges: Edge[] = [
    ...clientPaths.map((pts) => ({ from: "clients" as NodeId, to: "api" as NodeId, pts })),
    { from: "api", to: "cache", pts: [[180, 156], [180, 204]] },
    { from: "cache", to: "fn", pts: [[180, 252], [180, 276], [95, 276], [95, 300]] },
    { from: "fn", to: "db", pts: [[95, 348], [95, 366], [180, 366], [180, 384]] },
    { from: "ci", to: "fn", pts: [[210, 324], [170, 324]], dashed: true },
];

const toApi = (i: number): Pt[] => [...clientPaths[i], [180, 156]];
const hitRoute = (i: number): Pt[] => [...toApi(i), [180, 204], [180, 228]];
const missRoute = (i: number): Pt[] => [
    ...toApi(i),
    [180, 204],
    [180, 252],
    [180, 276],
    [95, 276],
    [95, 300],
    [95, 348],
    [95, 366],
    [180, 366],
    [180, 408],
];

// Where each node links to in the "Work" section.
const nodeCase: Record<NodeId, string> = {
    clients: "components",
    api: "versioning",
    cache: "pagination",
    fn: "serverless",
    db: "pagination",
    ci: "cicd",
};

const toPath = (pts: Pt[]) => pts.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");

function pointAt(pts: Pt[], lengths: number[], total: number, p: number): Pt {
    let d = p * total;
    for (let i = 0; i < lengths.length; i++) {
        if (d <= lengths[i]) {
            const [x1, y1] = pts[i];
            const [x2, y2] = pts[i + 1];
            const k = lengths[i] ? d / lengths[i] : 0;
            return [x1 + (x2 - x1) * k, y1 + (y2 - y1) * k];
        }
        d -= lengths[i];
    }
    return pts[pts.length - 1];
}

type SystemMapProps = {
    active?: NodeId[];
    animated?: boolean;
    interactive?: boolean;
    className?: string;
};

export default function SystemMap({ active = [], animated = false, interactive = false, className }: SystemMapProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const packetsRef = useRef<SVGGElement>(null);
    const [hovered, setHovered] = useState<NodeId | null>(null);

    const lit = new Set<NodeId>(hovered ? [hovered] : active);

    useEffect(() => {
        if (!animated) return;
        const svg = svgRef.current;
        const layer = packetsRef.current;
        if (!svg || !layer) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        type Packet = { el: SVGCircleElement; pts: Pt[]; lengths: number[]; total: number; start: number; dur: number };
        const packets: Packet[] = [];
        let raf = 0;
        let visible = true;
        let lastSpawn = 0;

        const spawn = (now: number) => {
            const i = Math.floor(Math.random() * 3);
            const hit = Math.random() < 0.65;
            const pts = hit ? hitRoute(i) : missRoute(i);
            const lengths = pts.slice(1).map(([x, y], k) => Math.hypot(x - pts[k][0], y - pts[k][1]));
            const total = lengths.reduce((a, b) => a + b, 0);
            const el = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            el.setAttribute("r", "3");
            el.setAttribute("class", hit ? "fill-accent" : "fill-fg");
            layer.appendChild(el);
            packets.push({ el, pts, lengths, total, start: now, dur: total * 9 });
        };

        const frame = (now: number) => {
            if (now - lastSpawn > 650) {
                spawn(now);
                lastSpawn = now;
            }
            for (let k = packets.length - 1; k >= 0; k--) {
                const pk = packets[k];
                const t = (now - pk.start) / pk.dur;
                if (t >= 2) {
                    pk.el.remove();
                    packets.splice(k, 1);
                    continue;
                }
                // Request travels down, response travels back up.
                const p = t < 1 ? t : 2 - t;
                const [x, y] = pointAt(pk.pts, pk.lengths, pk.total, p);
                pk.el.setAttribute("cx", x.toFixed(1));
                pk.el.setAttribute("cy", y.toFixed(1));
                pk.el.setAttribute("opacity", t < 1 ? "1" : "0.55");
            }
            if (visible) raf = requestAnimationFrame(frame);
        };

        const io = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            cancelAnimationFrame(raf);
            if (visible) raf = requestAnimationFrame(frame);
        });
        io.observe(svg);

        return () => {
            io.disconnect();
            cancelAnimationFrame(raf);
            packets.forEach((pk) => pk.el.remove());
        };
    }, [animated]);

    const hoveredCase = hovered ? cases.find((c) => c.id === nodeCase[hovered]) : null;

    return (
        <figure className={cn("w-full", className)}>
            <svg
                ref={svgRef}
                viewBox="0 0 360 440"
                className="h-auto w-full overflow-visible"
                role="img"
                aria-label="System map: three frontend apps call a versioned API gateway, backed by a TTL query cache, Azure Functions and Postgres, deployed through a staged CI/CD pipeline."
            >
                <g fill="none" strokeWidth="1.25">
                    {edges.map((e, i) => (
                        <path
                            key={i}
                            d={toPath(e.pts)}
                            strokeDasharray={e.dashed ? "4 4" : undefined}
                            className={cn(
                                "transition-colors duration-300",
                                lit.has(e.from) && lit.has(e.to) ? "stroke-accent" : "stroke-muted/35",
                            )}
                        />
                    ))}
                </g>
                <g ref={packetsRef} aria-hidden="true" />
                {boxes.map((b, i) => {
                    const on = lit.has(b.node);
                    const body = (
                        <>
                            <rect
                                x={b.x}
                                y={b.y}
                                width={b.w}
                                height={b.h}
                                rx="3"
                                strokeWidth="1.25"
                                className={cn(
                                    "transition-colors duration-300",
                                    on ? "fill-accent-soft stroke-accent" : "fill-bg stroke-line",
                                )}
                            />
                            <text
                                x={b.x + 12}
                                y={b.sub ? b.y + 21 : b.y + b.h / 2 + 4}
                                className={cn("font-mono text-[11px]", on ? "fill-accent" : "fill-fg")}
                            >
                                {b.label}
                            </text>
                            {b.sub && (
                                <text x={b.x + 12} y={b.y + 36} className="fill-muted font-mono text-[9px]">
                                    {b.sub}
                                </text>
                            )}
                        </>
                    );
                    if (!interactive) return <g key={i}>{body}</g>;
                    return (
                        <a
                            key={i}
                            href={`#case-${nodeCase[b.node]}`}
                            aria-label={`${b.label}: see the related case study`}
                            className="cursor-pointer outline-none"
                            onMouseEnter={() => setHovered(b.node)}
                            onMouseLeave={() => setHovered(null)}
                            onFocus={() => setHovered(b.node)}
                            onBlur={() => setHovered(null)}
                        >
                            {body}
                        </a>
                    );
                })}
            </svg>
            {interactive && (
                <figcaption className="kicker mt-4 min-h-[2.5em] normal-case tracking-normal" aria-live="polite">
                    {hoveredCase ? (
                        <span className="text-fg">
                            <span className="text-accent">→</span> {hoveredCase.title}
                        </span>
                    ) : (
                        <span>
                            The workflow platform, simplified. <span className="text-fg">Pick a node</span> to jump to the decision behind it.
                        </span>
                    )}
                </figcaption>
            )}
        </figure>
    );
}
