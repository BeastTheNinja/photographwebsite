import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privatlivspolitik',
    description:
        'Læs hvordan DinFotografAnninka indsamler, behandler og opbevarer personoplysninger i forbindelse med hjemmesidebesøg og booking.',
    alternates: {
        canonical: '/privatlivspolitik',
    },
};

export default function PrivacyPolicyPage() {
    return (
        <section className="bg-linear-to-b from-gray-50 to-white py-12 transition-colors sm:py-14 md:py-16 dark:from-gray-900 dark:to-gray-800">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <div className="mb-10">
                    <h1 className="mb-4 bg-linear-to-r from-zinc-900 to-zinc-600 bg-clip-text text-3xl text-transparent sm:text-4xl md:text-5xl dark:from-zinc-100 dark:to-zinc-300">
                        Privatlivspolitik
                    </h1>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                        Vi indhenter kun persondata i de tilfælde, hvor det er relevant for din aktivitet hos DinFotografAnninka,
                        og vi behandler altid personoplysninger i overensstemmelse med gældende lovgivning.
                    </p>
                </div>

                <div className="space-y-8 text-gray-700 dark:text-gray-200 leading-relaxed">
                    <article className="rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
                        <h2 className="text-2xl mb-3 text-gray-900 dark:text-white">Opbevaring af persondata</h2>
                        <p>
                            Vi opbevarer kun dine persondata, så længe det er nødvendigt i forhold til formålet med
                            indsamlingen, eller så længe vi er retligt forpligtet hertil.
                        </p>
                    </article>

                    <article className="rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
                        <h2 className="text-2xl mb-3 text-gray-900 dark:text-white">Oplysninger vi indsamler</h2>
                        <p className="mb-3">
                            Hvis du bestiller en ydelse hos os, kan vi indsamle almindelige kontakt- og ordreoplysninger for at
                            kunne levere vores service.
                        </p>
                        <ul className="space-y-2 list-disc pl-6">
                            <li>Navn</li>
                            <li>E-mailadresse</li>
                            <li>Telefonnummer</li>
                            <li>Adresse (hvis relevant)</li>
                            <li>Betalingsoplysninger (hvis relevant)</li>
                        </ul>
                    </article>

                    <article className="rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
                        <h2 className="text-2xl mb-3 text-gray-900 dark:text-white">Hvornår indsamler vi data?</h2>
                        <ul className="space-y-2 list-disc pl-6">
                            <li>Når du booker eller køber en ydelse</li>
                            <li>Når du sender os en forespørgsel eller et spørgsmål</li>
                        </ul>
                    </article>

                    <article className="rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
                        <h2 className="text-2xl mb-3 text-gray-900 dark:text-white">Den dataansvarlige</h2>
                        <p>
                            DinFotografAnninka<br />
                            Brønderslev, Danmark
                        </p>
                    </article>

                    <article className="rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
                        <h2 className="text-2xl mb-3 text-gray-900 dark:text-white">Behandlingsgrundlag og formål</h2>
                        <p className="mb-3">
                            Vi bruger dine kontaktoplysninger for at kunne levere den aftalte ydelse, sende relevant information
                            om bookingforløbet og kommunikere med dig om din forespørgsel.
                        </p>
                        <p className="mb-3">
                            Hvis behandling af persondata er baseret på samtykke, kan samtykket til enhver tid tilbagekaldes.
                        </p>
                        <p>
                            Oplysninger opbevares som udgangspunkt i op til 5 år efter leveret ydelse, medmindre lovgivning
                            kræver anden opbevaringsperiode.
                        </p>
                    </article>

                    <article className="rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
                        <h2 className="text-2xl mb-3 text-gray-900 dark:text-white">Dine rettigheder</h2>
                        <p className="mb-3">Du har ret til at anmode om:</p>
                        <ul className="space-y-2 list-disc pl-6 mb-3">
                            <li>Indsigt i dine personoplysninger</li>
                            <li>Rettelse af urigtige oplysninger</li>
                            <li>Sletning af personoplysninger, hvor det er muligt</li>
                            <li>Begrænsning af behandling</li>
                            <li>Indsigelse mod behandling</li>
                        </ul>
                        <p>
                            Du har desuden ret til at indgive klage til en databeskyttelsesmyndighed.
                        </p>
                    </article>

                    <article className="rounded-2xl border border-indigo-100 dark:border-indigo-900 bg-indigo-50/70 dark:bg-indigo-950/40 p-6 shadow-sm">
                        <h2 className="text-2xl mb-3 text-gray-900 dark:text-white">Kontakt vedr. persondata</h2>
                        <p>
                            Hvis du ønsker, at vi skal stoppe behandlingen af dine personoplysninger eller begrænse behandlingen,
                            kan du kontakte os på:
                        </p>
                        <p className="mt-3">
                            <a
                                href="mailto:dinfotografannika@gmail.com"
                                className="text-indigo-700 dark:text-indigo-300 underline hover:text-purple-600 dark:hover:text-purple-300"
                            >
                                dinfotografannika@gmail.com
                            </a>
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}