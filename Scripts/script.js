import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";
import { blogs } from "../src/data/blogsData.js";

const sitemap = new SitemapStream({
  hostname: "https://jobsnvisa.com.au",
});

/* Static Pages */
const staticPages = [
  "/",
  "/recruiters-services",
  "/employee-services",
  "/recruiters",
  "/blogs",
  "/blogs/:slug",
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
    priority: 0.1,
  });
});

/* Dynamic Blog Pages */
blogs.forEach((blog) => {
  sitemap.write({
    url: `/blogs/${blog.slug}/`,
    changefreq: "daily",
    priority: 0.1,
  });
});

sitemap.end();

/* Generate sitemap.xml */
streamToPromise(sitemap)
  .then((data) => {
    writeFileSync("./public/sitemap.xml", data.toString());

    console.log("✅ sitemap.xml generated successfully");
  })
  .catch((err) => {
    console.error("❌ Sitemap generation failed:", err);
  });
