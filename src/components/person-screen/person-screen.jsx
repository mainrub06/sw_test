import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LINKS } from "../../const";
import { withRouter } from "react-router-dom";
import { getPersonById } from "../../store/selectors";

import styles from "./person-screen.css";

const PersonScreen = (props) => {
  const person = useSelector(state => getPersonById(state, props));

  return (
    <section className="person">
      <div className={styles.person__logo}>
        <Link to={LINKS.MAIN}>
          <img src="/img/logo.png" alt="Logo" />
        </Link>
      </div>
      {person && (
        <Fragment>
          <h1 className={styles.person__name}>{person.name}</h1>
          <div className={styles.person__wrap}>
            <ul className={styles.person__list}>
              <li className={styles.person__item}>
                <p>BIRTHYEAR</p>
                <p>{person.birthyear}</p>
              </li>
              <li className={styles.person__item}>
                <p>HAIR COLOR</p>
                <p>{person.hairColor}</p>
              </li>
              <li className={styles.person__item}>
                <p>HEIGHT</p>
                <p>{person.height}</p>
              </li>
              <li className={styles.person__item}>
                <p>EYES COLOR</p>
                <p>{person.eyeColor}</p>
              </li>
            </ul>
          </div>
        </Fragment>
      )}
      <Link to={LINKS.MAIN} className={styles.person__button}>
        Back
      </Link>
    </section>
  );
};

export default withRouter(PersonScreen);
