'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { NavItem } from './navbar';

const LOGO_BLUR_DATA_URL =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMjAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agc3RvcC1jb2xvcj0iI2U3ZTVlMSIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iI2NiZDVlMSIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiLz48L3N2Zz4=';

type HeaderProps = {
    logoUrl?: string;
    title: string;
    navItems: NavItem[];
};

export function Header({ logoUrl, title, navItems }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLogoLoaded, setIsLogoLoaded] = useState(false);

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
                            <div className="relative h-[4.375rem] w-[8.75rem] md:h-[6.25rem] md:w-[12.5rem] overflow-hidden">
                                {!isLogoLoaded ? (
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 z-10 bg-linear-to-r from-zinc-200 via-zinc-100 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 animate-pulse"
                                    />
                                ) : null}

                                <Image
                                    src={logoUrl}
                                    alt="Logo"
                                    width={200}
                                    height={100}
                                    sizes="(max-width: 768px) 140px, 200px"
                                    loading="eager"
                                    placeholder="blur"
                                    blurDataURL={LOGO_BLUR_DATA_URL}
                                    onLoad={() => setIsLogoLoaded(true)}
                                    className={`h-[4.375rem] w-[8.75rem] object-contain transition-all duration-300 md:h-[6.25rem] md:w-[12.5rem] ${isLogoLoaded ? 'blur-0 scale-100 opacity-100' : 'blur-sm scale-[1.02] opacity-80'}`}
                                />
                            </div>
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
                            aria-label="Skift menu"
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-nav"
                        >
                            <span className="text-sm text-gray-700 dark:text-gray-300">{mobileMenuOpen ? 'Luk' : 'Menu'}</span>
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <nav
                        id="mobile-nav"
                        className="absolute right-6 top-[calc(100%-0.5rem)] w-64 rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-xl backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/95"
                        aria-label="Hovednavigation"
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