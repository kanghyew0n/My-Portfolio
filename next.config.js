/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true
  },
};


const withImages = require("next-images");

module.exports = withImages();
module.exports = nextConfig;
