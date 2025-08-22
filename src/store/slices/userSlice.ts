import { LoginPayload, UserState } from "@/src/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.username = undefined;
      state.token = undefined;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
