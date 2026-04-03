import Link from "next/link";

export default function AboutPreview() {
    return (
        <section className="py-24 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl mb-8 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Welcome to My Studio
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        I&apos;m Annika, a passionate photographer dedicated to capturing the essence of every moment.
                        With years of experience in wedding photography, portrait sessions, and event coverage,
                        I strive to create timeless images that tell your unique story.
                    </p>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
                        Every photograph is a piece of art, carefully composed to reflect genuine emotions and
                        authentic moments. Whether it&apos;s your wedding day, a family portrait, or a corporate event,
                        I&apos;m here to preserve your memories beautifully.
                    </p>
                    <Link
                        href="/om"
                        className="text-indigo-600 hover:text-purple-600 inline-flex items-center gap-2 text-lg group"
                    >
                        Learn more about me
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
