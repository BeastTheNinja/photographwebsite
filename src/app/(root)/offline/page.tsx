import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Offline",
    description: "Du er offline lige nu. Tjek din internetforbindelse og prøv igen.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function OfflinePage() {
    return (
        <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">Offline</p>
            <h1 className="mb-4 text-3xl font-semibold text-neutral-900 sm:text-4xl">
                Ingen forbindelse lige nu
            </h1>
            <p className="mb-8 max-w-xl text-base text-neutral-600 sm:text-lg">
                Siden kunne ikke hentes, fordi du er offline. Du kan gå tilbage til forsiden,
                eller opdatere siden, når forbindelsen er tilbage.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                    href="/"
                    className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                    Gå til forsiden
                </Link>
                <Link
                    href="/offline"
                    className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
                >
                    Prøv igen
                </Link>
            </div>
        </main>
    );
}
