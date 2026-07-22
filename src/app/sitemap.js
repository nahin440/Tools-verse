import { TOOLS, CATEGORIES } from "@/lib/registry/tools";

const SITE_URL = "https://filefusion.app";

export default function sitemap() {
  const now = new Date();

  const staticPages = ["", "/about", "/pricing", "/privacy", "/terms", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "monthly",
    priority: path === "" ? 1 : 0.5,
  }));

  const categoryPages = Object.values(CATEGORIES).map((cat) => ({
    url: `${SITE_URL}/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const toolPages = TOOLS.map((tool) => ({
    url: `${SITE_URL}/${CATEGORIES[tool.category].slug}/${tool.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticPages, ...categoryPages, ...toolPages];
}
