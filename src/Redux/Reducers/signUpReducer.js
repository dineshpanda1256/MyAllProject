import { authConstants, userSignUpConstants } from "../Actions/constants";

const initState = {
  token: null,
  user_data: {},
  signUpsuccess: false,
  signUpStart: false,
  //   authenticate: false,
  //   authenticating: false,
};

export default (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case userSignUpConstants.USER_REGISTER_REQUEST:
      state = {
        ...state,
        signUpStart: true,
      };
      break;
    case userSignUpConstants.USER_REGISTER_SUCCESS:
      state = {
        ...state,
        user_data: action.payload.user_data,
        token: action.payload.token,
        signUpsuccess: true,
        signUpStart: false,
        // authenticate: true,
        // authenticating: false,
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
