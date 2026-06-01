export const siteName = "DinFotografAnninka";

export const siteDescription =
    "Fotograf i Brønderslev, Nordjylland. Specialiseret i portrætter, familiefotografering, bryllupsfotografering, naturfotografering og konfirmationsfotografering.";

export function getStructuredData(siteUrl: string) {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfessionalService",
                "@id": `${siteUrl}#business`,
                name: siteName,
                description: siteDescription,
                url: siteUrl,
                image: `${siteUrl}/icons/android-chrome-512x512.png`,
                areaServed: "Brønderslev, Nordjylland",
                serviceType: [
                    "Portrætfotografering",
                    "Familiefotografering",
                    "Bryllupsfotografering",
                    "Naturfotografering",
                    "Konfirmationsfotografering",
                ],
                sameAs: [
                    "https://www.tiktok.com/@annikalarsen81",
                    "https://www.facebook.com/Annika81larsen",
                ],
            },
            {
                "@type": "WebSite",
                "@id": `${siteUrl}#website`,
                url: siteUrl,
                name: siteName,
                description: siteDescription,
                publisher: {
                    "@id": `${siteUrl}#business`,
                },
            },
        ],
    };
}