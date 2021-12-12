import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "hamburger-react";

import { UserAuthContext } from "../../contexts/UserAuthContext";
import MenuBar from "./header_bars/MenuBar";
import LoginBar from "./header_bars/LoginBar";
import SearchBar from "./header_bars/SearchBar";
import searchIcon from "../../public/search.svg";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isAuth, userInfo } = useContext(UserAuthContext);

  return (
    <>
      <header className="alignCenter justify-between m-2">
        <Link href={userInfo ? `/user/${userInfo.user._id}` : "/"}>
          <a className="block ml-4 text-xl">BESTDISH</a>
        </Link>
        <div className="alignCenter  justify-end m-2">
          <div
            className={
              isBurgerOpen
                ? "opacity-0 pointer-events-none"
                : "relative z-30 alignCenter w-12 h-12"
            }
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
            }}
          >
            <Image src={searchIcon} alt="search icon" />
          </div>
          <div className="m-1"></div>
          <div
            className={isSearchOpen ? "opacity-0 pointer-events-none" : "z-30"}
          >
            <Hamburger
              className="static"
              toggled={isBurgerOpen}
              toggle={() => {
                setIsBurgerOpen(!isBurgerOpen);
              }}
            />
          </div>
        </div>
      </header>
      {isAuth && isBurgerOpen && (
        <MenuBar
          isBurgerOpen={isBurgerOpen}
          setIsBurgerOpen={setIsBurgerOpen}
        />
      )}
      {!isAuth && isBurgerOpen && (
        <LoginBar
          isBurgerOpen={isBurgerOpen}
          setIsBurgerOpen={setIsBurgerOpen}
        />
      )}
      {isSearchOpen && (
        <SearchBar
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      )}
    </>
  );
};

export default Header;
