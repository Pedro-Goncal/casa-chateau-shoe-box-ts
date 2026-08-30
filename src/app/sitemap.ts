import type { MetadataRoute } from "next";
import { getAbsoluteAssetUrl, getSiteUrl, seo } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [getAbsoluteAssetUrl(seo.ogImage.src)],
    },
  ];
}
