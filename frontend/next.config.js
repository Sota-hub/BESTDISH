module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/users/:ph",
        destination: "http://localhost:8000/users/:ph",
      },
      {
        source: "/dishes/:ph",
        destination: "http://localhost:8000/dishes/:ph",
      },
      {
        source: "/dishes/menu/:ph",
        destination: "http://localhost:8000/dishes/menu/:ph",
      },
    ];
  },
};
