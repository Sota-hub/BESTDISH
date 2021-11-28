module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:ph",
        destination: "http://localhost:3001/:ph",
      },
    ];
  },
};
