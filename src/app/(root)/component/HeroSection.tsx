import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../../../public/MorsLogo.png";

export default function HeroSection() {
    return (
        <section className="relative h-175 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={LogoImage}
                    alt=""
                    fill
                    loading="eager"
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/50 to-purple-900/40" />
            </div>
            <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-tight">
                    DinFotografAnninka
                </h1>
                <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200">
                    Professionel fotografering til bryllupper, portrætter og uforglemmelige begivenheder
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/book"
                        className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2 text-lg"
                    >
                        Book nu
                        <span>→</span>
                    </Link>
                    <Link
                        href="/galleri"
                        className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-10 py-4 rounded-full transition-all inline-flex items-center justify-center gap-2 text-lg"
                    >
                        Se galleri
                    </Link>
                </div>
            </div>
        </section>
    );
}
