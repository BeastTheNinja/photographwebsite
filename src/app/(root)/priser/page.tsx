import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Priser',
    description:
        'Se priser for babyfoto, portrætter, konfirmation og bryllupsfotografering hos DinFotografAnninka. Alle priser er ekskl. moms.',
    alternates: {
        canonical: '/priser',
    },
};

const priceCards = [
    {
        title: 'Babyfoto',
        price: 'Fra 200 kr.',
        details: [
            'Første billede: 200 kr. (21x30).',
            'Ekstra billede kan tilkøbes for 100 kr. (10x13).',
        ],
    },
    {
        title: 'Portrætbilleder (op til 5 personer)',
        price: '450 kr.',
        details: [
            'Du får 4 stk. 10x13.',
            'Du får 1 stk. 21x30.',
        ],
    },
    {
        title: 'Konfirmationsbilleder',
        price: 'Fra 5.000 kr.',
        details: [
            '5.000 kr. hvis det kun er i kirken og uden for kirken.',
            '7.000 kr. hvis det er en hel dag fra kirken og til festen holdes.',
            'Begge tilbud inkluderer digitale billeder.',
        ],
    },
    {
        title: 'Bryllupsbilleder',
        price: 'Fra 7.000 kr.',
        details: [
            '7.000 kr. hvis det er i kirken og et valgfrit sted.',
            '10.000 kr. hvis det er en hel dag fra kirken og til festen holdes.',
            'Begge tilbud inkluderer digitale billeder.',
        ],
    },
];

export default function PricesPage() {
    return (
        <section className="bg-linear-to-b from-gray-50 to-white py-12 transition-colors sm:py-14 md:py-16 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center mb-14">
                    <h1 className="mb-6 bg-linear-to-r from-zinc-900 to-zinc-600 bg-clip-text text-4xl text-transparent sm:text-5xl md:text-6xl dark:from-zinc-100 dark:to-zinc-300">
                        Priser
                    </h1>
                    <p className="text-base text-gray-600 sm:text-lg md:text-xl dark:text-gray-300">
                        Her finder du mine faste pakker og priser. Alle priser er ekskl. moms.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {priceCards.map((card) => (
                        <article
                            key={card.title}
                            className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8 dark:border-zinc-800 dark:bg-zinc-900"
                        >
                            <h2 className="mb-3 text-2xl text-gray-900 sm:text-3xl dark:text-white">{card.title}</h2>
                            <p className="mb-6 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
                                {card.price}
                            </p>
                            <ul className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                                {card.details.map((detail) => (
                                    <li key={detail} className="flex gap-3">
                                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 shrink-0" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-indigo-100 bg-indigo-50/70 p-6 text-center sm:p-8 dark:border-indigo-900 dark:bg-indigo-950/40">
                    <p className="text-base text-gray-700 sm:text-lg dark:text-gray-200">
                        Alle priser er ekskl. moms.
                    </p>
                    <p className="mt-6 text-base text-gray-700 sm:text-lg dark:text-gray-200">
                        De kærligste hilsner
                    </p>
                    <p className="mt-2 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-xl text-transparent sm:text-2xl">
                        Din fotograf Annika
                    </p>
                </div>
            </div>
        </section>
    );
}
