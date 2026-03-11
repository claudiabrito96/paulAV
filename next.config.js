/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.cti.com" },
      { protocol: "https", hostname: "**.amhelectronics.com" },
      { protocol: "https", hostname: "**.ldsystems.com" },
      { protocol: "https", hostname: "**.ava-public.s3.eu-central-1.amazonaws.com" },
      { protocol: "https", hostname: "**.beaconaudiovideosystems.com" },
      { protocol: "https", hostname: "**.aurumhometech.com" },
    ],
  },
};

module.exports = nextConfig;
