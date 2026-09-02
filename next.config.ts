import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/md/:path*', // For URLs like /md/2025_2026/file.pdf
        destination: 'https://files.mamse.in/md/:path*', // Forward to one.com storage
        permanent: true,
      },
      {
        source: '/April 2026/:path*', // For URLs like /April 2026/circular.pdf
        destination: 'https://files.mamse.in/April 2026/:path*', // Forward to one.com storage
        permanent: true,
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
