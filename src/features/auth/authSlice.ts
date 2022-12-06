import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse, User } from "../../types/main";
import { RootState } from "../../app/store";

interface initialStateType {
  user: User | null;
  token: string | null;
  isAuth: boolean;
  isLoading: boolean;
}

const initialState: initialStateType = {
  user: null,
  token: null,
  isAuth: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthResponse>) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.isAuth = true;
      localStorage.setItem("eureka-token", accessToken);
    },
    removeCredentials: (state) => {
      state.user = null;
      state.token = null;
      state.isAuth = false;
      localStorage.removeItem("eureka-token");
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const { setIsLoading, setCredentials, removeCredentials } =
  authSlice.actions;
export default authSlice.reducer;
