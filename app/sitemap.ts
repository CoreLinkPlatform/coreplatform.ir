import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://coreplatform.ir", lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
