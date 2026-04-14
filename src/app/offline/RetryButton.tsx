"use client";

export default function RetryButton() {
    return (
        <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
        >
            Prøv igen
        </button>
    );
}
