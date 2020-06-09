import React, { useState } from "react";
import PropTypes from "prop-types";
import { validWithoutRusAlfabet } from "../../utils";
import styles from "./search.css";

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
    <div className={styles.search}>
      {!isValid && <p className={styles.search__wrong}>Only english</p>}
      <input
        className={styles.search__input}
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
