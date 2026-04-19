'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { NavItem } from './navbar';

type MobileMenuProps = {
    items: NavItem[];
};

export default function MobileMenu({ items }: MobileMenuProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Skift menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav"
            >
                <svg
                    className="h-5 w-5 text-gray-700 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                >
                    {mobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {mobileMenuOpen && (
                <nav
                    id="mobile-nav"
                    className="absolute left-2 right-2 top-full mt-2 rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:left-auto sm:right-6 sm:w-64 dark:border-gray-700 dark:bg-gray-900/95"
                    aria-label="Hovednavigation"
                >
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-lg px-3 py-2 text-base text-gray-700 transition-colors hover:bg-gray-100 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            )}
        </>
    );
}
