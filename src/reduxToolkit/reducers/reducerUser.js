import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  userRegistration,
  userLogin,
  userLogout,
  getUser,
} from "../extraReducers/thunkUsers";

const userSlice = createSlice({
  name: "users",
  initialState: {
    auth: false,
    data_user: {},
    token_jwt: false,
  },
  reducers: {
    jwt_cookies(state) {
      const token = Cookies.get("jwt_token");
      if (token === undefined) {
        state.token_jwt = false;
        state.auth = false;
      } else {
        state.token_jwt = token;
        state.auth = true;
      }
    },
  },
  extraReducers: {
    [userRegistration.fulfilled]: (state, action) => {
      console.log("action", action.payload);
    },
    [userLogin.fulfilled]: (state, action) => {
      const { user, token } = action.payload;
      Cookies.set("jwt_token", token);
      state.token_jwt = token;
      state.data_user = user;
    },
    [userLogout.fulfilled]: (state, action) => {
      Cookies.remove("jwt_token");
      state.token_jwt = false;
      state.data_user = {};
    },
    [userLogout.rejected]: (state, action) => {
      Cookies.remove("jwt_token");
    },
    [getUser.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
  },
});
export const { jwt_cookies } = userSlice.actions;
export default userSlice;
