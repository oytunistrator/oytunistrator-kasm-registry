/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Oytunistrator Repository',
    description: 'Oytunistrator Repository for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://oytunistrator.github.io/oytunistrator-kasm-registry/',
    contactUrl: 'https://github.com/oytunistrator/oytunistrator-kasm-registry/issues',
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
