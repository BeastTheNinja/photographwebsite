import Link from 'next/link';
import { FacebookIcon, TikTokIcon } from './contact/icons';

export function Footer() {
    return (
        <footer className="mt-auto bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 transition-colors dark:from-black dark:via-gray-900 dark:to-black">
            <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="mb-6 text-lg text-white">Følg Med</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/Annika81larsen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-linear-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white"
                                aria-label="Facebook"
                            >
                                <FacebookIcon className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@annikalarsen81"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-linear-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white"
                                aria-label="TikTok"
                            >
                                <TikTokIcon className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-6 text-lg text-white">Hurtige Links</h3>
                        <div className="flex flex-col gap-3">
                            <Link href="/kontakt" className="flex items-center gap-2 transition-colors hover:text-white">
                                Kontakt
                            </Link>
                            <Link href="/book" className="flex items-center gap-2 transition-colors hover:text-white">
                                Book Tid
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-6 text-lg text-white">Juridisk</h3>
                        <div className="mb-6 flex flex-col gap-3">
                            <Link href="/privatlivspolitik" className="transition-colors hover:text-white">
                                Privatlivspolitik
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm">
                    <p>Ophavsret 2026 DinFotografAnninka. Alle rettigheder forbeholdes.</p>
                    <Link href="/admin/login" className="mt-2 inline-block text-xs text-white/40 transition-colors hover:text-white/60">
                        Admin log ind
                    </Link>
                </div>
            </div>
        </footer>
    );
}