import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../store/actions";

/**
 * @typedef {import("../../store/store").store} store
 */

export default function Profile() {
  const dispatch = useDispatch();
  const [isEditingName, setIsEditingName] = useState(false);

  const userData = useSelector((/** @type store */ state) => state.user.data);
  if (userData === null) {
    dispatch(getUserData());
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleChange(event) {
    const type = event.target.id;
    switch (type) {
      case "username":
        setFirstName(event.target.value);
        break;
      case "password":
        setLastName(event.target.value);
        break;
      default:
        return;
    }
  }

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          {!isEditingName ? (
            <React.Fragment>
              <h1>
                Welcome back
                <br />
                {userData?.firstName + " " + userData?.lastName}!
              </h1>
              <button
                className="edit-button"
                onClick={() => setIsEditingName(!isEditingName)}
              >
                Edit Name
              </button>
            </React.Fragment>
          ) : (
            <form>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder={userData?.firstName}
                  value={firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder={userData?.lastName}
                  value={lastName}
                  onChange={handleChange}
                />
              </div>
              <button
                className="edit-button"
                onClick={() => setIsEditingName(!isEditingName)}
              >
                Save
              </button>
            </form>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </>
  );
}
