import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import apiReducer from "../features/api/apiSlice";

const store = configureStore({
    reducer: {
      user: userReducer,
      api: apiReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, }),
  });

export default store;