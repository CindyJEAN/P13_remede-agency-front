/**
 * @param   {Object}  state
 * @param   {Object}  action
 * @param   {import("./actions").actionType} action.type
 * @param   {Object}  action.payload
 */
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case "authenticating_user":
      return {
        ...state,
        msg: "authenticating user",
      };
    case "authenticating_user_rejected":
      return {
        ...state,
        msg: "authenticating user failed",
      };
    case "authenticated_user":
      return {
        ...state,
        msg: "",
        loggedIn: true,
      };
    case "loading_user_data":
      return {
        ...state,
        msg: "loading user data",
      };
    case "received_user_data":
      return {
        ...state,
        msg: "",
        data: action.payload,
      };
    case "log_user_out":
      return {
        ...state,
        msg: "",
        loggedIn: false,
        data: null,
      };
    case "editing_profile":
      return {
        ...state,
        msg: "editing user profile",
      };
    case "edited_profile":
      return {
        ...state,
        msg: "",
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
