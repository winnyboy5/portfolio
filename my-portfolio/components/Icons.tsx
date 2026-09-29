type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
};

export const ArrowUpRight = (p: IconProps) => (
    <svg {...base} {...p}>
        <path d="M7 17 17 7M8 7h9v9" />
    </svg>
);

export const ArrowDown = (p: IconProps) => (
    <svg {...base} {...p}>
        <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
);

export const Copy = (p: IconProps) => (
    <svg {...base} {...p}>
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15V6a2 2 0 0 1 2-2h8" />
    </svg>
);

export const Check = (p: IconProps) => (
    <svg {...base} {...p}>
        <path d="m5 12 5 5 9-10" />
    </svg>
);

export const Sun = (p: IconProps) => (
    <svg {...base} {...p}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
);

export const Moon = (p: IconProps) => (
    <svg {...base} {...p}>
        <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />
    </svg>
);

export const Search = (p: IconProps) => (
    <svg {...base} {...p}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
    </svg>
);
