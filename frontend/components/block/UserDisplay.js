import Link from "next/link";

import SearchFormWithBg from "../parts/SearchFormWithBg";
import DishCardList from "../parts/card/DishCardList";
import MenuCardList from "../parts/card/MenuCardList";
import PostButton from "../ui/post-button/PostButton";

const UserDisplay = () => {
  return (
    <>
      <SearchFormWithBg />
      <div className="alignCenter mt-10">
        <div className="w-[80%]">
          <Link href="/user/a/post">
            <a className="alignCenter whiteButton">Post Dish</a>
          </Link>
          <Link href="/user/b/menu">
            <a className="alignCenter whiteButton">BEST DISH</a>
          </Link>
          {/* <Link href="/user/c/menu">
            <a className="alignCenter userHomeButton">All Menu</a>
          </Link> */}
        </div>
      </div>
      <div className=" mb-14">
        <DishCardList title="What's new" link="/login/signup" />
        <DishCardList title="New in BEST DISH" link="/login/signup" />
        <MenuCardList
          title="Menus matched with your BEST DISH"
          link="/login/signup"
        />
        <MenuCardList title="Someone’s menu" link="/login/signup" />
      </div>
      <PostButton />
    </>
  );
};

export default UserDisplay;
