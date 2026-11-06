import type { NextConfig } from "next";

const repo = "denotes-dev-clone";
const isPages = process.env.GITHUB_PAGES === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
};

export default nextConfig;
