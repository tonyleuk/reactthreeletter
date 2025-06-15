/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/reactthreeletter' : '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  }
  /* trailingSlash: true, */
};

module.exports = nextConfig;
