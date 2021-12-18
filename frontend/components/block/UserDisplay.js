import Link from "next/link";

import SearchFormWithBg from "../parts/SearchFormWithBg";
import DishCardList from "../parts/card/DishCardList";
import MenuCardList from "../parts/card/MenuCardList";
import PostButton from "../ui/post-button/PostButton";

const UserDisplay = () => {
  return (
    <main>
      <SearchFormWithBg />
      <div className="alignCenter mt-10">
        <div className="w-[80%]">
          <Link href="/user/a/post">
            <a className="alignCenter whiteButton">Post Dish</a>
          </Link>
          <Link href="/user/b/menu">
            <a className="alignCenter whiteButton">BEST DISH</a>
          </Link>
        </div>
      </div>
      <div className=" mb-14">
        <DishCardList title="Recommend" link="#" />
        <DishCardList title="Latest" link="#" />
        <MenuCardList title="Same BEST DISH" link="#" />
      </div>
      <PostButton />
    </main>
  );
};

export default UserDisplay;
