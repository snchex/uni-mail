import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../mails/features/authSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
});
