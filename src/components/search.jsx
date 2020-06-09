import React, { useState } from "react";
import PropTypes from "prop-types";
import { validWithoutRusAlfabet } from "../utils";

const Search = ({ findPersonByName }) => {
  const [isValid, setIsValid] = useState(true);

  const handleSearchChange = (evt) => {
    evt.preventDefault();
    const searchValue = evt.target.value.toLowerCase();


    if (validWithoutRusAlfabet(searchValue) || searchValue === ``) {
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
