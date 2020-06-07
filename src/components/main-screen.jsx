import React, { Fragment } from "react";
import ViewedAside from "./viewed-aside.jsx";
import Persons from "./persons.jsx";
import Search from "./search.jsx";

const MainScreen = ({ persons, viewed, setViewed }) => (
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
        <Search persons={persons} />
        <Persons persons={persons} setViewed={setViewed} />
      </div>
    </div>
  </Fragment>
);

export default MainScreen;
