import type { ReactNode } from "react";

export default function OfflineLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-neutral-950">
            {children}
        </div>
    );
}
