import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { UserAuthContext } from "../../../contexts/UserAuthContext";

const MenuBar = ({ isBurgerOpen, setIsBurgerOpen }) => {
  const { setIsAuth, userInfo, setUserInfo } = useContext(UserAuthContext);
  const router = useRouter();

  console.log("user information", userInfo);

  const signOutProcess = async () => {
    await fetch("/users/signout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    setIsAuth(false);
    setUserInfo({});
    router.push("/");
  };

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
            <Link href={`/user/aaa/profile`}>
              <a className="block p-2">Profile</a>
            </Link>
            <Link href={`/user/aaa/menu`}>
              <a className="block p-2">My Menu</a>
            </Link>
            <Link href={`/user/aaa/post`}>
              <a className="block p-2">Post</a>
            </Link>
            <button className="p-2" onClick={signOutProcess}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
