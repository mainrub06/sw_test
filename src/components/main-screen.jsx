import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ViewedAside from "./viewed-aside.jsx";
import Persons from "./persons.jsx";
import Search from "./search.jsx";

const MainScreen = ({ persons, viewed, setViewed, findPersonByName }) => (
  <Fragment>
    <div className="logo">
      <a>
        <img src="img/logo.png" alt="Logo" />
      </a>
    </div>
    <h1 className="title">Find your hero</h1>
    <div className="row">
      <div className="col col-left">
        <ViewedAside viewed={viewed} />
      </div>
      <div className="col col-right">
        <Search findPersonByName={findPersonByName} />
        <Persons persons={persons} setViewed={setViewed} />
      </div>
    </div>
  </Fragment>
);

MainScreen.propTypes = {
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
  setViewed: PropTypes.func.isRequired,
  findPersonByName: PropTypes.func.isRequired,
};

export default MainScreen;
