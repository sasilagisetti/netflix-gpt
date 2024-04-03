import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
  name: "store",
  reducer: {
    user: userReducer,
  },
});

export default appStore;
