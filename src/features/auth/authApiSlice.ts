import { apiSlice } from "../../app/api/apiSlice";
import { AuthRequest, AuthResponse } from "../../types/main";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation<AuthResponse, AuthRequest>({
      query: (data) => ({
        url: "/auth/registration",
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation<AuthResponse, AuthRequest>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    checkAuth: builder.query<AuthResponse, void>({
      query: () => ({
        url: "/auth/refresh",
      }),
      keepUnusedDataFor: 0,
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginMutation,
  useLogoutMutation,
  useCheckAuthQuery,
} = authApiSlice;
