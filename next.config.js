module.exports = {
  images: {
    domains: ['tailwindui.com'], // Add the domain here
  },
  reactStrictMode: true,
  // I don't want it to run when compiling as I trust the CI stage of the pipeline and Husky.
  ignoreDuringBuilds: true,
};
