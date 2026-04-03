interface ServiceCardItem {
    title: string;
    description: string;
}

interface BookingServiceCardsProps {
    items: ServiceCardItem[];
}

export default function BookingServiceCards({ items }: BookingServiceCardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {items.map((item) => (
                <article
                    key={item.title}
                    className="bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800 hover:shadow-lg transition-shadow"
                >
                    <h3 className="mb-2 text-gray-900 dark:text-white text-lg">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                </article>
            ))}
        </div>
    );
}
