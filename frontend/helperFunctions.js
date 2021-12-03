export const geolocation = (nav) =>
  nav.geolocation.getCurrentPosition(
    (location) => {
      const { latitude } = location.coords;
      const { longitude } = location.coords;
      console.log(latitude, longitude);
    },
    () => {
      alert("Couldn't get your location");
    }
  );
