import React from "react";
// import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

