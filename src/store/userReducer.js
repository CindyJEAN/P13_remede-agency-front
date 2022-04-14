/**
 * [default description]
 *
 * @param   {Object}  state   [state description]
 * @param   {Object}  action  [action description]
 * @param   {import("./actions").typeAction} action.type
 * @param   {Object}  action.payload
 */
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case "loading_user_data":
      return {
        ...state,
        msg: "loading",
      };
    case "received_user_data":
      return {
        ...state,
        msg: "",
        data: action.payload,
      };
    default:
      return state;
  }
}
