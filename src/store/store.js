import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import combinedReducer from "./reducers";

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
