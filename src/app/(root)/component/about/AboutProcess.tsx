const processSteps = [
    {
        number: '01',
        title: 'Vi tager en rolig snak',
        description:
            'Vi afklarer hvilken stemning du ønsker, hvor billederne skal bruges, og hvad der er vigtigst for dig.',
    },
    {
        number: '02',
        title: 'Du får en tryg session',
        description:
            'Jeg guider dig undervejs, så du ikke skal tænke på poseringer - bare være til stede i øjeblikket.',
    },
    {
        number: '03',
        title: 'Du modtager dine billeder',
        description:
            'Efterfølgende udvælger og færdiggør jeg billederne, så du får et smukt og sammenhængende resultat.',
    },
];

export default function AboutProcess() {
    return (
        <section className="py-18 md:py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400 mb-4">
                            Sådan arbejder jeg
                        </p>
                        <h2 className="text-4xl md:text-5xl tracking-tight text-gray-900 dark:text-white">
                            En enkel proces, så du kan slappe af hele vejen igennem
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {processSteps.map((step) => (
                            <article
                                key={step.number}
                                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
                            >
                                <p className="mb-5 text-sm font-semibold tracking-[0.35em] text-indigo-500 dark:text-indigo-400">
                                    {step.number}
                                </p>
                                <h3 className="mb-4 text-2xl text-gray-900 dark:text-white">{step.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
