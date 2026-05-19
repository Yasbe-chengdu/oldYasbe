/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,   
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  distDir: 'dist',
};

export default nextConfig;

module.exports = {
  output: 'export',
  images: { unoptimized: true },  // Cloudflare 不支持 Next Image 优化
}