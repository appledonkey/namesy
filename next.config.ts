import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Capacitor/Android
  output: "export",
  // Disable image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },
  // Add trailing slashes for better static file serving
  trailingSlash: true,
};

export default nextConfig;
