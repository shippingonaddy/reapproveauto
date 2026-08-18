import type { MetadataRoute } from "next";

const BASE = "https://www.reapproveauto.com";

/**
 * Only pages that actually exist belong here.
 * Add a route back the day it ships — never before.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE,                             lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/apply`,                  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/bad-credit-car-loans`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/buy-here-pay-here-dallas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`,                    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
