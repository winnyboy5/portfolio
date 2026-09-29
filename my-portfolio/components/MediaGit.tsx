import { mediagit, mediagitFacts, mediagitStats } from "@/data";
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
                    MediaGit. <span className="text-muted">Git-like version control for large media files — in Rust.</span>
                </>
            }
        >
            <div className="grid gap-12 xl:grid-cols-9 xl:gap-10">
                <div className="reveal xl:col-span-4">
                    <p className="font-mono text-xs text-muted">
                        <span className="text-accent">{mediagit.version}</span> · release candidate · {mediagit.license}
                    </p>
                    <p className="mt-5 text-lg leading-relaxed text-pretty">
                        Git struggles with video, 3D and design files. MediaGit splits them into content-defined chunks,
                        stores each chunk once by its hash, and syncs them with the cloud storage media teams already
                        use.
                    </p>
                    <p className="mt-5 leading-relaxed text-muted text-pretty">
                        I had never written Rust before this project, and I&apos;m its only author. I used AI-assisted
                        development for the language-specific parts. The architecture, the module boundaries and every
                        design decision were mine.
                    </p>
                    <dl className="mt-10 border-t border-line">
                        {mediagitFacts.map((f) => (
                            <div
                                key={f.label}
                                className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-line py-3.5 text-sm sm:grid-cols-[6.5rem_1fr]"
                            >
                                <dt className="kicker pt-0.5">{f.label}</dt>
                                <dd className="text-pretty">{f.value}</dd>
                            </div>
                        ))}
                    </dl>
                    <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
                        <li>
                            <a
                                href={mediagit.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link inline-flex items-center gap-1.5"
                            >
                                winnyboy5/mediagit-core <ArrowUpRight width={12} height={12} />
                            </a>
                        </li>
                        <li>
                            <a
                                href={mediagit.releases}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link inline-flex items-center gap-1.5"
                            >
                                Releases <ArrowUpRight width={12} height={12} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="reveal xl:col-span-5">
                    <DedupDemo />
                    <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8">
                        {mediagitStats.map((s) => (
                            <li key={s.value} className="border-t border-line pt-4">
                                <p className="font-serif text-4xl leading-none tracking-tight md:text-5xl">{s.value}</p>
                                <p className="mt-2 text-sm leading-snug text-muted text-pretty">{s.label}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}
