import { apicaller } from "../../utils/api";
import { authConstants } from "./constants";

export const login = (user) => {
  // console.log("auth action user data is :", user);
  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.LOGIN_REQUEST });
      const res = await apicaller("otp", user, "POST", null, { ...user });
      // console.log(res);

      if (res.status === 200) {
        const { token } = res.data;
        const { _id } = res.data;
        const { user } = res.data;
        // console.log("adil user is", user);
        // console.log("userData after login is", res.data);
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", _id);
        localStorage.setItem("user", user);
        dispatch({
          type: authConstants.LOGIN_SUCCES,
          payload: {
            token,
            _id,
            user,
          },
        });
      } else {
        if (res.status === 400) {
          dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: { error: res.data.error },
          });
        }
      }
    } catch (e) {
      // console.log(e);
    }
  };
};

export const isUserLogedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user_id = JSON.parse(localStorage.getItem("user_id"));
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCES,
        payload: {
          token,
          user_id,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed To Log in" },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch({
      type: authConstants.LOGOUT_REQUEST,
    });
  };
};
