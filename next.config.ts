import type { NextConfig } from "next";

// For GitHub Pages: repo is at https://username.github.io/namesy/ so we need basePath
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH
  ? `${process.env.NEXT_PUBLIC_BASE_PATH}/`
  : undefined;

const nextConfig: NextConfig = {
  // Enable static export for Capacitor/Android and GitHub Pages
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: assetPrefix,
  // Disable image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },
  // Add trailing slashes for better static file serving
  trailingSlash: true,
};

export default nextConfig;
