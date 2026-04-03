import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 py-12 text-white sm:py-16 md:py-20 lg:py-24">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-white blur-3xl sm:h-80 sm:w-80 md:h-96 md:w-96" />
                <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white blur-3xl sm:h-80 sm:w-80 md:h-96 md:w-96" />
            </div>
            <div className="container relative z-10 mx-auto px-4 text-center sm:px-6">
                <h2 className="mb-6 text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">Klar til at fortælle din historie?</h2>
                <p className="mx-auto mb-12 max-w-3xl text-base opacity-90 sm:text-lg md:text-xl lg:text-2xl">
                    Lad os skabe smukke minder sammen. Book din session i dag og lad historien folde sig ud.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/book"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-indigo-600 transition-all hover:scale-105 hover:shadow-2xl sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-lg"
                    >
                        Book nu
                    </Link>
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-lg"
                    >
                        Kontakt mig
                    </Link>
                </div>
            </div>
        </section>
    );
}
