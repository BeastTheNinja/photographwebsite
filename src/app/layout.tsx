import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteName = "DinFotografAnninka";
const siteDescription =
  "Fotograf i Brønderslev, Nordjylland. Specialiseret i portrætter, familiefotografering, bryllupsfotografering, naturfotografering og konfirmationsfotografering.";
const defaultSiteUrl = "http://localhost:3000";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl;

function getMetadataBase() {
  try {
    return new URL(siteUrl);
  } catch {
    return new URL(defaultSiteUrl);
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}#business`,
      name: siteName,
      description: siteDescription,
      url: siteUrl,
      image: `${siteUrl}/android-chrome-512x512.png`,
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "fotograf",
    "fotograf Brønderslev",
    "fotograf Nordjylland",
    "portrætfotograf",
    "bryllupsfotograf",
    "familiefotografering",
    "naturfotografering",
    "konfirmationsfotografering",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "/",
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  applicationName: siteName,
  category: "photography",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="da"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Spring til indhold
        </a>
        {children}
      </body>
    </html>
  );
}
