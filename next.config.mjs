/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "flo/",
        port: "3000/",
        pathname: "/public/**",
      },
    ],
  },
};

export default nextConfig;
