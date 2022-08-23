import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    //setting data into localstorage
    setUser: function (state, action) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: action.payload.name,
          token: action.payload.token,
        })
      );

      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    //when user click logout it takes place
    logout: function (state, action) {
      localStorage.clear();
      state.name = null;
      state.token = null;
    },
  },
});
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
