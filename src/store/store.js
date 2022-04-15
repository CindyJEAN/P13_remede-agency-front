import { applyMiddleware, createStore } from "redux";
import combinedReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/**
 * @typedef {Object} test
 * @property {Object} user
 */

function importFromLocalStorage() {
  return {
    user: {
      msg: "init",
    },
  };
}

export default createStore(
  combinedReducer,
  importFromLocalStorage(),
  composeWithDevTools(applyMiddleware(thunk))
);
