import React from "react";

// * two ctrl z
function SearchBar({changeSearch}) {
  
  return (
    <div className="search">

        <input 
          style={{width:'30%'}}
          type="text" 
          placeholder="Search for a location"
          onChange={changeSearch}
        />
     
    </div>
  );
}

export default SearchBar;
