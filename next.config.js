/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(process.env.NODE_ENV === "production" && {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.json$/,
        type: "json",
      });

      return config;
    },
  }),
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

module.exports = nextConfig;
