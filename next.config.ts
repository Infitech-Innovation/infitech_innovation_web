import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.1.168'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "fx.iguanyalabs.com",
      },
      {
        protocol: "https",
        hostname: "ndogofarms.co.ke",
      },
      {
        protocol: "https",
        hostname: "cablelink.co.ke",
      },
      {
        protocol: "https",
        hostname: "kbcci.vercel.app",
      },
      {
        protocol:"https",
        hostname:"www.kenya-benelux.trade"
      }
    ],
  },
  reactCompiler: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
