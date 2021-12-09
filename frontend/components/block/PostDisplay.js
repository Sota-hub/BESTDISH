import { useState } from "react";

import PostFirstDisplay from "./postSwitchDisplays.js/PostFirstDisplay";
import PostSecondDisplay from "./postSwitchDisplays.js/PostSecondDisplay";

const PostDisplay = () => {
  const [isSecondPage, setIsSecondPage] = useState(false);

  return (
    <>
      {!isSecondPage && <PostFirstDisplay setIsSecondPage={setIsSecondPage} />}
      {isSecondPage && <PostSecondDisplay />}
    </>
  );
};

export default PostDisplay;
