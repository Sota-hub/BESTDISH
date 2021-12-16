import { useState, useContext } from "react";
import { useRouter } from "next/router";

import { UserAuthContext } from "../../../contexts/UserAuthContext";
import NotLoggedInBar from "./NotLoggedInBar";

const PostButton = () => {
  const [toggleLoginBar, setToggleLoginBar] = useState(false);
  const { isAuth } = useContext(UserAuthContext);
  const router = useRouter();

  const judgeIfLogin = (e) => {
    e.preventDefault();

    if (!isAuth) {
      setToggleLoginBar(true);
      return;
    }

    router.push("/user/61b2844c22d05f0e28eee31d/post");
  };

  return (
    <>
      <div className="fixed bottom-8 right-8" onClick={judgeIfLogin}>
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
      {toggleLoginBar && (
        <NotLoggedInBar
          toggleLoginBar={toggleLoginBar}
          setToggleLoginBar={setToggleLoginBar}
        />
      )}
    </>
  );
};

export default PostButton;
