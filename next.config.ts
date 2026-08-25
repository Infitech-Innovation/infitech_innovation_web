import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
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
