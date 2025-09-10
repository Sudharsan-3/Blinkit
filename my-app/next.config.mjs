/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.grofers.com",
        },
      ],
    },
  };
  
  export default nextConfig;
  