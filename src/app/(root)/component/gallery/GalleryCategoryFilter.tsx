'use client';

interface GalleryCategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const categoryLabels: Record<string, string> = {
    Alle: 'Alle',
    Portraet: 'Portræt',
    Natur: 'Natur',
};

export default function GalleryCategoryFilter({
    categories,
    selectedCategory,
    onSelectCategory,
}: GalleryCategoryFilterProps) {
    return (
        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:mb-16 sm:gap-3">
            {categories.map((category) => (
                <button
                    key={category}
                    type="button"
                    onClick={() => onSelectCategory(category)}
                    className={`rounded-full px-5 py-2.5 text-sm transition-all sm:px-8 sm:py-3 ${selectedCategory === category
                        ? 'bg-linear-to-r from-zinc-900 to-zinc-700 text-white shadow-lg scale-105 dark:from-zinc-100 dark:to-zinc-300 dark:text-zinc-900'
                        : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800'
                        }`}
                >
                    {categoryLabels[category] ?? category}
                </button>
            ))}
        </div>
    );
}
