const SearchForm = () => {
  return (
    <form className="w-[100%]">
      <div>
        <input
          type="text"
          name="dish"
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
