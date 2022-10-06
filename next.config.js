/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
    IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
    POSTER_SIZE: process.env.POSTER_SIZE,
    BACKDROP_SIZE: process.env.BACKDROP_SIZE,
    GENRE_URL: process.env.GENRE_URL,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "image.tmdb.org",
      "via.placeholder.com",
    ],
  },
};

module.exports = nextConfig;
