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
    case "authenticated_user":
      return {
        ...state,
        msg: "user authenticated",
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
        msg: "user data loaded",
        data: action.payload,
      };
    case "log_user_out":
      return {
        ...state,
        msg: "user logged out",
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
        msg: "user profile edited",
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
