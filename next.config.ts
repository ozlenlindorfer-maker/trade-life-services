import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Server mode (NOT static "export") so the /api/contact route deploys as a
  // function. Static export would drop the API route entirely.
  output: "standalone",
  // Pin the workspace root to THIS project. A stray lockfile in a parent
  // directory (e.g. ~/package-lock.json) otherwise makes Next infer the wrong
  // root and write the standalone server to a nested path the Netlify adapter
  // can't find — which silently drops the API route function in production.
  outputFileTracingRoot: __dirname,
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
