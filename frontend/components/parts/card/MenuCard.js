import Image from "next/image";

const MenuCard = ({
  user_name,
  posts,
  average_price,
  approximate_location,
  match,
  image,
}) => {
  return (
    <div className="LightRoundBorder min-w-[200px] h-[330px] rounded overflow-hidden mx-2 bg-white">
      <div className="imageRounded">
        <Image src={image} alt={`${user_name}'s image`} />
      </div>
      <div className=" mt-1 ml-3">
        <div className="alignCenter bg-pink text-white w-24 h-8 rounded-md my-2">
          <span className="text-lg">{match}</span>
          <span className="ml-2 text-xs">match</span>
        </div>
        <h1 className="text-lg font-bold">{user_name}'s menu</h1>
        <p>
          {posts} <span className="opacity-75 text-xs">posts</span>
        </p>
        <p>
          {average_price}
          <span className="opacity-75 text-xs">$ around</span>
        </p>
        <p>{approximate_location}</p>
      </div>
    </div>
  );
};

export default MenuCard;
