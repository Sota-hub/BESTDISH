import { useEffect, useContext } from "react";

import { UserAuthContext } from "../../../contexts/UserAuthContext";
import DishTile from "./DishTile";
import fetchMyMenu from "../../../hooks/fetchMyMenu";

const MyMenuDishTileList = () => {
  const { userInfo } = useContext(UserAuthContext);
  const { data, loading, error } = fetchMyMenu(userInfo.user._id);

  return (
    <div className="alignCenter mb-8">
      <div className=" w-[90%]">
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong</p>}
        {!data.length && <p>Not matched any dish...</p>}
        {data?.map((dish) => (
          <DishTile key={dish._id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default MyMenuDishTileList;
