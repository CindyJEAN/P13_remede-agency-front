import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import combinedReducer from "./reducers"

function importFromLocalStorage(){
  return {
    msg : "init",
  }
}
//TODO initial state, remplaçant le localstorage en attendant

export default createStore(combinedReducer, importFromLocalStorage(), composeWithDevTools(applyMiddleware(thunk)));