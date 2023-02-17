/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    appDir: true,
  },
  env: {
    domains: ["/api.github.com/users"],
  },
  images: {
    domains: [
      "cdn.hashnode.com",
      "avatars.githubusercontent.com",
      "res.cloudinary.com",
    ],
  },
}
