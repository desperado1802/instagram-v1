/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "assets.website-files.com",
      "upload.wikimedia.org",
      "techcrunch.com",
    ],
  },
};

module.exports = nextConfig;
