import type { MetadataRoute } from "next";

const BASE = "https://reapproveauto.com";

const CITY_SLUGS = [
  "buy-here-pay-here-dallas",
  "buy-here-pay-here-fort-worth",
  "buy-here-pay-here-arlington",
  "buy-here-pay-here-garland",
  "buy-here-pay-here-irving",
  "buy-here-pay-here-plano",
  "buy-here-pay-here-grand-prairie",
  "buy-here-pay-here-mesquite",
];

const SERVICE_SLUGS = [
  "bad-credit-car-loans",
  "in-house-financing",
  "no-credit-check-cars",
  "second-chance-financing",
  "first-time-buyer",
  "subprime-auto-loans",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/apply`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE}/terms-of-use`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const cityRoutes: MetadataRoute.Sitemap = CITY_SLUGS.map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...cityRoutes, ...serviceRoutes];
}
