import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', 
      },
      {
        protocol: 'https',
        hostname: 'www.kmutt.ac.th',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // ✅ ตัวที่เพิ่มมาใหม่
      },
    ],
  },
};

export default nextConfig;