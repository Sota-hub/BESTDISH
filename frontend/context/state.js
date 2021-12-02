import { createContext } from "react";

export const SearchFormInput = createContext();

const SearchFormInputProvider = (props) => {
  let searchWords = "";

  return (
    <SearchFormInput.Provider value={searchWords}>
      {props.children}
    </SearchFormInput.Provider>
  );
};

export default SearchFormInputProvider;
