import { useRef, createRef } from "react";
import { useRouter } from "next/router";

const data = [
  { name: "dishName", placeholder: "Dish Name" },
  { name: "price", placeholder: "Price" },
];

const SearchForm = () => {
  const router = useRouter();

  const refs = useRef([]);
  data.forEach((_, i) => {
    refs.current[i] = createRef();
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const words = refs.current.map((word) => word.current.value);
    router.push(`/search?dishName=${words[0]}&price=${words[1]}`);
  };

  return (
    <form className="w-[100%] ">
      {data.map((info, i) => (
        <div key={info.name}>
          <input
            ref={refs.current[i]}
            type="text"
            name={info.name}
            placeholder={info.placeholder}
            className="searchInputShape LightRoundBorder"
          ></input>
        </div>
      ))}
      <div>
        <input
          type="Submit"
          value="Let's find"
          readOnly
          className="searchInputShape bg-pink text-white text-center"
          onClick={submitHandler}
        />
      </div>
    </form>
  );
};

export default SearchForm;
