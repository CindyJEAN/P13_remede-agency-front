import { applyMiddleware, createStore } from "redux";
import combinedReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { setBearer } from "./fetcher";
import thunk from "redux-thunk";

/**
 * @typedef {Object} store
 * @property {Object} user
 */

/**
 * get data from storage and initialize redux state
 * @return  {Object}  initial state
 */
function importFromStorage() {
  const token = window.localStorage.getItem("token") || window.sessionStorage.getItem("token");
  const loggedIn =  token ? true : false;
  if (loggedIn) setBearer(token);
  return {
    user: {
      msg: "init",
      loggedIn,
      data: null,
    },
  };
}

export default createStore(
  combinedReducer,
  importFromStorage(),
  composeWithDevTools(applyMiddleware(thunk))
);
