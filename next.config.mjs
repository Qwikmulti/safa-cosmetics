/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["safacosmetics.co.uk", "images.unsplash.com"],
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
};

export default nextConfig;
