import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";

import rootReducer from "./reducer";
import {isEmptyUtils} from "../utils/Utils";
import {setCurrentUser, setToken} from "./login/loginAction";


export const history = createBrowserHistory();


const Root = ({ children, initialState = {} }) => {
  const middleware = [thunk, routerMiddleware(history)];

  // Create state
  const store = createStore(
    rootReducer(history),
    initialState,
    applyMiddleware(...middleware)
  );

// Check local storage for login credentials; it will avoid unnecessary login checking
  // Check token
  if (!isEmptyUtils(localStorage.getItem("token"))) {
    store.dispatch(setToken(localStorage.getItem("token")));
  }

  // Check user
  if (!isEmptyUtils(localStorage.getItem("user"))) {
    const user = JSON.parse(localStorage.getItem("user"));
    store.dispatch(setCurrentUser(user, ""));
  }
  
  // Bundle state in the top of components
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>{children}</ConnectedRouter>
    </Provider>
  );
};

export default Root;