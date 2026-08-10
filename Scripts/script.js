import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";
import { blogs } from "../src/Data/BlogData.js";

const sitemap = new SitemapStream({
  hostname: "https://www.jobsnvisa.com.au",
});

/* Static Pages */
const staticPages = [
  "/",

  /* Services */
  "/recruiters-services/",
  "/employee-services/",
  "/recruiters/",

  /* Jobs */
  "/job-search/",
  "/healthcare/",

  /* Blogs */
  "/blogs/",

  /* Company / Support */
  "/brochures/",
  "/help-center/",

  /* Policies */
  "/privacy-policy/",
  "/cookie-policy/",
  "/terms/",
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
