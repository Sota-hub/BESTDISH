import Image from "next/image";

import RatingStar from "../../ui/RatingStar";
import BG1 from "../../../public/bg-1.jpg";

const DishTile = ({
  dish_name,
  evaluation,
  price,
  location,
  description,
  image,
}) => {
  return (
    <div className="flex border-b border-gray-300 pb-4 mb-4">
      <div className="relative w-[50%]">
        <Image src={image} alt=""></Image>
      </div>
      <div className="alignCenter w-[50%] h-[100%]">
        <div>
          <h1 className="font-bold text-lg">{dish_name}</h1>
          <RatingStar evaluation={evaluation} />
          <p>
            <span className="opacity-75 text-xs">$</span> {price}
          </p>
          <p>{location}</p>
          <p className="opacity-75  text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DishTile;
