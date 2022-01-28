import { useRouter } from "next/router";
import Image from "next/image";

import { goToDetailPage } from "../../../helperFunctions";
import RatingStar from "../../ui/RatingStar";

const DishCard = ({ post }) => {
  const router = useRouter();

  return (
    <div
      className="LightRoundBorder min-w-[200px] h-[290px] rounded overflow-hidden mx-2 bg-white"
      onClick={() => goToDetailPage(router, post.userId, post._id)}
    >
      <div className="imageRounded">
        <Image
          src={post.file}
          alt={`${post.dishName}'s image`}
          width={200}
          height={155}
        />
      </div>
      <div className=" mt-1 ml-3">
        <h1 className="font-bold text-lg">{post.dishName}</h1>
        <RatingStar evaluation={post.evaluation} />
        <p>
          <span className="supportText">$</span> {post.price}
        </p>
        <p>{post.clarification}</p>
      </div>
    </div>
  );
};

export default DishCard;
