import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flexinet.com.vn";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [""], // nếu có folder cần ẩn
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
