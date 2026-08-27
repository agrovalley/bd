/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.VERCEL ? undefined : "/bd",
  assetPrefix: process.env.VERCEL ? undefined : "/bd/",
};
export default nextConfig;
