export default async function HomeSecondarySections() {
    const [{ default: AboutPreview }, { default: FeaturedWork }, { default: CTASection }] = await Promise.all([
        import('../../features/home/AboutPreview'),
        import('../../features/home/FeaturedWork'),
        import('../../features/home/CTASection'),
    ]);

    return (
        <>
            <AboutPreview />
            <FeaturedWork />
            <CTASection />
        </>
    );
}
