import { useState } from "react";
import { useRouter } from "next/router";

import NotLoggedInBar from "./NotLoggedInBar";

const PostButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const whetherLoggedIn = (e) => {
    e.preventDefault();

    // if () {
    setIsLoggedIn(!isLoggedIn);
    //   return;
    // }

    // router.push("/login/signup");
  };

  return (
    <>
      <div className="fixed bottom-8 right-8" onClick={whetherLoggedIn}>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96px"
            height="96px"
            viewBox="0 0 20 20"
            fill="#F24B6A"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          <div className="absolute top-3 left-3 w-16 h-16 bg-white rounded-[50%] -z-10"></div>
        </div>
      </div>
      {isLoggedIn && (
        <NotLoggedInBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};

export default PostButton;
