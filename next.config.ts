import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "cms.solvro.pl" }],
  },
};

export default nextConfig;
