export default function userReducer(state = {}, action) {
  switch (action.type) {
    case "loading_user_data":
      return {
        ...state,
        msg: "loading",
      };
    case "recieved_user_data":
      return {
        ...state,
        msg: "",
        data: action.payload,
      };
    default:
      return state;
  }
}
