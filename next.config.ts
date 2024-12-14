import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        pathname: "images.unsplash.com/**",
      },
    ],
  },
};

export default nextConfig;
