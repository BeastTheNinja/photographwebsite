'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { NavItem } from './navbar';

type HeaderProps = {
    logoUrl?: string;
    title: string;
    navItems: NavItem[];
};

export function Header({ logoUrl, title, navItems }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const bookingItem = useMemo(
        () => navItems.find((item) => item.href === '/book') ?? { href: '/book', label: 'Booking' },
        [navItems],
    );

    const desktopNavItems = useMemo(
        () => navItems.filter((item) => item.href !== bookingItem.href),
        [navItems, bookingItem.href],
    );

    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 shadow-sm backdrop-blur-md transition-colors dark:border-gray-800 dark:bg-gray-900/80">
            <div className="container relative mx-auto px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                    <Link href="/" className="flex items-center gap-3">
                        {logoUrl ? (
                            <Image
                                src={logoUrl}
                                alt="Logo"
                                width={200}
                                height={100}
                                sizes="(max-width: 768px) 140px, 200px"
                                className="h-[70px] w-[140px] object-contain md:h-[100px] md:w-[200px]"
                                priority
                            />
                        ) : (
                            <div className="h-10 w-10 rounded-lg bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 shadow-lg" />
                        )}
                        <span className="text-xl tracking-tight text-gray-900 dark:text-white">{title}</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <Link
                            href={bookingItem.href}
                            className="rounded-full bg-linear-to-r from-indigo-600 to-purple-600 px-5 py-2 text-sm text-white transition-all hover:shadow-lg"
                        >
                            {bookingItem.label}
                        </Link>

                        <button
                            type="button"
                            className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            aria-label="Toggle menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            <span className="text-sm text-gray-700 dark:text-gray-300">{mobileMenuOpen ? 'Luk' : 'Menu'}</span>
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <nav
                        className="absolute right-6 top-[calc(100%-0.5rem)] w-64 rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-xl backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/95"
                        aria-label="Main navigation"
                    >
                        {desktopNavItems.map((item) => (
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
            </div>
        </header>
    );
}