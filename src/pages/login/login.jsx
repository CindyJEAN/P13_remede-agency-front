import React, { useState } from "react";
import { signInUser } from "../../store/actions";
import { useDispatch } from "react-redux";

/**
 * @typedef {import("../../store/store").store} store
 */

export default function Login() {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberUser, setRememberUser] = useState(false);

  /**
   * Change input values
   */
  function handleChange(event) {
    const type = event.target.id;
    switch (type) {
      case "username":
        setUserName(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "remember-me":
        setRememberUser(!rememberUser);
        break;
      default:
        return;
    }
  }

  function submit(event) {
    event.stopPropagation();
    event.preventDefault();
    dispatch(signInUser(userName, password, rememberUser));
  }

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
              <input type="checkbox" id="remember-me" onChange={handleChange} />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" onClick={submit}>
              Sign In
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
