/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'CyberchiefTechnologies',
    description: 'Custome store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://cyb3rchi3f.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
