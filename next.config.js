/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

console.log('process.env.NODE_ENV', isProd ? '/reactthreeletter' : '')

const nextConfig = {
  basePath: isProd ? '/reactthreeletter' : '',
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
