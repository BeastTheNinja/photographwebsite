"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
    href: string;
    label: string;
};

export const NavLink = ({ href, label }: NavLinkProps) => {
    const pathname = usePathname();
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={[
                "inline-flex rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                isActive
                    ? "bg-indigo-500 text-white"
                    : "text-slate-200 hover:bg-slate-700 hover:text-white",
            ].join(" ")}
        >
            {label}
        </Link>
    );
};