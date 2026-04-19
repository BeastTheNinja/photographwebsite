export default async function HomeSecondarySections() {
    const [{ default: AboutPreview }, { default: FeaturedWork }, { default: CTASection }] = await Promise.all([
        import('./component/AboutPreview'),
        import('./component/FeaturedWork'),
        import('./component/CTASection'),
    ]);

    return (
        <>
            <AboutPreview />
            <FeaturedWork />
            <CTASection />
        </>
    );
}
