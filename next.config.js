/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2048, 3840],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        hostname: "image.tmdb.org",
      },
    ],
  },
};

module.exports = nextConfig;
