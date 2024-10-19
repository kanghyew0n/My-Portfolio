/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        scrollRestoration: true
      }
};

const withImages = require("next-images");

module.exports = withImages();
module.exports = nextConfig;
