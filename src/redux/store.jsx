import { configureStore } from "@reduxjs/toolkit";
import useReducer   from "./reducers/auth.slice";
import dashboardReducer from "./reducers/dashboard.slice"
export const store = configureStore({
    reducer: {
        useReducer,
        dashboardReducer
    },
  });