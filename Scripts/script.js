import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import http from "http";
import serveStatic from "serve-static";
import finalhandler from "finalhandler";

const routes = [
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

  "/blogs/how-jobs-n-visa-connects-employers-with-skilled-global-talent",
  "/blogs/your-complete-guide-to-australian-visa-pr-pathways",
  "/blogs/your-guide-to-moving-to-australia-as-a-nurse"
];

const DIST_DIR = path.resolve("dist");
const PORT = 45678;

function startServer() {
  const serve = serveStatic(DIST_DIR, {
    index: ["index.html"]
  });

  const server = http.createServer((req, res) => {
    serve(req, res, () => {
      // SPA fallback
      req.url = "/index.html";
      serve(req, res, finalhandler(req, res));
    });
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => {
      console.log(`🌐 Server running at http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error("❌ dist folder does not exist. Run vite build first.");
  }

  const server = await startServer();

  console.log("🚀 Starting prerender...\n");

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu"
    ]
  });

  const page = await browser.newPage();

  page.on("pageerror", (error) => {
    console.error("🔥 Page error:", error.message);
  });

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      console.error("⚠️ Browser:", msg.text());
    }
  });

  for (const route of routes) {
    try {
      const url = `http://localhost:${PORT}${route}`;

      console.log(`\n🔍 Rendering: ${route}`);

      await page.goto(url, {
        waitUntil: "networkidle0",
        timeout: 60000
      });

      // Give React Helmet time to update <head>
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const meta = await page.evaluate(() => {
        const getMeta = (name) => {
          const element =
            document.querySelector(`meta[property="${name}"]`) ||
            document.querySelector(`meta[name="${name}"]`);

          return element?.getAttribute("content") || "";
        };

        return {
          title: document.title,

          description: getMeta("description"),

          canonical:
            document
              .querySelector('link[rel="canonical"]')
              ?.getAttribute("href") || "",

          ogTitle: getMeta("og:title"),

          ogDescription: getMeta("og:description"),

          ogUrl: getMeta("og:url"),

          ogImage: getMeta("og:image")
        };
      });

      const html = await page.content();

      const cleanRoute = route.replace(/^\/|\/$/g, "");

      const routeDirectory = cleanRoute
        ? path.join(DIST_DIR, cleanRoute)
        : DIST_DIR;

      fs.mkdirSync(routeDirectory, {
        recursive: true
      });

      const outputFile = path.join(
        routeDirectory,
        "index.html"
      );

      fs.writeFileSync(outputFile, html);

      console.log(`✅ Prerendered: ${route}`);

      console.log(
        `   ├─ Title:       ${meta.title}`
      );

      console.log(
        `   ├─ Description: ${meta.description.substring(0, 60)}...`
      );

      console.log(
        `   ├─ Canonical:   ${meta.canonical}`
      );

      console.log(
        `   ├─ OG Title:    ${meta.ogTitle}`
      );

      console.log(
        `   ├─ OG Image:    ${meta.ogImage}`
      );

      console.log(
        `   ├─ OG Desc:     ${meta.ogDescription.substring(0, 60)}...`
      );

      console.log(
        `   └─ OG URL:      ${meta.ogUrl}`
      );

    } catch (error) {
      console.error(
        `❌ Failed to prerender ${route}:`,
        error.message
      );
    }
  }

  await browser.close();
  server.close();

  console.log(
    "\n🎉 All pages prerendered successfully!"
  );
}

prerender().catch((error) => {
  console.error("\n❌ Prerender failed:", error);
  process.exit(1);
});