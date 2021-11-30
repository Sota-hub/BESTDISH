import SearchForm from "../../parts/SearchForm";

const SearchBar = ({ isSearchOpen, setIsSearchOpen }) => {
  return (
    <>
      <div
        className="overlay"
        onClick={() => {
          setIsSearchOpen(!isSearchOpen);
        }}
      ></div>
      <div className="alignCenter fixed top-0 left-0 h-[45%] w-[100%]  bg-white z-20">
        <div className="SandwichBorder w-[80%]  mt-8 py-4">
          <SearchForm />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
