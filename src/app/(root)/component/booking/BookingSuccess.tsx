import Link from 'next/link';
import type { BookingFormData } from './types';

interface BookingSuccessProps {
    formData: BookingFormData;
    onBookAnother: () => void;
}

function DisplayValue({ value }: { value: string }) {
    return <span className="font-semibold text-gray-900 dark:text-white">{value || 'Ikke angivet'}</span>;
}

export default function BookingSuccess({ formData, onBookAnother }: BookingSuccessProps) {
    return (
        <div className="flex min-h-[70vh] items-center justify-center px-4 py-12 sm:min-h-[80vh] sm:py-16">
            <div className="text-center max-w-2xl mx-auto">
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-green-400 to-emerald-600 shadow-2xl sm:h-24 sm:w-24">
                    <span className="text-3xl text-white sm:text-4xl">✓</span>
                </div>

                <h2 className="mb-6 bg-linear-to-r from-zinc-900 to-zinc-600 bg-clip-text text-3xl text-transparent sm:text-4xl md:text-5xl dark:from-zinc-100 dark:to-zinc-300">
                    Booking modtaget
                </h2>
                <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl dark:text-gray-300">
                    Tak fordi du valgte Din Fotograf Annika. Jeg glæder mig til at fange dine særlige øjeblikke.
                </p>

                <div className="mb-8 rounded-2xl border border-indigo-100 bg-linear-to-br from-indigo-50 to-purple-50 p-6 sm:p-8 dark:border-indigo-800 dark:from-indigo-950 dark:to-purple-950">
                    <h3 className="text-lg mb-4 text-gray-900 dark:text-white">Hvad sker der nu?</h3>
                    <div className="space-y-3 text-left text-gray-700 dark:text-gray-300">
                        <p>1. Du modtager en bekræftelsesmail på <strong>{formData.email}</strong>.</p>
                        <p>2. Jeg gennemgår din forespørgsel og vender tilbage inden for 24 timer.</p>
                        <p>3. Vi afstemmer detaljerne og planlægger en fantastisk fotosession.</p>
                    </div>
                </div>

                <div className="mb-8 rounded-2xl border border-gray-100 bg-white p-5 shadow-lg sm:p-6 dark:border-zinc-800 dark:bg-zinc-900">
                    <h3 className="text-lg mb-4 text-gray-900 dark:text-white">Din booking</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-left">
                        <div>
                            <p className="text-gray-500 mb-1">Sessionstype</p>
                            <DisplayValue value={formData.sessionType} />
                        </div>
                        <div>
                            <p className="text-gray-500 mb-1">Dato</p>
                            <DisplayValue value={formData.date} />
                        </div>
                        <div>
                            <p className="text-gray-500 mb-1">Tid</p>
                            <DisplayValue value={formData.time} />
                        </div>
                        <div>
                            <p className="text-gray-500 mb-1">Lokation</p>
                            <DisplayValue value={formData.location} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        type="button"
                        onClick={onBookAnother}
                        className="rounded-full bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base leading-none text-white transition-all hover:scale-105 hover:shadow-xl sm:px-8"
                    >
                        Book en ny fotosession
                    </button>
                    <Link
                        href="/"
                        className="rounded-full border-2 border-gray-300 px-6 py-3 text-base leading-none text-gray-700 transition-all hover:border-indigo-600 hover:text-indigo-600 sm:px-8 dark:border-zinc-600 dark:text-gray-100"
                    >
                        Tilbage til forsiden
                    </Link>
                </div>
            </div>
        </div>
    );
}
