import { useRouter } from "next/router";
import Image from "next/image";

import RatingStar from "../../ui/RatingStar";

const DishTile = ({
  id,
  dishName,
  evaluation,
  price,
  location,
  description,
  image,
}) => {
  const router = useRouter();

  const goToDetailPage = () => {
    router.push(`/user/userId/menu/${id}`);
  };

  return (
    <div
      className="flex border-b border-gray-300 pb-4 mb-4 cursor-pointer"
      onClick={goToDetailPage}
    >
      <div className="relative w-[50%]">
        <Image src={image} alt=""></Image>
      </div>
      <div className="alignCenter w-[50%] h-[100%]">
        <div>
          <h1 className="font-bold text-lg">{dishName}</h1>
          <RatingStar evaluation={evaluation} />
          <p>
            <span className="supportText">$</span> {price}
          </p>
          <p>{location}</p>
          <p className="opacity-75  text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DishTile;
