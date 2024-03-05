/** @type {import('next').NextConfig} */
const nextConfig = {};

import withPWAInit from "@ducanh2912/next-pwa";


const withPWA = withPWAInit({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: false,
    workboxOptions: {
        disableDevLogs: true,
    },
    images: {
        domains: ['scontent.fcmb6-1.fna.fbcdn.net'],
      },

});

export default withPWA(nextConfig);