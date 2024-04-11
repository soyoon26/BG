import { createSlice } from "@reduxjs/toolkit";

const initState = {
  email: "",
};
const loginSlice = createSlice({
  name: "LoginSlice",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      console.log("login 완료");
    },
    logout: (state, action) => {
      console.log("logout 완료");
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
