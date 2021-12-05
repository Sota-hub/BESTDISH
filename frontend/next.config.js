module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:search",
        destination: "http://localhost:8000/:search",
      },
    ];
  },
};
