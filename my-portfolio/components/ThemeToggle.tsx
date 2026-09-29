"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "./Icons";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle colour theme"
            className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:text-fg"
        >
            {/* Both icons render; CSS picks one, so there is no hydration mismatch. */}
            <Sun className="hidden dark:block" />
            <Moon className="block dark:hidden" />
        </button>
    );
}
