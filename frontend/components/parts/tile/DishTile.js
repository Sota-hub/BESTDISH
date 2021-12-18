import { useRouter } from "next/router";
import Image from "next/image";

import RatingStar from "../../ui/RatingStar";

const DishTile = ({ dish }) => {
  const router = useRouter();

  const goToDetailPage = () => {
    router.push(`/user/${dish.userId}/menu/${dish._id}`);
  };

  return (
    <div
      className="flex border-b border-gray-300 pb-4 mb-4 cursor-pointer min-h-[120px]"
      onClick={goToDetailPage}
    >
      <div className="relative w-[50%]">
        <Image
          src={dish.file}
          alt={`${dish.dishName} image`}
          layout="fill"
        ></Image>
      </div>
      <div className="alignCenter justify-start w-[50%] h-[100%] pl-4">
        <div>
          <h1 className="font-bold text-lg">{dish.dishName}</h1>
          <RatingStar evaluation={dish.evaluation} />
          <p>
            <span className="supportText">$</span> {dish.price}
          </p>
          <p>{dish.location}</p>
          <p className="opacity-75  text-sm mt-1">{dish.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DishTile;
