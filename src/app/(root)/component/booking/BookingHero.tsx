import Link from 'next/link';

export default function BookingHero() {
    return (
        <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl mb-6 bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
                Book din fotosession
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
                Lad os skabe noget smukt sammen. Udfyld formularen, så vender jeg tilbage inden for 24 timer.
            </p>
            <div className="mt-6">
                <Link
                    href="/priser"
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-6 py-3 text-indigo-700 transition-all hover:shadow-lg hover:scale-105 dark:border-indigo-800 dark:bg-zinc-900 dark:text-indigo-300"
                >
                    Se priser før du booker
                    <span>→</span>
                </Link>
            </div>
        </div>
    );
}
