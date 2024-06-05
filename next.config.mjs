/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // basePath: "/myproject" // https://nurse.cmu.ac.th/myproject
    // poweredByHeader: false,
    // compress: true,
    images: {
        minimumCacheTTL : 10,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.nurse.cmu.ac.th',
          },
          {
            protocol: 'https',
            hostname: '**.cmu.ac.th',
          },
        ],
      },
};

export default nextConfig;
