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
        <section className="bg-white py-12 transition-colors sm:py-16 md:py-20 lg:py-24 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="mb-4 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-3xl text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
                        Udvalgte billeder
                    </h2>
                    <p className="text-base text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl">Portrætter og natur fra galleriet</p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
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

                <div className="mt-12 text-center sm:mt-16">
                    <Link
                        href="/galleri"
                        className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base leading-none text-white transition-all hover:scale-105 hover:shadow-2xl sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-lg"
                    >
                        Se hele galleriet
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
