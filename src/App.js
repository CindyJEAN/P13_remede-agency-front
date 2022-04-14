import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getUserData } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.userReducer);

  console.log("app", app);
  function load() {
    dispatch(getUserData());
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span onClick={load}>load </span>
        <span></span>
      </header>
    </div>
  );
}

export default App;

