/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/**'
      },
      { protocol: 'https',
        hostname: 'upload-os-bbs.hoyolab.com',
        pathname: '/**'
      }
    ]
  },
  reactCompiler: true,
};

export default nextConfig;
