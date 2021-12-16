import Image from "next/dist/client/image";

import RatingStar from "../ui/RatingStar";
import PieceOfInfo from "../parts/PieceOfInfo";
import MenuCardList from "../parts/card/MenuCardList";

const MenuDetailDisplay = ({ dish }) => {
  const saveDish = (e) => {
    e.preventDefault();
    console.log("Saved!");
  };

  return (
    <main>
      <div className="alignCenter mt-8">
        <div className="w-[90%]">
          <h1 className="text-4xl mb-2">{dish.dishName}</h1>
          <RatingStar evaluation={dish.evaluation} />
          <button className="whiteButton w-[50%] h-12 mt-4" onClick={saveDish}>
            Save this dish
          </button>
        </div>
      </div>
      <div className="alignCenter">
        <div className="SandwichBorder w-[90%] py-6 my-6">
          <Image src={dish.file} alt="dish image" width={400} height={300} />
        </div>
      </div>
      <div className="alignCenter mt-4 mb-8">
        <div className="w-[90%] border border-gray-300 rounded-sm">
          <h2 className="border-b border-gray-300 mt-4 pb-4 text-2xl text-center">
            Information
          </h2>
          <div className="grid grid-cols-2 my-4 w-[90%]">
            <PieceOfInfo tag="Price" value={`$ ${dish.price}`} />
            <PieceOfInfo tag="Address" value={dish.address} />
            <PieceOfInfo tag="Clarification" value={dish.clarification} />
            <PieceOfInfo tag="Open hour" value={dish.openHour} />
            <PieceOfInfo tag="Day off" value={dish.dayOff} />
            <PieceOfInfo tag="Website" value={dish.website} />
          </div>
        </div>
      </div>
      <MenuCardList title="Menus includes this dish" link="/user/a" />
    </main>
  );
};

export default MenuDetailDisplay;
