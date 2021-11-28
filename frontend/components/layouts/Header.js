import { useState } from "react";
import Image from "next/image";
import Hamburger from "hamburger-react";

import LoginBar from "./header_bars/LoginBar";
import SearchBar from "./header_bars/SearchBar";

import searchIcon from "../../public/search.svg";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="alignCenter justify-between m-2">
        <div className="ml-4 text-xl">BESTDISH</div>
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
      </div>
      {isBurgerOpen && (
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
