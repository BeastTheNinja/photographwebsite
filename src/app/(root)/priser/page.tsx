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
        <section className="py-16 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-14">
                    <h1 className="text-5xl md:text-6xl mb-6 bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
                        Priser
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Her finder du mine faste pakker og priser. Alle priser er ekskl. moms.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {priceCards.map((card) => (
                        <article
                            key={card.title}
                            className="rounded-3xl border border-gray-100 bg-white dark:bg-zinc-900 dark:border-zinc-800 shadow-xl p-8"
                        >
                            <h2 className="text-3xl mb-3 text-gray-900 dark:text-white">{card.title}</h2>
                            <p className="text-2xl font-semibold mb-6 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
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

                <div className="max-w-4xl mx-auto mt-12 rounded-3xl border border-indigo-100 dark:border-indigo-900 bg-indigo-50/70 dark:bg-indigo-950/40 p-8 text-center">
                    <p className="text-gray-700 dark:text-gray-200 text-lg">
                        Alle priser er ekskl. moms.
                    </p>
                    <p className="mt-6 text-gray-700 dark:text-gray-200 text-lg">
                        De kærligste hilsner
                    </p>
                    <p className="text-2xl mt-2 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Din fotograf Annika
                    </p>
                </div>
            </div>
        </section>
    );
}
