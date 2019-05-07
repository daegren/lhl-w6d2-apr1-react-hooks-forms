import React, { useState } from "react";

const SearchBar = ({ onSearch = () => {} }) => {
  const [term, setTerm] = useState("");

  const handleChange = e => setTerm(e.target.value);

  const handleSearch = () => {
    onSearch(term);
    setTerm("");
  };

  return (
    <div className="search-bar">
      <input type="text" value={term} onChange={handleChange} />
      <button onClick={handleSearch}>
        <span role="img" aria-label="search">
          🤯
        </span>
      </button>
    </div>
  );
};
export default SearchBar;
