// next.config.mjs
import withPWAInit from "@ducanh2912/next-pwa";

const nextConfig = {
  // Your Next.js configurations here

  // Configure PWA with Next.js
  ...withPWAInit({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: false,
    workboxOptions: {
      disableDevLogs: true,
    },
  }),

  // Configure static HTML export
  // This configuration will export your Next.js app as static HTML files
  // Update the exportPathMap function based on your routing needs
  // Example:
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     // Add more routes as needed
  //   };
  // },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      // Add more routes as needed
    };
  },
};

export default nextConfig;
