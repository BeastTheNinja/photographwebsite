import Image from 'next/image';
import portraitImage from '../../../../../public/MorSelfie.jpg';

const values = [
    'Tryg og rolig stemning foran kameraet',
    'Naturlige farver og ærlige udtryk',
    'Personlig vejledning fra første kontakt',
];

export default function AboutStory() {
    return (
        <section className="py-18 md:py-24">
            <div className="container mx-auto px-6">
                <div className="grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 mx-auto">
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute -inset-4 bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-20" />
                        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white shadow-2xl dark:bg-zinc-900">
                            <Image
                                src={portraitImage}
                                alt="Annika foran kamera med et roligt portrætudtryk"
                                className="w-full h-130 object-cover"
                                placeholder="blur"
                                loading="lazy"
                            />
                            <div className="absolute bottom-5 left-5 max-w-56 rounded-2xl bg-black/60 px-4 py-3 text-sm text-white backdrop-blur-md">
                                <p className="font-medium">Fotografi med plads til personlighed</p>
                                <p className="text-white/80">Rolig guidning og naturlige billeder</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
                            Min historie
                        </p>
                        <h2 className="mb-6 text-4xl tracking-tight text-gray-900 dark:text-white md:text-5xl">
                            Fotografi handler for mig om mennesker, stemninger og de små øjeblikke
                        </h2>
                        <div className="space-y-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                            <p>
                                Jeg arbejder ud fra Brønderslev og fotograferer mennesker, familier og begivenheder med fokus på
                                at skabe billeder, der føles naturlige og nærværende.
                            </p>
                            <p>
                                Min tilgang er enkel: vi skal have en god oplevelse sammen, og du skal føle dig tryg hele vejen
                                igennem. Når det sker, opstår de billeder, som man får lyst til at gemme og se igen mange år senere.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-4">
                            {values.map((value) => (
                                <div
                                    key={value}
                                    className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-transform hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-900"
                                >
                                    <div className="mt-1 h-3 w-3 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 shadow-[0_0_0_6px_rgba(79,70,229,0.08)]" />
                                    <p className="text-gray-700 dark:text-gray-200">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
