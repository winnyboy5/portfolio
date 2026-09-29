import { education, experience, site } from "@/data";
import { formatMonth } from "@/lib/utils";
import Section from "./Section";

const toMonths = (ym: string) => {
    const [y, m] = ym.split("-").map(Number);
    return y * 12 + (m - 1);
};

const now = new Date();
const nowYm = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
const first = toMonths(experience[experience.length - 1].start);
const last = toMonths(nowYm) + 1;
const span = last - first;

const duration = (start: string, end: string | null) => {
    const m = toMonths(end ?? nowYm) - toMonths(start) + 1;
    const y = Math.floor(m / 12);
    const r = m % 12;
    return [y && `${y} yr${y > 1 ? "s" : ""}`, r && `${r} mo${r > 1 ? "s" : ""}`].filter(Boolean).join(" ");
};

const startYear = Math.floor(first / 12);
const ticks = Array.from({ length: Math.floor((last / 12 - startYear) / 3) + 1 }, (_, i) => startYear + i * 3);

const Track = ({ start, end, current }: { start: string; end: string | null; current: boolean }) => {
    const left = ((toMonths(start) - first) / span) * 100;
    const width = ((toMonths(end ?? nowYm) - toMonths(start) + 1) / span) * 100;
    return (
        <div className="relative h-2 rounded-full bg-line/60" aria-hidden="true">
            <div
                className={
                    current
                        ? "absolute inset-y-0 rounded-full bg-accent"
                        : "absolute inset-y-0 rounded-full bg-muted/50 transition-colors group-hover:bg-fg"
                }
                style={{ left: `${left}%`, width: `${width}%` }}
            />
        </div>
    );
};

export default function Experience() {
    return (
        <Section
            id="experience"
            index="04"
            label="Experience"
            title={
                <>
                    {site.years} years, five teams. <span className="text-muted">From checkout flows to platform architecture.</span>
                </>
            }
        >
            <div className="hidden grid-cols-12 gap-6 pb-3 md:grid" aria-hidden="true">
                <div className="relative col-span-4 col-start-9 h-4 font-mono text-[10px] text-muted">
                    {ticks.map((y) => (
                        <span
                            key={y}
                            className="absolute -translate-x-1/2"
                            style={{ left: `${((y * 12 - first) / span) * 100}%` }}
                        >
                            {y}
                        </span>
                    ))}
                </div>
            </div>
            <ol className="border-t border-line">
                {experience.map((r) => (
                    <li
                        key={r.company}
                        className="group reveal grid gap-x-6 gap-y-3 border-b border-line py-7 transition-colors hover:bg-surface/60 md:grid-cols-12 md:py-8"
                    >
                        <div className="font-mono text-xs text-muted md:col-span-3 md:pt-1">
                            <p className="text-fg">
                                {formatMonth(r.start)} — {r.end ? formatMonth(r.end) : "Present"}
                            </p>
                            <p className="mt-1">{duration(r.start, r.end)}</p>
                        </div>
                        <div className="md:col-span-5">
                            <h3 className="text-lg font-medium tracking-tight">{r.company}</h3>
                            <p className="mt-0.5 text-sm">
                                {r.role} <span className="text-muted">· {r.location}</span>
                            </p>
                            <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">{r.summary}</p>
                        </div>
                        <div className="md:col-span-4 md:pt-2">
                            <Track start={r.start} end={r.end} current={!r.end} />
                        </div>
                    </li>
                ))}
            </ol>
            <p className="reveal mt-10 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
                <span className="text-fg">Education</span>
                <span>
                    {education.degree} · {education.school} · {education.year}
                </span>
            </p>
        </Section>
    );
}
