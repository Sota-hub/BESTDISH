module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/users/:ph",
        destination: "https://best-dish.herokuapp.com/users/:ph",
      },
      {
        source: "/dishes/:ph",
        destination: "https://best-dish.herokuapp.com/dishes/:ph",
      },
      {
        source: "/dishes/menu/:ph",
        destination: "https://best-dish.herokuapp.com/dishes/menu/:ph",
      },
    ];
  },
};
