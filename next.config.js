/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add your custom domain here if you have one
  // basePath: '/repository-name', // Only needed if not using custom domain
}

module.exports = nextConfig
