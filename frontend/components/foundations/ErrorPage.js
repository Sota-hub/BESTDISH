import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { UserAuthContext } from "../../contexts/UserAuthContext";
import Bubble from "../../public/bubble.png";

const ErrorPage = () => {
  const { isAuth, userInfo } = useContext(UserAuthContext);

  return (
    <div className="alignCenter h-[100vh]">
      <div className="w-[80%]">
        <div className="relative flex justify-end">
          <Image src={Bubble} alt="bubble" width="128px" height="128px" />
          <p className="absolute top-11 right-6 text-2xl font-bold text-white">
            Oops!
          </p>
        </div>
        <h1 className="text-6xl font-bold text-center mt-2 mb-4">404</h1>
        <p className="text-xl text-center mb-8">Page not found</p>
        <Link href={isAuth ? `/user/${userInfo.user._id}` : "/"}>
          <a className="whiteButton block text-center leading-[4em]">
            Go back home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
