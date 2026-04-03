import Link from "next/link";

export default function AboutPreview() {
    return (
        <section className="bg-linear-to-b from-white to-gray-50 py-12 transition-colors sm:py-16 md:py-20 lg:py-24 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="mb-8 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-3xl text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
                        Velkommen i mit studie
                    </h2>
                    <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg md:text-xl">
                        Jeg er Annika, en passioneret fotograf med fokus på at indfange essensen i hvert øjeblik.
                        Inden for bryllupsfotografering, portrætsessions og eventdækning
                        skaber jeg tidløse billeder, der fortæller din unikke historie.
                    </p>
                    <p className="mb-10 text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg md:text-xl">
                        Hvert fotografi er et lille kunstværk, sammensat med fokus på ægthed, nærvær og stemning.
                        Uanset om det er din bryllupsdag, et familieportræt eller et virksomhedsevent,
                        er jeg her for at bevare dine minder på smukkeste vis.
                    </p>
                    <Link
                        href="/om"
                        className="text-indigo-600 hover:text-purple-600 inline-flex items-center gap-2 text-lg group"
                    >
                        Læs mere om mig
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
