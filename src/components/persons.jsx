import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LINKS } from "../const";

const Persons = ({ persons, setViewed }) => (
  <ul className="persons">
    {(persons && persons.length !== 0) ? (
      persons.map((person) => (
        <li key={person.id} className="persons-item">
          <Link
            onClick={() => setViewed(person)}
            to={LINKS.PERSON + `/${person.id}`}
          >
            {person.name}
          </Link>
        </li>
      ))
    ) : (
      <p>not found</p>
    )}
  </ul>
);

Persons.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      birthyear: PropTypes.string.isRequired,
      hairColor: PropTypes.string.isRequired,
      eyeColor: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired,
    }).isRequired
  ),
  setViewed: PropTypes.func.isRequired
};


export default Persons;
