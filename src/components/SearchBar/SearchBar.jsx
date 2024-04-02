import React from "react";
import "./SearchBar.style.scss";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <div className="searchbarforall">
      <SearchIcon />

      <input type="text" placeholder="search" className="searchbartextarea" />
    </div>
  );
};

export default SearchBar;
