import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { UserAuthContext } from "../../contexts/UserAuthContext";

const SignOutDisplay = () => {
  const { setIsAuth, userInfo, setUserInfo } = useContext(UserAuthContext);
  const router = useRouter();

  const signOutProcess = async () => {
    await fetch("/users/signout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    setIsAuth(false);
    setUserInfo(null);

    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }

    router.push("/");
  };

  return (
    <div className="alignCenter h-[100vh]">
      <div className="w-[80%]">
        <h1 className="text-3xl mb-8">
          You are signing out?
          <br />
          See you again!
        </h1>
        <button className="pinkButton" onClick={signOutProcess}>
          Sign out
        </button>
        <Link href={userInfo ? `/user/${userInfo.user._id}` : "/"}>
          <a className="whiteButton block text-center leading-[4em]">Cancel</a>
        </Link>
      </div>
    </div>
  );
};

export default SignOutDisplay;
