/** @format */

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
// import questionReducer from "./questions/questionSlice";
// import userReducer from "./users/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // questions: questionReducer,
    // users: userReducer,
  },
});
