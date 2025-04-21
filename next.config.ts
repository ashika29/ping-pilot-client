import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: "http://localhost:3002/v1/",
  },
};

export default nextConfig;
