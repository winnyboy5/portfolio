import { stack } from "@/data";
import Section from "./Section";

export default function Stack() {
    return (
        <Section
            id="stack"
            index="05"
            label="Stack"
            title={
                <>
                    A generalist&apos;s toolkit. <span className="text-muted">I pick up whatever the problem needs.</span>
                </>
            }
        >
            <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
                {stack.map((g) => (
                    <div key={g.group} className="reveal border-t border-line pt-5">
                        <dt className="kicker">{g.group}</dt>
                        <dd className="mt-4">
                            <ul className="space-y-1.5">
                                {g.items.map((item) => (
                                    <li key={item} className="text-[1.05rem]">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </dd>
                    </div>
                ))}
            </dl>
        </Section>
    );
}
