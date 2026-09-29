import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatMonth(ym: string) {
    const [y, m] = ym.split("-").map(Number);
    return new Date(Date.UTC(y, m - 1)).toLocaleString("en-GB", { month: "short", year: "numeric", timeZone: "UTC" });
}
