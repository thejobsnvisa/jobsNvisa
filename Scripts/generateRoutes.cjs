const fs = require("fs");
const path = require("path");

(async () => {
  try {
    const routes = [
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

    // Remove duplicates & sort
    const uniqueRoutes = [...new Set(routes)].sort();

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

    console.log(`✅ Generated ${uniqueRoutes.length} routes for react-snap.`);
  } catch (err) {
    console.error("❌ Failed to generate routes:", err);
    process.exit(1);
  }
})();