/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true, // true이면 13버전 적용
    },
    // 아래것들 안하면 fs에러 남
    reactStrictMode: true,
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
};

module.exports = nextConfig;
