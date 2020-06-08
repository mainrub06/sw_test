import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LINKS } from "../const";

const ViewedAside = ({ viewed }) => (
  <Fragment>
    <p>History</p>
    <ul>
      {viewed && viewed.length !== 0 ? (
        viewed.map((person) => (
          <li key={person.id}>
            <Link to={LINKS.PERSON + `/${person.id}`}>{person.name}</Link>
          </li>
        ))
      ) : (
        <p className="empty">Empty</p>
      )}
    </ul>
  </Fragment>
);

ViewedAside.propTypes = {
  viewed: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      birthyear: PropTypes.string,
      hairColor: PropTypes.string,
      eyeColor: PropTypes.string,
      height: PropTypes.string,
    })
  ),
};

export default ViewedAside;
