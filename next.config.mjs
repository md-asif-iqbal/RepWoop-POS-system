/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
    images: {
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
  };
  
  export default nextConfig;