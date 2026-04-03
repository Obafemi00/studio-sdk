import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio/:path*",
        destination: "/work/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
