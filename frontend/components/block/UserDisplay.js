import Image from "next/image";
import Link from "next/link";

import SearchForm from "../parts/SearchForm";
import DishCardList from "../parts/card/DishCardList";
import MenuCardList from "../parts/card/MenuCardList";
import PostButton from "../ui/post-button/PostButton";

import BG1 from "../../public/bg-1.jpg";

const UserDisplay = () => {
  return (
    <>
      <div className="imageRounded relative">
        <Image
          src={BG1}
          alt="back ground image 1"
          width="100%"
          height="100%"
          layout="responsive"
          className="absolute"
          priority
        />
        <div className="absolute top-0 w-[100%]  h-[100%] bg-black opacity-80"></div>
        <div className="alignCenter absolute top-0 w-[100%]  h-[100%]">
          <div className="w-[80%] ">
            <p className="text-white text-center mb-4 text-xl">
              Search what you want to eat
            </p>
            <SearchForm />
          </div>
        </div>
      </div>
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
