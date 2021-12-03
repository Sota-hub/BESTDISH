import DishTile from "./DishTile";

const DishTileList = ({ dishes, sortByPopularity }) => {
  if (sortByPopularity === "saved") dishes.sort((a, b) => b.saved - a.saved);
  if (sortByPopularity === "looked")
    dishes.sort((a, b) => b.visited - a.visited);
  if (sortByPopularity === "rate")
    dishes.sort((a, b) => b.evaluation - a.evaluation);
  if (sortByPopularity === "new")
    dishes.sort((a, b) => new Date(b.postDate) - new Date(a.postDate));

  return (
    <div className="alignCenter mb-8">
      <div className=" w-[90%]">
        {!dishes.length && <p>Not matched any dish...</p>}
        {dishes &&
          dishes.map((dish) => <DishTile key={dish._id} dish={dish} />)}
      </div>
    </div>
  );
};

export default DishTileList;
