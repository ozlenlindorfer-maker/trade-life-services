import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://trade-life-services.netlify.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    // Service pages
    { url: `${base}/services/general-repairs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/plumbing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/electrical`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/carpentry`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/painting`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // Service area pages
    { url: `${base}/service-areas/farragut`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/service-areas/maryville`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/service-areas/oak-ridge`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/service-areas/powell`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/service-areas/hardin-valley`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/service-areas/alcoa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  ];
}
