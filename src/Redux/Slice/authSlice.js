import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apicaller } from "../../utils/api";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

export const SignUpUser = createAsyncThunk(
  "signupuser",
  async (user, token) => {
    return await apicaller("signup", user, "put", token);
  }
);

export const SignInUser = createAsyncThunk("signinuser", async (user) => {
  return await apicaller("otp", user, "POST", null);
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    logOut: (state, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    [SignInUser.pending]: (state, action) => {
      state.loading = true;
    },
    [SignInUser.fulfilled]: (state, { payload }) => {
      // console.log("payload is", payload.data.user);
      state.loading = false;
      // if (error) {
      //   state.error = error;
      // } else {
      //   state.msg = msg;
      state.token = payload.data.token;
      state.user = payload.data.user;
      // localStorage.setItem("msg", msg);
      localStorage.setItem("user", JSON.stringify(payload.data.user));
      localStorage.setItem("token", payload.data.token);
      // }
    },
    [SignInUser.rejected]: (state, action) => {
      state.loading = true;
    },
    [SignUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [SignUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) state.error = error;
      state.msg = msg;
    },
    [SignUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { addToken, addUser, logOut } = authSlice.actions;
export default authSlice.reducer;
