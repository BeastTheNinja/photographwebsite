import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <div className="mb-8">
                    <h1 className="text-9xl md:text-[150px] font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        404
                    </h1>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Siden blev ikke fundet
                </h2>

                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                    Beklager, siden du søgte efter findes ikke. Det kan være at den blev fjernet eller adressen var forkert.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2 text-lg"
                    >
                        Gå til forsiden
                        <span>→</span>
                    </Link>

                    <Link
                        href="/galleri"
                        className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full transition-all hover:shadow-lg hover:scale-105 inline-flex items-center justify-center gap-2 text-lg"
                    >
                        Se galleriet
                        <span>🖼️</span>
                    </Link>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Behøver du hjælp?
                    </p>
                    <Link
                        href="/kontakt"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                    >
                        Kontakt mig her
                    </Link>
                </div>
            </div>
        </div>
    );
}
