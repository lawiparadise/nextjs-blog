/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/posts/june',
            permanent: false,
          },
        ]
      },
}

module.exports = nextConfig
