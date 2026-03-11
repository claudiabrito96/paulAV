/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // Add domains here if you host images externally
      // e.g., "images.unsplash.com"
    ],
  },
}

module.exports = nextConfig;