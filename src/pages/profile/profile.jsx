import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileEditForm from "../../components/profileEditForm/profileEditForm";
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
            <ProfileEditForm isEditingName={isEditingName} setIsEditingName={setIsEditingName} />
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
