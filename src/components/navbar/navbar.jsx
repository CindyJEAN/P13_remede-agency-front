import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import { signOutUser } from "../../store/actions";

/**
 * @typedef {import("../../store/store").store} store
 */

export default function Navbar() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(
    (/** @type store */ state) => state.user.loggedIn
  );
  const userData = useSelector((/** @type store */ state) => state.user.data);

  function logout() {
    dispatch(signOutUser());
  }

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {isLoggedIn ? (
        <div>
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            {userData?.firstName}
          </Link>
          <Link className="main-nav-item" to="/" onClick={logout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}
