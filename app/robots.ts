import type { MetadataRoute } from "next";

const BASE = "https://www.reapproveauto.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/", "/admin/"] },

      // OpenAI. OAI-SearchBot is the crawler that surfaces pages in ChatGPT
      // search results and citations — it must be allowed to be cited at all.
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },

      // Other answer engines
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
