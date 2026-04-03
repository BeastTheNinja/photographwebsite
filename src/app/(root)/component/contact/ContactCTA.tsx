import Link from 'next/link';

interface ContactCTAProps {
    email: string;
}

export default function ContactCTA({ email }: ContactCTAProps) {
    return (
        <div className="rounded-3xl border border-indigo-100 bg-linear-to-br from-indigo-50 to-purple-50 p-6 sm:p-8 md:p-10 dark:border-indigo-800 dark:from-indigo-950 dark:to-purple-950">
            <h2 className="mb-6 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl text-transparent sm:text-3xl md:text-4xl dark:from-indigo-300 dark:to-purple-300">
                Klar til at booke?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                Book din fotosession i dag! Om det er familie, portræt eller særlig begivenhed, er jeg her til at
                fange dine vigtige øjeblikke.
            </p>

            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                    href="/book"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base text-white transition-all hover:scale-[1.02] hover:shadow-2xl sm:px-8 sm:py-4 sm:text-lg"
                >
                    Book en session
                </Link>
                <Link
                    href="/priser"
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-indigo-200 bg-white px-6 py-3 text-base text-indigo-700 transition-all hover:scale-[1.02] hover:shadow-lg sm:px-8 sm:py-4 sm:text-lg dark:border-indigo-700 dark:bg-zinc-900 dark:text-indigo-300"
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
