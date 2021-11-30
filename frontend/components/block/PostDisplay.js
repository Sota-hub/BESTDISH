import { useState } from "react";

import PostInputDisplay from "./postSwitchDisplays.js/PostInputDisplay";
import PostConfirmDisplay from "./postSwitchDisplays.js/PostConfirmDisplay";

const PostDisplay = () => {
  const [isConfirmation, setIsConfirmation] = useState(false);

  return (
    <>
      {/* <PostInputDisplay /> */}
      <PostConfirmDisplay />
    </>
  );
};

export default PostDisplay;
