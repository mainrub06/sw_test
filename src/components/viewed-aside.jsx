import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { LINKS } from "../const";

const ViewedAside = ({ viewed }) => (
  <Fragment>
    <p>History</p>
    <ul>
      {viewed ? (
        viewed.map((person) => (
          <li key={person.id}>
            <Link to={LINKS.PERSON + `/${person.id}`}>{person.name}</Link>
          </li>
        ))
      ) : (
        <p>Empty</p>
      )}
    </ul>
  </Fragment>
);

export default ViewedAside;
