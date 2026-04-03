import Link from "next/link";
import WorkCard from "./WorkCard";

const featuredWorks = [
    {
        id: 1,
        imageSrc: "https://via.placeholder.com/1080x800/d1d5db/9ca3af?text=Wedding+Photography",
        title: "Weddings",
        description: "Capturing your most precious day",
        alt: "Wedding photography",
    },
    {
        id: 2,
        imageSrc: "https://via.placeholder.com/1080x800/d1d5db/9ca3af?text=Portrait+Photography",
        title: "Portraits",
        description: "Showcasing your authentic self",
        alt: "Portrait photography",
    },
    {
        id: 3,
        imageSrc: "https://via.placeholder.com/1080x800/d1d5db/9ca3af?text=Family+Photography",
        title: "Family",
        description: "Creating lasting family memories",
        alt: "Family photography",
    },
];

export default function FeaturedWork() {
    return (
        <section className="py-24 bg-white dark:bg-gray-800 transition-colors">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl mb-4 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Featured Work
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">Moments that tell a story</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredWorks.map((work) => (
                        <WorkCard
                            key={work.id}
                            imageSrc={work.imageSrc}
                            title={work.title}
                            description={work.description}
                            alt={work.alt}
                        />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        href="/galleri"
                        className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2 text-lg"
                    >
                        View Full Gallery
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
