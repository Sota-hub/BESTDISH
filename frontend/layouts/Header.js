import { useState } from "react";
import Image from "next/image";
import Hamburger from "hamburger-react";

import LoginBar from "./header_bars/LoginBar";

import searchIcon from "../public/search.svg";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-end m-2">
        <Image src={searchIcon} alt="search icon" className="-z-30" />
        <div className="m-2"></div>
        <Hamburger
          className="static"
          toggled={isBurgerOpen}
          toggle={() => {
            setIsBurgerOpen(!isBurgerOpen);
          }}
        />
      </div>
      {isBurgerOpen && (
        <LoginBar
          isBurgerOpen={isBurgerOpen}
          setIsBurgerOpen={setIsBurgerOpen}
        />
      )}
    </>
  );
};

export default Header;
