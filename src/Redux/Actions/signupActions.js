import { apicaller } from "../../utils/api";
import { userSignUpConstants } from "./constants";

export const signUp = (token, user) => {
  // console.log("SignUp action user data is :", user, token);
  return async (dispatch) => {
    try {
      dispatch({ type: userSignUpConstants.USER_REGISTER_REQUEST });
      const res = await apicaller("signup", user, "put", token, { ...user });
      // console.log("Res is", res);

      if (res.status === 200) {
        const { user_data } = res.data;
        // console.log("userData after SignUp is", user_data);
        localStorage.setItem("token", token);
        localStorage.setItem("userData", JSON.stringify(user_data));
        dispatch({
          type: userSignUpConstants.USER_REGISTER_SUCCESS,
          payload: {
            token,
            user_data,
          },
        });
      } else {
        if (res.status === 400) {
          dispatch({
            type: userSignUpConstants.USER_REGISTER_FAILED,
            payload: { error: res.data.error },
          });
        }
      }
    } catch (e) {
      // console.log(e);
    }
  };
};
