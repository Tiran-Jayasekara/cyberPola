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
});

// Move the output configuration outside of withPWAInit options
nextConfig.output = {
    dir: 'out',
};

export default withPWA(nextConfig);
