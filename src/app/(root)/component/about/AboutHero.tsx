import Link from 'next/link';

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden pb-14 pt-12 sm:pt-14 sm:pb-[4.5rem] md:pt-20 md:pb-24">
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-indigo-50/70 via-white to-white dark:from-indigo-950/30 dark:via-gray-900 dark:to-gray-900" />
            <div className="absolute left-1/2 top-6 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-500/10" />
            <div className="container mx-auto px-4 sm:px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950 dark:text-indigo-300">
                        Om mig
                    </span>
                    <h1 className="mt-6 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-3xl leading-[0.95] tracking-tight text-transparent sm:text-4xl md:text-6xl lg:text-7xl">
                        Jeg skaber billeder med ro, nærvær og personlighed
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl dark:text-gray-300">
                        Jeg hedder Annika, og jeg hjælper mennesker og familier med at få billeder, der føles ægte, varme og tidløse.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <span className="rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">Brønderslev, Nordjylland</span>
                        <span className="rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">Portrætter</span>
                        <span className="rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">Familier og bryllupper</span>
                    </div>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/book"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base text-white transition-all hover:scale-105 hover:shadow-2xl sm:px-8 sm:py-3.5 md:text-lg"
                        >
                            Book en session
                            <span>→</span>
                        </Link>
                        <Link
                            href="/galleri"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-base text-gray-900 transition-all hover:scale-105 hover:shadow-lg sm:px-8 sm:py-3.5 md:text-lg dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                        >
                            Se mit arbejde
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
