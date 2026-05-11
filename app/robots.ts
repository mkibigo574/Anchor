import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: "https://anchornds.com.au/sitemap.xml",
    host: "https://anchornds.com.au"
  };
}
