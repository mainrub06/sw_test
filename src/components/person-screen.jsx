import React, {Fragment} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import {LINKS} from "../const";
import {withRouter} from "react-router-dom";
import {getPersonById} from "../store/selectors";

const PersonScreen = ({ person }) => (
  <Fragment>
    <div className="logo">
      <Link to={LINKS.MAIN}>
        <img src="/img/logo.png" alt="Logo" />
      </Link>
    </div>
    {person && (
      <Fragment>
        <h1 className="title">{person.name}</h1>
        <div className="person-card info">
          <ul className="info-list">
            <li className="info-item">
              <p>BIRTHYEAR</p>
              <p>{person.birthyear}</p>
            </li>
            <li className="info-item">
              <p>HAIR COLOR</p>
              <p>{person.hairColor}</p>
            </li>
            <li className="info-item">
              <p>HEIGHT</p>
              <p>{person.height}</p>
            </li>
            <li className="info-item">
              <p>EYES COLOR</p>
              <p>{person.eyeColor}</p>
            </li>
          </ul>
        </div>
      </Fragment>
    )}
    <Link to={LINKS.MAIN} className="back">Back</Link>
  </Fragment>
);

PersonScreen.propTypes = {
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
};

const mapStateToProps = (state, ownProps) => ({
    person: getPersonById(state, ownProps)
});

export { PersonScreen };
export default withRouter(connect(mapStateToProps)(PersonScreen));
