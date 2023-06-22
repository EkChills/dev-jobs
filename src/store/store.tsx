import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/usersSlice";

export const store = configureStore({
  reducer:{
    user:userSlice
  }
})

export type GlobalState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch