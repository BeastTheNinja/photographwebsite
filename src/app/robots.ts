import type { MetadataRoute } from 'next';

const defaultSiteUrl = 'http://localhost:3000';

function getSiteUrl() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

    if (!siteUrl) {
        return defaultSiteUrl;
    }

    return siteUrl.replace(/\/$/, '');
}

export default function robots(): MetadataRoute.Robots {
    const siteUrl = getSiteUrl();

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/api/'],
        },
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    };
}
