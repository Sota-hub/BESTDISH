import { useContext } from "react";
import { useRouter } from "next/router";

import { UserAuthContext } from "../../../contexts/UserAuthContext";

const PostConfirm = ({ postData, setPostData }) => {
  const { userInfo } = useContext(UserAuthContext);
  const router = useRouter();

  const changeBest = (e) => {
    setPostData((prevState) => {
      return { ...prevState, best: +e.target.value };
    });
  };

  const postDish = async () => {
    await fetch("/dishes/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
      body: JSON.stringify(postData),
    });

    router.replace(`/user/${userInfo.user._id}`);
  };

  return (
    <main className="alignCenter my-8 font-bold">
      <div className="w-[80%]">
        <h1 className="text-5xl my-8">
          Will you
          <br />
          add this
          <br />
          to your
          <br />
          BEST DISH?
        </h1>
        <select
          onChange={changeBest}
          className="w-[100%] h-24 border rounded-sm text-2xl p-4 my-8"
        >
          <option value="0">No</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button className="pinkButton my-8" onClick={postDish}>
          Post
        </button>
      </div>
    </main>
  );
};

export default PostConfirm;
