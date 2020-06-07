import React, { PureComponent } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { LINKS } from "../const";
import { getPersons, getViewed } from "../store/selectors";
import history from "../history";
import { ActionCreator } from "../store/reducer";

import MainScreen from "./main-screen.jsx";
import PersonScreen from "./person-screen.jsx";

class App extends PureComponent {
  renderMainPage() {
    const { persons, viewed, setViewed} = this.props;
    return persons && <MainScreen persons={persons} viewed={viewed} setViewed ={setViewed}/>;
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={LINKS.MAIN}>
            {this.renderMainPage()}
          </Route>
          <Route exact path={`${LINKS.PERSON}/:id`} component={PersonScreen} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  persons: getPersons(state),
  viewed: getViewed(state)
});

const mapDispatchToProps = (dispatch) => ({
  setViewed(person) {
    dispatch(ActionCreator.setViewedPerson(person));
  },
});

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
