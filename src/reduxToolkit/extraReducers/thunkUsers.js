import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiUser from "../../restApi";
export const userRegistration = createAsyncThunk(
  "users/userRegistration",
  async (objRef) => {
    const response = await ApiUser.Registration(objRef);
    return response;
  }
);
export const userLogin = createAsyncThunk("users/userLogin", async (objRef) => {
  const response = await ApiUser.Login(objRef);
  return response.data;
});
export const userLogout = createAsyncThunk(
  "users/userLogout",
  async (tokin) => {
    const response = await ApiUser.Logout(tokin);
    return response.data;
  }
);
export const getUser = createAsyncThunk("users/getUser", async (tokin) => {
  const response = await ApiUser.GetUser(tokin);
  return response.data;
});
