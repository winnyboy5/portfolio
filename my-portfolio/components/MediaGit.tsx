import { mediagitFacts, site } from "@/data";
import DedupDemo from "./DedupDemo";
import { ArrowUpRight } from "./Icons";
import Section from "./Section";

export default function MediaGit() {
    return (
        <Section
            id="mediagit"
            index="03"
            label="Project"
            title={
                <>
                    MediaGit. <span className="text-muted">Version control for video, images and design files — in Rust.</span>
                </>
            }
        >
            <div className="grid gap-12 xl:grid-cols-9 xl:gap-10">
                <div className="reveal xl:col-span-4">
                    <p className="text-lg leading-relaxed text-pretty">
                        Git doesn&apos;t handle large binary files well. MediaGit uses a content-addressable storage
                        model to solve versioning, diffing and deduplication for the files media teams actually work with.
                    </p>
                    <p className="mt-5 leading-relaxed text-muted text-pretty">
                        I had never written Rust before this project. I used AI-assisted development for the
                        language-specific parts. The architecture, the module boundaries and every design decision
                        were mine.
                    </p>
                    <dl className="mt-10 border-t border-line">
                        {mediagitFacts.map((f) => (
                            <div key={f.label} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-3.5 text-sm">
                                <dt className="kicker pt-0.5">{f.label}</dt>
                                <dd className="text-pretty">{f.value}</dd>
                            </div>
                        ))}
                    </dl>
                    <a
                        href={site.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link mt-8 inline-flex items-center gap-1.5 font-mono text-xs"
                    >
                        More on GitHub <ArrowUpRight width={12} height={12} />
                    </a>
                </div>
                <div className="reveal xl:col-span-5">
                    <DedupDemo />
                </div>
            </div>
        </Section>
    );
}
