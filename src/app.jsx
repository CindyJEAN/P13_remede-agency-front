import "./css/main.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Navbar from "./components/navbar/navbar";
import NotFound from "./pages/notFound/notFound";
import Profile from "./pages/profile/profile";
import React from "react";
import { useSelector } from "react-redux";

/**
 * @typedef {import("./store/store").store} store
 */

function App() {
  const loggedIn = useSelector(
    (/** @type store */ state) => state.user.loggedIn
  );

  return (
    <div className="page">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={loggedIn ? <Profile /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
