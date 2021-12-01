import Image from "next/image";

import SearchForm from "../parts/SearchForm";

import BG1 from "../../public/bg-1.jpg";

const SearchFormWithBg = () => {
  return (
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
  );
};

export default SearchFormWithBg;
