import Link from 'next/link';

export default function AboutCTA() {
    return (
        <section className="py-18 md:py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 shadow-2xl text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl mb-5 tracking-tight">Lad os skabe noget smukt sammen</h2>
                        <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
                            Hvis du kan mærke, at vi passer godt sammen, så lad os tage den første snak og se, hvad vi kan skabe.
                        </p>
                        <p className="mb-8 text-sm uppercase tracking-[0.3em] text-white/70">
                            Portrætter · Familier · Bryllupper · Events
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/book"
                                className="bg-white text-indigo-600 px-10 py-4 rounded-full transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2 text-lg font-semibold"
                            >
                                Book en session
                            </Link>
                            <Link
                                href="/kontakt"
                                className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-10 py-4 rounded-full transition-all inline-flex items-center justify-center gap-2 text-lg font-semibold"
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
