"use client";

import { useEffect, useState } from "react";
import { cases } from "@/data";
import { cn } from "@/lib/utils";
import Section from "./Section";
import SystemMap from "./SystemMap";

export default function Work() {
    const [activeId, setActiveId] = useState(cases[0].id);

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) setActiveId(e.target.id.replace("case-", ""));
                }
            },
            { rootMargin: "-45% 0px -50% 0px" },
        );
        cases.forEach((c) => {
            const el = document.getElementById(`case-${c.id}`);
            if (el) io.observe(el);
        });
        return () => io.disconnect();
    }, []);

    const active = cases.find((c) => c.id === activeId) ?? cases[0];

    return (
        <Section
            id="work"
            index="02"
            label="Selected work · WPP"
            title={
                <>
                    Decisions, not just deliverables. <span className="text-muted">Six calls I made, and why.</span>
                </>
            }
            aside={
                <div className="sticky top-28 mt-10 hidden lg:block">
                    <SystemMap active={active.nodes} />
                    <p className="kicker mt-4 normal-case tracking-normal">
                        <span className="text-accent">{active.hash}</span> · {active.tag}
                    </p>
                </div>
            }
        >
            <ol className="border-t border-line">
                {cases.map((c, i) => (
                    <li
                        key={c.id}
                        id={`case-${c.id}`}
                        className="reveal scroll-mt-28 border-b border-line py-10 md:py-14"
                    >
                        <article>
                            <p className="kicker flex flex-wrap items-center gap-x-4 gap-y-1">
                                <span className={cn("transition-colors", activeId === c.id && "text-accent")}>
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="normal-case tracking-normal">commit {c.hash}</span>
                                <span>{c.tag}</span>
                            </p>
                            <h3 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.01em] text-balance md:text-4xl">
                                {c.title}
                            </h3>
                            <dl className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
                                {(
                                    [
                                        ["Problem", c.problem],
                                        ["Decision", c.decision],
                                        ["Outcome", c.outcome],
                                    ] as const
                                ).map(([k, v]) => (
                                    <div key={k}>
                                        <dt className="kicker">{k}</dt>
                                        <dd
                                            className={cn(
                                                "mt-2 leading-relaxed text-pretty",
                                                k === "Outcome" ? "text-fg" : "text-muted",
                                            )}
                                        >
                                            {v}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </article>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
