import { useState } from "react";

import PostForm from "./PostForm";
import PostConfirm from "./PostConfirm";

const PostDisplay = () => {
  const [postData, setPostData] = useState({});
  const [isConfirmPage, setIsConfirmPage] = useState(false);

  console.log(postData);

  return (
    <>
      <main className="alignCenter">
        <div className="w-[80%]">
          {!isConfirmPage && (
            <PostForm
              setPostData={setPostData}
              setIsConfirmPage={setIsConfirmPage}
            />
          )}
          {isConfirmPage && (
            <PostConfirm postData={postData} setPostData={setPostData} />
          )}
        </div>
      </main>
    </>
  );
};

export default PostDisplay;
