/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    domains: ["media.graphassets.com"],
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/site.webmanifest$/],
  },
});
