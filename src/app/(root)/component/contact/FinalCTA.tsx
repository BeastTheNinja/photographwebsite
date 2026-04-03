import type { ReactNode } from 'react';

interface FinalCTAProps {
    email: string;
    phone: string;
    phoneHref: string;
    emailIcon: ReactNode;
    phoneIcon: ReactNode;
}

export default function FinalCTA({ email, phone, phoneHref, emailIcon, phoneIcon }: FinalCTAProps) {
    return (
        <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 text-center text-white shadow-2xl sm:mt-20 sm:p-10 md:p-12 lg:p-16">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
                <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl">Lad os skabe noget smukt sammen</h2>
                <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed opacity-90 sm:text-lg md:text-xl lg:text-2xl">
                    Hver historie fortjener at blive fortalt gennem smuk billedkunst. Lad os diskutere din vision!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={`mailto:${email}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base text-indigo-600 transition-all hover:scale-105 hover:shadow-2xl sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-lg"
                    >
                        {emailIcon}
                        Send email
                    </a>
                    {phoneHref ? (
                        <a
                            href={`tel:${phoneHref}`}
                            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-base text-white backdrop-blur-md transition-all hover:bg-white/20 sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-lg"
                        >
                            {phoneIcon}
                            Ring til mig
                        </a>
                    ) : (
                        <span className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-base text-white opacity-90 backdrop-blur-md sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-lg">
                            {phoneIcon}
                            {phone || 'Telefonnummer kommer snart'}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
