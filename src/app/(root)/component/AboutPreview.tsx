import Link from "next/link";

export default function AboutPreview() {
    return (
        <section className="py-24 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl mb-8 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Velkommen i mit studie
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        Jeg er Annika, en passioneret fotograf med fokus på at indfange essensen i hvert øjeblik.
                        Inden for bryllupsfotografering, portrætsessions og eventdækning
                        skaber jeg tidløse billeder, der fortæller din unikke historie.
                    </p>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
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
