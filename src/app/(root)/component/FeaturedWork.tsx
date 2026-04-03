import Link from "next/link";
import WorkCard from "./WorkCard";

const featuredWorks = [
    {
        id: 1,
        imageSrc: "/Naja Blackwhite.jpg",
        title: "Portræt",
        description: "Udvalgte portrætter med naturligt udtryk",
        alt: "Sort-hvidt portraet",
    },
    {
        id: 2,
        imageSrc: "/Naja Farve.jpg",
        title: "Portræt",
        description: "Farverigt portræt fra seneste fotosession",
        alt: "Portraet i farver",
    },
    {
        id: 3,
        imageSrc: "/And.JPG",
        title: "Natur",
        description: "Naturbillede med roligt motiv",
        alt: "Naturbillede af and",
    },
];

export default function FeaturedWork() {
    return (
        <section className="py-24 bg-white dark:bg-gray-800 transition-colors">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl mb-4 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Udvalgte billeder
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">Portrætter og natur fra galleriet</p>
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
                        Se hele galleriet
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
