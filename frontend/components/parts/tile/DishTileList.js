import { useState, useEffect } from "react";

import DishTile from "./DishTile";
import { rangeFilter } from "../../../helperFunctions";
import { popularityFilter } from "../../../helperFunctions";

const DishTileList = ({ dishes, sortByRange, sortByPopularity }) => {
  // ===== Enable to use navigator =====
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setNav(navigator);
  }, []);
  // ===================================

  nav && rangeFilter(nav, dishes, sortByRange);
  popularityFilter(dishes, sortByPopularity);

  return (
    <div className="alignCenter mb-8">
      <div className=" w-[90%]">
        {!dishes.length && <p>Not matched any dish...</p>}
        {dishes?.map((dish) => (
          <DishTile key={dish._id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default DishTileList;
