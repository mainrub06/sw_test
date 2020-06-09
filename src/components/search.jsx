import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ findPersonByName }) => {
  const [isValid, setIsValid] = useState(true)

  const handleSearchChange = (evt) => {
    evt.preventDefault();
    const searchValue = evt.target.value.toLowerCase();
    console.log(searchValue)

    if (/[a-zA-Z]/.test(searchValue) || searchValue === ``) {
      setIsValid(true);
      findPersonByName(searchValue);
    } else {
      setIsValid(false);
    }
  }

  return (
    <div className="search">
      {!isValid && <p className="search-wrong">Only english</p>}
      <input
        onChange={handleSearchChange}
        type="search"
        placeholder="Search"
      />
    </div>
  );
};

Search.propTypes = {
  findPersonByName: PropTypes.func.isRequired,
};



export default Search;
