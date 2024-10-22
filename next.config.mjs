/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['lucide-react'],
    images: {
      unoptimized: true, 
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.daisyui.com',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
        },
      ],
    },
    distDir: 'out',
  };
  
  export default nextConfig;