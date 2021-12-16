import { useState } from "react";

import SearchForm from "../parts/SearchForm";
import SearchDishTileList from "../parts/tile/SearchDishTileList";

const SearchDisplay = ({ dishes }) => {
  const [sortByPopularity, setSortByPopularity] = useState("saved");
  const [sortByRange, setSortByRange] = useState(0);

  return (
    <main>
      <div className="alignCenter h-64 bg-black pattern-background">
        <div className="w-[80%] ">
          <SearchForm />
        </div>
      </div>
      <div className="alignCenter mt-10 mb-8">
        <div className="flex justify-between w-[90%]">
          <select
            value={sortByRange}
            onChange={(e) => setSortByRange(+e.target.value)}
            className="dropDownMenu"
          >
            <option value="0">All range</option>
            <option value="5">km - 5</option>
            <option value="10">km - 10</option>
            <option value="25">km - 25</option>
            <option value="50">km - 50</option>
          </select>
          <select
            value={sortByPopularity}
            onChange={(e) => setSortByPopularity(e.target.value)}
            className="dropDownMenu"
          >
            <option value="saved">Most Saved</option>
            <option value="looked">Most Looked</option>
            <option value="rate">High rate</option>
            <option value="new">New</option>
          </select>
        </div>
      </div>
      <div>
        <SearchDishTileList
          dishes={dishes}
          sortByRange={sortByRange}
          sortByPopularity={sortByPopularity}
        />
      </div>
    </main>
  );
};

export default SearchDisplay;
