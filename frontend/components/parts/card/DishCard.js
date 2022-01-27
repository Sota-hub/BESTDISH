import Image from "next/image";

import RatingStar from "../../ui/RatingStar";

const DishCard = ({ dish_name, evaluation, price, clarification, file }) => {
  return (
    <div className="LightRoundBorder min-w-[200px] h-[290px] rounded overflow-hidden mx-2 bg-white">
      <div className="imageRounded">
        <Image
          src={file}
          alt={`${dish_name}'s image`}
          width={200}
          height={175}
        />
      </div>
      <div className=" mt-1 ml-3">
        <h1 className="font-bold text-lg">{dish_name}</h1>
        <RatingStar evaluation={evaluation} />
        <p>
          <span className="supportText">$</span> {price}
        </p>
        <p>{clarification}</p>
      </div>
    </div>
  );
};

export default DishCard;
