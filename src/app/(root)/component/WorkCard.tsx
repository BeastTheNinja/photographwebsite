import Image from 'next/image';

const BLUR_DATA_URL =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEwODAgODAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjZTdlNWUxIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjY2JkNWUxIiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2cpIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTA4MCIgaGVpZ2h0PSI4MDAiLz48L3N2Zz4=';

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
                loading="lazy"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-200">
                <h3 className="text-white text-2xl mb-2">{title}</h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {description}
                </p>
            </div>
        </div>
    );
}
