/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true
};

module.exports = nextConfig;
  async redirects() {
    return [
      {
        source: '/safe-image.jpg',
        destination: 'http://127.0.0.2/admin/post&id=5',
        permanent: true,
      },
    ];
  },
