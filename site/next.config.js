/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Cyberchief LLC.',
    description: 'Kasm workspaces provided by Cyberchief LLC.',
    icon: '/img/logo.svg',
    listUrl: 'https://cyb3rchi3f.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Cyb3rChi3f/kasm-registry/wiki',
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
