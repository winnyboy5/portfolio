import { principles } from "@/data";
import Section from "./Section";

export default function Approach() {
    return (
        <Section
            id="approach"
            index="01"
            label="Approach"
            title={
                <>
                    A hands-on lead. <span className="text-muted">Architecture from someone who still feels the implementation pain.</span>
                </>
            }
        >
            <ol className="grid gap-x-10 gap-y-12 md:grid-cols-2">
                {principles.map((p, i) => (
                    <li key={p.title} className="reveal border-t border-line pt-6">
                        <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="mt-3 text-xl font-medium tracking-tight">{p.title}</h3>
                        <p className="mt-3 max-w-prose leading-relaxed text-muted text-pretty">{p.body}</p>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
