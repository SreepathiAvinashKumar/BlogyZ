/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
      //   domains: ['media.geeksforgeeks.org','www.orientsoftware.com','aceternity.com','plus.unsplash.com','images.unsplash.com','techovedas.com'],
      //   formats: ['image/avif', 'image/webp'],
      // },
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
},}

module.exports = nextConfig;