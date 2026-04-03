import Link from 'next/link';

interface ContactCTAProps {
    email: string;
}

export default function ContactCTA({ email }: ContactCTAProps) {
    return (
        <div className="bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-3xl p-10 border border-indigo-100 dark:border-indigo-800">
            <h2 className="text-3xl md:text-4xl mb-6 bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
                Klar til at booke?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                Book din fotosession i dag! Om det er familie, portræt eller særlig begivenhed, er jeg her til at
                fange dine vigtige øjeblikke.
            </p>

            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                    href="/book"
                    className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-2 text-lg"
                >
                    Book en session
                </Link>
                <Link
                    href="/priser"
                    className="w-full bg-white dark:bg-zinc-900 border border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 px-8 py-4 rounded-full transition-all hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 text-lg"
                >
                    Se priser
                </Link>
            </div>

            <div className="border-t border-indigo-200 dark:border-indigo-800 pt-8">
                <h3 className="mb-4 text-lg text-gray-900 dark:text-white">Foretrækker du en besked?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Du kan nå mig direkte via email eller telefon ved hjælp af kontaktoplysningerne. Jeg svarer
                    typisk inden for 24 timer på hverdage.
                </p>
                <a
                    href={`mailto:${email}`}
                    className="text-indigo-600 dark:text-indigo-400 hover:text-purple-600 dark:hover:text-purple-400 underline text-lg"
                >
                    Send mig en email →
                </a>
            </div>

            <div className="mt-8 pt-8 border-t border-indigo-200 dark:border-indigo-800">
                <h3 className="mb-5 text-lg text-gray-900 dark:text-white">Hurtig info</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                        Svartid: Inden for 24 timer
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                        Booking på forhånd: 2-4 uger anbefalet
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                        Rejser tilgængelig: Dækning i hele Jylland
                    </li>
                </ul>
            </div>
        </div>
    );
}
