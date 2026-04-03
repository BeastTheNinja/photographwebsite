import Link from 'next/link';

export default function AboutCTA() {
    return (
        <section className="py-14 sm:py-18 md:py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 text-center text-white shadow-2xl sm:p-10 md:p-12 lg:p-16">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="mb-5 text-3xl tracking-tight sm:text-4xl md:text-5xl">Lad os skabe noget smukt sammen</h2>
                        <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed opacity-90 sm:text-lg md:text-xl">
                            Hvis du kan mærke, at vi passer godt sammen, så lad os tage den første snak og se, hvad vi kan skabe.
                        </p>
                        <p className="mb-8 text-sm uppercase tracking-widest text-white/70">
                            Portrætter · Familier · Bryllupper · Events
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/book"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-indigo-600 transition-all hover:scale-105 hover:shadow-2xl sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-lg"
                            >
                                Book en session
                            </Link>
                            <Link
                                href="/kontakt"
                                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-lg"
                            >
                                Kontakt mig
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
