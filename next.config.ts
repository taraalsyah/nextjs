import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "tasktuntas.com",
      },
      {
        protocol: "https",
        hostname: "www.tasktuntas.com",
      },
    ],
  },
};

export default nextConfig;
