/** @type {import('next').NextConfig} */
const nextConfig = {
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
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'cdn.pixabay.com',
        },
      ],
    },
  };
  
  export default nextConfig;