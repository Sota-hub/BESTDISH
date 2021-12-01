import Image from "next/dist/client/image";

import RatingStar from "../ui/RatingStar";
import PieceOfInfo from "../parts/PieceOfInfo";
import BG1 from "../../public/bg-1.jpg";
import MenuCardList from "../parts/card/MenuCardList";

const MenuDetailDisplay = () => {
  const saveDish = (e) => {
    e.preventDefault();
    console.log("Saved!");
  };

  return (
    <main>
      <div className="alignCenter mt-8">
        <div className="w-[90%]">
          <h1 className="text-4xl mb-2">Menu name</h1>
          <RatingStar />
          <button className="whiteButton w-[50%] h-12 mt-4" onClick={saveDish}>
            Save this dish
          </button>
        </div>
      </div>
      <div className="alignCenter">
        <div className="SandwichBorder w-[90%] py-6 my-6">
          <Image src={BG1} alt="dish image" priority />
        </div>
      </div>
      <div className="alignCenter mt-4 mb-8">
        <div className="w-[90%] border border-gray-300 rounded-sm">
          <h2 className="border-b border-gray-300 mt-4 pb-4 text-2xl text-center">
            Information
          </h2>
          <div className="grid grid-cols-2 my-4 w-[90%]">
            <PieceOfInfo tag="Price" value="$10" />
            <PieceOfInfo tag="Address" value="23, VCC East" />
            <PieceOfInfo tag="Clarification" value="Korean, Chicken" />
            <PieceOfInfo tag="Open hour" value="10 a.m. - 22 p.m." />
            <PieceOfInfo tag="Day off" value="Tuesday" />
            <PieceOfInfo tag="Website" value="https://www.xxx.com" />
          </div>
        </div>
      </div>
      <MenuCardList title="Menus includes this dish" link="/user/a" />
    </main>
  );
};

export default MenuDetailDisplay;
