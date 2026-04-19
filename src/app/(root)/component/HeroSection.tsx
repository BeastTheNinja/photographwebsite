import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '../../../../public/icons/MorsLogo.png';

const HERO_BLUR_DATA_URL =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIHZpZXdCb3g9IjAgMCAxOTIwIDEwODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIHN0b3AtY29sb3I9IiMyNzI3MmEiIG9mZnNldD0iMCIvPjxzdG9wIHN0b3AtY29sb3I9IiMxODE4MWIiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjZykiIHg9IjAiIHk9IjAiIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiLz48L3N2Zz4=';

export default function HeroSection() {
    return (
        <section className="relative flex min-h-96 items-center justify-center overflow-hidden sm:min-h-144 md:min-h-160 lg:h-175">
            <div className="absolute inset-0">
                <Image
                    src={LogoImage}
                    alt=""
                    fill
                    loading="eager"
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL={HERO_BLUR_DATA_URL}
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/50 to-purple-900/40" />
            </div>
            <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                <h1 className="mb-5 text-3xl leading-tight tracking-tight sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                    DinFotografAnninka
                </h1>
                <p className="mb-8 mx-auto max-w-2xl text-sm leading-relaxed text-gray-200 sm:mb-10 sm:text-lg md:text-xl lg:text-2xl">
                    Professionel fotografering til bryllupper, portrætter og uforglemmelige begivenheder
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/book"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base leading-none text-white transition-all hover:scale-105 hover:shadow-2xl sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-lg"
                    >
                        Book nu
                        <span>→</span>
                    </Link>
                    <Link
                        href="/galleri"
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-base leading-none text-white backdrop-blur-md transition-all hover:bg-white/20 sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-lg"
                    >
                        Se galleri
                    </Link>
                </div>
            </div>
        </section>
    );
}
