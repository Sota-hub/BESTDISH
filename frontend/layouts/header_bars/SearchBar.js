import SearchForm from "../../components/SearchForm";

const SearchBar = ({ isSearchOpen, setIsSearchOpen }) => {
  return (
    <>
      <div
        className="overlay"
        onClick={() => {
          setIsSearchOpen(!isSearchOpen);
        }}
      ></div>
      <div className="fixed top-0 left-0 h-[45%] w-[100%] bg-white flex justify-center items-center -z-10">
        <div className="barBorder w-[80%] mt-8 py-4">
          <SearchForm />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
