import DishTile from "./DishTile";
import { rangeFilter } from "../../../helperFunctions";
import { popularityFilter } from "../../../helperFunctions";

const SearchDishTileList = ({ dishes, sortByRange, sortByPopularity }) => {
  let Dishes;

  rangeFilter(dishes, sortByRange, Dishes);
  console.log(Dishes);

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

export default SearchDishTileList;
