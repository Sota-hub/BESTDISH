import { useState, useEffect } from "react";
import Image from "next/dist/client/image";

import RatingStar from "../ui/RatingStar";
import PieceOfInfo from "../parts/PieceOfInfo";
import MenuCardList from "../parts/card/MenuCardList";

import { useContext } from "react";
import { UserAuthContext } from "../../contexts/UserAuthContext";

const MenuDetailDisplay = ({ dish }) => {
  const dishId = dish._id;
  const userId = dish.userId;

  const [isSaved, setIsSaved] = useState(false);
  const { userInfo } = useContext(UserAuthContext);

  useEffect(() => {
    (async () => {
      const response = await fetch("/users/favorites", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      const data = await response.json();
      console.log(data.favorites);

      data.favorites.map((favorite) => {
        if (favorite.userId === userId && favorite.dishId === dishId)
          setIsSaved(true);
      });
    })();
  }, []);

  const saveDish = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/users/save", {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify({ userId, dishId }),
      });

      if (!response.ok) throw new Error("Something went wrong...");

      setIsSaved(!isSaved);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main>
      <div className="alignCenter mt-8">
        <div className="w-[90%]">
          <h1 className="text-4xl mb-2">{dish.dishName}</h1>
          <RatingStar evaluation={dish.evaluation} />
          <button
            className={
              isSaved
                ? "pinkButton w-[50%] h-12 mt-4"
                : "whiteButton w-[50%] h-12 mt-4"
            }
            onClick={saveDish}
          >
            {isSaved ? "Saved!" : "Save this dish"}
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
