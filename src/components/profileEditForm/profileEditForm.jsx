import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../store/actions";
/**
 * @typedef {import("../../store/store").store} store
 */

/**
 * @param {Object} props
 * @param {Boolean} props.isEditingName
 * @param {Function} props.setIsEditingName
 * @component
 */
export default function ProfileEditForm({ isEditingName, setIsEditingName }) {
  const dispatch = useDispatch();
  const userData = useSelector((/** @type store */ state) => state.user.data);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleChange(event) {
    const type = event.target.id;
    switch (type) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      default:
        return;
    }
  }

  function saveProfile(event) {
    event.stopPropagation();
    event.preventDefault();

    dispatch(
      editProfile(
        firstName || userData?.firstName,
        lastName || userData?.lastName
      )
    );
    setIsEditingName(!isEditingName);
  }

  return (
    <React.Fragment>
      <div className="header">
        <h1>Welcome back</h1>
      </div>
      <form className="edit-form">
        <div className="input-wrapper">
          <input
            type="text"
            id="firstName"
            placeholder={userData?.firstName}
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            id="lastName"
            placeholder={userData?.lastName}
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <button className="edit-button" onClick={saveProfile}>
          Save
        </button>
        <button
          className="edit-button"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsEditingName(!isEditingName);
          }}
        >
          Cancel
        </button>
      </form>
    </React.Fragment>
  );
}
