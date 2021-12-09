import { useState } from "react";

import RatingStar from "../../ui/RatingStar";
import PostOptions from "../../parts/PostOptions";

const PostFirstDisplay = ({ setIsSecondPage }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  return (
    <main className="alignCenter">
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
              className="postInputBarStyle"
            ></input>
          </div>
          <div className="my-4">
            <label>
              <span className="supportText text-orange">* </span>Rating
            </label>
            <div className="postInputBarStyle">
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
              className="postInputBarStyle mt-2"
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
              className="postInputBarStyle"
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
              className="postInputBarStyle"
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
          <span
            className="pinkButton block text-center leading-[4em] my-8"
            onClick={() => setIsSecondPage(true)}
          >
            Next
          </span>
        </form>
      </div>
    </main>
  );
};

export default PostFirstDisplay;
