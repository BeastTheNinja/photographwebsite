const defaultSiteUrl = 'http://localhost:3000';

export function getSiteUrl(): string {
    const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    if (configured) {
        return configured.replace(/\/$/, '');
    }

    const vercelUrl = process.env.VERCEL_URL?.trim();
    if (vercelUrl) {
        // VERCEL_URL is typically a bare hostname, but guard against an accidental protocol prefix.
        const url = /^https?:\/\//i.test(vercelUrl) ? vercelUrl : `https://${vercelUrl}`;
        return url.replace(/\/$/, '');
    }

    if (process.env.NODE_ENV === 'production') {
        console.warn('[site] NEXT_PUBLIC_SITE_URL is not set in production. Falling back to localhost.');
    }

    return defaultSiteUrl;
}
