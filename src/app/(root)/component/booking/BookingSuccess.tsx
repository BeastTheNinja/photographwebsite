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
        <div className="min-h-[80vh] flex items-center justify-center py-16 px-4">
            <div className="text-center max-w-2xl mx-auto">
                <div className="w-24 h-24 bg-linear-to-br from-green-400 to-emerald-600 rounded-full mx-auto mb-8 shadow-2xl flex items-center justify-center">
                    <span className="text-4xl text-white">✓</span>
                </div>

                <h2 className="text-4xl md:text-5xl mb-6 bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
                    Booking modtaget
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Tak fordi du valgte Din Fotograf Annika. Jeg glæder mig til at fange dine særlige øjeblikke.
                </p>

                <div className="bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-2xl p-8 mb-8 border border-indigo-100 dark:border-indigo-800">
                    <h3 className="text-lg mb-4 text-gray-900 dark:text-white">Hvad sker der nu?</h3>
                    <div className="space-y-3 text-left text-gray-700 dark:text-gray-300">
                        <p>1. Du modtager en bekræftelsesmail på <strong>{formData.email}</strong>.</p>
                        <p>2. Jeg gennemgår din forespørgsel og vender tilbage inden for 24 timer.</p>
                        <p>3. Vi afstemmer detaljerne og planlægger en fantastisk fotosession.</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-zinc-800 mb-8">
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
                        className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all"
                    >
                        Book en ny fotosession
                    </button>
                    <Link
                        href="/"
                        className="border-2 border-gray-300 text-gray-700 dark:text-gray-100 dark:border-zinc-600 px-8 py-3 rounded-full hover:border-indigo-600 hover:text-indigo-600 transition-all"
                    >
                        Tilbage til forsiden
                    </Link>
                </div>
            </div>
        </div>
    );
}
