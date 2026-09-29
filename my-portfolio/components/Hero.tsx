import { site } from "@/data";
import CopyEmail from "./CopyEmail";
import { ArrowDown, ArrowUpRight } from "./Icons";
import SystemMap from "./SystemMap";

export default function Hero() {
    return (
        <section id="top" className="mx-auto max-w-7xl px-4 pt-14 pb-20 sm:px-6 md:pt-20 lg:px-10 lg:pb-28">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-7 xl:col-span-8">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted">
                        <span className="inline-flex items-center gap-2 text-fg">
                            <span className="pulse-dot relative inline-block size-2 rounded-full bg-accent" />
                            Open to {site.openTo.join(" · ")} roles
                        </span>
                        <span>Chennai, IN · UTC+5:30</span>
                    </div>

                    <h1 className="mt-10">
                        <span className="block text-lg font-medium tracking-tight sm:text-xl">{site.name}</span>
                        <span className="mt-4 block font-serif text-[clamp(3rem,8.5vw,7.25rem)] leading-[0.92] tracking-[-0.035em] text-balance">
                            I design systems&nbsp;— and still <em className="text-accent">write</em> the code that runs them.
                        </span>
                    </h1>

                    <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted text-pretty">
                        Staff-level full-stack engineer with <span className="text-fg">{site.years} years</span> building web and
                        workflow platforms end to end — frontend, backend, data, delivery and cloud. Currently{" "}
                        <span className="text-fg">Sr. Full-Stack SME at WPP</span>, and building{" "}
                        <a href="#mediagit" className="link text-fg">
                            MediaGit
                        </a>
                        , a version-control engine for media, in Rust.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-3">
                        <a
                            href={`mailto:${site.email}`}
                            className="inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg transition-colors hover:bg-accent"
                        >
                            Get in touch <ArrowUpRight />
                        </a>
                        <a
                            href={site.resume}
                            download="Aswin-Krishnamoorthy-Resume.pdf"
                            className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium transition-colors hover:border-fg"
                        >
                            Résumé <span className="font-mono text-xs text-muted">PDF</span> <ArrowDown />
                        </a>
                        <CopyEmail className="hidden sm:inline-flex" />
                    </div>

                    <ul className="mt-8 flex gap-6 font-mono text-xs">
                        <li>
                            <a href={site.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
                                GitHub <ArrowUpRight width={12} height={12} />
                            </a>
                        </li>
                        <li>
                            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
                                LinkedIn <ArrowUpRight width={12} height={12} />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mx-auto w-full max-w-sm lg:col-span-5 lg:mx-0 lg:max-w-none lg:pt-24 xl:col-span-4">
                    <SystemMap animated interactive />
                </div>
            </div>
        </section>
    );
}
