/**
 * @typedef {( "loading_user_data"
 * | "received_user_data"
 * | "authenticating_user"
 * | "authenticating_user_rejected"
 * | "authenticated_user"
 * | "log_user_out"
 * | "editing_profile"
 * | "edited_profile" )} actionType
 */

import { fetcher, setBearer, setServerBaseUrl } from "./fetcher";

setServerBaseUrl("http://localhost:3001/api/v1");

/**
 * dispatches the action "loading_user_data", then tries to fetch the user profile.
 * If it succeeds, the action "received_user_data" is dispatched, with the user profile data as payload.
 */
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

/**
 * dispatches the action "authenticating_user",
 * then tries to sign in the user with a request taking email and password as parameters.
 * If it succeeds :
 * - the token received is set in the headers as authorization
 * - if the rememberMe option is checked, the token is set in local storage
 * - the action "authenticated_user" is dispatched.
 * @param   {String}  userName
 * @param   {String}  password
 * @param   {Boolean}  rememberUser
 */
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
      window.location.href = "http://localhost:3000/profile";
    } catch (error) {
      console.error(error);
      dispatch({
        /** @type {actionType} */ type: "authenticating_user_rejected",
      });
      throw error;
    }
  };
}

/**
 * removes the token from the storage and dispatches the action log_user_out
 */
function signOutUser() {
  return async (dispatch) => {
    window.localStorage.removeItem("token");
    window.sessionStorage.removeItem("token");
    dispatch({
      /** @type {actionType} */ type: "log_user_out",
    });
  };
}

/**
 * dispatches the action "editing_profile",
 * then tries to update the user profile with a request taking firstName and lastName as parameters.
 * If it succeeds, the action "edited_profile" is dispatched, with firstName and lastName as payload.
 * @param   {String}  firstName
 * @param   {String}  lastName
 */
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
