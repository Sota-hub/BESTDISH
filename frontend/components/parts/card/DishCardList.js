// import Link from "next/link";

import DishCard from "./DishCard";

const DishCardList = ({ posts }) => {
  return (
    <div className="my-10 ml-4">
      <h1 className="text-2xl ml-2 w-[80%] ">Up To Date</h1>
      {/* <Link href={link}>
        <a className="text-orange text-xs ml-3">view all</a>
      </Link> */}
      <div className="flex flex-nowrap overflow-x-auto mt-4">
        {posts.map((post) => (
          <DishCard
            key={post._id}
            dish_name={post.postName}
            evaluation={post.evaluation}
            price={post.price}
            clarification={post.clarification}
            file={post.file}
          />
        ))}
      </div>
    </div>
  );
};

export default DishCardList;
