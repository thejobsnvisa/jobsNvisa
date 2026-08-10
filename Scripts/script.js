import fs from "fs";
import { blogs } from "../src/Data/BlogData.js";

const staticRoutes = [
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

const blogRoutes = Array.isArray(blogs)
  ? blogs.map(
      (blog) => `/blogs/${blog.slug}`
    )
  : [];

const routes = [
  ...staticRoutes,
  ...blogRoutes,
];

fs.writeFileSync(
  "./routes.json",
  JSON.stringify(routes, null, 2)
);

console.log(
  `✅ Generated ${routes.length} routes`
);