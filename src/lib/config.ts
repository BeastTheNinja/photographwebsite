export const siteName = "DinFotografAnninka";

export const siteDescription =
  "Fotograf i Brønderslev, Nordjylland. Specialiseret i portrætter, familiefotografering, bryllupsfotografering, naturfotografering og konfirmationsfotografering.";

export const defaultSiteUrl = "http://localhost:3000";
export const photographerEmail = "dinfotografannika@gmail.com";

export const defaultBookingRateLimit = {
  limit: 5,
  windowMs: 10 * 60 * 1000,
  maxEntries: 500,
} as const;

export const defaultAllowedOrigins = ["http://localhost:3000"] as const;