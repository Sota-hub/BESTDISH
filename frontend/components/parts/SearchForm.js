const SearchForm = () => {
  return (
    <form action="/search" method="get" className="w-[100%] ">
      <div>
        <input
          type="text"
          name="dishName"
          placeholder="Dish name"
          className="searchInputShape LightRoundBorder"
        />
      </div>
      <div>
        <input
          type="text"
          name="price"
          placeholder="Price"
          className="searchInputShape LightRoundBorder"
        />
      </div>
      <div>
        <input
          type="Submit"
          value="Let's find"
          readOnly
          className="searchInputShape bg-pink text-white text-center"
        />
      </div>
    </form>
  );
};

export default SearchForm;
