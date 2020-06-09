import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { LINKS } from "../const";
import { getPersons, getViewed } from "../store/selectors";
import history from "../history";
import { ActionCreator } from "../store/reducer";

import MainScreen from "./main-screen.jsx";
import PersonScreen from "./person-screen.jsx";

const App = ({persons, viewed, setViewed, findPersonByName }) => {
  const renderMainPage = () => {
    return (
      persons && (
        <MainScreen
          persons={persons}
          viewed={viewed}
          setViewed={setViewed}
          findPersonByName={findPersonByName}
        />
      )
    );
  }

  return (
    <Router history={history}>
        <Switch>
          <Route exact path={LINKS.MAIN}>
            {renderMainPage()}
          </Route>
          <Route exact path={`${LINKS.PERSON}/:id`} component={PersonScreen} />
        </Switch>
      </Router>
  );
}

App.propTypes = {
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

const mapStateToProps = (state) => ({
  persons: getPersons(state),
  viewed: getViewed(state),
});

const mapDispatchToProps = (dispatch) => ({
  setViewed(person) {
    dispatch(ActionCreator.setViewedPerson(person));
  },
  findPersonByName(value) {
    dispatch(ActionCreator.findPersonByName(value));
  },
});

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
