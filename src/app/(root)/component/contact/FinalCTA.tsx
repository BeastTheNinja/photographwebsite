interface FinalCTAProps {
    email: string;
    phone: string;
    phoneHref: string;
    emailIcon: React.ReactNode;
    phoneIcon: React.ReactNode;
}

export default function FinalCTA({ email, phone, phoneHref, emailIcon, phoneIcon }: FinalCTAProps) {
    return (
        <div className="max-w-5xl mx-auto mt-20 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 text-white rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl mb-6">Lad os skabe noget smukt sammen</h2>
                <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed max-w-3xl mx-auto">
                    Hver historie fortjener at blive fortalt gennem smuk billedkunst. Lad os diskutere din vision!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={`mailto:${email}`}
                        className="bg-white text-indigo-600 px-10 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2 text-lg"
                    >
                        {emailIcon}
                        Send email
                    </a>
                    <a
                        href={`tel:${phoneHref}`}
                        className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-4 rounded-full hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2 text-lg"
                    >
                        {phoneIcon}
                        Ring til mig
                    </a>
                </div>
            </div>
        </div>
    );
}
