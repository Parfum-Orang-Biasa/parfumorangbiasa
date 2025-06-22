import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['placehold.co'],
  },
  redirects: async () => {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'parfumorangbiasa.com',
          },
        ],
        destination: 'https://www.parfumorangbiasa.com/:path*',
        permanent: true,
      },
    ];
  },
  trailingSlash: true,
};

export default nextConfig;
