import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { createServer } from "http";
import serveStatic from "serve-static";
import finalhandler from "finalhandler";
import puppeteer from "puppeteer";
import path from "path";
import { blogs } from "../src/Data/BlogData.js";

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

/* 3. Local HTTP Server Setup */
function startLocalServer(port, distDir) {
  const serve = serveStatic(distDir, { index: ["index.html"] });
  const server = createServer((req, res) => {
    serve(req, res, () => {
      req.url = "/index.html";
      serve(req, res, finalhandler(req, res));
    });
  });

  return new Promise((resolve) => {
    server.listen(port, () => resolve(server));
  });
}

/* 4. Custom Puppeteer Prerenderer capturing full Helmet Meta & OG details */
async function prerenderPages() {
  const distDir = path.resolve("./dist");
  if (!existsSync(distDir)) {
    console.error("❌ ./dist directory does not exist. Run vite build first.");
    return;
  }

  const PORT = 45678;
  const server = await startLocalServer(PORT, distDir);
  console.log(`🌐 Local static server started on http://localhost:${PORT}`);

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

  for (const route of allRoutes) {
    const targetUrl = `http://localhost:${PORT}${route}`;
    await page.goto(targetUrl, { waitUntil: "networkidle0" });

    // Wait 1.5s for React Helmet Async tags to settle in DOM
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Extract Meta and Open Graph details from rendered Head
    const metaInfo = await page.evaluate(() => {
      const getMeta = (prop) =>
        document.querySelector(`meta[property="${prop}"], meta[name="${prop}"]`)
          ?.getAttribute("content") || "N/A";

      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "N/A";

      return {
        title: document.title,
        description: getMeta("description"),
        canonical,
        ogTitle: getMeta("og:title"),
        ogDescription: getMeta("og:description"),
        ogUrl: getMeta("og:url"),
        ogImage: getMeta("og:image"),
      };
    });

    const html = await page.content();
    const routeFolder = path.join(distDir, route);

    if (!existsSync(routeFolder)) {
      mkdirSync(routeFolder, { recursive: true });
    }

    writeFileSync(path.join(routeFolder, "index.html"), html);

    console.log(`\n✅ Prerendered: ${route}`);
    console.log(`   ├─ Title:        "${metaInfo.title}"`);
    console.log(`   ├─ Description:  "${metaInfo.description.substring(0, 50)}..."`);
    console.log(`   ├─ Canonical:    "${metaInfo.canonical}"`);
    console.log(`   ├─ OG Title:     "${metaInfo.ogTitle}"`);
    console.log(`   └─ OG Image:     "${metaInfo.ogImage}"`);
  }

  await browser.close();
  server.close();
  console.log("\n🎉 All static HTML pages prerendered with full Meta & Open Graph tags!");
}

/* Run Main Process */
async function main() {
  try {
    await generateSitemap();
    await prerenderPages();
  } catch (err) {
    console.error("❌ Generation process failed:", err);
    process.exit(1);
  }
}

main();