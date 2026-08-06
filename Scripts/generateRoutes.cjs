const fs = require("fs");
const path = require("path");

(async () => {
  try {
    // 1. Static base routes
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

    // 2. Fetch dynamic blog routes
    let blogRoutes = [];
    try {
      const { blogs } = await import("../src/Data/BlogData.js");
      if (Array.isArray(blogs)) {
        blogRoutes = blogs.map((blog) => `/blogs/${blog.slug}`);
      }
    } catch (e) {
      console.warn("⚠️ Could not load BlogData.js, proceeding with static routes only.");
    }

    // 3. Combine, remove duplicates & sort
    const uniqueRoutes = [...new Set([...baseRoutes, ...blogRoutes])].sort();

    // 4. Update package.json (or output to routes.json)
    const packageJsonPath = path.join(process.cwd(), "package.json");
    const packageJson = JSON.parse(
      fs.readFileSync(packageJsonPath, "utf8")
    );

    packageJson.reactSnap = {
      ...(packageJson.reactSnap || {}),
      include: uniqueRoutes,
    };

    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + "\n"
    );

    // Also save as a standalone JSON for other scripts to consume cleanly
    fs.writeFileSync(
      path.join(process.cwd(), "routes.json"),
      JSON.stringify(uniqueRoutes, null, 2)
    );

    console.log(`✅ Successfully generated ${uniqueRoutes.length} real routes.`);
  } catch (err) {
    console.error("❌ Failed to generate routes:", err);
    process.exit(1);
  }
})();