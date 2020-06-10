import React, { useCallback } from "react";
import ViewedAside from "../viewed-aside/viewed-aside.jsx";
import Persons from "../persons/persons.jsx";
import Search from "../search/search.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getPersons, getViewed } from "../../store/selectors";
import { ActionCreator } from "../../store/reducer";
import styles from "./main-screen.css";

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
    <section className={styles.main}>
      <div className={styles.main__logo}>
        <a>
          <img src="img/logo.png" alt="Logo" />
        </a>
      </div>
      <h1 className={styles.main__title}>Find your hero</h1>
      <div className={styles.main__row}>
        <div className={styles.main__col}>
          <ViewedAside viewed={viewed} />
        </div>
        <div className={styles.main__col}>
          <Search findPersonByName={findPersonByName} />
          <Persons persons={persons} setViewed={setViewed} />
        </div>
      </div>
    </section>
  );
};

export default MainScreen;
