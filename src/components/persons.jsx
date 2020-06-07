import React from "react";
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

export default Persons;
