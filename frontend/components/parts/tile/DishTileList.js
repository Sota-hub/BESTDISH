import DishTile from "./DishTile";

const DishTileList = ({ sampleData }) => {
  return (
    <div className="alignCenter mb-8">
      <div className=" w-[90%]">
        {sampleData.map((datum) => (
          <DishTile
            key={datum.id}
            id={datum.id}
            dish_name={datum.dish_name}
            evaluation={datum.evaluation}
            price={datum.price}
            location={datum.location}
            description={datum.description}
            image={datum.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DishTileList;
