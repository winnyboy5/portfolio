import { site } from "@/data";
import CopyEmail from "./CopyEmail";
import { ArrowUpRight } from "./Icons";
import LocalTime from "./LocalTime";
import Section from "./Section";

export default function Contact() {
    const links = [
        { label: "LinkedIn", href: site.linkedin },
        { label: "GitHub", href: site.github },
        { label: "Résumé (PDF)", href: site.resume },
    ];

    return (
        <>
            <Section
                id="contact"
                index="06"
                label="Contact"
                title={
                    <>
                        Hiring a lead who still ships? <span className="text-muted">Let&apos;s talk.</span>
                    </>
                }
            >
                <div className="reveal">
                    <p className="max-w-xl leading-relaxed text-muted text-pretty">
                        I&apos;m open to engineering lead and applied AI roles — teams where architecture decisions and
                        daily production code sit with the same people.
                    </p>
                    <a
                        href={`mailto:${site.email}`}
                        className="group mt-10 inline-flex max-w-full items-center gap-3 font-serif text-[clamp(1.9rem,6vw,4.5rem)] leading-none tracking-[-0.02em]"
                    >
                        <span className="link break-all">{site.email}</span>
                        <ArrowUpRight className="size-[0.6em] shrink-0 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                    <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                        <CopyEmail />
                        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
                            {links.map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link inline-flex items-center gap-1"
                                    >
                                        {l.label} <ArrowUpRight width={12} height={12} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>
            <footer className="border-t border-line">
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
                    <p>
                        © {new Date().getFullYear()} {site.name}
                    </p>
                    <p>
                        Chennai · <LocalTime /> IST
                        <span className="hidden md:inline">
                            {" "}
                            · Press <kbd className="rounded border border-line px-1.5 py-0.5 text-fg">⌘K</kbd> to navigate
                        </span>
                    </p>
                </div>
            </footer>
        </>
    );
}
