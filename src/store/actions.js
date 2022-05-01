/**
 * @typedef {( "loading_user_data"
 * | "received_user_data"
 * | "authenticating_user"
 * | "authenticated_user"
 * | "log_user_out"
 * | "editing_profile"
 * | "edited_profile" )} actionType
 */

import { fetcher, setBearer, setServerBaseUrl } from "./fetcher";
// import { useNavigate } from "react-router-dom";

setServerBaseUrl("http://localhost:3001/api/v1");

function getUserData() {
  return async (dispatch) => {
    dispatch({
      /** @type {actionType} */ type: "loading_user_data",
    });
    try {
      const data = await fetcher("POST", "/user/profile");
      dispatch({
        type: "received_user_data",
        payload: data.body,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

function signInUser(userName, password, rememberUser) {
  return async (dispatch) => {
    dispatch({
      /** @type {actionType} */ type: "authenticating_user",
    });

    try {
      const data = await fetcher("POST", "/user/login", {
        email: userName,
        password,
      });
      setBearer(data.body.token);
      if (rememberUser) localStorage.setItem("token", data.body.token);
      else sessionStorage.setItem("token", data.body.token);

      dispatch({
        /** @type {actionType} */ type: "authenticated_user",
      });
      // const navigate = useNavigate();
      // navigate("/profile");
      window.location.href = "http://localhost:3000/profile";
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

function signOutUser() {
  return async (dispatch) => {
    window.localStorage.removeItem("token");
    window.sessionStorage.removeItem("token");
    dispatch({
      /** @type {actionType} */ type: "log_user_out",
    });
  };
}

function editProfile(firstName, lastName) {
  return async (dispatch) => {
    dispatch({
      /** @type {actionType} */ type: "editing_profile",
    });

    try {
      await fetcher("PUT", "/user/profile", {
        firstName,
        lastName,
      });

      dispatch({
        /** @type {actionType} */ type: "edited_profile",
        payload: { firstName, lastName },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export { getUserData, signInUser, signOutUser, editProfile };
