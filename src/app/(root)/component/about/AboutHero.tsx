import Link from 'next/link';

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden pt-14 pb-18 md:pt-20 md:pb-24">
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-indigo-50/70 via-white to-white dark:from-indigo-950/30 dark:via-gray-900 dark:to-gray-900" />
            <div className="absolute left-1/2 top-6 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-500/10" />
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950 dark:text-indigo-300">
                        Om mig
                    </span>
                    <h1 className="mt-6 text-4xl leading-[0.95] md:text-6xl lg:text-7xl tracking-tight bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Jeg skaber billeder med ro, nærvær og personlighed
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
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
                            className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-3.5 rounded-full transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2 text-base md:text-lg"
                        >
                            Book en session
                            <span>→</span>
                        </Link>
                        <Link
                            href="/galleri"
                            className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-white border border-gray-200 dark:border-zinc-700 px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:scale-105 inline-flex items-center justify-center gap-2 text-base md:text-lg"
                        >
                            Se mit arbejde
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
