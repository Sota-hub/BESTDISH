module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/users/:ph",
        destination: "https://best-dish-server.onrender.com/users/:ph",
      },
      {
        source: "/dishes/:ph",
        destination: "https://best-dish-server.onrender.com/dishes/:ph",
      },
      {
        source: "/dishes/menu/:ph",
        destination: "https://best-dish-server.onrender.com/dishes/menu/:ph",
      },
    ];
  },
};
