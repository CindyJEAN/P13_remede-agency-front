/**
 * @typedef {( "loading_user_data" | "received_user_data" )} typeAction
 */

function getUserData() {
  return async (dispatch) => {
    dispatch({
      /** @type {typeAction} */ type: "loading_user_data",
    });
    try {
      const response = await fetch(
        "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/1.json"
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

export { getUserData };
