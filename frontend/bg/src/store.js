import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
//함께 사용하는 메모리 공간
export default configureStore({
  reducer: { loginSlice: loginSlice },
});
