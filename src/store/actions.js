function getUserData() {
  return async (dispatch) => {
    dispatch({
      type: "loading_user_data",
    });
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/1.json"
    );
    const data = await response.json();
    dispatch({
      type: "recieved_user_data",
      payload: data,
    });
  };
}

export { getUserData };
