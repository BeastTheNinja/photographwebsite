'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error('Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <div className="mb-8">
                    <h1 className="text-9xl md:text-[150px] font-bold bg-linear-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        500
                    </h1>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Noget gik galt
                </h2>

                <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
                    Der opstod en uventet fejl på serveren.
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
                    {error.message && `Fejl: ${error.message}`}
                    {error.digest && ` (ID: ${error.digest})`}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <button
                        onClick={reset}
                        className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2 text-lg"
                    >
                        Prøv igen
                        <span>↻</span>
                    </button>

                    <Link
                        href="/"
                        className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full transition-all hover:shadow-lg hover:scale-105 inline-flex items-center justify-center gap-2 text-lg"
                    >
                        Gå til forsiden
                        <span>→</span>
                    </Link>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Hvis problemet fortsætter, er du velkommen til at kontakte mig.
                    </p>
                    <Link
                        href="/kontakt"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                    >
                        Kontakt mig
                    </Link>
                </div>
            </div>
        </div>
    );
}
