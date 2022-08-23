//step-2 (configuring store)
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authApi";
import authSlice from "../features/authSlice";

const store = configureStore({
  // reducerPath and reducer are created for us, which we can pass straight into the reducer parameter of configureStore.
  reducer: {
    //normal setting reducer path in redux toolkit
    auth: authSlice,
    //reducerpath coming from post.js
    [authApi.reducerPath]: authApi.reducer,
  },
  //code below is used to get feature of rtk query
  // middleware is also created for us, which will allow us to take advantage of caching, invalidation, polling, and the other features of RTK Query.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

//to refetch the data
// It will enable to refetch the data on certain events, such as refetchOnFocus and refetchOnReconnect.
setupListeners(store.dispatch);

export default store;
