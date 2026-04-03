import type { MetadataRoute } from 'next';

const defaultSiteUrl = 'http://localhost:3000';

function getSiteUrl() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

    if (!siteUrl) {
        return defaultSiteUrl;
    }

    return siteUrl.replace(/\/$/, '');
}

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = getSiteUrl();
    const now = new Date();

    return [
        {
            url: `${siteUrl}/`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${siteUrl}/galleri`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${siteUrl}/priser`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/om`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${siteUrl}/book`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${siteUrl}/kontakt`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}
