const SearchForm = () => {
  return (
    <form>
      <div>
        <input
          type="text"
          name="dish"
          placeholder="Dish name"
          className="searchInputShape border"
        />
      </div>
      <div>
        <input
          type="text"
          name="price"
          placeholder="Price"
          className="searchInputShape border"
        />
      </div>
      <div>
        <input
          type="Submit"
          value="Let's find"
          className="searchInputShape bg-pink text-white text-center"
        />
      </div>
    </form>
  );
};

export default SearchForm;
