import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import user from "./reducers/reducerUser";
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
const store = configureStore({
  reducer: user,
  middleware: customizedMiddleware,
});
export default store;
