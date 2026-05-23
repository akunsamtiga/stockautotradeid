import type { MetadataRoute } from "next";

const BASE_URL = "https://stcautotrade.id";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2025-05-21"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/download`,
      lastModified: new Date("2025-05-21"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/cara-kerja`,
      lastModified: new Date("2025-05-21"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date("2025-05-21"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}