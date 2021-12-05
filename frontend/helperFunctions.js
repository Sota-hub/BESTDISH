export const rangeFilter = (nav, dishes, range) => {
  return nav.geolocation.getCurrentPosition(
    async (location) => {
      const latitude = await location.coords.latitude;
      const longitude = await location.coords.longitude;

      if (range === 5) {
        dishes.filter(
          (dish) =>
            dish.latitude > latitude - 0.045 &&
            dish.latitude < latitude + 0.045 &&
            dish.longitude > longitude - 0.045 &&
            dish.longitude < longitude + 0.045
        );
      }
      if (range === 10) {
        dishes.filter(
          (dish) =>
            dish.latitude > latitude - 0.09 &&
            dish.latitude < latitude + 0.09 &&
            dish.longitude > longitude - 0.09 &&
            dish.longitude < longitude + 0.09
        );
      }
      if (range === 25) {
        dishes.filter(
          (dish) =>
            dish.latitude > latitude - 0.225 &&
            dish.latitude < latitude + 0.225 &&
            dish.longitude > longitude - 0.225 &&
            dish.longitude < longitude + 0.225
        );
      }
      if (range === 50) {
        dishes.filter(
          (dish) =>
            dish.latitude > latitude - 0.45 &&
            dish.latitude < latitude + 0.45 &&
            dish.longitude > longitude - 0.45 &&
            dish.longitude < longitude + 0.45
        );
      }
    },
    () => {
      alert("Couldn't get your location");
    }
  );
};

export const popularityFilter = (dishes, popularity) => {
  if (popularity === "saved") dishes.sort((a, b) => b.saved - a.saved);
  if (popularity === "looked") dishes.sort((a, b) => b.visited - a.visited);
  if (popularity === "rate") dishes.sort((a, b) => b.evaluation - a.evaluation);
  if (popularity === "new")
    dishes.sort((a, b) => new Date(b.postDate) - new Date(a.postDate));
};