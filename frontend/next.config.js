module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:ph/:pl",
        destination: "http://localhost:8000/:ph/:pl",
      },
    ];
  },
};
