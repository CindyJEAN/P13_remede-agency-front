/**
 * @typedef {( "loading_user_data"
 * | "received_user_data"
 * | "authenticating_user"
 * | "authenticated_user" )} typeAction
 */

import { fetcher, setBearer, setServerBaseUrl } from "./fetcher";

setServerBaseUrl("http://localhost:3001/api/v1");

function getUserData() {
  return async (dispatch) => {
    dispatch({
      /** @type {typeAction} */ type: "loading_user_data",
    });
    try {
      const response = await fetch(
        "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/1.json"
        // "http://localhost:3001/api/v1/user/login"
      );
      const data = await response.json();
      dispatch({
        type: "received_user_data",
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };
}

function loggingUser(userName, password) {
  return async (dispatch) => {
    dispatch({
      /** @type {typeAction} */ type: "authenticating_user",
    });
    try {
      const data = await fetcher("POST", "/user/login", {
        email: userName,
        password,
      });
      setBearer(data.body.token);
      dispatch({
        /** @type {typeAction} */ type: "authenticated_user",
        payload: data.body.token,
      });
      window.localStorage.setItem("token", data.body.token);
      window.location.href = "http://localhost:3000/profile";
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

export { getUserData, loggingUser };
