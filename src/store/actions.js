/**
 * @typedef {( "loading_user_data"
 * | "received_user_data"
 * | "authenticating_user"
 * | "authenticated_user"
 * | "log_user_out" )} typeAction
 */

import { fetcher, setBearer, setServerBaseUrl } from "./fetcher";

setServerBaseUrl("http://localhost:3001/api/v1");

/**
 * @param   {String}  token  authentication token
 */
function getUserData(token) {
  setBearer(token);
  return async (dispatch) => {
    dispatch({
      /** @type {typeAction} */ type: "loading_user_data",
    });
    try {
      const data = await fetcher("POST", "/user/profile");
      dispatch({
        type: "received_user_data",
        payload: data.body,
      });
    } catch (error) {
      throw error;
    }
  };
}

function loggingInUser(userName, password, rememberUser) {
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
        payload: { token: data.body.token, rememberUser },
      });

      window.localStorage.setItem("token", data.body.token);
      window.location.href = "http://localhost:3000/profile";
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

function loggingOutUser() {
  return async (dispatch, getState) => {
    const rememberUser = getState().user.rememberUser;
    if (!rememberUser) {
      window.localStorage.removeItem("token");
    }
    dispatch({
      /** @type {typeAction} */ type: "log_user_out",
    });
  };
}

export { getUserData, loggingInUser, loggingOutUser };
