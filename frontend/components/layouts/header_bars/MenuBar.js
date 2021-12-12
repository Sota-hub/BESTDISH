import { useContext } from "react";
import Link from "next/link";

import { UserAuthContext } from "../../../contexts/UserAuthContext";

const MenuBar = ({ isBurgerOpen, setIsBurgerOpen }) => {
  const { userInfo } = useContext(UserAuthContext);

  return (
    <>
      <div
        className="overlay"
        onClick={() => {
          setIsBurgerOpen(!isBurgerOpen);
        }}
      ></div>
      <div className="fixed top-0 right-0 w-[50%] h-[120%] z-20 bg-white">
        <div className="SandwichBorder w-[100%] mt-20 py-6 flex justify-center">
          <div>
            <Link href={`/user/${userInfo.user._id}/profile`}>
              <a className="block p-2">Profile</a>
            </Link>
            <Link href={`/user/${userInfo.user._id}/menu`}>
              <a className="block p-2">My Menu</a>
            </Link>
            <Link href={`/user/${userInfo.user._id}/post`}>
              <a className="block p-2">Post</a>
            </Link>
            <Link href={`/signout`}>
              <a className="block p-2">Logout</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
