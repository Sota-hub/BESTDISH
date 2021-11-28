import { useState } from "react";
import Image from "next/image";
import Hamburger from "hamburger-react";

import LoginBar from "./header_bars/LoginBar";
import SearchBar from "./header_bars/SearchBar";

import searchIcon from "../public/search.svg";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="alignCenter justify-between m-2">
        <div className="ml-4">BESTDISH</div>
        <div className="alignCenter  justify-end m-2">
          <div
            className={`alignCenter w-12 h-12 z-0 ${
              isBurgerOpen && "opacity-0 pointer-events-none"
            }`}
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
            }}
          >
            <Image src={searchIcon} alt="search icon" className="-z-30" />
          </div>
          <div className="m-1"></div>
          <div className={isSearchOpen && "opacity-0 pointer-events-none"}>
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
