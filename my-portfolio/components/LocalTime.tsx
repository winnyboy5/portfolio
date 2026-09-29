"use client";

import { useSyncExternalStore } from "react";

const fmt = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
});

const subscribe = (cb: () => void) => {
    const t = setInterval(cb, 15_000);
    return () => clearInterval(t);
};

export default function LocalTime() {
    const time = useSyncExternalStore(
        subscribe,
        () => fmt.format(new Date()),
        () => "--:--",
    );
    return <time className="tabular-nums">{time}</time>;
}
