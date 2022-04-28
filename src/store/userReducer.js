/**
 * @param   {Object}  state
 * @param   {Object}  action
 * @param   {import("./actions").typeAction} action.type
 * @param   {Object}  action.payload
 */
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case "authenticating_user":
      return {
        ...state,
        msg: "authenticating user",
      };
    case "authenticated_user":
      return {
        ...state,
        msg: "user authenticated",
        loggedIn: true,
        token: action.payload,
      };
    case "loading_user_data":
      return {
        ...state,
        msg: "loading user data",
      };
    case "received_user_data":
      return {
        ...state,
        msg: "user data loaded",
        data: action.payload,
      };
    default:
      return state;
  }
}
