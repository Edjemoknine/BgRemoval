/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "www.slazzer.com",
      },
      {
        hostname: "fps.cdnpk.net",
      },
      {
        hostname: "imgs.search.brave.com",
      },
    ],
  },
};

export default nextConfig;
