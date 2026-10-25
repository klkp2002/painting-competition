import type { MetadataRoute } from "next";
import { competition } from "@/config/competition";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${competition.siteUrl}/sitemap.xml`,
  };
}
