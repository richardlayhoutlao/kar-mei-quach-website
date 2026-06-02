/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-pw.pixieset.com",
      },
    ],
  },
}

export default nextConfig
