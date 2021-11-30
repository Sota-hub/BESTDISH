import { useState } from "react";

import RatingStar from "../../ui/RatingStar";
import PostOptions from "../../parts/PostOptions";

const PostInputDisplay = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  return (
    <div className="alignCenter">
      <div className="w-[80%]">
        <h1 className="text-2xl ml-2 w-[80%]  ">Post</h1>
        <a className="text-orange text-xs ml-3">* is required</a>
        <form>
          <div className="my-4">
            <label htmlFor="dish-name">
              <span className="supportText text-orange">* </span>Dish name
            </label>
            <input
              type="text"
              name="dish-name"
              placeholder="Dish name"
              className="inputBarStyle"
            ></input>
          </div>
          <div className="my-4">
            <label>
              <span className="supportText text-orange">* </span>Rating
            </label>
            <div className="inputBarStyle">
              <RatingStar />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="image">
              <span className="supportText text-orange">* </span>Image
            </label>
            <input
              type="file"
              name="image"
              className="inputBarStyle mt-2"
            ></input>
          </div>
          <div className="my-4">
            <label htmlFor="price">
              <span className="supportText text-orange">* </span>Price
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="inputBarStyle"
            ></input>
          </div>
          <div className="my-4">
            <label htmlFor="address">
              <span className="supportText text-orange">* </span>Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="inputBarStyle"
            ></input>
          </div>
          <div className="my-4">
            <div
              className="flex justify-between border-b py-3"
              onClick={() => {
                setIsOptionsOpen(!isOptionsOpen);
              }}
            >
              <label htmlFor="options">Options</label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="32px"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isOptionsOpen && <PostOptions />}
          </div>
          <input
            type="submit"
            value="Next"
            readOnly
            className="pinkButton my-8"
            onClick
          ></input>
        </form>
      </div>
    </div>
  );
};

export default PostInputDisplay;
