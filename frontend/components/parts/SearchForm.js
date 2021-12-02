import { useRef, createRef } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { SearchFormInput } from "../../context/state";

const data = [
  { name: "dishName", placeholder: "Dish Name" },
  { name: "price", placeholder: "Price" },
];

const SearchForm = () => {
  const { searchWords } = useContext(SearchFormInput);
  const router = useRouter();

  const refs = useRef([]);
  // ref1 = ref.current[0], ref2 = ref.current[1]
  data.forEach((_, i) => {
    refs.current[i] = createRef();
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const words = refs.current.map((word) => word.current.value);
    searchWords = words;
    router.push("/search");
  };

  return (
    <form /*action="/search" method="get"*/ className="w-[100%] ">
      {data.map((info, i) => (
        <div key={info.name}>
          <input
            //ref={ref1}, ref={ref2}
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
