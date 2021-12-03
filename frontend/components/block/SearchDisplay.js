import { useState } from "react";

import SearchForm from "../parts/SearchForm";
import DishTileList from "../parts/tile/DishTileList";

const SearchDisplay = ({ dishes }) => {
  const [sortByPopularity, setSortByPopularity] = useState("saved");

  return (
    <main>
      <div className="alignCenter h-64 bg-black pattern-background">
        <div className="w-[80%] ">
          <SearchForm />
        </div>
      </div>
      <div className="alignCenter mt-10 mb-8">
        <div className="flex justify-between w-[90%]">
          <select className="dropDownMenu">
            <option>All range</option>
            <option>km - 5</option>
            <option>km - 10</option>
            <option>km - 25</option>
            <option>km - 50</option>
          </select>
          <select
            value={sortByPopularity}
            className="dropDownMenu"
            onChange={(e) => setSortByPopularity(e.target.value)}
          >
            <option value="saved">Most Saved</option>
            <option value="looked">Most Looked</option>
            <option value="rate">High rate</option>
            <option value="new">New</option>
          </select>
        </div>
      </div>
      <div>
        <DishTileList dishes={dishes} sortByPopularity={sortByPopularity} />
      </div>
    </main>
  );
};

export default SearchDisplay;
