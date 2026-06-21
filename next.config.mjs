import { fileURLToPath } from "url";
import { dirname } from "path";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for @netlify/plugin-nextjs to bundle the server/API routes as a
  // function. Next 16's default build does not emit this on its own.
  output: "standalone",
  // Pin the workspace root to THIS project. A stray lockfile in a parent
  // directory (e.g. ~/package-lock.json) otherwise makes Next infer the wrong
  // root and write the standalone server to a nested path the Netlify adapter
  // can't find — which silently drops the API route function in production.
  outputFileTracingRoot: projectRoot,
  turbopack: { root: projectRoot },
};

export default nextConfig;
