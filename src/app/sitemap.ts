import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wwwkki.vercel.app";

  const staticRoutes = [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/about", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/tech-stack", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/learning-path", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/blog", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/papers", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFreq: "monthly" as const },
  ];

  // Dynamic blog post routes
  const blogSlugs = [
    "build-personal-website",
    "llm-rag-practice",
    "typescript-advanced",
    "git-workflow",
    "react-performance",
    "docker-intro",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
