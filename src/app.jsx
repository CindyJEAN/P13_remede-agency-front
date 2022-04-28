import "./css/main.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import React, { useState } from "react";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Navbar from "./components/navbar/navbar";
import NotFound from "./pages/notFound/notFound";
import Profile from "./pages/profile/profile";

function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  return (
    <div className="page">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              token ? <Profile token={token} /> : <Navigate to="/login" />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
