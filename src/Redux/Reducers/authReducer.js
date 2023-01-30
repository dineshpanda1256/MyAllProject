import { authConstants } from "../Actions/constants";

const initState = {
  token: null,
  user_id: {},
  user: {},
  authenticate: false,
  authenticating: false,
};

export default (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCES:
      state = {
        ...state,
        user: action.payload.user,
        user_id: action.payload._id,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...initState,
      };
      break;
  }
  return state;
};
