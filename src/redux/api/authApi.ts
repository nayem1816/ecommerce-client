import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (userData) => {
        return {
          url: "/user",
          method: "POST",
          data: userData,
          params: {},
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["user"],
    }),
    userLogin: build.mutation({
      query: (loginData: any) => {
        return {
          url: "/auth/login",
          method: "POST",
          data: loginData,
          params: {}, // Add empty params object
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["user"],
    }),
    getMyUserInfo: build.query({
      query: ({ accessToken }) => {
        return {
          url: "/user/my-profile",
          method: "GET",
          data: {},
          params: {},
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          overrideExisting: true,
        };
      },
      providesTags: ["user"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useUserLoginMutation,
  useGetMyUserInfoQuery,
} = authApi;
