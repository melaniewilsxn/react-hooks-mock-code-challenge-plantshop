import React from "react";

function Search({ searched, setSearched}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
      />
    </div>
  );
}

export default Search;
