const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

(async () => {
  try {
    const baseRoutes = [
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

    let blogRoutes = [];
    try {
      // Resolve path using pathToFileURL for cross-platform ESM import compatibility
      const blogDataPath = path.resolve(process.cwd(), "src/Data/BlogData.js");
      const blogDataUrl = pathToFileURL(blogDataPath).href;

      const { blogs } = await import(blogDataUrl);

      if (Array.isArray(blogs)) {
        blogRoutes = blogs.map((blog) => `/blogs/${blog.slug}`);
      }
    } catch (e) {
      console.warn("⚠️ Could not load BlogData.js, proceeding with static routes only.", e.message);
    }

    const uniqueRoutes = [...new Set([...baseRoutes, ...blogRoutes])].sort();

    // 1. Save routes array to routes.json
    fs.writeFileSync(
      path.join(process.cwd(), "routes.json"),
      JSON.stringify(uniqueRoutes, null, 2)
    );

    // 2. Update package.json for reactSnap
    const packageJsonPath = path.join(process.cwd(), "package.json");
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

    packageJson.reactSnap = {
      ...(packageJson.reactSnap || {}),
      include: uniqueRoutes,
    };

    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + "\n"
    );

    console.log(`✅ Successfully generated ${uniqueRoutes.length} real routes.`);
  } catch (err) {
    console.error("❌ Failed to generate routes:", err);
    process.exit(1);
  }
})();