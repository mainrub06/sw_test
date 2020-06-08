import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./store/reducer";
import { createAPI } from "./api";
import { Operation as LoadPersonsData } from "./store/reducer";

import App from "./components/app.jsx";

const api = createAPI();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

store.dispatch(LoadPersonsData.loadPersons());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(`app`)
);
