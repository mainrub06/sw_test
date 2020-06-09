import React, { Fragment, useCallback } from "react";
import ViewedAside from "./viewed-aside.jsx";
import Persons from "./persons.jsx";
import Search from "./search.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getPersons, getViewed } from "../store/selectors";
import { ActionCreator } from "../store/reducer";

const MainScreen = () => {
  const persons = useSelector((state) => getPersons(state));
  const viewed = useSelector((state) => getViewed(state));

  const dispatch = useDispatch();

  const setViewed = useCallback((person) => {
    dispatch(ActionCreator.setViewedPerson(person));
  }, []);

  const findPersonByName = useCallback((value) => {
    dispatch(ActionCreator.findPersonByName(value));
  }, []);

  return (
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
};

export default MainScreen;
