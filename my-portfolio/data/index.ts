export type NodeId = "clients" | "api" | "cache" | "fn" | "db" | "ci";

export const site = {
    url: "https://aswin-krishnamoorthy.vercel.app",
    name: "Aswin Krishnamoorthy",
    title: "Staff Software Engineer · Full-Stack SME",
    description:
        "Aswin Krishnamoorthy — staff-level full-stack engineer with 12+ years designing and building web and workflow platforms. Architecture, system design, and applied AI. Open to engineering lead and applied AI roles.",
    email: "winnyboy5@gmail.com",
    location: "Chennai, India",
    years: "12+",
    resume: "/pdf/AswinResume.pdf",
    github: "https://github.com/winnyboy5",
    linkedin: "https://www.linkedin.com/in/aswin-krishnamoorthy/",
    openTo: ["Engineering lead", "Applied AI"],
};

export const sections = [
    { id: "approach", label: "Approach" },
    { id: "work", label: "Work" },
    { id: "mediagit", label: "MediaGit" },
    { id: "experience", label: "Experience" },
    { id: "stack", label: "Stack" },
    { id: "contact", label: "Contact" },
] as const;

export const principles = [
    {
        title: "Architects should still ship.",
        body: "The best architecture calls come from engineers who build every day and feel the implementation pain firsthand. I design the API contracts and caching strategies, then write the code that runs them.",
    },
    {
        title: "Measure trade-offs. Don’t assume them.",
        body: "Serverless or containers? I benchmarked both before choosing. Serverless won on cost and auto-scaling despite cold-start concerns — and I led the migration end to end.",
    },
    {
        title: "AI is leverage, not judgement.",
        body: "I built a storage engine in Rust, a language I had never written, using AI-assisted workflows for the language-specific parts. The architecture, the module boundaries and every design decision stayed mine.",
    },
    {
        title: "Lead through standards.",
        body: "Most mentoring happens in code review. The component and API structure standards I defined became the ones the whole team adopted.",
    },
];

export type Case = {
    id: string;
    hash: string;
    tag: string;
    title: string;
    nodes: NodeId[];
    problem: string;
    decision: string;
    outcome: string;
};

export const cases: Case[] = [
    {
        id: "pagination",
        hash: "3f9c2e1",
        tag: "Performance",
        title: "Fixing a data layer that fell apart at scale",
        nodes: ["cache", "db"],
        problem:
            "The workflow module’s offset pagination was collapsing under real data volumes, and slow endpoints were causing production incidents.",
        decision:
            "Redesigned the data-fetching layer: query-result caching with TTL-based invalidation, and a move to cursor-based pagination.",
        outcome: "Both problems fixed — the slow endpoints and the incidents they caused.",
    },
    {
        id: "serverless",
        hash: "a41f0cb",
        tag: "Compute",
        title: "Serverless vs. containers, decided by benchmark",
        nodes: ["fn"],
        problem:
            "A workflow module needed a compute model, and the team had opinions but no data.",
        decision:
            "Benchmarked Azure Functions against containers. Serverless won on cost and auto-scaling; cold-start latency was a known, accepted trade-off.",
        outcome: "Led the migration to Azure Functions end to end.",
    },
    {
        id: "versioning",
        hash: "7be2d90",
        tag: "API design",
        title: "One API contract, three frontends",
        nodes: ["api", "clients"],
        problem:
            "Three separate frontend apps consume the workflow platform. Breaking the API for one breaks a team.",
        decision:
            "Designed the API contract and a versioning strategy with backward compatibility as a hard requirement, not a nice-to-have.",
        outcome: "The platform evolves while staying compatible with all three consumers.",
    },
    {
        id: "components",
        hash: "c05e7a4",
        tag: "Frontend platform",
        title: "From a monolithic UI to a shared component library",
        nodes: ["clients"],
        problem:
            "A legacy monolithic UI, and teams building the same components differently every time.",
        decision:
            "Broke it into a reusable Vue/Angular component library backed by a shared design-token system.",
        outcome: "Teams stopped rebuilding the same components in different ways.",
    },
    {
        id: "cicd",
        hash: "e8d1b36",
        tag: "Delivery",
        title: "Staged deploys instead of checklists",
        nodes: ["ci", "fn"],
        problem:
            "Manual deployment checklists, and too many failed production deploys.",
        decision:
            "Redesigned the CI/CD pipeline around staged deployments with automated smoke tests.",
        outcome: "Releases gated by automated checks rather than a human remembering every step.",
    },
    {
        id: "mentoring",
        hash: "1d6fa82",
        tag: "Leadership",
        title: "Mentoring four developers into shared standards",
        nodes: ["clients", "api"],
        problem:
            "Four junior developers, and no common structure for components or APIs.",
        decision:
            "Mentored mostly through code review, and defined component and API structure standards.",
        outcome: "Standards the whole team adopted — not just the four I mentored.",
    },
];

export const mediagitFacts = [
    { label: "Storage", value: "Content-addressable, deduplicated chunks" },
    { label: "Language", value: "Rust — my first; AI-assisted for language specifics" },
    { label: "Delivery", value: "GitHub Actions: cross-platform builds, tests, release artifacts" },
    { label: "Interface", value: "CLI for versioning, diffing and restoring media" },
];

export type Role = {
    company: string;
    location: string;
    role: string;
    start: string; // YYYY-MM
    end: string | null;
    summary: string;
};

export const experience: Role[] = [
    {
        company: "WPP Production / WPP Enterprise Technology",
        location: "Chennai",
        role: "Sr. Full-Stack Developer — SME",
        start: "2019-06",
        end: null,
        summary:
            "Workflow platform architecture: API contracts and versioning, caching and pagination, serverless migration, component library, CI/CD, mentoring.",
    },
    {
        company: "Cognizant Technology Solutions",
        location: "Coimbatore",
        role: "Frontend Developer",
        start: "2016-04",
        end: "2019-05",
        summary:
            "Shared JavaScript utility library for insurance and healthcare clients; component contracts and visual regression testing.",
    },
    {
        company: "Spouseup Technologies",
        location: "Coimbatore",
        role: "Web Developer",
        start: "2015-03",
        end: "2015-11",
        summary: "Query restructuring, strategic indexes and mobile asset loading to cut page load times.",
    },
    {
        company: "iProtecs Solutions",
        location: "Coimbatore",
        role: "UI Developer",
        start: "2013-11",
        end: "2015-02",
        summary: "Redesigned multi-step internal tools into single-screen workflows after watching engineers use them.",
    },
    {
        company: "Laswa Technologies",
        location: "Coimbatore",
        role: "Web Developer",
        start: "2012-10",
        end: "2013-10",
        summary: "E-commerce checkout flows, CMS features, structured data and page-speed work for organic search.",
    },
];

export const education = {
    degree: "B.E. Computer Science",
    school: "EASA College of Engineering & Technology, Anna University",
    year: "2012",
};

export const stack = [
    {
        group: "Languages",
        items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL", "Rust"],
    },
    {
        group: "Frameworks",
        items: ["Node.js", "Vue.js", "Angular", "FastAPI", "Flask", "Laravel"],
    },
    {
        group: "Data",
        items: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
        group: "Cloud & DevOps",
        items: ["Azure Functions", "Azure Blob Storage", "Docker", "GitHub Actions", "Git"],
    },
    {
        group: "Architecture",
        items: [
            "System design",
            "REST APIs & versioning",
            "Microservices",
            "Caching (in-memory + CDN)",
            "Event-driven patterns",
        ],
    },
    {
        group: "Applied AI",
        items: [
            "AI-assisted development",
            "Agentic workflows",
            "Claude & LLM coding assistants",
            "Prompt engineering",
        ],
    },
];
