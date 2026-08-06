import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync, existsSync } from "fs";
import { blogs } from "../src/Data/BlogData.js";

const sitemap = new SitemapStream({
  hostname: "https://jobsnvisa.com.au",
});

/* Static Pages (Removed placeholder route '/blogs/:slug') */
const staticPages = [
  "/",
  "/recruiters-services",
  "/employee-services",
  "/recruiters",
  "/blogs",
  "/job-search",
  "/healthcare",
  "/privacy-policy",
  "/cookie-policy",
  "/terms",
  "/help-center",
  "/brochures",
];

/* Add Static Pages */
staticPages.forEach((url) => {
  sitemap.write({
    url,
    changefreq: "daily",
    priority: url === "/" ? 1.0 : 0.8, // Set higher priority for main pages
  });
});

/* Dynamic Blog Pages */
if (Array.isArray(blogs)) {
  blogs.forEach((blog) => {
    sitemap.write({
      url: `/blogs/${blog.slug}/`,
      changefreq: "weekly",
      priority: 0.7,
    });
  });
}

sitemap.end();

/* Generate sitemap.xml directly into dist and public folders */
streamToPromise(sitemap)
  .then((data) => {
    const xmlContent = data.toString();

    // 1. Write to dist/ (Required for current build deploy)
    if (existsSync("./dist")) {
      writeFileSync("./dist/sitemap.xml", xmlContent);
      console.log("✅ Static pages generated successfully.");
    }

    // 2. Write to public/ (For local dev copy)
    if (existsSync("./public")) {
      writeFileSync("./public/sitemap.xml", xmlContent);
      console.log("✅ Static pages generated successfully.");
    }
  })
  .catch((err) => {
    console.error("❌ Sitemap generation failed:", err);
  });