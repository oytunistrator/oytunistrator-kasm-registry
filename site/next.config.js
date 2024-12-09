/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Oytunistrator Repository',
    description: 'Oytunistrator Repository for Kasm supported workspaces.',
    icon: 'https://avatars.githubusercontent.com/u/3594944?v=4',
    listUrl: 'https://oytunistrator.github.io/oytunistrator-kasm-registry/',
    contactUrl: 'https://github.com/oytunistrator/oytunistrator-kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/oytunistrator-kasm-registry/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
