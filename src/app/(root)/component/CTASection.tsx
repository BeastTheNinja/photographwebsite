import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-24 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">Ready to Capture Your Story?</h2>
                <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
                    Let&apos;s create beautiful memories together. Book your session today and let your story unfold!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/book"
                        className="bg-white text-indigo-600 px-10 py-4 rounded-full transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2 text-lg font-semibold"
                    >
                        Book Now
                    </Link>
                    <Link
                        href="/kontakt"
                        className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-10 py-4 rounded-full transition-all inline-flex items-center justify-center gap-2 text-lg font-semibold"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}
