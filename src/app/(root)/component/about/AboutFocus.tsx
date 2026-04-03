const focusAreas = [
    {
        title: 'Portrætter',
        description: 'Billeder med personlighed, varme og et ærligt udtryk - både til dig selv, par og familier.',
    },
    {
        title: 'Familier',
        description: 'Afslappede sessions med plads til grin, bevægelse og de relationer, der betyder mest.',
    },
    {
        title: 'Bryllupper og events',
        description: 'Diskret og dokumentarisk dækning af store dage, hvor stemningen og detaljerne skal bevares.',
    },
];

export default function AboutFocus() {
    return (
        <section className="bg-white/70 py-14 sm:py-16 md:py-24 dark:bg-zinc-950/50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                            Det jeg laver mest
                        </p>
                        <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
                            Hver session bliver tilpasset personen foran kameraet
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {focusAreas.map((area) => (
                            <article
                                key={area.title}
                                className="rounded-3xl border border-gray-100 bg-linear-to-br from-indigo-50 to-purple-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8 dark:border-zinc-800 dark:from-indigo-950 dark:to-purple-950"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
                                    <span className="text-xl font-semibold">{area.title.slice(0, 1)}</span>
                                </div>
                                <h3 className="mb-4 text-2xl text-gray-900 dark:text-white">{area.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{area.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
