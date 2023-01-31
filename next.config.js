/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.sanity.io',
      'avatars.githubusercontent.com',
    ]
  }
}

module.exports = nextConfig
