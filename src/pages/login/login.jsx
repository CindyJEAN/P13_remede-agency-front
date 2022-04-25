import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loggingUser } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

/**
 * @typedef {import("../../store/store").store} store
 */

export default function Login() {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Change input values
   */
  function handleChange(event) {
    const type = event.target.id;
    if (type === "username") {
      setUserName(event.target.value);
      return;
    }
    if (type === "password") {
      setPassword(event.target.value);
      return;
    }
  }

  function submit(event) {
    event.stopPropagation();
    event.preventDefault();
    dispatch(loggingUser(userName, password));
  }

  const state = useSelector((/** @type store */ state) => state.user);
  // console.log("state", state);

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={userName}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            {/* <Link to="/login" className="sign-in-button">
              Sign In
            </Link> */}
            {/* <!-- TODO SHOULD BE THE BUTTON BELOW --> */}
            <button className="sign-in-button" onClick={submit}>
              Sign In
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
