import React from "react";
import * as ReactDOMClient from "react-dom/client";
import * as serviceWorker from "./serviceWorker";
import store from "./store/store";
import { Provider } from "react-redux";
import Home from "./pages/home/home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import "./css/main.css";
import Footer from "./components/footer/footer";
import NotFound from "./pages/notFound/notFound";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="page">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
