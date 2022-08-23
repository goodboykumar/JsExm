import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  // The unique key that defines where the Redux store will store our cache.
  reducerPath: "authApi", //it is the unique name
  baseQuery: fetchBaseQuery({
    baseUrl: "https://testtourapp.herokuapp.com", //it is the online platform for this example
  }),

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (newPost) => {
        console.log("Create Post: ", newPost);
        return {
          url: `/users/signin`,
          method: "POST",
          body: newPost,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
    registerUser: builder.mutation({
      query: (newPost) => {
        console.log("Create Post: ", newPost);
        return {
          url: `/users/signup`,
          method: "POST",
          body: newPost,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;

export default authApi;


/*
for postman checking for api
url=  https://testtourapp.herokuapp.com/users/signin,

Data to provide 
{
	"email":"johnwick@gmail.com",
	"password":"123456"
}

*/