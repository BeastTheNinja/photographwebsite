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
        <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
                <button
                    key={category}
                    type="button"
                    onClick={() => onSelectCategory(category)}
                    className={`px-8 py-3 rounded-full transition-all text-sm ${selectedCategory === category
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
