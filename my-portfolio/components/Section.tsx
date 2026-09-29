import { cn } from "@/lib/utils";

type SectionProps = {
    id: string;
    index: string;
    label: string;
    title: React.ReactNode;
    aside?: React.ReactNode;
    className?: string;
    children: React.ReactNode;
};

export default function Section({ id, index, label, title, aside, className, children }: SectionProps) {
    return (
        <section id={id} aria-labelledby={`${id}-title`} className={cn("border-t border-line", className)}>
            <div className="mx-auto grid max-w-7xl gap-y-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-12 lg:gap-x-10 lg:px-10">
                <div className="lg:col-span-3">
                    <p className="kicker flex items-baseline gap-3">
                        <span className="text-accent">{index}</span>
                        <span>{label}</span>
                    </p>
                    {aside}
                </div>
                <div className="lg:col-span-9">
                    <h2
                        id={`${id}-title`}
                        className="reveal max-w-3xl font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-balance"
                    >
                        {title}
                    </h2>
                    <div className="mt-12 md:mt-16">{children}</div>
                </div>
            </div>
        </section>
    );
}
