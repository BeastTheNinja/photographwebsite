interface ServiceCardItem {
    title: string;
    description: string;
}

interface BookingServiceCardsProps {
    items: ServiceCardItem[];
}

export default function BookingServiceCards({
    items,
}: BookingServiceCardsProps) {
    return (
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            {items.map((item) => (
                <article
                    key={item.title}
                    className="
            rounded-2xl border border-indigo-100
            bg-linear-to-br from-indigo-50 to-purple-50
            p-6 transition-shadow hover:shadow-lg
            dark:border-indigo-800
            dark:from-indigo-950 dark:to-purple-950
          "
                >
                    <h3 className="mb-2 text-lg text-gray-900 dark:text-white">
                        {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.description}
                    </p>
                </article>
            ))}

        </div>
    );
}