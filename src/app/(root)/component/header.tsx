import Image from 'next/image';
import Link from 'next/link';
import type { NavItem } from './navbar';
import MobileMenu from './mobile-menu';

const LOGO_BLUR_DATA_URL =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMjAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agc3RvcC1jb2xvcj0iI2U3ZTVlMSIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iI2NiZDVlMSIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiLz48L3N2Zz4=';

type HeaderProps = {
    logoUrl?: string;
    title: string;
    navItems: NavItem[];
};

export function Header({ logoUrl, title, navItems }: HeaderProps) {
    const bookingItem = navItems.find((item) => item.href === '/book') ?? { href: '/book', label: 'Booking' };
    const desktopNavItems = navItems.filter((item) => item.href !== bookingItem.href);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 shadow-sm backdrop-blur-md transition-colors dark:border-gray-800 dark:bg-gray-900/80">
            <div className="container relative mx-auto px-3 py-3 sm:px-6 sm:py-5">
                <div className="flex items-center justify-between gap-2 sm:gap-4">
                    <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
                        {logoUrl ? (
                            <div className="relative h-12 w-24 overflow-hidden sm:h-16 sm:w-36 md:h-24 md:w-52">
                                <Image
                                    src={logoUrl}
                                    alt="Logo"
                                    width={200}
                                    height={100}
                                    sizes="(max-width: 640px) 96px, (max-width: 768px) 144px, 208px"
                                    placeholder="blur"
                                    blurDataURL={LOGO_BLUR_DATA_URL}
                                    className="h-12 w-24 object-contain sm:h-16 sm:w-36 md:h-24 md:w-52"
                                />
                            </div>
                        ) : (
                            <div className="h-10 w-10 rounded-lg bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 shadow-lg" />
                        )}
                        <span className="hidden max-w-32 truncate text-sm tracking-tight text-gray-900 dark:text-white sm:inline sm:max-w-none sm:text-xl">{title}</span>
                    </Link>

                    <div className="flex items-center gap-1.5 sm:gap-3">
                        <Link
                            href={bookingItem.href}
                            className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-linear-to-r from-indigo-600 to-purple-600 px-2.5 py-2 text-sm leading-none text-white transition-all hover:shadow-lg sm:gap-2 sm:px-5"
                        >
                            <svg
                                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10m-11 10h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <span className="hidden sm:inline">{bookingItem.label}</span>
                            <span className="sm:hidden">Book</span>
                        </Link>
                        <MobileMenu items={desktopNavItems} />
                    </div>
                </div>
            </div>
        </header>
    );
}