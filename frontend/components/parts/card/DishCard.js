import Image from "next/image";

import RatingStar from "../../ui/RatingStar";

const DishCard = ({ dish_name, evaluation, price, location, image }) => {
  return (
    <div className="LightRoundBorder min-w-[200px] h-[290px] rounded overflow-hidden mx-2 bg-white">
      <div className="imageRounded">
        <Image src={image} alt={`${dish_name} image`} />
      </div>
      <div className=" mt-1 ml-3">
        <h1 className="font-bold text-lg">{dish_name}</h1>
        <RatingStar evaluation={evaluation} />
        <p>
          <span className="opacity-75 text-xs">$</span> {price}
        </p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default DishCard;
