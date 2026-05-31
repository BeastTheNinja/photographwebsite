import type { NextConfig } from "next";
import crypto from "node:crypto";

const siteName = "DinFotografAnninka";
const siteDescription =
  "Fotograf i Brønderslev, Nordjylland. Specialiseret i portrætter, familiefotografering, bryllupsfotografering, naturfotografering og konfirmationsfotografering.";
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`;

function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configured) {
    return configured.replace(/\/$/, "");
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    const url = /^https?:\/\//i.test(vercelUrl) ? vercelUrl : `https://${vercelUrl}`;
    return url.replace(/\/$/, "");
  }

  return "http://localhost:3000";
}

function getStructuredData(siteUrl: string) {
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

const siteUrl = getSiteUrl();
const structuredData = JSON.stringify(getStructuredData(siteUrl));

function sha256(content: string) {
  return `'sha256-${crypto.createHash("sha256").update(content).digest("base64")}'`;
}

const themeScriptHash = sha256(themeInitScript);
const structuredDataHash = sha256(structuredData);

const contentSecurityPolicy = [
  "default-src 'self'",
  "worker-src 'self'",
  `script-src 'self' ${themeScriptHash} ${structuredDataHash}${process.env.NODE_ENV !== "production" ? " 'unsafe-eval'" : ""} https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  `connect-src 'self'${process.env.NODE_ENV !== "production" ? " ws: wss:" : ""} https://vitals.vercel-insights.com https://*.vercel-insights.com https://va.vercel-scripts.com`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  ...(process.env.NODE_ENV !== "production" ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-site",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  ...(process.env.NODE_ENV === "production"
    ? [
      {
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains",
      },
    ]
    : []),
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  images: {
    qualities: [70, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          ...securityHeaders,
          {
            key: "Cache-Control",
            value: "no-store, max-age=0",
          },
        ],
      },
      {
        source: "/((?!api|_next/static|_next/image|.*\\..*).*)",
        headers: [
          ...securityHeaders,
          {
            key: "Cache-Control",
            value: "public, s-maxage=600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
