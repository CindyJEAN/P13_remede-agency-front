import { applyMiddleware, createStore } from "redux";
import combinedReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/**
 * @typedef {Object} store
 * @property {Object} user
 */

function importFromLocalStorage() {
  const token = window.localStorage.getItem("token");
  return {
    user: {
      msg: "init",
      loggedIn: token ? true : false, //null
      data: {
        token,
      },
    },
  };
}

export default createStore(
  combinedReducer,
  importFromLocalStorage(),
  composeWithDevTools(applyMiddleware(thunk))
);
