import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['localhost:3000', '0.0.0.0:3000', '192.168.8.9', '192.168.8.9:3000', '192.168.1.100', '*'],
};

export default nextConfig;
