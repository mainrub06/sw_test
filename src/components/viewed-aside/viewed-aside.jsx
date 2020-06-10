import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LINKS } from "../../const";
import { useDispatch } from "react-redux";
import {ActionCreator} from "../../store/reducer";
import styles from "./viewed-aside.css";

const ViewedAside = ({ viewed }) => {
  const dispatch = useDispatch();

  const removeViewed = useCallback((personId) => {
    dispatch(ActionCreator.removeViewedPerson(personId));
  }, []);

  return (
    <aside className={styles.history}>
      <p className={styles.history__title}>History</p>
      <ul className={styles.history__list}>
        {viewed && viewed.length !== 0 ? (
          viewed.map((person) => (
            <li className={styles.history__item} key={person.id}>
              <Link className={styles.history__link} to={LINKS.PERSON + `/${person.id}`}>
                {person.name}
              </Link>
              <button className={styles.history__button} onClick = {() => removeViewed(person.id)}></button>
            </li>
          ))
        ) : (
          <p className={styles.history__empty}>Empty</p>
        )}
      </ul>
    </aside>
  );
};

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
