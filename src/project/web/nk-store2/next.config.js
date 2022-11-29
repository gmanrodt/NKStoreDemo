/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets-us-01.kc-usercontent.com",
        // port: "443",
        // pathname: "/9d6858cd-ceea-0076-31e7-72c3266ce1fd/**",
      },
    ],
    //domains:['assets-us-01.kc-usercontent.com']
  },
};

module.exports = nextConfig;
// https://assets-us-01.kc-usercontent.com:443/9d6858cd-ceea-0076-31e7-72c3266ce1fd/31973c41-9198-4759-980c-c325e6ad3ca6/oak-bond-coffee-co-aM9zGJ91hHM-unsplash.jpg