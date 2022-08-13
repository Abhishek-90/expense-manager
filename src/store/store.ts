import { configureStore } from "@reduxjs/toolkit";
import AuthReducers from "./slices/authSlice";

export const store = configureStore({
  reducer:{
    authentication: AuthReducers,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
