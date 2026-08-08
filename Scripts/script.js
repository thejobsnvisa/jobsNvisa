import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { blogs } from "../src/Data/BlogData.js";
import puppeteer from "puppeteer";
import path from "path";

/* 1. Define Routes */
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

const blogPages = Array.isArray(blogs)
  ? blogs.map((blog) => `/blogs/${blog.slug}`)
  : [];

const allRoutes = [...staticPages, ...blogPages];

/* 2. Generate Sitemap */
async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://jobsnvisa.com.au",
  });

  staticPages.forEach((url) => {
    sitemap.write({
      url,
      changefreq: "daily",
      priority: url === "/" ? 1.0 : 0.8,
    });
  });

  blogPages.forEach((url) => {
    sitemap.write({
      url,
      changefreq: "weekly",
      priority: 0.7,
    });
  });

  sitemap.end();

  const data = await streamToPromise(sitemap);
  const xmlContent = data.toString();

  if (existsSync("./dist")) {
    writeFileSync("./dist/sitemap.xml", xmlContent);
  }
  if (existsSync("./public")) {
    writeFileSync("./public/sitemap.xml", xmlContent);
  }
  console.log("✅ Sitemap generated successfully.");
}

/* 3. Custom Puppeteer Prerenderer (Replaces react-snap without Highland) */
async function prerenderPages() {
  if (!existsSync("./dist")) {
    console.error("❌ ./dist directory does not exist. Run vite build first.");
    return;
  }

  console.log("🚀 Starting static page prerendering...");
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  });

  const page = await browser.newPage();
  const distDir = path.resolve("./dist");

  for (const route of allRoutes) {
    // Navigate Chrome directly to dist/index.html with route hash/path
    const fileUrl = `file://${path.join(distDir, "index.html")}`;
    
    await page.goto(fileUrl, { waitUntil: "networkidle0" });

    // Simulate SPA client routing
    await page.evaluate((targetRoute) => {
      window.history.pushState({}, "", targetRoute);
      window.dispatchEvent(new Event("popstate"));
    }, route);

    // Wait 1.5s for React hydration/components to settle
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const html = await page.content();
    const routeFolder = path.join(distDir, route);

    if (!existsSync(routeFolder)) {
      mkdirSync(routeFolder, { recursive: true });
    }

    writeFileSync(path.join(routeFolder, "index.html"), html);
    console.log(`✅ Prerendered: ${route}`);
  }

  await browser.close();
  console.log("🎉 All static HTML pages generated successfully!");
}

/* Run both functions sequential */
async function main() {
  try {
    await generateSitemap();
    await prerenderPages();
  } catch (err) {
    console.error("❌ Generation process failed:", err);
    if (
      typeof globalThis !== "undefined" &&
      typeof globalThis.process !== "undefined" &&
      typeof globalThis.process.exit === "function"
    ) {
      globalThis.process.exit(1);
    } else {
      throw err;
    }
  }
}

main();