import Image from "next/image";

interface WorkCardProps {
    imageSrc: string;
    title: string;
    description: string;
    alt: string;
}

export default function WorkCard({ imageSrc, title, description, alt }: WorkCardProps) {
    return (
        <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <Image
                src={imageSrc}
                alt={alt}
                width={1080}
                height={800}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl mb-2">{title}</h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {description}
                </p>
            </div>
        </div>
    );
}
