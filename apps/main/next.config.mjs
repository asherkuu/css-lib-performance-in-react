import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();

// eslint-disable-next-line turbo/no-undeclared-env-vars
const SECOND_CSS_GROUP_URL = process.env.SECOND_CSS_GROUP_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactProductionProfiling: true,
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
      {
        source: "/second-css-groups",
        destination: `${SECOND_CSS_GROUP_URL}/second-css-groups`,
      },
      {
        source: "/second-css-groups/:path*",
        destination: `${SECOND_CSS_GROUP_URL}/second-css-groups/:path*`,
      },
    ];
  },
};

export default withVanillaExtract(nextConfig);
