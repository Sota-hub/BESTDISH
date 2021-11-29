// ========= sampleData will be data =========
import BG1 from "../../../public/bg-1.jpg";
const sampleData = [
  {
    id: 1,
    dish_name: "Tacos",
    evaluation: 3,
    price: 5,
    location: "Yaletown",
    description: "this is good",
    saved: 20,
    looked: 234,
    image: BG1,
  },
  {
    id: 2,
    dish_name: "Nachos",
    evaluation: 4,
    price: 9,
    location: "Cairo",
    description: "this is so good",
    saved: 43,
    looked: 301,
    image: BG1,
  },
  {
    id: 3,
    dish_name: "Pasta",
    evaluation: 3.5,
    price: 10,
    location: "Pali",
    description: "this is so bono",
    saved: 13,
    looked: 581,
    image: BG1,
  },
];
// ===========================================

import DishTile from "./DishTile";

const DishTileList = () => {
  return (
    <div className="alignCenter mb-8">
      <div className=" w-[90%]">
        {sampleData.map((datum) => (
          <DishTile
            key={datum.id}
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
