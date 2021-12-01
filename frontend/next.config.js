module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:search",
        destination: "http://localhost:3001/:search",
      },
    ];
  },
};
